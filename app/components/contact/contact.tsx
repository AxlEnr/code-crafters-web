import React from "react";
import { motion } from "framer-motion";
import Magnet  from '../pixel/magnet';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, text: "aacodecrafters@gmail.com" },
    { icon: <FaPhoneAlt />, text: "+52 775 758 0699" },
    { icon: <FaPhoneAlt />, text: "+52 775 258 6934" },
    { icon: <FaMapMarkerAlt />, text: "Tulancingo Hidalgo, México" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/", label: "GitHub" },
    { icon: <FaFacebook />, url: "https://facebook.com/", label: "Facebook" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 flex flex-col justify-center items-center min-h-screen px-6 text-center py-16">
      {/* Título */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
      >
        Contáctanos
      </motion.h2>

      <div className="w-24 h-1.5 mb-5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-primary max-w-xl mb-10 text-white"
      >
        ¿Tienes una idea, proyecto o duda? ¡Estamos aquí para ayudarte! 
            Envíanos un mensaje y te responderemos lo antes posible.

      </motion.p>

      {/* Información de contacto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="space-y-4 text-lg text-white"
      >
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span className="text-secondary">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>

      <Magnet padding={50} disabled={false} magnetStrength={10}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex items-center justify-center gap-6 mt-10"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-3 rounded-full bg-gray-800 hover:bg-secondary transition-colors text-2xl flex items-center justify-center"
          >
            {link.icon}
          </a>
        ))}
      </motion.div>
      </Magnet>

      {/* Redes sociales */}
      
    </div>
  );
};

export default ContactPage;
