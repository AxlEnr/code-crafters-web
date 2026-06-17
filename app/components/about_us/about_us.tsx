import { motion } from "motion/react";
import { aboutPillars } from "../../data/landing";
import SectionHeader from "../section_header";
import SpotlightCard from "../SpotlightCard";

export default function AboutUsComponent() {
  return (
    <section id="about" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            align="left"
            eyebrow="Quiénes somos"
            title="Un estudio de desarrollo para negocios que quieren verse y operar mejor."
            description="En Code Crafters convertimos ideas en soluciones digitales modernas: sitios web, apps, sistemas internos y automatizaciones que combinan diseño, funcionalidad y escalabilidad."
          />
          <p className="mt-6 text-base leading-8 text-slate-300">
            Ayudamos a negocios, emprendimientos y proyectos profesionales a
            construir una presencia digital confiable, con interfaces pensadas
            para usuarios reales y una base técnica lista para crecer.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="h-full"
              >
                <SpotlightCard className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                  <div className="flex flex-col gap-4 sm:items-start lg:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
