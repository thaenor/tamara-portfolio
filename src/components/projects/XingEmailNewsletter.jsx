import CaseStudyTemplate from './CaseStudyTemplate';
import { projectsData } from '../../data/projects';

function XingEmailNewsletter() {
  const project = projectsData.find(p => p.slug === 'xing-email-newsletter');

  return <CaseStudyTemplate project={project} />;
}

export default XingEmailNewsletter;
