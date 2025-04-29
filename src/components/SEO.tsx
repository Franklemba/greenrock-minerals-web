
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Greenrock Minerals Limited | Mining & Industrial Equipment Supplier",
  description = "Trusted supplier of mining, industrial, and construction equipment across Zambia and the Democratic Republic of Congo.",
  keywords = "mining equipment, industrial pumps, construction machinery, hydraulic systems",
  image = "/lovable-uploads/logo00.png",
  url = "https://greenrockmineralsltd.com",
  type = "website"
}: SEOProps) {
  
  const fullTitle = title.includes("Greenrock") ? title : `${title} | Greenrock Minerals Limited`;
  
  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
