import { Github, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from "lucide-react";
import { motion } from "motion/react";
import type { FormEvent } from "react";
import { contactInfo } from "../../data/landing";
import SpotlightCard from "../SpotlightCard";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const message = String(formData.get("message") ?? "");

    const body = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Tipo de proyecto: ${projectType}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      "Nuevo proyecto para Code Crafters"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <SpotlightCard className="h-full rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-6 backdrop-blur-xl sm:p-8">
              <p className="text-xs font-bold uppercase text-cyan-200">Contacto</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              ¿Tienes una idea? La convertimos en software.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Cuéntanos qué necesitas y te ayudamos a aterrizarlo: sitio web,
              app, sistema interno o plataforma completa.
            </p>

            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>

            <div className="mt-8 grid gap-4 text-sm text-slate-200">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 transition hover:text-cyan-200"
              >
                <Mail className="h-5 w-5 text-cyan-200" />
                {contactInfo.email}
              </a>
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replaceAll(" ", "")}`}
                  className="flex items-center gap-3 transition hover:text-cyan-200"
                >
                  <Phone className="h-5 w-5 text-cyan-200" />
                  {phone}
                </a>
              ))}
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-200" />
                {contactInfo.location}
              </p>
            </div>

              <div className="mt-8 flex gap-3">
              <a
                href={contactInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Code Crafters"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-300/50"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X de Code Crafters"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-300/50"
              >
                <Twitter className="h-5 w-5" />
              </a>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="h-full"
          >
            <SpotlightCard
              as="form"
              onSubmit={handleSubmit}
              className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Nombre
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Correo
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="correo@empresa.com"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
              Tipo de proyecto
              <select
                name="projectType"
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Sitio web</option>
                <option>Aplicación móvil</option>
                <option>Sistema de gestión</option>
                <option>Automatización o chatbot</option>
                <option>Otro</option>
              </select>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
              Mensaje
              <textarea
                name="message"
                rows={6}
                className="resize-none rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                placeholder="Cuéntanos qué necesitas construir..."
              />
            </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-6 py-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
              >
                Enviar mensaje
                <Send className="h-4 w-4" />
              </button>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
