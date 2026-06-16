import React from "react";
import * as motion from "motion/react-client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, text: "codecrafters.contact.dev@gmail.com" },
    { icon: <FaPhoneAlt />, text: "+52 775 758 0699" },
    { icon: <FaPhoneAlt />, text: "+52 771 349 5009" },
    { icon: <FaMapMarkerAlt />, text: "Tulancingo, Hidalgo, México" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/AxlEnr", label: "GitHub" },
    { icon: <FaTwitter />, url: "https://x.com/code_craft_dev", label: "Twitter" },
  ];

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="bg-surface-1 min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest text-text-muted uppercase mb-4">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Hablemos de tu proyecto.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text-secondary">
          ¿Tienes una idea, proyecto o duda? Estamos aquí para ayudarte.
          Envíanos un mensaje y te responderemos lo antes posible.
        </p>

        <div className="mt-14 space-y-5 text-left">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * index,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-surface-2 border border-border"
            >
              <span className="text-text-muted text-lg">{item.icon}</span>
              <span className="text-sm text-text-secondary">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-3 rounded-xl bg-surface-2 border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-300 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
