# Neuronix Landing Page

A modern, responsive landing page for Neuronix - an autonomous IT company providing innovative solutions for the digital age.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Modern Design**: Clean, professional layout with Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Contact Form**: Functional contact form with validation
- **TypeScript**: Full TypeScript support for type safety
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **Features**: Showcase of key services and capabilities
- **About**: Company information and statistics
- **Contact**: Interactive contact form with validation

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript 5.5**: Type-safe JavaScript
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **React 18**: Modern React with hooks

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form API endpoint
│   │   └── ping/route.ts       # Health check endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── sections/
│   │   ├── about.tsx           # About section
│   │   ├── contact-form.tsx    # Contact form
│   │   ├── features.tsx        # Features section
│   │   └── hero.tsx            # Hero section
│   └── ui/
│       └── cta-button.tsx      # Reusable button component
├── lib/
│   └── types.ts                # TypeScript type definitions
└── public/                     # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "Hello, I need help with..."
}
```

**Response:**
```json
{
  "message": "Contact form submitted successfully"
}
```

### GET /api/ping
Health check endpoint.

**Response:**
```json
{
  "ok": true,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Deployment

This project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Digital Ocean

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.