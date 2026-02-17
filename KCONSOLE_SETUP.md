# KConsole Deployment

This is a modern, responsive landing page template deployed via KConsole.

## Configuration

This template is designed to be a static or client-side rendered application. It does **not** require a database or server-side authentication by default.

## Environment Variables

No specific environment variables are required for the basic landing page.
However, standard Next.js environment variables (like `NEXT_PUBLIC_...`) will be available if you add them in KConsole.

## Deployment

The application is built using Next.js standalone output and served via Docker.

- **Port**: 3000
- **Health Check**: `/` (The main page serves as the health check)

## Customization

You can customize the content by editing:
- `app/page.tsx`: The main landing page content
- `app/globals.css`: Global styles and theme variables
- `public/`: Static assets like images and icons
