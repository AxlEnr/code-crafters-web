import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, type SectionId } from "../data/landing";

export default function NavbarComponent({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (section: SectionId) => void;
}) {
  const [open, setOpen] = useState(false);

  const navigate = (section: SectionId) => {
    onNavigate(section);
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
          <span className="flex h-16 w-24 items-center">
            <img src="/assets/Recurso 7LOGO.png" alt="" className="h-16 w-auto object-contain" />
          </span>

        

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              aria-current={active === item.id ? "page" : undefined}
              className={[
                "rounded-lg px-4 py-2 text-sm font-semibold transition",
                active === item.id
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate("contact")}
          className="hidden rounded-lg bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-white lg:inline-flex"
        >
          Cotizar
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={[
                  "rounded-lg px-4 py-3 text-left text-sm font-semibold",
                  active === item.id
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="mt-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950"
            >
              Cotizar proyecto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
