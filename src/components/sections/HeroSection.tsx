import { motion } from "framer-motion";
import logo from "@/assets/logo-presentemente.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-hero-bg text-hero-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(166 35% 55% / 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(166 35% 55% / 0.18) 0%, transparent 50%)'
    }} />

    <div className="container relative z-10 max-w-5xl mx-auto px-6 py-24 lg:py-28">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={logo}
            alt="PresenteMente Corporativo"
            className="h-48 md:h-56 lg:h-64 w-auto mb-8 mx-auto brightness-0 invert"
          />

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-8">
            Transformando a Ansiedade em Alta Performance
            <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl text-hero-muted font-light italic leading-snug">
              Um acompanhamento premium para mulheres em posição de liderança que vivem sob pressão constante, cansaço mental e ansiedade silenciosa, e desejam recuperar clareza, equilíbrio e alta performance de verdade.
            </span>
          </h1>
        </motion.div>


        {/* VSL Video placeholder */}
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-2 border border-gold/40 rounded-sm translate-x-3 translate-y-3" />
            <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl bg-hero-bg/60 border border-gold/30 flex items-center justify-center">
              {/* Substitua este bloco pelo embed da VSL (ex.: <iframe src="..." />) */}
              <div className="flex flex-col items-center gap-3 text-hero-muted/70 font-body">
                <div className="w-16 h-16 rounded-full border border-gold/60 flex items-center justify-center">
                  <span className="text-gold text-2xl ml-1">▶</span>
                </div>
                <span className="text-sm uppercase tracking-[0.3em]">Em breve · VSL</span>
              </div>
            </div>
          </div>
        </motion.div>

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
          className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base text-hero-muted/70 font-body tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Mentoria premium</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Acompanhamento individualizado</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />Aplicação para entrada</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
