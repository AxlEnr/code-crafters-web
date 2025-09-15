import { motion } from "framer-motion";
import PixelBlast from "../pixel/pixelblast";
import Magnet from "../pixel/magnet";
import { useEffect, useState } from "react";

export default function HomeComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      className={`relative w-full h-screen flex items-center justify-center ${
        isMobile ? "" : "bg-black"
      }`}
      style={
        isMobile
          ? {
              backgroundImage: "url('/assets/background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Fondo dinámico: PixelBlast solo en desktop */}
      {!isMobile && (
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
      )}

      {/* Logo centrado */}
      <div className="relative z-20 flex items-center justify-center px-4">
        <Magnet
          padding={50}
          disabled={isMobile}
          magnetStrength={50}
        >
          <img
            src="/assets/logoneon.png"
            alt="Logo"
            className="
              w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px]
              h-auto mx-auto
            "
          />
        </Magnet>
      </div>
    </motion.div>
  );
}
