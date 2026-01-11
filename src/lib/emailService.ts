/**
 * Email Service Configuration
 * 
 * Choose one of the following implementations:
 * 1. EmailJS (Recommended - No backend needed)
 * 2. Custom API endpoint
 * 3. Formspree
 */

// ============================================
// Option 1: EmailJS Implementation
// ============================================
// Install: npm install @emailjs/browser
// Setup: https://www.emailjs.com/

export const sendEmailWithEmailJS = async (formData: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) => {
  const emailjs = await import('@emailjs/browser');
  
  // Replace these with your EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      project_type: formData.projectType,
      message: formData.message,
      to_email: 's.faizan2001@gmail.com', // Your email
    },
    PUBLIC_KEY
  );
};

// ============================================
// Option 2: Custom API Endpoint
// ============================================
export const sendEmailWithAPI = async (formData: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};

// ============================================
// Option 3: Formspree
// ============================================
export const sendEmailWithFormspree = async (formData: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) => {
  // Replace with your Formspree form ID
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};
