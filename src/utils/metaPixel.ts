// Meta Pixel utility functions
declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event with Meta Pixel
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

/**
 * Track a custom event with Meta Pixel (Custom)
 */
export const trackCustomEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
};

/**
 * Track page view
 */
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track lead generation
 */
export const trackLead = (params?: Record<string, any>) => {
  trackEvent('Lead', params);
};

/**
 * Track contact/WhatsApp click
 */
export const trackContact = (params?: Record<string, any>) => {
  trackEvent('Contact', params);
};

