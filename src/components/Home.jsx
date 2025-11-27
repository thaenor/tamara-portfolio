import React, { useRef, useState, useEffect } from 'react';
import './Home.css';

// Custom hook to detect when element is in viewport
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Optional: Keep it visible once it's been seen
        // observer.unobserve(entry.target);
      } else {
        setInView(false);
      }
    }, {
      threshold: 0.3, // Trigger when 30% of element is visible
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

// Image assets from local designs folder
const images = {
  tamaraProfile: "/me.png",
  travelIndustry: "/airport-me.png",
  pandemic: "/office-tara.png",
  careerChange: "/Tara - about me.png",
  skill1: "/tara-presenter.png",
  skill2: "/IMG_9674 1.png",
  skill3: "/tara-conference.png",
  projectSocialPairs: "/PairupEventsThumb.png",
  projectNewsletterSerie: "/Xing Thumbnail.png",
  projectWeatherApp: "/Freely thumbnail.png",
  projectPrivateProfile: "/Mehub Thumbnail.png",
  projectCompanyCulture: "/CCA Thumbnail.png",
  projectSkydiving: "/YUU Skydive Thumbnail.png",
};

// Navigation component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[122px] flex items-center justify-between px-12 shadow-sm z-50">
      <div className="text-3xl font-montserrat font-normal tracking-wider">Home</div>
      <div className="flex gap-12 text-3xl font-montserrat font-normal">
        <a href="#projects" className="hover:underline transition">Projects</a>
        <a href="#about" className="hover:underline transition">About me</a>
      </div>
    </nav>
  );
}

// Badge/Tag component
function Badge({ text }) {
  return (
    <span className="bg-[#5d5846] text-white px-3 py-1 rounded text-[16px] font-montserrat font-normal whitespace-nowrap">
      {text}
    </span>
  );
}

// Project card component
function ProjectCard({ imageSrc, title, year, tags = [] }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <h3 className="font-montserrat font-bold text-[20px] text-black mb-2">{title}</h3>
        <p className="text-black text-[16px] font-montserrat">- {year} -</p>
      </div>
      <div className="w-[271px] h-[274px] rounded-full bg-white border-4 border-[#cabc84] shadow-lg overflow-hidden mb-6">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {tags.length > 0 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag, index) => (
            <Badge key={index} text={tag} />
          ))}
        </div>
      )}
    </div>
  );
}

