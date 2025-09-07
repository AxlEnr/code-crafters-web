import * as motion from "motion/react-client";
import { Users, Lightbulb, Rocket, User } from "lucide-react";
import Card from "../card";

const iconLibrary = {
  users: Users,
  lightbulb: Lightbulb,
  rocket: Rocket,
  user: User
};

const getIcon = (iconName: keyof typeof iconLibrary, className = "w-12 h-12") => {
  const IconComponent = iconLibrary[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const card_services = [
  {
    icon: 'users',
    iconColor: 'text-indigo-400',
    title: 'Equipo Humano',
    content: 'Creemos en la colaboración y el talento colectivo. Cada proyecto es impulsado por la creatividad y el compromiso de nuestro equipo.'
  },
  {
    icon: 'lightbulb',
    iconColor: 'text-yellow-400',
    title: 'Innovación',
    content: 'Nos mantenemos a la vanguardia tecnológica para diseñar soluciones creativas, seguras y escalables que generen verdadero valor.'
  },
  {
    icon: 'rocket',
    iconColor: 'text-cyan-400',
    title: 'Crecimiento',
    content: 'Nuestra meta es crecer junto a nuestros clientes, impulsando sus ideas y ayudándolos a conquistar nuevas oportunidades digitales.'
  }
];

export default function AboutUsComponent() {
  return (
    <motion.div
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
          ¿Quiénes somos?
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          En <span className="font-semibold text-cyan-400">Code Crafters</span>{" "}
          transformamos ideas en software de alto impacto. Somos un equipo
          apasionado por crear soluciones digitales que inspiran, innovan y
          hacen crecer a nuestros clientes.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Nuestra misión principal es crear soluciones eficientes para clientes,
          enfocados en el desarrollo multiplataforma y con atención a la
          necesidad de cada usuario.
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