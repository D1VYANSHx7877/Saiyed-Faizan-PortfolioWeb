# Asset Directory Structure

This directory contains all images and logos used throughout the portfolio website.

## 📁 Folder Structure

```
public/assets/
├── images/
│   ├── hero-image.jpg          # Hero section portrait image (recommended: 1200x1600px, portrait orientation)
│   └── about-image.jpg          # About section image (recommended: 1000x1250px, portrait orientation)
│
├── logos/
│   ├── marquee/                 # Client/company logos for marquee section
│   │   ├── logo-1.png          # Client logo 1 (recommended: 200x80px, transparent background)
│   │   ├── logo-2.png          # Client logo 2
│   │   ├── logo-3.png          # Client logo 3
│   │   ├── logo-4.png          # Client logo 4
│   │   ├── logo-5.png          # Client logo 5
│   │   ├── logo-6.png          # Client logo 6
│   │   ├── logo-7.png          # Client logo 7
│   │   └── logo-8.png          # Client logo 8
│   │
│   └── tools/                   # (Optional) Software/tool logos - NOT REQUIRED
│                                 # Technical expertise now uses icon components!
│
└── README.md                    # This file
```

## 📋 Instructions

### 1. Hero Image
- **Location**: `public/assets/images/hero-image.jpg`
- **Format**: JPG or PNG
- **Recommended Size**: 1200x1600px (portrait, 3:4 aspect ratio)
- **Background**: Any (will be styled with overlays)

### 2. About Section Image
- **Location**: `public/assets/images/about-image.jpg`
- **Format**: JPG or PNG
- **Recommended Size**: 1000x1250px (portrait, 4:5 aspect ratio)
- **Background**: Any (will be styled with overlays)

### 3. Marquee Logos
- **Location**: `public/assets/logos/marquee/`
- **Format**: PNG with transparent background
- **Recommended Size**: 200x80px (width can vary, height should be ~80px)
- **Naming**: `logo-1.png`, `logo-2.png`, `logo-3.png`, etc.
- **Note**: Add as many logos as you have. The system will automatically display them.

### 4. Tool Logos
- **Status**: ✅ **Not Required!**
- **Reason**: Technical Expertise section now uses themed icon components (like social icons)
- **Benefit**: No need to download/manage logo files - icons are automatic!

## 🚀 Quick Start

1. **Place your hero image**: 
   - Save as `public/assets/images/hero-image.jpg`

2. **Place your about image**: 
   - Save as `public/assets/images/about-image.jpg`

3. **Add marquee logos**: 
   - Save client/company logos as `logo-1.png`, `logo-2.png`, etc. in `public/assets/logos/marquee/`

4. ~~**Add tool logos**~~ ✅ **Not needed!** Tool icons are automatic icon components

## ⚠️ Important Notes

- All image paths are relative to the `public` folder
- Use lowercase filenames with hyphens (kebab-case)
- PNG logos should have transparent backgrounds for best results
- Images will be automatically optimized and lazy-loaded by the application
- If an image is missing, a placeholder will be shown

## 🔄 Fallback Behavior

If images are not found, the application will:
- Show a styled placeholder with initials "SF"
- Display a message indicating the image should be uploaded
- Continue to function normally without breaking the layout
