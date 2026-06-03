import { motion } from "framer-motion";
import empresasImage from "@/assets/empresas-atendidas.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const CompaniesSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div {...fadeIn} className="text-center mb-12">
        <div className="divider-gold mb-8" />
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
          Empresas atendidas por{" "}
          <span className="gold-text italic">Edgard Gonçalves</span>
        </h2>
        <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto">
          Organizações que confiaram em sua condução estratégica e atuação em desenvolvimento humano.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
      >
        <div className="relative overflow-hidden rounded-sm bg-white p-6 md:p-10 shadow-sm border border-border/40">
          <img
            src={empresasImage}
            alt="Logos das empresas atendidas por Edgard Gonçalves — Vale, Infraero, Embraco, Sanofi Aventis, Samarco, InterNexa, ISA CTEEP, Senac, entre outras"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default CompaniesSection;
