import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-hero-bg text-hero-foreground overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(38 65% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(38 65% 50% / 0.2) 0%, transparent 50%)'
    }} />
    
    <div className="container relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-body font-medium mb-8">
          PresenteMente
        </p>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          Alta Performance sem Exaustão{" "}
          <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-hero-muted font-light italic">
            A Mentoria para Mulheres Executivas que Querem Crescer com Clareza, Poder e Equilíbrio
          </span>
        </h1>
      </motion.div>

      <motion.p
        className="text-hero-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 font-body font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Um acompanhamento premium para mulheres em posição de liderança que desejam sustentar resultados, tomar decisões com mais segurança e fortalecer sua autoridade sem viver no limite, com a condução estratégica de Edgard Gonçalves.
      </motion.p>

      <motion.p
        className="text-hero-muted/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-body font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Você não precisa continuar crescendo à custa da sua energia, da sua paz e da sua clareza. O PresenteMente foi criado para mulheres que já conquistaram muito no mundo profissional, mas não querem mais pagar com sobrecarga emocional, autocobrança excessiva e desgaste interno para manter a própria performance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mb-10"
      >
        <a href="#candidatura" className="cta-button rounded-sm">
          Quero me candidatar para o PresenteMente
        </a>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-hero-muted/60 font-body tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Mentoria premium para mulheres executivas
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Acompanhamento estratégico e individualizado
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Aplicação para entrada
        </span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
