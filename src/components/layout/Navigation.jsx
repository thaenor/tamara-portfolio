import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { projectsData } from '../../data/projects';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProjectPage = location.pathname.startsWith('/projects/');

  // Determine active section: project page takes precedence, then scroll position
  const activeSection = isProjectPage ? 'projects' : scrollSection;

  // Detect active section based on scroll position on home page
  useEffect(() => {
    if (!isHome) return; // Only track sections on home page

    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      let currentSection = 'home';

      // Iterate through all sections and find which one is currently active
      // A section becomes active when it's within 300px of the top
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active when its top is at or above 300px from viewport top
          if (rect.top <= 300) {
            currentSection = sectionId;
          }
        }
      }

      setScrollSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      // On home page: scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages: navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[122px] flex items-center px-12 z-50">
      <div className="flex gap-12 text-3xl font-montserrat font-normal items-center">
        {/* Home Link */}
        <Link
          to="/"
          onClick={() => {
            if (isHome) {
              scrollToSection('home');
            }
          }}
          className={`tracking-wider transition ${
            activeSection === 'home' && isHome
              ? 'nav-active'
              : 'hover:opacity-70'
          }`}
        >
          Home
        </Link>

        {/* Projects Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex items-center gap-2 transition ${
              activeSection === 'projects' || isProjectPage
                ? 'nav-active'
                : 'hover:opacity-70'
            }`}
          >
            Projects
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl min-w-[320px] py-2 z-50">
              {projectsData.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="flex items-center gap-3 px-6 py-3 text-xl font-montserrat hover:bg-[#faeb99] transition"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <img
                    src={project.logo}
                    alt={`${project.shortTitle} logo`}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                  {project.shortTitle}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* About Me Link */}
        <button
          onClick={() => scrollToSection('about')}
          className={`transition text-left ${
            activeSection === 'about' && isHome
              ? 'nav-active'
              : 'hover:opacity-70'
          }`}
        >
          About me
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
