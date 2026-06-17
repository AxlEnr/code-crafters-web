import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { generateJsonLd, SEO_CONFIG } from "./utils/seo";

const description =
  "Creamos páginas web, apps móviles, sistemas personalizados y automatizaciones para negocios que quieren crecer con tecnología.";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico?v=2", type: "image/ico" },
  { rel: "apple-touch-icon", href: "/logo_mod.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
  { rel: "canonical", href: SEO_CONFIG.siteUrl },
  { rel: "alternate", hrefLang: "en", href: `${SEO_CONFIG.siteUrl}/en` },
  { rel: "alternate", hrefLang: "es", href: SEO_CONFIG.siteUrl },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "image_src", href: `${SEO_CONFIG.siteUrl}/og_image.png` },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code Crafters - Desarrollo Web & Apps Multiplataforma" },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "desarrollo web, aplicaciones móviles, software a medida, desarrollo mobile, automatización, sistemas personalizados, frontend, backend",
    },
    { name: "author", content: "Code Crafters" },
    {
      name: "google-site-verification",
      content: "j4AzCEHmhKRKIiGYHiJXuQpTPEuRS5iakF3XVHDeiDw",
    },
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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-6 pt-24">
      <h1 className="text-3xl font-black">{message}</h1>
      <p className="mt-3 text-slate-300">{details}</p>
      {stack && (
        <pre className="mt-6 w-full overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
