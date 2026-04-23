export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
  locale?: string;
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;
  twitterCreator?: string;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
  type: "website" | "article";
  siteName: string;
  locale?: string;
}

export const SEO_CONFIG = {
  siteName: "Code Crafters",
  siteUrl: "https://www.codecraftersweb.dev",
  defaultImage: "/og_image.png",
  twitterHandle: "@code_craft_dev",
  twitterCreator: "@code_craft_dev",
  githubProfiles: [
    "https://github.com/AxlEnr",
    "https://github.com/ArturoMD7",
  ],
  altLanguages: ["en", "es"],
} as const;

const DEFAULT_SEO: SEOData = {
  title: "Code Crafters - Desarrollo Web & Apps Multiplataforma",
  description:
    "Creamos aplicaciones multiplataforma, escalables y llamativas. Expertos en creación de software a la medida e implementación de IA.",
  keywords: [
    "desarrollo web",
    "aplicaciones multiplataforma",
    "IA",
    "software a la medida",
    "backend",
    "frontend",
    "desarrollo mobile",
    "apps",
    "código",
    "programación",
  ],
  image: "/og_image.png",
  url: SEO_CONFIG.siteUrl,
  type: "website",
  siteName: SEO_CONFIG.siteName,
  locale: "es_ES",
  twitterCard: "summary_large_image",
  twitterSite: SEO_CONFIG.twitterHandle,
  twitterCreator: SEO_CONFIG.twitterCreator,
};

export function getSEOData(custom?: Partial<SEOData>): SEOData {
  const keywords = custom?.keywords ?? DEFAULT_SEO.keywords;
  return {
    ...DEFAULT_SEO,
    ...custom,
    keywords,
  };
}

export function generateMetaTags(seo: SEOData) {
  const author = seo.author || SEO_CONFIG.siteName;
  const siteName = seo.siteName || SEO_CONFIG.siteName;
  const twitterCard = seo.twitterCard || "summary_large_image";

  const tags: Array<{ [key: string]: string | boolean }> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "keywords", content: seo.keywords?.join(", ") ?? "" },
    { name: "author", content: author },
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:site", content: seo.twitterSite || SEO_CONFIG.twitterHandle },
    { name: "twitter:creator", content: seo.twitterCreator || SEO_CONFIG.twitterCreator },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: seo.type || "website" },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: seo.locale ?? "es_ES" },
  ];

  if (seo.image) {
    tags.push(
      { property: "og:image", content: seo.image },
      { name: "twitter:image", content: seo.image }
    );
  }

  if (seo.url) {
    tags.push({ property: "og:url", content: seo.url });
  }

  if (seo.canonical) {
    tags.push({ rel: "canonical", href: seo.canonical });
  }

  const robots: string[] = [];
  if (seo.noIndex) robots.push("noindex");
  if (seo.noFollow) robots.push("nofollow");
  if (robots.length > 0) {
    tags.push({ name: "robots", content: robots.join(", ") });
  }

  return tags;
}

export function generateJsonLd(seo?: Partial<SEOData>): string {
  const url = seo?.url || SEO_CONFIG.siteUrl;
  const description = seo?.description || DEFAULT_SEO.description;
  const siteName = seo?.siteName || SEO_CONFIG.siteName;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: siteName,
        url: url,
        description: description,
        sameAs: [...SEO_CONFIG.githubProfiles, "https://x.com/code_craft_dev"],
        logo: {
          "@type": "ImageObject",
          url: `${url}/logo.png`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: url,
        name: siteName,
        description: description,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "es-ES",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${url}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url: url,
        name: `Inicio - ${siteName}`,
        description: description,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        primaryImageOfPage: { "@id": `${url}/og_image.png` },
        inLanguage: "es-ES",
        datePublished: "2024-01-01T00:00:00+00:00",
        dateModified: new Date().toISOString(),
      },
    ],
  };

  return JSON.stringify(jsonLd);
}