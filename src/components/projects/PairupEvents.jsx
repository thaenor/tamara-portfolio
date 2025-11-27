import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function PairupEvents() {
  const project = projectsData.find(p => p.slug === 'pairup-events');

  return <CaseStudyTemplate project={project} />;
}

export default PairupEvents;
