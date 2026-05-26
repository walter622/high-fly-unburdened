import logo from "@/assets/logo-presentemente.png";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-hero-bg text-hero-foreground py-16 border-t border-gold/20">
    <div className="container max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="PresenteMente Corporativo"
            className="h-24 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-hero-muted/70 text-base font-body tracking-wide max-w-xs text-center md:text-left">
            Mentoria premium para mulheres executivas que querem alta performance sem exaustão.
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3 font-body">Contato</p>
          <a
            href="tel:+5511993568491"
            className="inline-flex items-center gap-2 text-hero-foreground hover:text-gold transition-colors font-body text-xl"
          >
            <Phone className="w-4 h-4" />
            (11) 9.9356-8491
          </a>
          <p className="text-hero-muted/60 text-sm mt-2 font-body">Edgard Gonçalves</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-hero-muted/15 text-center">
        <p className="text-hero-muted/50 text-sm font-body tracking-wide">
          © {new Date().getFullYear()} PresenteMente Corporativo. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
