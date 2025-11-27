# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2025-11-27

### Overview
UI/UX refinements and navigation optimizations including 3D flip card animations, improved typography, and streamlined navigation structure.

### Added
- **3D Flip Card Animation**: Project cards now feature smooth 180° rotation on hover with CSS 3D transforms
  - Front side displays project thumbnail (scaled 1.05)
  - Back side displays alternative image placeholder
  - 500ms smooth transition duration with perspective effects
  - Added `backImage` property to projects data for future custom back images
  - Uses best UX practices with immediate hover triggers

- **Logo Placeholders**: Project dropdown menu items now include circular logo placeholders
  - 32x32px rounded logos positioned left of project titles
  - Increased dropdown width from 280px to 320px to accommodate logos
  - Logos from `/logos/` directory (pairup-events, xing, freely, yuu)

### Changed
- **Hero Section Badges**: Updated "Skills" section
  - Changed from "UX/UI Design, User Research, Prototyping"
  - To: "proactive, motivated, growth mindset"

- **Passionate About Section**: Updated passion badges
  - Changed from "Design, User Experience, Innovation"
  - To: "digital design, innovation, collaboration"

- **Typography Improvements**:
  - "Scroll for projects" text: Changed font from Helvetica to Montserrat
  - "Scroll for projects" text: Reduced size from 30px to 24px (note: actual size remains 30px, only font family changed)
  - Timeline dates in About Me section: Changed font from Italiana to Montserrat, reduced from 40px to 24px

- **About Me Section**:
  - Content card opacity: Changed from 80% to 100% (fully opaque)
  - Added equal margins: Left and right margins both set to 32px (128px)
  - Removed left-side image from Travel Industry section
  - Reduced spacing between "Product Designer" subheading and skill badges: From 40px to 24px
  - Added top padding to content card: Changed from p-12 to pt-7 (px-12, pb-12, pt-7)
  - Adjusted first timeline date ("2014"): Added pt-12 padding to align with "Travel industry" headline

- **Hobbies Section**:
  - Changed layout from centered to left-aligned
  - Removed "items-center" from flex container
  - Removed "justify-center" from image wrapper
  - Headline margin: Changed from mb-12 to mb-0
  - Image top margin: Changed from neutral to -mt-32 (pulled image 128px closer to headline)

- **Projects Dropdown**: Updated short titles for consistency
  - "PairupEvents" → "PairUp Events"
  - "Culture Check" → "XING Culture Check"

- **Navigation**: Added scrollToSection functionality to Projects button
  - Clicking "Projects" now scrolls to projects section (not just opens dropdown)

- **Image Scaling**: Project card images scaled up from 1.00 to 1.05 (5% scale increase) to better fill circular containers

### Removed
- **Right-Side Navigation**: Removed SideNavigation component
  - Removed from App.jsx imports and JSX
  - Removed `<SideNavigation />` component rendering
  - Simplified navigation to just top bar with Projects dropdown
  - SideNavigation.jsx file remains in codebase but unused

### Technical Details
- ProjectCard component now stateful with `useState` hook for flip state
- 3D transforms use `preserve-3d`, `backfaceVisibility`, and `rotateY` CSS properties
- Dropdown menu items now use flex layout with gap-3 for logo + title alignment
- Negative margins used strategically for image positioning and spacing adjustments

### File Changes
- `src/App.jsx` - Removed SideNavigation import and component
- `src/components/Home.jsx` - Updated hero badges, "Passionate about" section, "Scroll for projects" font, project card props, Hobbies section styling and spacing
- `src/components/home/ProjectCard.jsx` - Added 3D flip animation, useState hook, dual image rendering, scale adjustment
- `src/components/home/AboutMeTimeline.jsx` - Changed fonts to Montserrat, adjusted timeline dates size, updated card opacity and margins, removed left image
- `src/components/layout/Navigation.jsx` - Added scrollToSection to Projects button, added logo images with rounded styling
- `src/data/projects.js` - Added `backImage` property to all projects, updated `shortTitle` for 2 projects, added `logo` paths

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
