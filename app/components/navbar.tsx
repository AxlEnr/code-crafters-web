import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#" },
    { name: "Acerca de Nosotros", href: "#about-us"},
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="w-full z-50 bg-gradient-to-r from-blue-950 via-cyan-600 to-blue-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <img src="./public/assets/logo1.png" alt="Logo" className="h-8"/>
          <img src="./public/assets/logo2.png" alt="Logo" className="h-8"/>
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:inline px-5 py-2 rounded-lg bg-white text-blue-950 font-semibold hover:bg-gray-100 transition shadow">
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
        <div className="md:hidden  backdrop-blur-sm">
            <hr />
          <ul className="flex flex-col bg-black items-center gap-6 py-6 text-white font-medium">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-lg hover:text-cyan-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="px-5 py-2 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-100 transition shadow">
                Cotizar
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
