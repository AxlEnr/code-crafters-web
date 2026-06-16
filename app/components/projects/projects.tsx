import React, { useState, useRef, useEffect, useCallback } from "react";
import PortfolioModal from "./portfolio_modal";
import * as motion from "motion/react-client";

const projects = [
  {
    title: "Flores en Hidalgo",
    content:
      "Recorrido visual interactivo por la flora con propiedades maravillosas de la región de Hidalgo.",
    src: "/assets/projects/flores.png",
    alt: "Flores en Hidalgo",
    actionButton: "Explorar sitio",
    actionHref: "https://plantshidalgo.netlify.app",
    tags: ["Web", "Interactivo"],
  },
  {
    title: "M.I.A.U",
    content:
      "Red social para búsqueda y adopción responsable de mascotas. Conecta rescatistas y familias.",
    src: "/assets/projects/miau.png",
    alt: "M.I.A.U",
    actionButton: "Descargar APK",
    actionHref: "/descargas/miau.apk",
    tags: ["Móvil", "Social"],
  },
  {
    title: "P.A.W.S",
    content:
      "App móvil para fortalecer la convivencia familiar mediante recuerdos con tus mascotas.",
    src: "/assets/projects/paws.jpg",
    alt: "P.A.W.S",
    actionButton: "Descargar APK",
    actionHref: "/descargas/paws.apk",
    tags: ["Móvil", "Familia"],
  },
  {
    title: "Ciberseguridad",
    content:
      "Plataforma informativa con consejos prácticos y recursos para protegerse en el mundo digital.",
    src: "/assets/projects/cibersec.png",
    alt: "Ciberseguridad",
    actionButton: "Visitar sitio",
    actionHref: "https://cibersec-web.vercel.app/",
    tags: ["Web", "Educación"],
  },
  {
    title: "CrowPI Assistant",
    content:
      "Asistente virtual educativo para CrowPI que potencia el aprendizaje interactivo con el dispositivo.",
    src: "/assets/projects/gama.png",
    alt: "CrowPI Assistant",
    tags: ["IA", "Educación"],
  },
  {
    title: "Portafolios",
    content:
      "Muestra de portafolios digitales que reflejan creatividad, experiencia y estilo personal.",
    src: "/assets/projects/portfolio.png",
    alt: "Portafolios",
    actionButton: "Explorar portafolios",
    isPortfolio: true,
    tags: ["Web", "Diseño"],
  },
];

const GAP = 24;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSlides = projects.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const first = trackRef.current.children[0] as HTMLElement | undefined;
        if (first) {
          setSlideWidth(first.offsetWidth);
        }
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, next]);

  const translateX = slideWidth > 0 ? -(current * (slideWidth + GAP)) : 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > 5 && dx > dy) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isSwiping.current = false;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isSwiping.current) return;
    const dx = e.clientX - touchStartX.current;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    const dx = Math.abs(e.clientX - touchStartX.current);
    if (dx > 5) isSwiping.current = true;
  };

  return (
    <>
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-surface-0 py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest text-text-muted uppercase mb-4"
            >
              Proyectos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary"
            >
              Trabajos que hablan
              <br />
              por sí mismos.
            </motion.h2>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: translateX }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {projects.map((p, i) => {
                const isActive = i === current;
                const distance = Math.abs(i - current);
                const opacity = distance <= 1 ? 1 : 0.3;

                return (
                  <motion.div
                    key={i}
                    className="relative flex-shrink-0 w-[85vw] md:w-[420px] lg:w-[480px]"
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity,
                      filter: isActive
                        ? "brightness(1)"
                        : "brightness(0.6)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div
                      className={[
                        "relative overflow-hidden rounded-2xl bg-surface-2 border transition-all duration-500",
                        isActive
                          ? "border-border-light shadow-2xl shadow-black/40"
                          : "border-border",
                      ].join(" ")}
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={p.src}
                          alt={p.alt}
                          loading="lazy"
                          draggable={false}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out"
                          style={{
                            transform: isActive
                              ? "scale(1)"
                              : "scale(1.08)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/20 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {p.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-surface-1/80 backdrop-blur-sm border border-border text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
                          {p.content}
                        </p>

                        {p.actionButton && (
                          <div className="mt-4">
                            {p.isPortfolio ? (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setShowPortfolioModal(true);
                                }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary text-surface-0 text-sm font-medium tracking-wide hover:bg-text-primary/90 transition-all duration-300"
                              >
                                {p.actionButton}
                                <span>→</span>
                              </button>
                            ) : p.actionHref ? (
                              <a
                                href={p.actionHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary text-surface-0 text-sm font-medium tracking-wide hover:bg-text-primary/90 transition-all duration-300"
                              >
                                {p.actionButton}
                                <span>→</span>
                              </a>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-300"
              aria-label="Anterior"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative p-1"
                  aria-label={`Ir al proyecto ${i + 1}`}
                >
                  <span
                    className={[
                      "block rounded-full transition-all duration-500",
                      i === current
                        ? "w-8 h-1.5 bg-text-primary"
                        : "w-1.5 h-1.5 bg-text-muted hover:bg-text-secondary",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-300"
              aria-label="Siguiente"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-xs text-text-muted font-mono tracking-widest">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </div>
      </motion.div>

      <PortfolioModal
        open={showPortfolioModal}
        onClose={() => setShowPortfolioModal(false)}
        links={{
          axel: "https://portfolio-axel-garcia.vercel.app/",
          arturo: "https://portfolioarturomd7.netlify.app/",
        }}
      />
    </>
  );
}
