import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../home/Badge';
import { projectsData } from '../../data/projects';
import { trackExternalLink } from '../../utils/gtm';

function CaseStudyTemplate({ project }) {
  const navigate = useNavigate();

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  const handleBackClick = () => window.history.back();

  // Find previous and next projects for navigation
  const currentIndex = projectsData.findIndex(p => p.slug === project.slug);
  const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const handlePreviousClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(`/projects/${previousProject.slug}`), 300);
  };
  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(`/projects/${nextProject.slug}`), 300);
  };

  const backgroundStyle = project.backgroundColor.includes('gradient')
    ? project.backgroundColor
    : `linear-gradient(to bottom, ${project.backgroundColor}, #FFFFFF)`;

  return (
    <div className="w-full min-h-screen" style={{ background: backgroundStyle }}>
      {/* Header with back button and title */}
      <div className="pt-[122px] pb-12">
        <div className="max-w-7xl mx-auto px-12" style={{ paddingTop: '40px' }}>
          <div className="flex gap-4 mb-8">
            <button onClick={handleBackClick} className="inline-flex items-center justify-center w-10 h-10 hover:opacity-70 transition flex-shrink-0" style={{ paddingTop: '50px', color: project.arrowColor || '#000000' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-[80px] font-montserrat font-bold leading-tight" style={{ color: project.headlineColor || '#000000' }}>
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="text-[32px] font-montserrat font-normal" style={{ color: project.subtitleColor || '#666666' }}>
                    {project.subtitle}
                  </p>
                )}
                {project.tagline && (
                  <p className="text-[24px] font-montserrat italic" style={{ color: project.taglineColor || project.subtitleColor || '#666666', marginTop: '20px' }}>
                    {project.tagline}
                  </p>
                )}
              </div>
              {project.headerImage && (
                <img
                  src={project.headerImage}
                  alt="Header decoration"
                  className="w-32 h-32 object-contain flex-shrink-0"
                />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-12 pb-20">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="col-span-2">
            <div className="bg-white rounded-[20px] p-12">
              {/* Problem Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge text={project.badgeLabel || 'built from scratch'} />
                </div>
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Problem
                </h2>
                <div className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                  {project.challenge ? (
                    <div>
                      {project.challenge.split('\n\n').map((line, index) => {
                        const trimmed = line.trim();
                        const isEmojiOnly = trimmed.length > 0 && /^[^\p{L}\p{N}\p{P}]*$/u.test(trimmed.replace(/\s/g, ''));

                        return (
                          <div key={index}>
                            {isEmojiOnly ? (
                              <div className="text-[50px] mt-4">
                                {line}
                              </div>
                            ) : (
                              line.split('\n').map((textLine, lineIndex) => (
                                <div key={lineIndex}>
                                  {textLine}
                                </div>
                              ))
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    '[Problem description will be added here]'
                  )}
                </div>
              </div>

              {/* My Role Section */}
              <div className="mb-12">
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  My role
                </h2>
                <div className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                  {project.role ? (
                    <div>
                      {project.role.split('\n\n').map((section, sectionIndex) => {
                        const trimmed = section.trim();
                        const isEmojiOnly = trimmed.length > 0 && /^[^\p{L}\p{N}\p{P}]*$/u.test(trimmed.replace(/\s/g, ''));

                        return (
                          <div key={sectionIndex}>
                            {isEmojiOnly ? (
                              <div className="text-[50px] mt-4">
                                {section}
                              </div>
                            ) : (
                              section.split('\n').map((line, lineIndex) => (
                                <div key={lineIndex}>
                                  {line}
                                </div>
                              ))
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    '[Your role description will be added here]'
                  )}
                </div>
              </div>

              {/* Solution Section */}
              <div className="mb-12">
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Solution
                </h2>
                <div className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                  {project.solution ? (
                    <div>
                      {project.solution.split('\n\n').map((line, index) => {
                        const trimmed = line.trim();
                        const isEmojiOnly = trimmed.length > 0 && /^[^\p{L}\p{N}\p{P}]*$/u.test(trimmed.replace(/\s/g, ''));

                        return (
                          <div key={index}>
                            {isEmojiOnly ? (
                              <div className="text-[50px] mt-4">
                                {line}
                              </div>
                            ) : (
                              line.split('\n').map((textLine, lineIndex) => (
                                <div key={lineIndex}>
                                  {textLine}
                                </div>
                              ))
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    '[Solution details will be added here]'
                  )}
                </div>
              </div>

              {/* Time Frame Section */}
              <div>
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Time frame
                </h2>
                <div className="text-[18px] font-montserrat text-gray-700 whitespace-pre-wrap" style={{ marginBottom: '40px' }}>
                  {project.duration ? (
                    <div>
                      {project.duration.split('\n').map((line, index) => (
                        <div key={index}>
                          {line}
                        </div>
                      ))}
                    </div>
                  ) : (
                    '[Duration will be added here]'
                  )}
                </div>
                {project.website && (
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]">📎</span>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackExternalLink(project.website, `${project.title} website`)}
                      className="text-[18px] font-montserrat text-gray-700 hover:text-black transition"
                    >
                      {project.title} website
                    </a>
                  </div>
                )}
              </div>
            </div>
            {project.webImage && (
              <div className="mt-8">
                <img
                  src={project.webImage}
                  alt="Web and Mobile"
                  className="w-full h-auto rounded-[20px] shadow-xl object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column - Visuals */}
          <div className="col-span-1 flex flex-col" style={{ justifyContent: project.imageAlignment || 'flex-end' }}>
            {project.heroImage && (
              <div>
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-auto rounded-[20px] shadow-xl object-cover"
                />
              </div>
            )}
            {project.mobileImage && (
              <div className="mt-8" style={project.heroImage ? { marginTop: 'auto' } : {}}>
                <img
                  src={project.mobileImage}
                  alt="Mobile"
                  className="w-full h-auto rounded-[20px] shadow-xl object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Navigation Footer */}
      <div className="max-w-7xl mx-auto px-12 pb-20">
        <div className="flex justify-between items-center">
          {/* Previous Project */}
          <button
            onClick={handlePreviousClick}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition group-hover:opacity-80 shadow-lg"
              style={{ backgroundColor: project.navigationCircleColor || '#FFFFFF' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <p className="text-center text-[16px] font-montserrat font-bold text-black">
              Previous project
            </p>
          </button>

          {/* Next Project */}
          <button
            onClick={handleNextClick}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition group-hover:opacity-80 shadow-lg"
              style={{ backgroundColor: project.navigationCircleColor || '#FFFFFF' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <p className="text-center text-[16px] font-montserrat font-bold text-black">
              Next project
            </p>
          </button>
        </div>
      </div>

      {/* Back to Top */}
      <div className="flex justify-center py-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 cursor-pointer text-black hover:opacity-70 transition"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7-7 7 7"/>
          </svg>
          <p className="text-sm font-montserrat font-bold">Back to top</p>
        </button>
      </div>
    </div>
  );
}

export default CaseStudyTemplate;
