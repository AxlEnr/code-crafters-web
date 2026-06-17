import { X } from "lucide-react";
import { useEffect } from "react";
import SpotlightCard from "../SpotlightCard";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { axel: string; arturo: string };
};

export default function PortfolioModal({ open, onClose, links }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 h-full w-full bg-slate-950/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex min-h-full items-center justify-center p-4">
        <SpotlightCard
          as="div"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="w-full max-w-md rounded-lg border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-cyan-950/30"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-cyan-300">
                Portafolios
              </p>
              <h2
                id="portfolio-modal-title"
                className="mt-2 text-2xl font-black text-white"
              >
                Elige un caso para explorar
              </h2>
            </div>
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href={links.axel}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-center font-bold text-white transition hover:border-cyan-300/60"
            >
              Ver portafolio de Axel
            </a>
            <a
              href={links.arturo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-purple-300/20 bg-purple-300/10 px-4 py-3 text-center font-bold text-white transition hover:border-purple-300/60"
            >
              Ver portafolio de Arturo
            </a>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
