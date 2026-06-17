import { contactInfo, navItems, type SectionId } from "../../data/landing";

type FooterComponentProps = {
  onNavigate: (section: SectionId) => void;
};

export default function FooterComponent({ onNavigate }: FooterComponentProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10">
              <img src="/assets/logo1.png" alt="" className="h-7 w-7 object-contain" />
            </span>
            <span className="font-black text-white">Code Crafters</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Desarrollo web, apps móviles, sistemas personalizados y automatización
            para negocios que quieren crecer con tecnología.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black text-white">Links rápidos</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="text-left text-sm text-slate-400 transition hover:text-cyan-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black text-white">Contacto</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-200">
              {contactInfo.email}
            </a>
            {contactInfo.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replaceAll(" ", "")}`}
                className="hover:text-cyan-200"
              >
                {phone}
              </a>
            ))}
            <span>{contactInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        Todos los derechos reservados. Code Crafters 2026.
      </div>
    </footer>
  );
}
