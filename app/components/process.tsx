import { motion } from "motion/react";
import { processSteps } from "../data/landing";
import SectionHeader from "./section_header";
import SpotlightCard from "./SpotlightCard";

export default function Process() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Así trabajamos"
          title="Un proceso claro para pasar de idea a producto publicado."
          description="Cada etapa reduce incertidumbre: entendemos el problema, diseñamos una solución viable, construimos con cuidado y dejamos el proyecto listo para crecer."
        />

        <div className="relative mt-8 grid gap-4 sm:mt-12 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent lg:block" />
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="relative"
              >
                <SpotlightCard className="h-full rounded-lg border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-6 block text-xs font-bold text-cyan-300">
                    Paso {index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </SpotlightCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
