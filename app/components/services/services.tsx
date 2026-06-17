import { motion } from "motion/react";
import { services } from "../../data/landing";
import SectionHeader from "../section_header";
import ServiceCard from "./service_card";

export default function ServicesComponent() {
  return (
    <section id="services" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Servicios"
            title="Soluciones digitales diseñadas para vender, operar y crecer."
            description="No solo construimos pantallas: diseñamos experiencias, conectamos datos y desarrollamos productos que ayudan a tu negocio a moverse con más claridad."
          />
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
