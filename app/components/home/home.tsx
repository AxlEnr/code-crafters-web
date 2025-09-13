import { motion } from "framer-motion";
import PixelBlast from "../pixel/pixelblast";
import Magnet from "../pixel/magnet";
import FaultyTerminal from "../pixel/retro";

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
      className="relative w-full h-screen flex items-center justify-center bg-black"
    >
      {/* Fondo de PixelBlast */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#5DE2E7"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Logo centrado con Magnet */}
      <div className="relative z-20 flex items-center justify-center px-4">
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <img
            src="/assets/logoneon.png"
            alt="Logo"
            className="
              w-[250px]   /* tamaño en móviles */
              sm:w-[400px] /* tablets */
              md:w-[600px] /* pantallas medianas */
              lg:w-[800px] /* pantallas grandes */
              h-auto mx-auto
            "
          />
        </Magnet>
      </div>
    </motion.div>
  );
}