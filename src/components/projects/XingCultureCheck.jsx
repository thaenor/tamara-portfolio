import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function XingCultureCheck() {
  const project = projectsData.find(p => p.slug === 'xing-culture-check');

  return <CaseStudyTemplate project={project} />;
}

export default XingCultureCheck;
