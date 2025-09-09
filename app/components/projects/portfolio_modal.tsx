
import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { axel: string; arturo: string };
};

const PortfolioModal: React.FC<Props> = ({ open, onClose, links }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex min-h-full items-center justify-center p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="w-full max-w-md rounded-2xl border border-slate-700/60 bg-slate-900/90 p-6 shadow-2xl ring-1 ring-white/5"
        >
          <div className="flex items-start justify-between gap-4">
            <h2
              id="portfolio-modal-title"
              className="text-xl font-semibold text-white"
            >
              Ver portafolio
            </h2>
            <button
              aria-label="Cerrar modal"
              onClick={onClose}
              className="rounded-lg border border-slate-700/60 p-1 text-slate-300 hover:text-white hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              ✕
            </button>
          </div>

          <p className="mt-2 text-sm text-slate-300/90">
            Elige qué portafolio quieres abrir:
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <a
              href={links.axel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-cyan-400/40 bg-slate-900/50 px-4 py-3 text-center font-semibold text-white transition hover:border-cyan-400/70 hover:shadow-cyan-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              Ver portafolio de Axel
            </a>
            <a
              href={links.arturo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-cyan-400/40 bg-slate-900/50 px-4 py-3 text-center font-semibold text-white transition hover:border-cyan-400/70 hover:shadow-cyan-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              Ver portafolio de Arturo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
