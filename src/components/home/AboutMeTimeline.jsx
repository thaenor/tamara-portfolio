import useInView from '../../hooks/useInView';

function AboutMeTimeline({ images }) {
  const [bullet1Ref, bullet1InView] = useInView({ threshold: 0.4 });
  const [bullet2Ref, bullet2InView] = useInView({ threshold: 0.4 });
  const [bullet3Ref, bullet3InView] = useInView({ threshold: 0.4 });
  const [bullet4Ref, bullet4InView] = useInView({ threshold: 0.4 });
  const [bullet5Ref, bullet5InView] = useInView({ threshold: 0.4 });

  return (
    <div className="relative">
      {/* Content Card */}
      <div className="bg-white rounded-[20px] px-12 pb-12 pt-7 shadow-lg opacity-100">
        <h2 className="text-[60px] font-italiana font-normal text-black mb-8">
          I am...
        </h2>

        {/* Bullet Points */}
        <div className="space-y-8">
          {/* Bullet Point 1 */}
          <div
            ref={bullet1Ref}
            className={`flex gap-4 transition-opacity duration-500 ${bullet1InView ? 'fade-in opacity-100' : 'opacity-0'}`}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-black text-lg mb-2">
                one of the organisers of the UX Camp Hamburg.
              </h3>
              <p className="font-montserrat text-gray-700 text-base mb-12">
                A annual bar camp, attended by designers accross Germany.
              </p>
              <img
                src="/Orgateam.JPG"
                alt="UX Camp Hamburg organizer team"
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
            </div>
          </div>

          {/* Bullet Point 2 */}
          <div
            ref={bullet2Ref}
            className={`flex gap-4 transition-opacity duration-500 ${bullet2InView ? 'fade-in opacity-100' : 'opacity-0'}`}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-black text-lg mb-2">
                curious to experiment
              </h3>
              <p className="font-montserrat text-gray-700 text-base mb-12">
                with various AI models that help me work more efficiently.
              </p>
              <img
                src="/Office.png"
                alt="Working with AI models"
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
            </div>
          </div>

          {/* Bullet Point 3 */}
          <div
            ref={bullet3Ref}
            className={`flex gap-4 transition-opacity duration-500 ${bullet3InView ? 'fade-in opacity-100' : 'opacity-0'}`}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-black text-lg mb-2">
                just trying it out.
              </h3>
              <p className="font-montserrat text-gray-700 text-base mb-12">
                After working on the startup idea since May 2025, I presented it five months later at Web Summit 2025 in Lisbon, pitching how I integrated AI to enhance the user experience and matchmaking for <a href="/#projects" className="text-black underline hover:opacity-70 transition-opacity">PairUp Events</a>.
              </p>
              <img
                src="/Websummit.HEIC"
                alt="Web Summit 2025 Lisbon presentation"
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
            </div>
          </div>

          {/* Bullet Point 4 */}
          <div
            ref={bullet4Ref}
            className={`flex gap-4 transition-opacity duration-500 ${bullet4InView ? 'fade-in opacity-100' : 'opacity-0'}`}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-black text-lg mb-2">
                sharing my learnings
              </h3>
              <p className="font-montserrat text-gray-700 text-base mb-12">
                After 3.5 days of pitching and networking at Web Summit, I shared my insights and analyzed the top three pitch winners by creating reaction videos.
              </p>
              <video
                width="100%"
                height="auto"
                controls
                defaultMuted
                className="w-1/2 rounded-[10px]"
              >
                <source src="/Pitchingcontest.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Bullet Point 5 */}
          <div
            ref={bullet5Ref}
            className={`flex gap-4 transition-opacity duration-500 ${bullet5InView ? 'fade-in opacity-100' : 'opacity-0'}`}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-black text-lg mb-8">
                in general like presenting and sharing 🤓
              </h3>
              <img
                src="/Presenting.png"
                alt="Presenting and sharing"
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeTimeline;
