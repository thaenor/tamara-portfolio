import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function XingPrivateProfile() {
  const project = projectsData.find(p => p.slug === 'xing-private-profile');

  return <CaseStudyTemplate project={project} />;
}

export default XingPrivateProfile;
