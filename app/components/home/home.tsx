import { motion, px } from "framer-motion";

export default function HomeComponent() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 80 }}
    id="home"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
    className="relative w-full h-screen flex items-center bg-black/70">
      <img
        src="/assets/background.jpg"
        alt="Imagen"
        className="absolute inset-0 w-full h-full object-cover opacity-80 blur-xs"
      />
      <div className="relative z-10 max-w-5xl px-8 text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg hover:text-blue-700">
          Code Crafters
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
          Soluciones eficientes con aplicaciones escalables multiplataforma!
        </p>

        <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className=" mt-8 px-6 py-3 bg-gradient-to-r from-blue-950 via-cyan-600 to-blue-300 hover:from-blue-700 hover:via-cyan-400 hover:to-blue-200 text-white font-semibold rounded-lg shadow-lg transition">
          <span className="">
            Conoce más
          </span>
        </motion.button>
      </div>
      <div className="relative centered-content">
        <img src="./public/assets/logoneon.png" alt="Logo" className=""/>
      </div>
    </motion.div>
  );
}
