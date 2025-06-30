# Series Guide Platform

Modern series analysis platform built with Astro, React, TypeScript, and MongoDB.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Setup

Create `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

## Deploy to Vercel

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables in Vercel dashboard**
4. **Deploy automatically**

That's it! Vercel will handle everything automatically.

## Tech Stack

- **Frontend**: Astro + React + TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: JWT + bcryptjs
- **Deployment**: Vercel (auto-configured)

## Project Structure

```
src/
├── components/     # React components
├── lib/           # Utilities (auth, mongo)
├── pages/         # Astro pages & API routes
└── styles/        # Global CSS
```
