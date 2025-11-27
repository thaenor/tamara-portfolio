import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

function ProjectCard({ imageSrc, title, year, tags = [], slug }) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="flex flex-col items-center group cursor-pointer no-underline"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="text-center mb-6">
        <h3 className="font-montserrat font-bold text-[20px] text-black mb-2 group-hover:underline transition">
          {title}
        </h3>
        <p className="text-black text-[16px] font-montserrat">- {year} -</p>
      </div>
      <div className="w-[271px] h-[274px] rounded-full bg-white border-4 border-[#cabc84] shadow-lg overflow-hidden mb-6 group-hover:border-[#5d5846] transition">
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
    </Link>
  );
}

export default ProjectCard;
