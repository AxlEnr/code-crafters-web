import type { Route } from "./+types/home";
import { Index } from "../index";
import { SEO_CONFIG } from "../utils/seo";

const description =
  "Creamos páginas web, apps móviles, sistemas personalizados y automatizaciones para negocios que quieren crecer con tecnología.";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code Crafters - Desarrollo Web & Apps Multiplataforma" },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "desarrollo web, aplicaciones móviles, software a medida, automatización, sistemas de gestión, landing pages, React, Flutter",
    },
    { name: "author", content: "Code Crafters" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "theme-color", content: "#020617" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@code_craft_dev" },
    { name: "twitter:creator", content: "@code_craft_dev" },
    { name: "twitter:image", content: `${SEO_CONFIG.siteUrl}/og_image.png` },
    {
      name: "twitter:image:alt",
      content: "Code Crafters - Desarrollo Web & Apps",
    },
    {
      name: "twitter:title",
      content: "Code Crafters - Desarrollo Web & Apps Multiplataforma",
    },
    { name: "twitter:description", content: description },
    {
      property: "og:title",
      content: "Code Crafters - Desarrollo Web & Apps Multiplataforma",
    },
    { property: "og:description", content: description },
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
