import { motion } from "motion/react";
import { reasons } from "../data/landing";
import SectionHeader from "./section_header";
import SpotlightCard from "./SpotlightCard";

export default function WhyChooseUs() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            align="left"
            eyebrow="Por qué elegirnos"
            title="Construimos con estética, estrategia y claridad técnica."
            description="El objetivo no es llenar tu proyecto de efectos: es lograr que tu negocio se entienda mejor, se vea más sólido y tenga herramientas digitales útiles."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="h-full"
                >
                  <SpotlightCard className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-black text-white">{reason.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
