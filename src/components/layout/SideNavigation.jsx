import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function SideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHome) {
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

  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <aside className="fixed right-8 top-[122px] hidden lg:block w-[200px] h-[280px] bg-white bg-opacity-70 rounded-[20px] shadow-lg p-6 z-40">
      <nav className="flex flex-col gap-6">
        <button
          onClick={handleHomeClick}
          className="text-3xl font-montserrat font-normal hover:opacity-70 transition text-left"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-3xl font-montserrat font-normal hover:opacity-70 transition text-left"
        >
          Projects
        </button>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-3xl font-montserrat font-normal hover:opacity-70 transition text-left"
          >
            About me
          </button>
          <div className="w-[150px] h-[9px] bg-[#f6f5f1] rounded"></div>
        </div>
      </nav>
    </aside>
  );
}

export default SideNavigation;
