import { ArrowRight, Code2, Cpu, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { heroCapabilities, heroStats, type SectionId } from "../../data/landing";
import SpotlightCard from "../SpotlightCard";

type HomeComponentProps = {
  onNavigate: (section: SectionId) => void;
};

export default function HomeComponent({ onNavigate }: HomeComponentProps) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8"
    >
      <div className="mx-auto grid min-h-[78svh] max-w-7xl items-center gap-10 sm:min-h-[88svh] sm:gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* --- IGNORE --- 
          <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg shadow-cyan-950/30">
            <Sparkles className="h-4 w-4" />
            Desarrollo web, apps y sistemas a medida
          </div>
           */}
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:mt-7 sm:text-6xl lg:text-7xl">
            Creamos software que hace que tu negocio se vea más grande.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:mt-6 sm:text-xl">
            Diseñamos páginas web, aplicaciones móviles y sistemas personalizados
            con interfaces modernas, rápidas y listas para crecer.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white"
            >
              Cotizar proyecto
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Ver proyectos
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {heroCapabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur"
              >
                {capability}
              </span>
            ))}
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 sm:mt-10">
            {heroStats.map((stat) => (
              <SpotlightCard
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur"
              >
                <strong className="block text-2xl font-black text-white">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-xs leading-5 text-slate-400">
                  {stat.label}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full max-w-xl md:block lg:max-w-none"
        >
          <div className="absolute -left-4 top-10 hidden rounded-lg border border-purple-300/20 bg-purple-300/10 px-4 py-3 text-sm font-bold text-purple-100 shadow-xl shadow-purple-950/30 backdrop-blur md:block">
            APIs + automatización
          </div>
          <div className="absolute -right-2 bottom-14 hidden rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100 shadow-xl shadow-cyan-950/30 backdrop-blur md:block">
            Dashboards listos
          </div>

          <SpotlightCard className="relative rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                Code Crafters OS
              </div>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-[0.82fr_1.18fr]">
              <div className="space-y-3">
                {["Web premium", "App móvil", "Sistema interno"].map((item, index) => (
                  <SpotlightCard
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                        {index === 0 ? (
                          <Layers3 className="h-4 w-4" />
                        ) : index === 1 ? (
                          <Cpu className="h-4 w-4" />
                        ) : (
                          <Code2 className="h-4 w-4" />
                        )}
                      </span>
                      <span className="text-sm font-bold text-white">{item}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-800">
                      <div
                        className={[
                          "h-full rounded-full bg-gradient-to-r from-cyan-300 to-purple-300",
                          index === 0 ? "w-[88%]" : index === 1 ? "w-[72%]" : "w-[80%]",
                        ].join(" ")}
                      />
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              <SpotlightCard className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Performance
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">98%</p>
                  </div>
                  <div className="rounded-lg bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-200">
                    Deploy ready
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-5 items-end gap-2">
                  {[42, 58, 74, 52, 92].map((height, index) => (
                    <div
                      key={height}
                      className="rounded-lg bg-gradient-to-t from-cyan-400/40 to-purple-300/70"
                      style={{ height: `${height + index * 2}px` }}
                    />
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {["Diseño UI", "Backend", "Automatización"].map((item) => (
                    <div key={item} className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">{item}</span>
                      <span className="text-xs font-bold text-cyan-200">Activo</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
