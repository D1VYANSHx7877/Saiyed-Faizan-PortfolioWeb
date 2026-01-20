# Visual Storyteller Studio

> A premium, cinematic portfolio website for a professional cinematographer and visual storyteller. Built with modern web technologies, featuring stunning visuals, smooth animations, and a production-ready architecture.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success) ![React](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple)

## 🎬 Overview

Visual Storyteller Studio is a high-end portfolio website designed to showcase the work of a cinematographer and video editor. The site features a cinematic design language inspired by film posters, with premium animations, smooth interactions, and a fully responsive layout that works beautifully on all devices.

### Key Highlights

- **Cinematic Hero Section** - Film poster-inspired design with parallax effects, animated gradients, and HUD overlays
- **Dynamic Portfolio Management** - YouTube video integration with admin panel for easy content management
- **Premium Client Marquee** - Smooth infinite scrolling logo display with brand names and hover effects
- **Technical Expertise Showcase** - Interactive tool cards with brand icons and micro-interactions
- **Professional Contact Form** - Vercel serverless function backend with multiple email service integrations
- **Fully Responsive** - Mobile-first design with optimized performance across all screen sizes
- **Production Ready** - Clean code, optimized assets, SEO-friendly, and deployment-ready

## ✨ Features

### Hero Section
- Massive typography with animated gradient effects
- Cinematic image frame with parallax on mouse move
- Neon rim glow, film grain overlay, and glass reflection effects
- HUD overlays (REC indicator, timestamp, location, frame/ISO)
- Magnetic CTA buttons with glow-pulse animations
- Dark cinematic gradient background with animated light movement

### Portfolio Management
- YouTube video integration with category filtering
- Google Drive media support (optional)
- Admin panel for adding/deleting videos
- LocalStorage persistence
- Responsive video grid layout

### Client Showcase
- Infinite scrolling marquee with smooth animations
- Card-based logo display with glass morphism
- Brand names with smooth hover interactions
- Premium hover effects (scale, lift, glow)
- Proper z-index stacking to prevent layout issues

### Technical Expertise
- Brand icon integration using React Icons
- Interactive hover effects
- Responsive flex grid layout
- Color-coded brand icons

### Contact Form
- Professional inquiry form with validation
- Vercel serverless function backend
- Support for multiple email services (Resend, SendGrid, Gmail SMTP)
- Toast notifications for user feedback

## 🚀 Tech Stack

### Core Technologies
- **React 18.3** - Modern UI library with hooks
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Fast build tool and dev server
- **React Router DOM 6.30** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn-ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Icons** - Brand and social icons

### Additional Libraries
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Sonner** - Toast notifications

## 📦 Installation & Setup

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **Git** (for cloning)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd visual-storyteller-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Google Drive API (Optional)
   VITE_GOOGLE_DRIVE_API_KEY=your_api_key_here
   VITE_GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here

   # Admin Password for Portfolio Management
   VITE_ADMIN_PASSWORD=your_secure_password_here

   # Email Service (for Vercel deployment)
   RESEND_API_KEY=your_resend_api_key_here
   # OR use SendGrid or Gmail SMTP (see VERCEL_SETUP.md)
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The site will hot-reload on file changes

## 📁 Project Structure

```
visual-storyteller-studio/
├── api/
│   └── contact.ts              # Vercel serverless function for contact form
├── public/
│   ├── assets/
│   │   ├── images/             # Hero and about section images
│   │   │   ├── hero-image.jpg
│   │   │   └── about-image.jpg
│   │   └── logos/
│   │       └── marquee/        # Client logos (logo-1.png to logo-9.png)
│   ├── favicon.svg             # Camera icon favicon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Layout components
│   │   ├── sections/           # Page sections (Hero, About, Portfolio, etc.)
│   │   ├── portfolio/          # Video portfolio components
│   │   └── ui/                 # shadcn-ui components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and helpers
│   ├── pages/                  # Route pages
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles and animations
├── .env.example                # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── vercel.json                 # Vercel deployment configuration
└── README.md
```

## 🎨 Asset Setup

### Required Assets

Before deploying, ensure you've added your assets:

1. **Hero Image**
   - Path: `public/assets/images/hero-image.jpg`
   - Recommended: 1920x1080px or higher
   - Format: JPG or PNG

2. **About Image**
   - Path: `public/assets/images/about-image.jpg`
   - Recommended: 800x1000px (portrait)
   - Format: JPG or PNG

