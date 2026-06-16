import * as motion from "motion/react-client";
import { Users, Lightbulb, Rocket, Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Equipo Humano",
    description:
      "Creemos en la colaboración y el talento colectivo. Cada proyecto es impulsado por la creatividad y el compromiso de nuestro equipo multidisciplinario.",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Nos mantenemos a la vanguardia tecnológica para diseñar soluciones creativas, seguras y escalables que generen verdadero valor a largo plazo.",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: Rocket,
    title: "Crecimiento",
    description:
      "Nuestra meta es crecer junto a nuestros clientes, impulsando sus ideas y ayudándolos a conquistar nuevas oportunidades en el mundo digital.",
    accent: "from-emerald-500/10 to-transparent",
  },
];

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description:
      "Cada línea de código está orientada a generar un impacto medible en tu negocio.",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    description:
      "Comunicación abierta y honesta durante todo el ciclo de desarrollo del proyecto.",
  },
  {
    icon: Heart,
    title: "Pasión por la calidad",
    description:
      "Nos obsesiona entregar productos que superen las expectativas de nuestros clientes.",
  },
];

const team = [
  {
    initials: "AE",
    name: "Axel García Vázquez",
    role: "Creador & Full-Stack Developer",
    github: "https://github.com/AxlEnr",
  },
  {
    initials: "AM",
    name: "Arturo Martínez",
    role: "Creador & Full-Stack Developer",
    github: "https://github.com/ArturoMD7",
  },
];

export default function AboutUsComponent() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-surface-0 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
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
            Quiénes somos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary"
          >
            Transformamos ideas
            <br />
            en software de alto impacto.
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
            somos un equipo apasionado por crear soluciones digitales que
            transforman negocios. Combinamos experiencia técnica con visión
            estratégica para desarrollar software multiplataforma que marca la
            diferencia.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 * index,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl bg-surface-2 border border-border hover:border-border-light transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-3 rounded-xl bg-surface-1 border border-border text-text-secondary group-hover:text-text-primary group-hover:border-border-light transition-all duration-500"
                >
                  <pillar.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-text-primary">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-sm font-medium tracking-widest text-text-muted uppercase mb-10 text-center">
            Nuestros valores
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * index,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-surface-2 border border-border text-center group hover:border-border-light transition-all duration-500"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-surface-1 text-text-muted group-hover:text-text-primary transition-colors duration-500">
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-text-primary">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-sm font-medium tracking-widest text-text-muted uppercase mb-10 text-center">
            Nuestro equipo
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <motion.a
                key={index}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-surface-2 border border-border hover:border-border-light transition-all duration-500 w-56"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-full bg-surface-3 border-2 border-border group-hover:border-border-light flex items-center justify-center text-xl font-bold text-text-secondary group-hover:text-text-primary transition-all duration-500"
                >
                  {member.initials}
                </motion.div>
                <h4 className="mt-4 text-base font-semibold text-text-primary">
                  {member.name}
                </h4>
                <p className="mt-1 text-xs text-text-muted text-center leading-relaxed">
                  {member.role}
                </p>
                <span className="mt-3 text-xs text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                  GitHub →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
