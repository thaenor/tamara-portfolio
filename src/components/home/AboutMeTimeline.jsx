import useInView from '../../hooks/useInView';

function TimelineSection({ startDate, endDate, isVisible, isFirst = false }) {
  return (
    <div className={`flex-1 flex flex-col items-center relative pb-16 ${isVisible ? '' : ''}`}>
      <div className={`text-center font-montserrat text-[24px] font-normal text-black mb-4 transition-opacity duration-500 ${isFirst ? 'pt-12' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {startDate}
      </div>
      <div className={`flex-1 w-1 bg-black transition-opacity duration-500 relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -left-2 top-0 w-5 h-5 bg-black rounded-full"></div>
        <div className="absolute -left-2 bottom-0 w-5 h-5 bg-black rounded-full"></div>
      </div>
      <div className={`text-center font-montserrat text-[24px] font-normal text-black mt-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {endDate}
      </div>
    </div>
  );
}

function AboutMeTimeline({ images }) {
  const [travelRef, travelInView] = useInView({ threshold: 0.4 });
  const [pandemicRef, pandemicInView] = useInView({ threshold: 0.4 });
  const [careerRef, careerInView] = useInView({ threshold: 0.4 });

  return (
    <div className="relative">
      {/* Timeline Rail */}
      <div className="absolute left-0 top-0 bottom-0 w-32 flex flex-col">
        <TimelineSection startDate="2014" endDate="2022" isVisible={travelInView} isFirst={true} />
        <TimelineSection startDate="2020" endDate="2022" isVisible={pandemicInView} />
        <TimelineSection startDate="2022" endDate="Today" isVisible={careerInView} />
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-[20px] px-12 pb-12 pt-7 shadow-lg opacity-100 ml-32 mr-32">
        {/* Travel Industry - Horizontal Layout */}
        <div ref={travelRef} className="mb-16 flex gap-8 items-stretch">
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

export default AboutMeTimeline;
