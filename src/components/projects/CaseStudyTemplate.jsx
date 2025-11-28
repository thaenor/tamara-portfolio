import { useNavigate } from 'react-router-dom';
import Badge from '../home/Badge';
import { projectsData } from '../../data/projects';

function CaseStudyTemplate({ project }) {
  const navigate = useNavigate();

  const handleBackClick = () => window.history.back();

  // Find previous and next projects for navigation
  const currentIndex = projectsData.findIndex(p => p.slug === project.slug);
  const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const handlePreviousClick = () => navigate(`/projects/${previousProject.slug}`);
  const handleNextClick = () => navigate(`/projects/${nextProject.slug}`);

  return (
    <div className="w-full min-h-screen" style={{ background: `linear-gradient(to bottom, ${project.backgroundColor}, #FFFFFF)` }}>
      {/* Header with back button and title */}
      <div className="pt-[122px] pb-12">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex gap-4 mb-8">
            <button onClick={handleBackClick} className="inline-flex items-center justify-center w-10 h-10 text-black hover:opacity-70 transition flex-shrink-0" style={{ paddingTop: '40px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div>
              <h1 className="text-[80px] font-montserrat font-bold text-black leading-tight">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-[32px] font-montserrat font-normal text-gray-700">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Year and Tags */}
          <p className="text-[40px] font-italiana font-normal text-black mb-8">
            - {project.year} -
          </p>
          <div className="flex gap-4 mb-8 flex-wrap">
            {project.tags.map((tag, index) => (
              <Badge key={index} text={tag} />
            ))}
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
                  <Badge text="Re-design" />
                </div>
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Problem
                </h2>
                <p className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4">
                  {project.challenge || '[Problem description will be added here]'}
                </p>
              </div>

              {/* My Role Section */}
              <div className="mb-12">
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  My role
                </h2>
                <p className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4">
                  {project.role || '[Your role description will be added here]'}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-12">
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Solution
                </h2>
                <p className="text-[18px] font-montserrat text-gray-700 leading-relaxed mb-4">
                  {project.solution || '[Solution details will be added here]'}
                </p>
              </div>

              {/* Time Frame Section */}
              <div>
                <h2 className="text-[32px] font-montserrat font-bold text-black mb-6">
                  Time frame
                </h2>
                <p className="text-[18px] font-montserrat text-gray-700">
                  {project.duration || '[Duration will be added here]'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="col-span-1">
            {/* Project Thumbnail */}
            <div className="sticky top-[140px]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto rounded-[20px] shadow-xl object-cover"
              />
            </div>
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
              style={{ backgroundColor: project.backgroundColor }}
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
              style={{ backgroundColor: project.backgroundColor }}
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
