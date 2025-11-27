import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

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
    <nav className="fixed top-0 left-0 right-0 bg-white h-[122px] flex items-center px-12 shadow-sm z-50">
      <div className="flex gap-12 text-3xl font-montserrat font-normal items-center">
        <Link to="/" className="tracking-wider hover:opacity-70 transition">Home</Link>

        {/* Projects Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:underline transition">Projects</button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[280px] py-2 z-50">
              {projectsData.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block px-6 py-3 text-xl font-montserrat hover:bg-[#faeb99] transition"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {project.shortTitle}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="hover:underline transition text-left"
        >
          About me
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
