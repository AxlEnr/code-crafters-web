# AGENTS.md

## Comandos

```bash
npm run dev         # Servidor de desarrollo con HMR en localhost:5173
npm run build       # Build de producción (client + server)
npm run start       # Servir build de producción
npm run typecheck   # Typecheck con react-router typegen + tsc
```

## Stack

- **Runtime:** React Router v7 (SSR habilitado, `ssr: true` en `react-router.config.ts`)
- **UI:** React 19 con JSX automático (`react-jsx`)
- **Estilos:** TailwindCSS v4 (vía plugin Vite, no PostCSS). La configuración del tema está en `app/app.css` con `@theme`. No existe `tailwind.config.ts`.
- **Build:** Vite 6 con plugins: `@tailwindcss/vite`, `@react-router/dev/vite`, `vite-tsconfig-paths`
- **TypeScript:** strict mode, `verbatimModuleSyntax`, path alias `~/*` → `app/*`

## Estructura

```
app/
├── components/       # Componentes organizados por sección del sitio
│   ├── about_us/     # Sección "Sobre nosotros"
│   ├── contact/      # Formulario de contacto
│   ├── home/         # Hero (home.tsx) y footer (footer.tsx)
│   ├── pixel/        # Componentes con WebGL/Three.js
│   ├── projects/     # Portafolio (projects.tsx, project_card.tsx, portfolio_modal.tsx)
│   └── services/     # Servicios ofrecidos
├── routes/           # Módulos de ruta (home.tsx es la única ruta, index)
├── utils/seo.ts      # Configuración SEO, metadatos, JSON-LD
├── app.css           # Estilos globales con @import "tailwindcss" y @theme
├── index.tsx         # Layout SPA: navbar + secciones (home, about, services, projects, contact)
├── root.tsx          # Documento raíz: <html>, metadatos, error boundary, layout
└── routes.ts         # Config de rutas: index → routes/home.tsx
```

La app es un SPA: `app/index.tsx` renderiza todas las secciones en una sola página con navegación por scroll. La ruta `routes/home.tsx` simplemente devuelve `<Index />`.

## Convenciones

- **Idioma:** El sitio está en español (lang="es", locale es_ES). Todo el contenido nuevo debe estar en español.
- **Imports:** Usar el alias `~/` para imports desde `app/`. Ej: `import { SEO_CONFIG } from "~/utils/seo"`.
- **Componentes:** Cada sección del sitio tiene su propia carpeta bajo `app/components/`. El componente principal de cada sección se nombra igual que la carpeta (ej: `about_us/about_us.tsx`).
- **Navegación:** Las secciones se identifican por `id` HTML (`home`, `about`, `services`, `projects`, `contact`). La navbar usa `scrollIntoView({ behavior: "smooth" })`.
- **Iconos:** Usar `lucide-react` como primera opción, `react-icons` como alternativa.
- **Estilos:** TailwindCSS con clases utilitarias. No crear archivos CSS separados; usar `app/app.css` solo para configuraciones globales.
- **Sin comentarios:** No añadir comentarios en el código a menos que sea estrictamente necesario.
- **Tipos:** TypeScript strict. Evitar `any`. Usar tipos explícitos o inferencia.

## SEO

La configuración SEO centralizada está en `app/utils/seo.ts`:
- `SEO_CONFIG`: constantes del sitio (siteUrl, twitterHandle, etc.)
- `getSEOData()`: genera datos SEO con overrides
- `generateMetaTags()`: produce array de tags para `<Meta />`
- `generateJsonLd()`: produce JSON-LD para structured data

Los metadatos se definen en dos niveles:
1. `app/root.tsx` — metadatos globales (para todas las rutas)
2. `app/routes/home.tsx` — metadatos específicos de la página principal

## Cómo añadir una nueva sección

1. Crear carpeta `app/components/<nombre>/<nombre>.tsx`
2. Importar en `app/index.tsx`
3. Añadir `<section id="<nombre>">` en `app/index.tsx`
4. Agregar la entrada correspondiente en el navbar

## Docker

El Dockerfile usa multi-stage build:
1. `development-dependencies-env`: instala todas las dependencias
2. `production-dependencies-env`: solo dependencias de producción
3. `build-env`: build de la app
4. Imagen final: solo archivos necesarios para producción
