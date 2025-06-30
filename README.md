# Series Guide Platform

Modern series analysis platform built with Astro, React, TypeScript, and MongoDB.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Setup

Create `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm clean` - Clean cache files
- `pnpm check` - Type check project
- `pnpm db:populate` - Populate database
- `./fix-vscode-cache.sh` - Fix VS Code TypeScript cache

## Tech Stack

- **Frontend**: Astro + React + TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: JWT + bcryptjs
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/     # React components
├── lib/           # Utilities (auth, mongo)
├── pages/         # Astro pages & API routes
└── styles/        # Global CSS
```
