import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/gtm';

/**
 * Hook to automatically track page views on route changes
 * Uses React Router's useLocation to detect route changes
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on initial load and route changes
    const path = location.pathname + location.search;
    const title = document.title || 'Tamara Portfolio';

    trackPageView(path, title);
  }, [location]);
};

