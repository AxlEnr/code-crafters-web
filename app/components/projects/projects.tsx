import React, { useState, useMemo } from "react";
import ProjectCard from "./project_card";
import PortfolioModal from "./portfolio_modal";
import { motion, px } from "framer-motion";

export default function Projects() {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);

  const projects_obj = useMemo(
    () => [
      {
        title: "Flores en Hidalgo",
        content:
          "Un recorrido visual por la flora con propiedades maravillosas ubicadas en la región de Hidalgo. Una web interactiva que muestra la riqueza natural del estado y su diversidad botánica.",
        src: "/assets/projects/flores.png",
        alt: "Imagen de la web",
        actionButton: "Explorar sitio",
        actionHref: "https://plantshidalgo.netlify.app",
      },
      {
        title: "M.I.A.U",
        content:
          "Red social enfocada en la búsqueda y adopción responsable de mascotas. Conecta a rescatistas, albergues y personas que buscan un nuevo integrante para su familia.",
        src: "/assets/projects/miau.png",
        alt: "Imagen de la app",
        actionButton: "Descargar APK",
        actionHref: "/descargas/miau.apk",
      },
      {
        title: "P.A.W.S",
        content:
          "Aplicación móvil diseñada para fortalecer la convivencia familiar mediante recuerdos y experiencias compartidas con las mascotas del hogar.",
        src: "/assets/projects/paws.jpg",
        alt: "Imagen de la app",
        actionButton: "Descargar APK",
        actionHref: "/descargas/paws.apk",
      },
      {
        title: "Sitio web de ciberseguridad",
        content:
          "Una plataforma informativa que ofrece consejos prácticos y recursos para aprender a protegerse en el mundo digital y navegar con mayor seguridad.",
        src: "/assets/projects/cibersec.png",
        alt: "Imagen de la web",
        actionButton: "Visitar sitio",
        actionHref: "https://cibersec-web.vercel.app/",
      },
      {
        title: "CrowPI Assistant",
        content:
          "Asistente virtual desarrollado para la CrowPI. Un proyecto educativo que facilita la exploración de este dispositivo y potencia el aprendizaje interactivo.",
        src: "/assets/projects/gama.png",
        alt: "Imagen del proyecto",
      },
      {
        title: "Portafolios",
        content:
          "Muestra de portafolios digitales que reflejan creatividad, experiencia y estilo personal. Una ventana a distintos proyectos y enfoques de diseño.",
        src: "/assets/projects/portfolio.png",
        alt: "Imagen de la web",
        actionButton: "Explorar portafolios",
        actionHref: "#modal_portfolios", 
      },
    ],
    []
  );

  return (
    <>
      <motion.div 
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Nuestros Proyectos
          </h2>
          <div className="w-24 h-1.5 mb-5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {projects_obj.map((p, i) => {
            const isPortfolioCard = p.title === "Portafolios";
            return (
              <ProjectCard
                key={i}
                title={p.title}
                content={p.content}
                image={{ src: p.src, alt: p.alt ?? "Imagen del proyecto", width: 300 }}
                actionButton={p.actionButton}
                actionHref={p.actionHref}
                onActionClick={
                  isPortfolioCard
                    ? (e) => {
                        e.preventDefault(); 
                        setShowPortfolioModal(true);
                      }
                    : undefined
                }
              />
            );
          })}
        </div>
      </motion.div>

      <PortfolioModal
        open={showPortfolioModal}
        onClose={() => setShowPortfolioModal(false)}
        links={{
          axel: "https://axlenr.github.io/portfolioaxel.github.io/",
          arturo: "https://portfolioarturomd7.netlify.app/",
        }}
      />
    </>
  );
}