3. **Client Logos (Marquee)**
   - Path: `public/assets/logos/marquee/logo-1.png` through `logo-9.png`
   - Recommended: 200x80px (width can vary, height ~80px)
   - Format: PNG with transparent background
   - Brand names are automatically mapped:
     - Logo 1: DL91
     - Logo 2: AKU'S
     - Logo 3: Comfitoes
     - Logo 4: Dygital Labs
     - Logo 5: HDFC Bank
     - Logo 6: Inch
     - Logo 7: Zoop
     - Logo 8: Stockmock
     - Logo 9: Tradespeare

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `http://localhost:8080` |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📧 Contact Form Backend Setup

The contact form uses a **Vercel serverless function** located at `api/contact.ts`.

### Quick Setup Guide

1. **Choose an Email Service**
   - **Resend** (Recommended): Free 3,000 emails/month - [Get API Key](https://resend.com/api-keys)
   - **SendGrid**: Free 100 emails/day - [Get API Key](https://app.sendgrid.com/settings/api_keys)
   - **Gmail SMTP**: Free with Gmail account - [Setup App Password](https://myaccount.google.com/apppasswords)

2. **Install Email Package**
   ```bash
   npm install resend
   # OR
   npm install @sendgrid/mail
   # OR
   npm install nodemailer
   ```

3. **Add Environment Variables to Vercel**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add your email service API key:
     - `RESEND_API_KEY` (for Resend)
     - `SENDGRID_API_KEY` (for SendGrid)
     - `GMAIL_USER` and `GMAIL_APP_PASSWORD` (for Gmail)

4. **Update `api/contact.ts`**
   - Uncomment the code block for your chosen email service
   - Update the recipient email address
   - Update the sender email (must be verified in your email service)

5. **Deploy**
   ```bash
   vercel --prod
   ```

**📖 For detailed step-by-step instructions, see [VERCEL_SETUP.md](./VERCEL_SETUP.md)**

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Add all environment variables in Vercel Dashboard
   - Redeploy after adding variables

### Other Platforms

This project can be deployed to any static hosting service:

- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `dist`
- **GitHub Pages**: Use GitHub Actions or deploy `dist` folder
- **Cloudflare Pages**: Connect repo, build command: `npm run build`, output directory: `dist`

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher

## 🔒 Security Notes

- **Environment Variables**: Never commit `.env` files. Use `.env.example` as a template.
- **API Keys**: Store sensitive keys in Vercel Environment Variables, not in code.
- **Admin Password**: Change the default admin password in environment variables.
- **Google Drive API**: If using Google Drive, restrict API key to specific domains in Google Cloud Console.

## 🎯 Performance Optimizations

- **Image Optimization**: Use optimized images (WebP when possible)
- **Code Splitting**: React Router handles automatic code splitting
- **Lazy Loading**: Images use `loading="lazy"` attribute
- **CSS Optimization**: Tailwind CSS purges unused styles in production
- **Build Optimization**: Vite optimizes and minifies code for production

## 🐛 Troubleshooting

### Build Errors

- **Missing dependencies**: Run `npm install` again
- **TypeScript errors**: Check `tsconfig.json` configuration
- **Tailwind not working**: Ensure `tailwind.config.ts` is properly configured

### Runtime Issues

- **Images not loading**: Check file paths in `public/assets/`
- **Contact form not working**: Verify Vercel serverless function is deployed and environment variables are set
- **Portfolio videos not showing**: Check YouTube video IDs are valid

### Development Issues

- **Port already in use**: Change port in `vite.config.ts` or kill the process using port 8080
- **Hot reload not working**: Restart the dev server

## 📝 Customization

### Branding

- **Colors**: Edit CSS variables in `src/index.css` (`:root` section)
- **Fonts**: Update font imports in `index.html` and `tailwind.config.ts`
- **Content**: Update text content in component files

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation in `src/components/layout/SinglePageHeader.tsx`

### Modifying Client Logos

- Add/remove logos in `public/assets/logos/marquee/`
- Update `BRAND_NAMES` mapping in `src/components/sections/ClientsMarquee.tsx`
- Adjust `MAX_LOGOS` constant if needed

## 📄 License

This project is a freelancer portfolio website. All rights reserved.

## 👤 Author

**Saiyed Faizan**
- Cinematographer & Visual Storyteller
- Based in Delhi, India
- Portfolio: [Your Website URL]
- Email: contact@faizankacamera.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/) and [Fontshare](https://www.fontshare.com/)

---

**Built with ❤️ for visual storytelling excellence**
