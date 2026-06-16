# Code Crafters

Sitio web oficial de **Code Crafters**, agencia de desarrollo de software especializada en aplicaciones multiplataforma, software a la medida e implementación de IA.

## Tech Stack

- **Framework:** React Router v7 (SSR)
- **Librería UI:** React 19 + TypeScript
- **Estilos:** TailwindCSS v4
- **Build:** Vite
- **3D/WebGL:** Three.js, ogl, postprocessing
- **Animaciones:** Motion
- **Íconos:** Lucide React, React Icons
- **Utilidades:** mathjs

## Estructura del proyecto

```
app/
├── components/
│   ├── about_us/       # Sección "Sobre nosotros"
│   ├── contact/        # Sección de contacto
│   ├── home/           # Hero y footer
│   ├── navbar.tsx      # Barra de navegación
│   ├── pixel/          # Componentes 3D/WebGL
│   ├── projects/       # Portafolio de proyectos
│   └── services/       # Servicios ofrecidos
├── routes/
│   └── home.tsx        # Ruta principal (index)
├── utils/
│   └── seo.ts          # Configuración SEO y metadatos
├── app.css             # Estilos globales (Tailwind)
├── index.tsx           # Layout principal (SPA con secciones)
├── root.tsx            # Documento raíz (HTML, metas, error boundary)
└── routes.ts           # Configuración de rutas
public/
├── assets/             # Imágenes y recursos estáticos
├── logo_mod.png        # Logo
├── og_image.png        # Imagen Open Graph
├── robots.txt          # Reglas de rastreo
├── site.webmanifest    # PWA manifest
└── sitemap.xml         # Sitemap
```

## Empezando

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

### Typecheck

```bash
npm run typecheck
```

### Build de producción

```bash
npm run build
```

El output se genera en `build/`:
- `build/client/` — Assets estáticos
- `build/server/` — Código del servidor

### Producción (local)

```bash
npm run start
```

## Docker

```bash
docker build -t code-crafters-web .
docker run -p 3000:3000 code-crafters-web
```

## Despliegue

La imagen Docker puede desplegarse en cualquier plataforma que soporte contenedores: AWS ECS, Google Cloud Run, Azure Container Apps, DigitalOcean App Platform, Fly.io, Railway, etc.

Para despliegue manual, asegúrate de que el servidor ejecute `npm run start` apuntando al output de `npm run build`.

## SEO

El sitio incluye:
- Open Graph y Twitter Cards
- JSON-LD structured data (Organization, WebSite, WebPage)
- Sitemap XML
- Google Search Console verification
- hreflang tags (es, en)
- Canonical URLs

Configuración editable en `app/utils/seo.ts`.
