import { motion } from "framer-motion";
import heroImage from "@/assets/edgard-1.jpg";
import logo from "@/assets/logo-presentemente.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-hero-bg text-hero-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(166 35% 55% / 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(166 35% 55% / 0.18) 0%, transparent 50%)'
    }} />

    <div className="container relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="PresenteMente Corporativo"
              className="h-72 md:h-80 lg:h-96 w-auto mb-8 mx-auto lg:mx-0 brightness-0 invert"
            />

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-8">
              Transformando a Ansiedade em Alta Performance
              <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-hero-muted font-light italic leading-snug">
                A Mentoria para Mulheres Executivas que Querem Crescer com Clareza, Poder e Equilíbrio
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-hero-muted text-lg md:text-xl leading-relaxed mb-6 font-body font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Um acompanhamento premium para mulheres em posição de liderança que desejam sustentar resultados, tomar decisões com mais segurança e fortalecer sua autoridade sem viver no limite, com a condução estratégica de Edgard Gonçalves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 mb-10"
          >
            <a href="#candidatura" className="cta-button rounded-sm">
              Quero me candidatar para o PresenteMente
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row md:flex-wrap items-center lg:items-start lg:justify-start justify-center gap-x-6 gap-y-3 text-base text-hero-muted/70 font-body tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Mentoria premium</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Acompanhamento individualizado</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Aplicação para entrada</span>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40 rounded-sm translate-x-4 translate-y-4" />
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src={heroImage}
                alt="Edgard Gonçalves, mentor de executivas — alta performance com equilíbrio"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/50 via-transparent to-transparent pointer-events-none" />
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-hero-muted/70 font-body text-center lg:text-left">
              Edgard Gonçalves · Mentor & Fundador
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
