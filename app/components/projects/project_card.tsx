import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "../SpotlightCard";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  actionHref?: string;
  onActionClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  isActive?: boolean;
};

export default function ProjectCard({
  title,
  type,
  description,
  image,
  alt,
  technologies,
  actionHref,
  onActionClick,
  isActive = false,
}: ProjectCardProps) {
  const isExternal = Boolean(actionHref && !actionHref.startsWith("#") && !actionHref.startsWith("/"));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={[
        "h-full transition duration-500",
        isActive ? "opacity-100" : "opacity-100 sm:opacity-35 sm:hover:opacity-80",
      ].join(" ")}
    >
      <SpotlightCard className="group relative h-full min-h-[430px] rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-black/30 backdrop-blur-xl sm:min-h-[320px]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/5" />
        <div className="absolute inset-0 bg-slate-950/10" />

        <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.slice(0, 2).map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase text-cyan-100 backdrop-blur"
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            {type}
          </p>
          <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
            {description}
          </p>

          <div className="mt-6">
            <a
              href={actionHref ?? "#contact"}
              onClick={onActionClick}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:border-cyan-300/50 hover:bg-cyan-200"
            >
              Visitar sitio
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}
