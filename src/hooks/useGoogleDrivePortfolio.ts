import { useState, useEffect } from 'react';

// Environment variables - set these in your .env file or Vercel dashboard
const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY || '';
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID || '';

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webContentLink?: string;
  webViewLink?: string;
}

export interface DriveFolder {
  id: string;
  name: string;
  files: DriveFile[];
}

export function useGoogleDrivePortfolio() {
  const [folders, setFolders] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDriveFolders();
  }, []);

  const fetchDriveFolders = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if API key and folder ID are configured
      if (!API_KEY || !FOLDER_ID) {
        setError('Google Drive API not configured. Please set VITE_GOOGLE_DRIVE_API_KEY and VITE_GOOGLE_DRIVE_FOLDER_ID in your environment variables.');
        setLoading(false);
        return;
      }

      // First, get all subfolders in the main folder
      const foldersResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)`
      );

      if (!foldersResponse.ok) {
        const errorData = await foldersResponse.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Failed to fetch folders from Google Drive');
      }

      const foldersData = await foldersResponse.json();
      const subfolders = foldersData.files || [];

      // Fetch files for each subfolder
      const foldersWithFiles: DriveFolder[] = await Promise.all(
        subfolders.map(async (folder: { id: string; name: string }) => {
          const filesResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents+and+(mimeType+contains+'image'+or+mimeType+contains+'video')&key=${API_KEY}&fields=files(id,name,mimeType,thumbnailLink,webContentLink,webViewLink)`
          );

          if (!filesResponse.ok) {
            return { ...folder, files: [] };
          }

          const filesData = await filesResponse.json();
          return {
            id: folder.id,
            name: folder.name,
            files: filesData.files || [],
          };
        })
      );

      setFolders(foldersWithFiles.filter(f => f.files.length > 0));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio');
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (file: DriveFile): string => {
    // Use thumbnail for images, or generate a direct link
    if (file.thumbnailLink) {
      // Replace size parameter for higher quality
      return file.thumbnailLink.replace('=s220', '=s800');
    }
    return `https://drive.google.com/uc?export=view&id=${file.id}`;
  };

  const getVideoEmbedUrl = (file: DriveFile): string => {
    return `https://drive.google.com/file/d/${file.id}/preview`;
  };

  const isVideo = (file: DriveFile): boolean => {
    return file.mimeType.includes('video');
  };

  const isImage = (file: DriveFile): boolean => {
    return file.mimeType.includes('image');
  };

  return {
    folders,
    loading,
    error,
    getImageUrl,
    getVideoEmbedUrl,
    isVideo,
    isImage,
    refetch: fetchDriveFolders,
  };
}
