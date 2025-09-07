import * as motion from "motion/react-client";
import { Users, Lightbulb, Rocket } from "lucide-react";

export default function AboutUsComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          ¿Quiénes somos?
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          En <span className="font-semibold text-cyan-400">Code Crafters</span>{" "}
          transformamos ideas en software de alto impacto. Somos un equipo
          apasionado por crear soluciones digitales que inspiran, innovan y
          hacen crecer a nuestros clientes.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Nuestra misión principal es crear soluciones eficientes para clientes,
          enfocados en el desarrollo multiplataforma y con atención a la
          necesidad de cada usuario.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg rounded-2xl p-8 hover:shadow-cyan-500/20 transition"
        >
          <div className="flex justify-center">
            <Users className="w-12 h-12 text-indigo-400" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Equipo Humano</h3>
          <p className="mt-3 text-gray-400">
            Creemos en la colaboración y el talento colectivo. Cada proyecto es
            impulsado por la creatividad y el compromiso de nuestro equipo.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg rounded-2xl p-8 hover:shadow-yellow-400/20 transition"
        >
          <div className="flex justify-center">
            <Lightbulb className="w-12 h-12 text-yellow-400" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Innovación</h3>
          <p className="mt-3 text-gray-400">
            Nos mantenemos a la vanguardia tecnológica para diseñar soluciones
            creativas, seguras y escalables que generen verdadero valor.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg rounded-2xl p-8 hover:shadow-cyan-400/20 transition"
        >
          <div className="flex justify-center">
            <Rocket className="w-12 h-12 text-cyan-400" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Crecimiento</h3>
          <p className="mt-3 text-gray-400">
            Nuestra meta es crecer junto a nuestros clientes, impulsando sus
            ideas y ayudándolos a conquistar nuevas oportunidades digitales.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
