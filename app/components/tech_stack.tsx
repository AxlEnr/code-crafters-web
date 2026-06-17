import { motion } from "motion/react";
import { technologies } from "../data/landing";
import SectionHeader from "./section_header";
import SpotlightCard from "./SpotlightCard";

export default function TechStack() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Tecnologías"
            title="Stack moderno para productos rápidos, conectados y mantenibles."
            description="Usamos herramientas probadas para crear interfaces, apps, APIs, datos y automatizaciones con buen rendimiento desde la primera versión."
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.035, duration: 0.4 }}
              >
                <SpotlightCard className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm font-bold text-slate-100 shadow-lg shadow-black/10">
                  {technology}
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
