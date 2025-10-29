export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  if (typeof w.gtag === 'function') {
    w.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }
};

export const event = ({ action, category, label, value }: EventParams) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  if (typeof w.gtag === 'function') {
    w.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

const analytics = { GA_MEASUREMENT_ID, pageview, event };
export default analytics;
