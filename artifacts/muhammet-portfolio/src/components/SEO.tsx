import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'profile';
  ogImage?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_KEYWORDS = [
  'Muhammet Atmaca',
  'Muhammet Atmaca Portfolio',
  'Bayburt Yazılım',
  'Bayburt Bilgisayar',
  'Bayburt Yazılımcı',
  'Bayburt Mobil Uygulama',
  'Bayburt Web Tasarım',
  'Bayburt Bilgisayar Mühendisi',
  'Bayburt Yazılım Şirketi',
  'Mobile Developer',
  'Mobil Yazılım Mühendisi',
  'React Native Geliştirici',
  'Flutter Uzmanı',
  'Samsun Yazılım Mühendisi',
  'Full Stack Developer',
  'ASP.NET Core',
  'Node.js',
  'TypeScript',
  '50+ Mobil Uygulama',
  'Yazılım Mimarı',
];

const SITE_URL = 'https://muhammetatmaca.com.tr';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function SEO({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl = SITE_URL,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Primary Meta Tags
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    setMeta('meta[name="author"]', 'name', 'author', 'Muhammet Atmaca');
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. OpenGraph
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'tr_TR');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Muhammet Atmaca — Portfolio');

    // 5. Twitter Card
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 6. Canonical Link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 7. Structured Data (JSON-LD)
    const existingScript = document.getElementById('dynamic-jsonld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
}
