import { useRef } from "react";
import * as motion from "motion/react-client";
import {
  PanelsTopLeft,
  LayoutPanelTop,
  TabletSmartphone,
  BrainCircuit,
  ShoppingCart,
  Cloud,
  Sparkles,
  Code2,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Páginas Web",
    description:
      "Sitios modernos, responsivos y optimizados para SEO que reflejan la identidad de tu marca con experiencia de usuario impecable.",
    featured: false,
  },
  {
    icon: LayoutPanelTop,
    title: "Aplicaciones Web",
    description:
      "Soluciones a medida con arquitecturas escalables que resuelven desafíos complejos y mejoran la eficiencia operativa.",
    featured: false,
  },
  {
    icon: TabletSmartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma de alto rendimiento para iOS y Android, con interfaces intuitivas.",
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: "Consultoría IA",
    description:
      "Integración de inteligencia artificial en tus procesos: modelos predictivos, automatización inteligente y análisis de datos.",
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas en línea completas con pasarelas de pago, gestión de inventario y experiencias de compra optimizadas.",
    featured: false,
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Infraestructura en la nube, CI/CD, monitoreo y despliegue continuo para mantener tus aplicaciones siempre disponibles.",
    featured: false,
  },
  {
    icon: Code2,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alta conversión optimizadas para campañas de marketing digital y generación de leads.",
    featured: false,
  },
  {
    icon: Bot,
    title: "Chatbots IA",
    description:
      "Asistentes virtuales inteligentes que automatizan la atención al cliente y mejoran la experiencia del usuario 24/7.",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Sistemas de Gestión",
    description:
      "Software empresarial personalizado que automatiza procesos, centraliza datos y facilita la toma de decisiones.",
    featured: false,
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  featured,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  featured: boolean;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: featured ? 0.05 * index : 0.08 * index,
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={[
        "group relative overflow-hidden rounded-2xl border transition-all duration-500",
        featured
          ? "bg-surface-2 border-border-light md:col-span-2 md:row-span-2"
          : "bg-surface-2/60 border-border hover:border-border-light",
      ].join(" ")}
    >
      {featured && (
        <>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-text-primary/[0.02] blur-3xl group-hover:bg-text-primary/[0.04] transition-colors duration-700" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-text-primary/[0.02] blur-3xl group-hover:bg-text-primary/[0.04] transition-colors duration-700" />
        </>
      )}

      <div className="relative p-6 md:p-8 h-full flex flex-col">
        <motion.div
          className={[
            "inline-flex rounded-xl border transition-all duration-500",
            featured
              ? "p-4 bg-surface-1 border-border-light mb-6"
              : "p-3 bg-surface-1 border-border mb-5 group-hover:border-border-light",
          ].join(" ")}
          animate={
            featured
              ? {
                y: [0, -6, 0],
              }
              : {}
          }
          transition={
            featured
              ? {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
              : {}
          }
        >
          <Icon
            className={[
              "transition-all duration-500",
              featured
                ? "w-7 h-7 text-text-primary"
                : "w-5 h-5 text-text-secondary group-hover:text-text-primary",
            ].join(" ")}
          />
        </motion.div>

        <h3
          className={[
            "font-semibold tracking-tight text-text-primary transition-colors duration-500",
            featured ? "text-2xl md:text-3xl mb-4" : "text-lg mb-3",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "leading-relaxed text-text-secondary flex-grow",
            featured ? "text-base" : "text-sm",
          ].join(" ")}
        >
          {description}
        </p>

        {featured && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-text-primary group-hover:gap-3 transition-all duration-300">
              Más información
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesComponent() {
  const featuredServices = services.filter((s) => s.featured);
  const regularServices = services.filter((s) => !s.featured);

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-surface-1 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-text-muted uppercase mb-4"
          >
            Servicios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary"
          >
            Soluciones digitales
            <br />
            a la medida de tu negocio.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-base leading-relaxed text-text-secondary max-w-2xl"
          >
            En{" "}
            <span className="font-semibold text-text-primary">Code Crafters</span>{" "}
            combinamos creatividad y tecnología para ofrecer servicios de
            desarrollo que transforman tu visión en productos digitales de alto
            impacto.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
          {regularServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index + featuredServices.length}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10+", label: "Proyectos" },
            { value: "1+", label: "Año de experiencia con IA" },
            { value: "100%", label: "Compromiso" },
            { value: "24/7", label: "Soporte" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary"
              >
                {stat.value}
              </motion.p>
              <p className="mt-1 text-sm text-text-muted tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
