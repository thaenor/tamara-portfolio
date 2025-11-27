import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function YuuSkydive() {
  const project = projectsData.find(p => p.slug === 'yuu-skydive');

  return <CaseStudyTemplate project={project} />;
}

export default YuuSkydive;
