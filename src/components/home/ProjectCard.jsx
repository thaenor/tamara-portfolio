import { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

function ProjectCard({ imageSrc, backImage, title, year, tags = [], slug }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center group cursor-pointer no-underline" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Link
        to={`/projects/${slug}`}
        className="text-center mb-6 hover:underline transition no-underline"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h3 className="font-montserrat font-bold text-[20px] text-black mb-2">
          {title}
        </h3>
        <p className="text-black text-[16px] font-montserrat">- {year} -</p>
      </Link>

      {/* 3D Flip Container */}
      <div
        className="w-[271px] h-[274px] relative mb-6 cursor-pointer"
        style={{
          perspective: '1000px',
          WebkitPerspective: '1000px',
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Flip Wrapper */}
        <div
          className="w-full h-full relative transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            WebkitTransform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side */}
          <div
            className="w-[271px] h-[274px] rounded-full bg-white border-4 border-[#cabc84] shadow-lg overflow-hidden absolute inset-0 group-hover:border-[#5d5846] transition"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover scale-[1.05]"
            />
          </div>

          {/* Back Side */}
          <div
            className="w-[271px] h-[274px] rounded-full bg-white border-4 border-[#cabc84] shadow-lg overflow-hidden absolute inset-0 group-hover:border-[#5d5846] transition"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              WebkitTransform: 'rotateY(180deg)',
            }}
          >
            <img
              src={backImage || imageSrc}
              alt={`${title} - Back`}
              className="w-full h-full object-cover scale-[1.05]"
            />
          </div>
        </div>
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

export default ProjectCard;
