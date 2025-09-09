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
    <nav className="w-full z-50 bg-gradient-to-r from-blue-950 via-cyan-600 to-blue-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <img src="/assets/logo1.png" alt="Logo" className="h-8" />
          <img src="/assets/logo2.png" alt="Logo" className="h-8" />
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium text-sm lg:text-lg">
          {items.map((i) => (
            <li key={i.id}>
              <a
                onClick={() => onNavigate(i.id)}
                aria-current={active === i.id ? "page" : undefined}
                className="relative group cursor-pointer"
              >
                {i.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all ${
                    active === i.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden lg:inline-flex px-5 py-2 rounded-lg bg-white text-blue-950 font-semibold hover:bg-gray-100 transition shadow">
          Cotizar
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 backdrop-blur-sm">
          <hr className="border-white/20 mb-3" />
          <ul className="flex flex-col gap-4 text-white font-medium text-lg">
            {items.map((i) => (
              <li key={i.id}>
                <button
                  onClick={() => {
                    onNavigate(i.id);
                    setOpen(false);
                  }}
                  aria-current={active === i.id ? "page" : undefined}
                  className="w-full text-left relative group"
                >
                  {i.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all ${
                      active === i.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
            <li>
              <button className="w-full px-5 py-2 rounded-lg bg-white text-blue-950 font-semibold hover:bg-gray-100 transition shadow">
                Cotizar
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
