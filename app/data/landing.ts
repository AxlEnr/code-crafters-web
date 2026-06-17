import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Gauge,
  GitBranch,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

export type SectionId = "home" | "about" | "services" | "projects" | "contact";

export const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Quiénes somos" },
  { id: "services", label: "Servicios" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export const heroCapabilities = [
  "React",
  "Apps móviles",
  "APIs",
  "Dashboards",
  "Automatización",
  "Chatbots",
];

export const heroStats = [
  { value: "6+", label: "tipos de soluciones" },
  { value: "24/7", label: "presencia digital" },
  { value: "100%", label: "a medida" },
];

export const aboutPillars = [
  {
    icon: Users,
    title: "Equipo cercano",
    description:
      "Trabajamos con comunicación clara, decisiones bien explicadas y entregables que puedes revisar en cada etapa.",
  },
  {
    icon: BrainCircuit,
    title: "Criterio técnico",
    description:
      "Elegimos tecnologías y arquitectura pensando en rendimiento, mantenimiento y crecimiento real del producto.",
  },
  {
    icon: Rocket,
    title: "Enfoque comercial",
    description:
      "Diseñamos interfaces y flujos que ayudan a presentar mejor tu negocio, captar clientes y operar con menos fricción.",
  },
];

export const services = [
  {
    icon: Globe2,
    title: "Páginas web profesionales",
    description:
      "Sitios rápidos, responsivos y optimizados para que tu marca se vea confiable desde el primer clic.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplicaciones web",
    description:
      "Plataformas con paneles, roles, flujos y datos conectados para operar procesos reales de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description:
      "Apps intuitivas para iOS y Android, pensadas para usuarios que necesitan una experiencia clara y fluida.",
  },
  {
    icon: Palette,
    title: "Landing pages",
    description:
      "Páginas enfocadas en campañas, lanzamientos y captación de prospectos con mensajes directos y visuales premium.",
  },
  {
    icon: DatabaseZap,
    title: "Sistemas de gestión",
    description:
      "Herramientas internas para automatizar tareas, centralizar información y tomar mejores decisiones.",
  },
  {
    icon: Bot,
    title: "Chatbots y automatización",
    description:
      "Asistentes, formularios inteligentes e integraciones que reducen trabajo manual y mejoran la atención.",
  },
];

export const projects = [
  {
    title: "Flores en Hidalgo",
    type: "Web interactiva",
    description:
      "Una experiencia visual para explorar flora con propiedades destacadas en la región de Hidalgo, con navegación clara y contenido botánico atractivo.",
    image: "/assets/projects/flores.png",
    alt: "Proyecto Flores en Hidalgo",
    technologies: ["React", "Contenido visual", "Responsive"],
    actionHref: "https://plantshidalgo.netlify.app",
  },
  {
    title: "M.I.A.U",
    type: "App móvil social",
    description:
      "Red social enfocada en adopción responsable de mascotas, conectando rescatistas, albergues y familias desde una experiencia móvil.",
    image: "/assets/projects/miau.png",
    alt: "Proyecto M.I.A.U",
    technologies: ["App móvil", "Comunidad", "UX"],
    actionHref: "/descargas/miau.apk",
  },
  {
    title: "P.A.W.S",
    type: "App móvil familiar",
    description:
      "Aplicación diseñada para fortalecer la convivencia familiar mediante recuerdos, actividades y experiencias compartidas con mascotas.",
    image: "/assets/projects/paws.jpg",
    alt: "Proyecto P.A.W.S",
    technologies: ["App móvil", "Experiencia familiar", "Producto"],
    actionHref: "/descargas/paws.apk",
  },
  {
    title: "Plataforma de ciberseguridad",
    type: "Sitio informativo",
    description:
      "Plataforma educativa con consejos, recursos y guías prácticas para navegar con mayor seguridad en entornos digitales.",
    image: "/assets/projects/cibersec.png",
    alt: "Proyecto de ciberseguridad",
    technologies: ["Web", "Seguridad", "Educación"],
    actionHref: "https://cibersec-web.vercel.app/",
  },
  {
    title: "CrowPI Assistant",
    type: "Asistente educativo",
    description:
      "Asistente virtual para CrowPI que facilita la exploración del dispositivo y convierte el aprendizaje técnico en una experiencia guiada.",
    image: "/assets/projects/gama.png",
    alt: "Proyecto CrowPI Assistant",
    technologies: ["Asistente", "Educación", "Automatización"],
    actionHref: "#contact",
  },
  {
    title: "Portafolios profesionales",
    type: "Identidad digital",
    description:
      "Portafolios diseñados para presentar experiencia, proyectos y perfil profesional con una estética cuidada y fácil de explorar.",
    image: "/assets/projects/portfolio.png",
    alt: "Proyecto de portafolios",
    technologies: ["Frontend", "Marca personal", "UI"],
    actionHref: "#modal_portfolios",
  },
];

export const processSteps = [
  {
    icon: MessageCircle,
    title: "Escuchamos tu idea",
    description:
      "Aterrizamos objetivos, usuarios, alcance y prioridades para entender qué necesita lograr el producto.",
  },
  {
    icon: Sparkles,
    title: "Diseñamos la solución",
    description:
      "Definimos estructura, experiencia, tecnología y una ruta de trabajo clara antes de construir.",
  },
  {
    icon: Code2,
    title: "Desarrollamos y probamos",
    description:
      "Construimos componentes, flujos y funcionalidades, validando que todo sea rápido, claro y estable.",
  },
  {
    icon: Gauge,
    title: "Publicamos y damos soporte",
    description:
      "Llevamos el proyecto a producción y acompañamos mejoras, ajustes y nuevas necesidades.",
  },
];

export const technologies = [
  "React",
  "Flutter",
  "Firebase",
  "Node.js",
  "APIs",
  "SQL",
  "Python",
  "Power BI",
  "GitHub",
  "Tailwind CSS",
];

export const reasons = [
  {
    icon: MonitorSmartphone,
    title: "Diseño moderno y profesional",
    description:
      "Interfaces que elevan la percepción de tu marca y se adaptan a móvil, tablet y escritorio.",
  },
  {
    icon: DatabaseZap,
    title: "Desarrollo a medida",
    description:
      "Creamos lo que tu operación necesita, sin obligarte a encajar en soluciones genéricas.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación clara",
    description:
      "Te explicamos avances, decisiones y próximos pasos con lenguaje directo y entendible.",
  },
  {
    icon: GitBranch,
    title: "Soluciones escalables",
    description:
      "Construimos bases preparadas para crecer, integrar nuevas funciones y mantenerse en el tiempo.",
  },
  {
    icon: CheckCircle2,
    title: "Resultados reales",
    description:
      "Priorizamos velocidad, conversión, administración y utilidad para el negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Usuarios reales primero",
    description:
      "Cada flujo se piensa para personas que necesitan entender, confiar y actuar sin fricción.",
  },
];

export const contactInfo = {
  email: "codecrafters.contact.dev@gmail.com",
  phones: ["+52 775 758 0699", "+52 771 349 5009"],
  location: "Tulancingo, Hidalgo, México",
  whatsappHref:
    "https://wa.me/527757580699?text=Hola%20Code%20Crafters%2C%20quiero%20cotizar%20un%20proyecto.",
  social: {
    github: "https://github.com/AxlEnr",
    twitter: "https://x.com/code_craft_dev",
  },
};
