import type { Route } from "./+types/home";
import { Index } from "../index";
import { SEO_CONFIG } from "../utils/seo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code Crafters - Desarrollo Web & Apps Multiplataforma" },
    { name: "description", content: "Impulsa tu presencia digital con nuestra agencia de desarrollo de software. Creamos apps multiplataforma con IA a la medida de tu negocio. ¡Contáctanos!" },
    { name: "keywords", content: "desarrollo web, aplicaciones multiplataforma, IA, software a medida, desarrollo mobile, apps, IA, software a la medida, frontend, backend" },
    { name: "author", content: "Code Crafters" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "theme-color", content: "#000000" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@code_craft_dev" },
    { name: "twitter:creator", content: "@code_craft_dev" },
    { name: "twitter:image", content: `${SEO_CONFIG.siteUrl}/og_image.png` },
    { name: "twitter:image:alt", content: "Code Crafters - Desarrollo Web & Apps" },
    { name: "twitter:title", content: "Code Crafters - Desarrollo Web & Apps Multiplataforma" },
    { name: "twitter:description", content: "Impulsa tu presencia digital con nuestra agencia de desarrollo de software. Creamos apps multiplataforma con IA a la medida de tu negocio. ¡Contáctanos!" },
    { property: "og:title", content: "Code Crafters - Desarrollo Web & Apps Multiplataforma" },
    { property: "og:description", content: "Impulsa tu presencia digital con nuestra agencia de desarrollo de software. Creamos apps multiplataforma con IA a la medida de tu negocio. ¡Contáctanos!" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Code Crafters" },
    { property: "og:locale", content: "es_ES" },
    { property: "og:url", content: SEO_CONFIG.siteUrl },
    { property: "og:image", content: `${SEO_CONFIG.siteUrl}/og_image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Code Crafters - Desarrollo Web & Apps" },
    { property: "og:image:type", content: "image/png" },
  ];
}

export default function Home() {
  return <Index />;
}
