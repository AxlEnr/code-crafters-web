import * as motion from "motion/react-client";

export default function HomeComponent() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen flex items-center justify-center bg-surface-0"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/logos/logo-light-full.png"
            alt="Code Crafters"
            className="w-[280px] sm:w-[480px] md:w-[640px] lg:w-[720px] h-auto mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-base sm:text-lg text-text-muted max-w-xl tracking-wide leading-relaxed"
        >
          Desarrollo de software a la medida.
          <br />
          Aplicaciones multiplataforma con inteligencia artificial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 text-sm font-medium tracking-wide rounded-lg bg-text-primary text-surface-0 hover:bg-text-primary/90 transition-all duration-300"
          >
            Solicitar cotización
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1/40 to-transparent pointer-events-none" />
    </motion.div>
  );
}
