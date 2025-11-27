# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-11-27

### Overview
Multi-page routing implementation with dedicated case study pages for 6 projects and dynamic navigation dropdown menu.

### Added
- **Multi-Page Routing**: Implemented react-router-dom v6 for client-side navigation
  - Home page (/) - Main portfolio landing with projects grid, about section, and skills
  - 6 dedicated case study pages with routes:
    - `/projects/pairup-events` - Social platform for pairs
    - `/projects/xing-email-newsletter` - XING Newsletter series
    - `/projects/xing-private-profile` - XING Mehub private profile
    - `/projects/xing-culture-check` - XING Culture Check tool
    - `/projects/freely` - Weather web application
    - `/projects/yuu-skydive` - YUU Skydiving website

### Components & Architecture
- **Layout Components**:
  - `Navigation.jsx` - Fixed navbar with Projects dropdown menu
  - `SideNavigation.jsx` - Right sidebar with smart cross-page navigation

- **Home Components** (Extracted from monolithic Home.jsx):
  - `Badge.jsx` - Reusable tag/badge component
  - `ProjectCard.jsx` - Project card with routing links
  - `AboutMeTimeline.jsx` - Timeline with scroll detection

- **Case Study Components**:
  - `CaseStudyTemplate.jsx` - Reusable template for all case studies
  - Individual case study components for each project

- **Hooks & Data**:
  - `useInView.js` - Extracted custom hook for intersection observer
  - `projects.js` - Centralized project data with placeholder fields for future content

### Features
- **Projects Dropdown Menu**: Hover-activated dropdown showing all 6 case studies
- **Smart Navigation**: Handles both same-page scrolling and cross-page navigation
- **Placeholder Structure**: Case study pages ready for content addition
- **Dynamic Project Data**: Single source of truth for all project information
- **Responsive Design**: SideNavigation hidden on mobile devices, preserved on desktop
- **Preserved Functionality**: All existing home page features maintained

### Dependencies
- Added: `react-router-dom@6` - Modern routing library with hooks support

### File Structure Updates
```
src/
├── components/
│   ├── Home.jsx                    (REFACTORED)
│   ├── layout/
│   │   ├── Navigation.jsx          (NEW)
│   │   └── SideNavigation.jsx      (NEW)
│   ├── home/
│   │   ├── Badge.jsx              (NEW - extracted)
│   │   ├── ProjectCard.jsx        (NEW - extracted)
│   │   └── AboutMeTimeline.jsx    (NEW - extracted)
│   └── projects/
│       ├── CaseStudyTemplate.jsx  (NEW)
│       ├── PairupEvents.jsx       (NEW)
│       ├── XingEmailNewsletter.jsx (NEW)
│       ├── XingPrivateProfile.jsx  (NEW)
│       ├── XingCultureCheck.jsx    (NEW)
│       ├── Freely.jsx             (NEW)
│       └── YuuSkydive.jsx         (NEW)
├── data/
│   └── projects.js                (NEW)
└── hooks/
    └── useInView.js               (NEW)
```

### Technical Improvements
- Extracted monolithic Home.jsx into smaller, reusable components
- Centralized project data for easier content management
- Improved component separation of concerns
- BrowserRouter wrapper in main.jsx for client-side routing
- Firebase hosting rewrites already configured for SPA routing

### Build & Deploy
- Production build: ~185KB JS (gzipped ~58KB), ~14KB CSS (gzipped ~3.85KB)
- Firebase hosting compatible with SPA routing via rewrite rules
- No breaking changes to existing functionality

### Future Content Addition
Case study pages are ready to accept custom content. To add content:
1. Update `/src/data/projects.js` with overview, challenge, solution, outcome, etc.
2. Customize individual project components for unique layouts if needed
3. Add images to `/public` and reference in project data

## [1.0.0] - 2025-11-27

### Overview
Initial deployment of Tamara's designer portfolio with pixel-perfect design implementation and Firebase hosting setup.

### Added
- **React + Vite Application**: Modern React setup with Vite bundler and Tailwind CSS
- **Design Implementation**: Complete pixel-perfect refactoring matching Figma specifications
  - Hero section with gradient underline fade effect under "Tamara"
  - Navigation bar with aligned links (Home, Projects, About me)
  - 6 featured project cards with titles, years, and category tags
  - About Me section with profile images and timeline
  - Soft Skills section with 3-column image grid and tags
  - Hard Skills section with 5-column categorized tool showcase

### Components & Features
- **Custom Hook**: `useInView` - Intersection Observer API integration for scroll-based animations
- **TimelineSection**: Reusable timeline component with date display and connecting lines
- **Badge**: Reusable tag component for skill categorization
- **ProjectCard**: Reusable project showcase card component
- **Navigation**: Fixed sticky navbar with smooth hover effects

### Styling & Configuration
- **Tailwind CSS**: Extended configuration with custom fonts (Italiana, Montserrat, Outfit, Abhaya, Helvetica)
- **Custom CSS**: Animation keyframes and utility classes in Home.css
- **Responsive Design**: Mobile-first approach with semantic HTML structure

### Assets & Images
- All design assets migrated to `/public` directory for local serving
- Organized logo structure in `/public/Logos/` with categories:
  - Design & texting (7 logos)
  - Wireframing (2 logos)
  - Presentations (3 logos)
  - Workflows (2 tools)
  - Video creation (3 logos)
- Properly optimized images with object-fit containment for visual integrity

### Deployment & Infrastructure
- **Firebase Hosting**: Configured and deployed
  - Project ID: `tamara-portfolio-5de7a`
  - Build output: `dist/` (Vite build directory)
  - SPA rewrites configured for client-side routing
  - Smart cache-control headers for asset optimization (1-year cache for assets, no-cache for index.html)
- **Git Repository**: Initialized and pushed to GitHub
  - Remote: https://github.com/thaenor/tamara-portfolio.git
  - Branch: main

### Live URL
https://tamara-portfolio-5de7a.web.app

### Technical Details
- **Build**: `npm run build` → Vite production build
- **Development**: `npm run dev` → Local development server
- **Deploy**: `firebase deploy --only hosting` → Deploy to Firebase Hosting
- **Bundle Size**: ~157KB JS (gzipped ~49KB), ~12KB CSS (gzipped ~3.5KB)

### File Structure
```
tamara-portfolio/
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Main component with all sections
│   │   └── Home.css           # Component-specific styling
│   ├── App.jsx                # App wrapper
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
│   ├── Logos/                 # Categorized tool logos
│   └── *.png                  # Project and profile images
├── Designs/                   # Design reference files
├── dist/                      # Production build (Firebase hosting)
├── firebase.json              # Firebase hosting configuration
├── .firebaserc                # Firebase project configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── package.json               # Project dependencies
```

### Notable Implementation Details
1. **Logo Sizing**: Sketch, Lovable, Perplexity, and Claude are displayed at 64px (w-16 h-16), while other logos remain at 40px (w-10 h-10)
2. **Timeline Animations**: Uses native Intersection Observer API (no external dependencies) with 40% visibility threshold and 500ms transition duration
3. **Gradient Underline**: Pale yellow (#f5f5f0) fading to transparent, 300px width under "Tamara"
4. **Image Handling**: Strategic use of object-fit contain for profile images to preserve composition
5. **Navbar Layout**: All navigation items aligned horizontally to the left side

### Future Sessions
- Consider adding additional pages (Services, Contact, etc.)
- Implement form handling for contact inquiries
- Add analytics tracking
- Enhance mobile responsiveness
- Consider adding dark mode toggle
- Performance optimization and image lazy-loading
- SEO enhancements and meta tag optimization
