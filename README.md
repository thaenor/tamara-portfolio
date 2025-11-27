# Tamara Portfolio

A modern React application for displaying static portfolio content.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the static site:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
tamara-portfolio/
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## License

MIT

