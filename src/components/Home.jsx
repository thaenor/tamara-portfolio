import Badge from './home/Badge';
import ProjectCard from './home/ProjectCard';
import AboutMeTimeline from './home/AboutMeTimeline';
import { projectsData } from '../data/projects';
import './Home.css';

// Image assets from local designs folder
const images = {
  tamaraProfile: "/me.png",
  travelIndustry: "/Taraoffice.png",
  pandemic: "/office-tara.png",
  careerChange: "/Tara - about me.png",
  skill1: "/tara-presenter.png",
  skill2: "/IMG_9674 1.png",
  skill3: "/tara-conference.png",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white pt-[122px]">

      {/* Hero Section */}
      <section id="home" className="pt-[122px] bg-[#faeb99] px-12 py-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-[80px] font-italiana font-normal text-black leading-tight">
                Hi! I&apos;m Tamara
              </h1>
              <div className="h-1 mt-2" style={{
                width: '300px',
                background: 'linear-gradient(to right, #f5f5f0, rgba(245, 245, 240, 0))'
              }}></div>
            </div>
            <p className="text-[40px] font-italiana font-normal text-black mb-6">
              Product Designer (UX/UI)
            </p>
            <div className="flex gap-4 mb-16 flex-wrap">
              <Badge text="proactive" />
              <Badge text="motivated" />
              <Badge text="growth mindset" />
            </div>
            <p className="text-[40px] font-italiana font-normal text-black mb-6">
              Passionate about
            </p>
            <div className="flex gap-4 flex-wrap">
              <Badge text="digital design" />
              <Badge text="innovation" />
              <Badge text="collaboration" />
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
          <p className="text-[30px] font-montserrat text-[#1f1000] mb-6">
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
            {projectsData.map((project) => (
              <div key={project.id} className="flex justify-center">
                <ProjectCard
                  imageSrc={project.thumbnail}
                  backImage={project.backImage}
                  title={project.title}
                  year={project.year}
                  tags={project.tags}
                  slug={project.slug}
                />
              </div>
            ))}
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
          <div className="mb-24 relative">
            <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-white rounded-full"></div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[80px] font-italiana font-normal text-black">
                Soft
              </h2>
              <h2 className="text-[80px] font-italiana font-normal text-black">
                skills
              </h2>
            </div>
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
          <div className="flex flex-col">
            <h2 className="text-[80px] font-italiana font-normal text-black mb-0">
              Hobbies
            </h2>
            <div className="flex w-full px-4 -mt-32">
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
