import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function Freely() {
  const project = projectsData.find(p => p.slug === 'freely');

  return <CaseStudyTemplate project={project} />;
}

export default Freely;
