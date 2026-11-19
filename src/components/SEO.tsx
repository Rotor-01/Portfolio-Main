import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultTitle = 'Roshan Tom Robinson | Computer Engineering';
const defaultDescription = 'I’m Roshan Tom Robinson. I plan to study computer engineering, with a focus on embedded systems, data centers, and networking.';

export default function SEO({ title, description = defaultDescription }: { title?: string; description?: string }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = title ? `${title} | Roshan Tom Robinson` : defaultTitle;
    const url = new URL(pathname, window.location.origin).href;
    document.title = pageTitle;
    for (const [key, value] of Object.entries({
      description,
      'og:title': pageTitle,
      'og:description': description,
      'og:url': url,
      'twitter:title': pageTitle,
      'twitter:description': description,
      'twitter:url': url,
    })) {
      const meta = document.querySelector<HTMLMetaElement>(`meta[name="${key}"], meta[property="${key}"]`);
      if (meta) meta.content = value;
    }
  }, [title, description, pathname]);

  return null;
}
