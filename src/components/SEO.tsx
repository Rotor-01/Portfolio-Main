import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO = ({
  title,
  description = 'I’m Roshan Tom Robinson. I plan to study computer engineering, with a focus on embedded systems, data centers, and networking.',
  keywords = 'Roshan Tom Robinson, computer engineering, embedded systems, data centers, networking, firmware, Linux',
  ogImage = '/images/og-image.jpg',
  ogUrl = 'https://roshan-portfolio.vercel.app',
}: SEOProps) => {
  const siteTitle = title ? `${title} | Roshan Tom Robinson` : 'Roshan Tom Robinson | Computer Engineering';

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEO;
