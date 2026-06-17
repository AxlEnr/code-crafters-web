import { motion } from "motion/react";
import ProfileCard from "./ProfileCard";
import SectionHeader from "./section_header";

const teamMembers = [
  {
    name: "Arturo Martínez Delgado",
    title: "Fundador Full Stack - Ingeniero en Sistemas - Pemex",
    handle: "arturodev",
    avatarUrl: "/assets/avataraa.png",
    portfolioUrl: "https://portfolioarturomd7.netlify.app/",
    gradient: "linear-gradient(145deg,#082f49cc 0%,#22d3ee44 55%,#7dd3fc33 100%)",
  },
  {
    name: "Axel Enrique García Vázquez",
    title: "Fundador Full Stack - Ingeniero en Sistemas - Legux Systems",
    handle: "axelcodes",
    avatarUrl: "/assets/axelfoto.png",
    portfolioUrl: "https://portfolio-axel-garcia.vercel.app/",
    gradient: "linear-gradient(145deg,#0f172acc 0%,#06b6d444 55%,#38bdf833 100%)",
  },
];

export default function Team() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Nuestro equipo"
            title="Fundadores full stack construyendo producto, software y estrategia."
            description="Somos ingenieros en sistemas con experiencia práctica en desarrollo web, aplicaciones, automatización y soluciones digitales para negocios reales."
          />
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:mt-12 sm:gap-10 md:grid-cols-2 md:items-start">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="flex justify-center"
            >
              <ProfileCard
                className="team-profile-card"
                name={member.name}
                title={member.title}
                handle={member.handle}
                status="Fundador"
                contactText="Ver portafolio"
                avatarUrl={member.avatarUrl}
                miniAvatarUrl={member.avatarUrl}
                showUserInfo
                enableTilt
                enableMobileTilt={false}
                onContactClick={() => window.open(member.portfolioUrl, "_blank", "noopener,noreferrer")}
                behindGlowColor="rgba(0, 229, 255, 0.08)"
                iconUrl="/assets/Recurso 7LOGO.png"
                behindGlowEnabled
                innerGradient={member.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
