import React from 'react';

function Badge({ text }) {
  return (
    <span className="bg-[#5d5846] text-white px-3 py-1 rounded text-[16px] font-montserrat font-normal whitespace-nowrap">
      {text}
    </span>
  );
}

export default Badge;
