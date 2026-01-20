import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Vercel Serverless Function for Contact Form
 * 
 * This endpoint handles contact form submissions and sends emails.
 * 
 * Setup Instructions:
 * 1. Choose an email service (SendGrid, Resend, or Nodemailer)
 * 2. Add your API keys to Vercel Environment Variables
 * 3. Update the email sending logic below
 */

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // ============================================
    // Option 1: SendGrid (Recommended)
    // ============================================
    // Install: npm install @sendgrid/mail
    // Get API Key: https://app.sendgrid.com/settings/api_keys
    // Add to Vercel: SENDGRID_API_KEY environment variable
    
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 's.faizan2001@gmail.com', // Your email
      from: 'noreply@yourdomain.com', // Verified sender in SendGrid
      subject: `New Contact Form Submission - ${formData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Project Type: ${formData.projectType}
        
        Message:
        ${formData.message}
      `,
    };

    await sgMail.send(msg);
    */

    // ============================================
    // Option 2: Resend (Modern & Simple) - ACTIVE
    // ============================================
    // Install: npm install resend
    // Get API Key: https://resend.com/api-keys
    // Add to Vercel: RESEND_API_KEY environment variable
    
    if (process.env.RESEND_API_KEY) {
      const { Resend } = require('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Update with your verified domain
        to: 's.faizan2001@gmail.com',
        subject: `New Contact Form Submission - ${formData.projectType}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } else {
      // Fallback if Resend API key is not configured
      // You can uncomment one of the other options below or configure Resend
    }

    // ============================================
    // Option 3: Nodemailer with Gmail SMTP
    // ============================================
    // Install: npm install nodemailer
    // Setup App Password: https://myaccount.google.com/apppasswords
    // Add to Vercel: GMAIL_USER and GMAIL_APP_PASSWORD environment variables
    
    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 's.faizan2001@gmail.com',
      subject: `New Contact Form Submission - ${formData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Project Type: ${formData.projectType}
        
        Message:
        ${formData.message}
      `,
    });
    */

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    });
  }
}
