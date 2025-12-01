/**
 * Google Tag Manager (GTM) tracking utility functions
 * Pushes events to the GTM dataLayer for analytics tracking
 */

/**
 * Ensure dataLayer exists
 */
const ensureDataLayer = () => {
  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
  }
};

/**
 * Generic function to push events to GTM dataLayer
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Additional event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;

  ensureDataLayer();

  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

/**
 * Track page views
 * @param {string} path - Page path (e.g., '/projects/pairup-events')
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
  });
};

/**
 * Track project card clicks
 * @param {string} projectSlug - Project slug identifier
 * @param {string} projectTitle - Project title
 */
export const trackProjectClick = (projectSlug, projectTitle) => {
  trackEvent('project_click', {
    project_slug: projectSlug,
    project_title: projectTitle,
  });
};

/**
 * Track navigation clicks
 * @param {string} navItem - Navigation item clicked (e.g., 'home', 'projects', 'about')
 * @param {string} navType - Type of navigation ('main' or 'dropdown')
 */
export const trackNavigationClick = (navItem, navType = 'main') => {
  trackEvent('nav_click', {
    nav_item: navItem,
    nav_type: navType,
  });
};

/**
 * Track external link clicks
 * @param {string} url - External URL
 * @param {string} linkText - Link text or description
 */
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

