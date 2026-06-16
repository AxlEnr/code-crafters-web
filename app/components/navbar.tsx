import { useState } from "react";
import { Menu, X } from "lucide-react";

type Section = "home" | "about" | "services" | "projects" | "contact";

export default function NavbarComponent({
  active,
  onNavigate,
}: {
  active: Section;
  onNavigate: (s: Section) => void;
}) {
  const [open, setOpen] = useState(false);
  const items: { id: Section; label: string }[] = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Quiénes somos" },
    { id: "services", label: "Servicios" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-0/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2"
        >
          <img
            src="/assets/logos/logo-light-small.png"
            alt="Code Crafters"
            className="h-7 w-auto"
          />
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {items.map((i) => (
            <li key={i.id}>
              <button
                onClick={() => onNavigate(i.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active === i.id
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {i.label}
                {active === i.id && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onNavigate("contact")}
            className="px-5 py-2 text-sm font-medium tracking-wide rounded-lg bg-text-primary text-surface-0 hover:bg-text-primary/90 transition-colors duration-300"
          >
            Cotizar
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-0/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {items.map((i) => (
              <button
                key={i.id}
                onClick={() => {
                  onNavigate(i.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                  active === i.id
                    ? "bg-surface-2 text-text-primary"
                    : "text-text-secondary hover:bg-surface-1 hover:text-text-primary"
                }`}
              >
                {i.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("contact");
                setOpen(false);
              }}
              className="mt-2 w-full px-4 py-3 rounded-lg text-sm font-medium tracking-wide bg-text-primary text-surface-0 hover:bg-text-primary/90 transition-colors"
            >
              Cotizar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