// Timeline section component
function TimelineSection({ startDate, endDate, contentRef, isVisible }) {
  return (
    <div className={`flex-1 flex flex-col items-center relative pb-16 ${isVisible ? '' : ''}`}>
      <div className={`text-center font-italiana text-[40px] font-normal text-black mb-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {startDate}
      </div>
      <div className={`flex-1 w-1 bg-black transition-opacity duration-500 relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -left-2 top-0 w-5 h-5 bg-black rounded-full"></div>
        <div className="absolute -left-2 bottom-0 w-5 h-5 bg-black rounded-full"></div>
      </div>
      <div className={`text-center font-italiana text-[40px] font-normal text-black mt-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {endDate}
      </div>
    </div>
  );
}

// About Me Timeline Component with Scroll Detection
function AboutMeTimeline({ images }) {
  // Refs for content sections
  const [travelRef, travelInView] = useInView({ threshold: 0.4 });
  const [pandemicRef, pandemicInView] = useInView({ threshold: 0.4 });
  const [careerRef, careerInView] = useInView({ threshold: 0.4 });

  return (
    <div className="relative">
      {/* Timeline Rail */}
      <div className="absolute left-0 top-0 bottom-0 w-32 flex flex-col">
        <TimelineSection startDate="2014" endDate="2022" isVisible={travelInView} />
        <TimelineSection startDate="2020" endDate="2022" isVisible={pandemicInView} />
        <TimelineSection startDate="2022" endDate="Today" isVisible={careerInView} />
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-[20px] p-12 shadow-lg opacity-80 ml-32">
        {/* Travel Industry - Horizontal Layout */}
        <div ref={travelRef} className="mb-16 flex gap-8 items-stretch">
          <img src={images.travelIndustry} alt="Travel" className="w-40 h-auto rounded-[5px] object-contain flex-shrink-0 -ml-12" />
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[20px] font-montserrat font-bold mb-4">Travel industry ✈️</h3>
            <p className="text-[20px] font-montserrat text-gray-700 leading-relaxed">
              Before becoming a designer, I spent years working in the travel industry as an airline supervisor for Lufthansa.
            </p>
          </div>
          <img src={images.skill3} alt="Agent" className="w-48 h-auto rounded-[5px] object-contain flex-shrink-0" />
        </div>

        {/* Corona Pandemic - Vertical Layout */}
        <div ref={pandemicRef} className="mb-16">
          <h3 className="text-[20px] font-montserrat font-bold mb-4">Corona pandemic 🌍</h3>
          <p className="text-[20px] font-montserrat text-gray-700 leading-relaxed mb-8">
            When the pandemic hit, I realized that the cards were being reshuffled, and it was the perfect time for a change.
          </p>
          <img src={images.pandemic} alt="Pandemic" className="w-96 h-auto rounded-[5px] object-contain" />
        </div>

        {/* Career Change - Vertical Layout */}
        <div ref={careerRef}>
          <h3 className="text-[20px] font-montserrat font-bold mb-4">Successful career change</h3>
          <p className="text-[20px] font-montserrat text-gray-700 leading-relaxed mb-8">
            I used that period to transition into a design career, driven by my passion and curiosity. I believe in seizing every opportunity to grow and expand experiences.
          </p>
          <img src={images.careerChange} alt="Career" className="w-48 h-auto rounded-[20px] object-contain" />
        </div>
      </div>
    </div>
  );
}

// Side Navigation component
function SideNavigation() {
  return (
    <aside className="fixed right-8 top-[122px] hidden lg:block w-[200px] h-[280px] bg-white bg-opacity-70 rounded-[20px] shadow-lg p-6 z-40">
      <nav className="flex flex-col gap-6">
        <a href="#home" className="text-3xl font-montserrat font-normal hover:opacity-70">Home</a>
        <a href="#projects" className="text-3xl font-montserrat font-normal hover:opacity-70">Projects</a>
        <div className="flex flex-col gap-2">
          <a href="#about" className="text-3xl font-montserrat font-normal hover:opacity-70">About me</a>
          <div className="w-[150px] h-[9px] bg-[#f6f5f1] rounded"></div>
        </div>
      </nav>
    </aside>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white" id="home">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[122px] bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-[80px] font-italiana font-normal text-black leading-tight">
                Hi! I'm Tamara
              </h1>
              <div className="h-1 mt-2" style={{
                width: '300px',
                background: 'linear-gradient(to right, #f5f5f0, rgba(245, 245, 240, 0))'
              }}></div>
            </div>
            <p className="text-[40px] font-italiana font-normal text-black mb-10">
              Product Designer (UX/UI)
            </p>
            <div className="flex gap-4 mb-16 flex-wrap">
              <Badge text="UX/UI Design" />
              <Badge text="User Research" />
              <Badge text="Prototyping" />
            </div>
            <p className="text-[40px] font-italiana font-normal text-black mb-6">
              Passionate about
            </p>
            <div className="flex gap-4 flex-wrap">
              <Badge text="Design" />
              <Badge text="User Experience" />
              <Badge text="Innovation" />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img
                src={images.tamaraProfile}
                alt="Tamara"
                className="w-full h-[400px] rounded-[20px] object-contain border-4 border-[#faeb99] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-20">
          <p className="text-[30px] font-helvetica text-[#1f1000] mb-6">
            Scroll for projects
          </p>
          <div className="flex justify-center animate-bounce">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#faeb99] px-12 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Projects Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-3 gap-20 justify-center">
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectSocialPairs}
                title="Social platform for pairs"
                year="2025"
                tags={["PairupEvents", "Design", "UX/UI"]}
              />
            </div>
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectNewsletterSerie}
                title="Newsletter serie"
                year="2024"
                tags={["XING", "Content", "Design"]}
              />
            </div>
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectWeatherApp}
                title="Weather web application"
                year="2023"
                tags={["Freely", "App", "Design"]}
              />
            </div>
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectPrivateProfile}
                title="Your private profile"
                year="2023"
                tags={["Mehub", "UX/UI", "Design"]}
              />
            </div>
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectCompanyCulture}
                title="Your company culture"
                year="2022"
                tags={["CCA", "Culture", "Design"]}
              />
            </div>
            <div className="flex justify-center">
              <ProjectCard
                imageSrc={images.projectSkydiving}
                title="Skydiving website"
                year="2022"
                tags={["YUU", "Sports", "Design"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[200px] h-[200px] bg-white rounded-full"></div>
              <h2 className="text-[80px] font-italiana font-normal text-black relative z-10">
                About
              </h2>
            </div>
            <h2 className="text-[80px] font-italiana font-normal text-black">
              me
            </h2>
          </div>

          <AboutMeTimeline images={images} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Soft Skills */}
          <div className="mb-24">
            <h2 className="text-[80px] font-italiana font-normal text-black mb-8">
              Soft skills
            </h2>
            <div className="flex gap-4 mb-8 flex-wrap">
              <Badge text="presenting" />
              <Badge text="pro-activity" />
              <Badge text="User Advocacy" />
              <Badge text="Adaptability" />
              <Badge text="Emotional Intelligence" />
            </div>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <img src={images.skill1} alt="Presenting" className="w-full h-80 rounded-[20px] object-contain" />
              <img src={images.skill2} alt="Agent" className="w-full h-80 rounded-[20px] object-contain" />
              <img src={images.skill3} alt="Networking" className="w-full h-80 rounded-[20px] object-contain" />
            </div>
            <div className="flex gap-4 flex-wrap justify-end">
              <Badge text="Problem-Solving" />
              <Badge text="empathy" />
              <Badge text="Time Management" />
              <Badge text="Curiosity" />
            </div>
          </div>

          {/* Hard Skills */}
          <div className="mb-24">
            <h2 className="text-[80px] font-italiana font-normal text-black mb-8">
              Hard skills
            </h2>
            <div className="bg-[#fffef5] rounded-[20px] p-12">
              <div className="grid grid-cols-5 gap-8">
                {/* Design & Texting */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat font-bold mb-6 text-center">
                    Design & texting
                  </div>
                  <div className="grid grid-cols-3 gap-6 w-full justify-items-center">
                    <img src="/Logos/Design & texting logos/Figma.png" alt="Figma" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Design & texting logos/Sketch.png" alt="Sketch" className="w-16 h-16 object-contain" />
                    <img src="/Logos/Design & texting logos/ChatGPT.png" alt="ChatGPT" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Design & texting logos/Lovable.png" alt="Lovable" className="w-16 h-16 object-contain" />
                    <img src="/Logos/Design & texting logos/Claude.png" alt="Claude" className="w-16 h-16 object-contain" />
                    <img src="/Logos/Design & texting logos/Gemini.png" alt="Gemini" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Design & texting logos/Perplexity.png" alt="Perplexity" className="w-16 h-16 object-contain" />
                  </div>
                </div>

                {/* Wireframing */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat font-bold mb-6 text-center">
                    Wireframing
                  </div>
                  <div className="grid grid-cols-2 gap-6 w-full justify-items-center">
                    <img src="/Logos/Wireframing/Miro.png" alt="Miro" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Wireframing/Pen.png" alt="Notepad" className="w-10 h-10 object-contain" />
                  </div>
                </div>

                {/* Presentations */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat font-bold mb-6 text-center">
                    Presentations
                  </div>
                  <div className="grid grid-cols-2 gap-6 w-full justify-items-center">
                    <img src="/Logos/Presentation/Word.png" alt="Word" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Presentation/Keynote.png" alt="Keynote" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Presentation/Pen.png" alt="PowerPoint" className="w-10 h-10 object-contain col-span-2 justify-self-center" />
                  </div>
                </div>

                {/* Workflows */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat font-bold mb-6 text-center">
                    Workflows
                  </div>
                  <div className="flex flex-col gap-6 w-full items-center">
                    <div className="flex items-center gap-2">
                      <img src="/Logos/Workflow/Confluence.png" alt="Confluence" className="w-10 h-10 object-contain" />
                      <span className="text-sm font-montserrat">Confluence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/Logos/Workflow/Jira.png" alt="Jira" className="w-10 h-10 object-contain" />
                      <span className="text-sm font-montserrat">Jira</span>
                    </div>
                  </div>
                </div>

                {/* Video Creation */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat font-bold mb-6 text-center whitespace-nowrap">
                    Video creation
                  </div>
                  <div className="grid grid-cols-2 gap-6 w-full justify-items-center">
                    <img src="/Logos/Video creation/Davinci resolve.png" alt="DaVinci Resolve" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Video creation/Adobe premier.png" alt="Premiere Pro" className="w-10 h-10 object-contain" />
                    <img src="/Logos/Video creation/imovie.png" alt="iMovie" className="w-10 h-10 object-contain col-span-2 justify-self-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="flex flex-col items-center">
            <h2 className="text-[80px] font-italiana font-normal text-black mb-12">
              Hobbies
            </h2>
            <div className="flex justify-center w-full px-4">
              <img
                src="/Hobbies.png"
                alt="Hobbies collage"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

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
