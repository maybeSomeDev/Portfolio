# NextGen Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## **[Live Demo Version](https://nextgenportfolio.vercel.app)** 

## Requirements

- **Node.js**: >=18.x
- **Next.js**: 13.5.x

## Features

- Responsive design that works across all devices
- Animated particle background with react-tsparticles
- Smooth page transitions and component animations with framer-motion
- Dark/light mode toggle with theme persistence
- Configuration-driven content management
- Interactive UI components with subtle animations
- Performance optimized with Next.js

## Tech Stack

- **Framework**: Next.js 13.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Validation**: Zod
- **Particles**: react-tsparticles

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # UI components
│   ├── sections/         # Page sections
│   └── ui/               # shadcn/ui components
├── config/               # Configuration files
│   ├── personal.json     # Personal information
│   ├── skills.json       # Skills data
│   ├── projects.json     # Projects data
│   ├── experience.json   # Experience data
│   ├── social.json       # Social links
│   ├── themes.json       # Theme configurations
│   └── types.ts          # TypeScript interfaces
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## How to Customize

### Personal Information

Edit the `config/personal.json` file to update your personal details:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "email": "your.email@example.com",
  "location": "Your Location",
  "resumeUrl": "/path-to-resume.pdf"
}
```

### Skills

Edit the `config/skills.json` file to update your skills:

```json
[
  {
    "name": "Skill Name",
    "level": 90,
    "category": "frontend"
  },
  ...
]
```

### Projects

Edit the `config/projects.json` file to update your projects:

```json
[
  {
    "id": "project-1",
    "title": "Project Title",
    "description": "Short description",
    "longDescription": "Detailed description",
    "tags": ["Tag1", "Tag2"],
    "imageUrl": "/path-to-image.jpg",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/yourusername/project",
    "featured": true
  },
  ...
]
```

### Experience

Edit the `config/experience.json` file to update your work and education experience:

```json
[
  {
    "id": "exp-1",
    "company": "Company Name",
    "position": "Your Position",
    "duration": "2021 - Present",
    "startDate": "2021-01-01",
    "description": "Description of role...",
    "technologies": ["Tech1", "Tech2"],
    "type": "work"
  },
  ...
]
```

### Social Links

Edit the `config/social.json` file to update your social links:

```json
[
  {
    "platform": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "Github"
  },
  ...
]
```

### Themes

Edit the `config/themes.json` file to customize the theme colors and particle effects:

```json
{
  "themes": [
    {
      "name": "light",
      "colors": {
        "primary": "hsl(204, 100%, 40%)",
        ...
      },
      "particleConfig": {
        "enabled": true,
        "particleCount": 35,
        ...
      }
    },
    ...
  ]
}
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate static files in the `out` directory, which can be deployed to any static hosting provider.

## Deployment

This project is configured for static export, making it compatible with various hosting platforms like Vercel, Netlify, GitHub Pages, etc.

## Accessibility

The portfolio is designed with accessibility in mind, following WCAG 2.1 AA standards. Key features include:

- Semantic HTML
- Keyboard navigation
- ARIA attributes
- Sufficient color contrast
- Reduced motion support
