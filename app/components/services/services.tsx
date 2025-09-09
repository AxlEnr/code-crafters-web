import * as motion from "motion/react-client";
import { Users, Lightbulb, Rocket, User, PanelsTopLeft, LayoutPanelTop, TabletSmartphone } from "lucide-react";
import Card from "../card";

const iconLibrary = {
  pages: PanelsTopLeft,
  appsweb: LayoutPanelTop,
  mobile: TabletSmartphone
};

const getIcon = (iconName: keyof typeof iconLibrary, className = "w-12 h-12") => {
  const IconComponent = iconLibrary[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const card_services = [
  {
    icon: 'pages',
    iconColor: 'text-indigo-400',
    title: 'Páginas Web',
    content: 'Desarrollamos sitios web modernos, responsivos y optimizados para SEO que reflejan la identidad de tu marca y ofrecen una experiencia de usuario excepcional.'
  },
  {
    icon: 'appsweb',
    iconColor: 'text-yellow-400',
    title: 'Aplicaciones Web',
    content: 'Diseñamos soluciones innovadoras que combinan creatividad y tecnología para resolver desafíos únicos y mejorar la eficiencia operativa.'
  },
  {
    icon: 'mobile',
    iconColor: 'text-cyan-400',
    title: 'Aplicaciones Móviles',
    content: 'Te ayudamos a llevar tus ideas al siguiente nivel con aplicaciones móviles intuitivas y de alto rendimiento para iOS y Android.'
  },
  {
    icon: 'pages',
    iconColor: 'text-indigo-400',
    title: 'Landing Pages',
    content: 'Creamos páginas de aterrizaje efectivas y atractivas que convierten visitantes en clientes potenciales, optimizadas para campañas de marketing digital.'
  },
  {
    icon: 'appsweb',
    iconColor: 'Sistemas de Gestión',
    title: 'Sistemas de Gestión',
    content: 'Mejora la eficiencia de tu negocio con sistemas de gestión personalizados que automatizan procesos y facilitan la toma de decisiones.'
  },
  {
    icon: 'mobile',
    iconColor: 'text-cyan-400',
    title: 'Chatbots y Asistentes Virtuales',
    content: 'Optimiza la atención al cliente y mejora la experiencia del usuario con chatbots inteligentes y asistentes virtuales personalizados.'
  }
];

export default function ServicesComponent() {
  return (
    <motion.div
    id="services"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Nuestros Servicios
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-cyan-400">Code Crafters</span>{" "}
          Ofrece una gama completa de servicios de desarrollo de software
          personalizados, diseñados para transformar ideas en soluciones digitales
          innovadoras.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Podemos ayudarte a imoulsar tu negocio con presencia digital y
          soluciones tecnológicas a medida.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid gap-10 md:grid-cols-3">
          {card_services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                title={service.title}
                content={service.content}
                icon={getIcon(service.icon as keyof typeof iconLibrary, `w-12 h-12 ${service.iconColor}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}