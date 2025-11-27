import Badge from '../home/Badge';

function CaseStudyTemplate({ project, children }) {
  return (
    <div className="w-full min-h-screen bg-white pt-[122px]">
      {/* Hero Section */}
      <section className="bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a href="/" className="text-lg font-montserrat text-gray-700 hover:underline">Home</a>
            <span className="mx-2 text-gray-700">/</span>
            <span className="text-lg font-montserrat text-black font-bold">
              {project.shortTitle}
            </span>
          </div>

          {/* Title & Year */}
          <h1 className="text-[80px] font-italiana font-normal text-black mb-4">
            {project.title}
          </h1>
          <p className="text-[40px] font-italiana font-normal text-black mb-8">
            - {project.year} -
          </p>

          {/* Tags */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {project.tags.map((tag, index) => (
              <Badge key={index} text={tag} />
            ))}
          </div>

          {/* Thumbnail */}
          <div className="max-w-4xl mx-auto">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto rounded-[20px] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Content Section - Placeholder */}
      <section className="bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto">
          {children || (
            <div className="bg-white bg-opacity-70 rounded-[20px] p-12 text-center">
              <h2 className="text-[40px] font-italiana font-normal text-black mb-6">
                Case Study Content Coming Soon
              </h2>
              <p className="text-[20px] font-montserrat text-gray-700 mb-8">
                {project.description}
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[24px] font-montserrat font-bold mb-4">Overview</h3>
                  <p className="text-[18px] font-montserrat text-gray-600">
                    [Project overview will be added here]
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] font-montserrat font-bold mb-4">Challenge</h3>
                  <p className="text-[18px] font-montserrat text-gray-600">
                    [Challenge description will be added here]
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] font-montserrat font-bold mb-4">Solution</h3>
                  <p className="text-[18px] font-montserrat text-gray-600">
                    [Solution details will be added here]
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] font-montserrat font-bold mb-4">Outcome</h3>
                  <p className="text-[18px] font-montserrat text-gray-600">
                    [Results and outcomes will be added here]
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-center gap-8 py-12 bg-[#faeb99]">
        <a
          href="/"
          className="px-8 py-3 bg-[#5d5846] text-white rounded-lg text-lg font-montserrat hover:opacity-80 transition"
        >
          Back to Home
        </a>
      </div>

      {/* Back to top */}
      <div className="flex justify-center py-12 bg-[#faeb99]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 cursor-pointer"
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
