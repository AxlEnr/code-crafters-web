import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../data/landing";
import SectionHeader from "../section_header";
import ProjectCard from "./project_card";

export default function Projects() {
  const projectItems = projects.filter(
    (project) => project.actionHref !== "#modal_portfolios"
  );
  const [activeProject, setActiveProject] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToProject = (index: number) => {
    const nextIndex = (index + projectItems.length) % projectItems.length;
    setActiveProject(nextIndex);
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const updateActiveProject = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerCenter =
      scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
    let closestIndex = activeProject;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(scrollerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeProject) {
      setActiveProject(closestIndex);
    }
  };

  return (
    <section id="projects" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            align="left"
            eyebrow="Proyectos"
            title="Trabajos que hablan por sí mismos."
            description="Explora algunos proyectos reales en una vista horizontal: sitios, apps y experiencias digitales listas para visitar."
          />
        </motion.div>

        <div
          ref={scrollerRef}
          onScroll={updateActiveProject}
          className="mt-8 flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 sm:mt-12 sm:snap-mandatory sm:gap-5 sm:pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projectItems.map((project, index) => (
            <div
              key={project.title}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="min-w-[82vw] snap-center sm:min-w-[430px] lg:min-w-[520px]"
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                image={project.image}
                alt={project.alt}
                technologies={project.technologies}
                actionHref={project.actionHref}
                isActive={activeProject === index}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-center gap-4 sm:mt-3">
          <button
            type="button"
            aria-label="Proyecto anterior"
            onClick={() => scrollToProject(activeProject - 1)}
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {projectItems.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`Ver proyecto ${index + 1}`}
                onClick={() => scrollToProject(index)}
                className={[
                  "h-2 rounded-full transition",
                  activeProject === index
                    ? "w-8 bg-white"
                    : "w-2 bg-slate-500 hover:bg-cyan-200",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Proyecto siguiente"
            onClick={() => scrollToProject(activeProject + 1)}
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-center text-xs font-semibold tracking-[0.25em] text-slate-500">
          {String(activeProject + 1).padStart(2, "0")} /{" "}
          {String(projectItems.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
