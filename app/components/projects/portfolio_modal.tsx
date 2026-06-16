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
        className="absolute inset-0 bg-surface-0/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex min-h-full items-center justify-center p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="w-full max-w-sm rounded-2xl bg-surface-2 border border-border p-6"
        >
          <div className="flex items-start justify-between">
            <h2
              id="portfolio-modal-title"
              className="text-lg font-semibold text-text-primary"
            >
              Ver portafolio
            </h2>
            <button
              aria-label="Cerrar"
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="mt-2 text-sm text-text-secondary">
            Elige qué portafolio quieres abrir:
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={links.axel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-border bg-surface-1 px-4 py-3 text-sm font-medium tracking-wide text-text-primary hover:border-border-light transition-all duration-300 text-center"
            >
              Portafolio de Axel
            </a>
            <a
              href={links.arturo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-border bg-surface-1 px-4 py-3 text-sm font-medium tracking-wide text-text-primary hover:border-border-light transition-all duration-300 text-center"
            >
              Portafolio de Arturo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
