import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import whiteLogo from "@/assets/logo-presentemente-white.png";
import executiveOne from "@/assets/executive-woman-1.png";
import executiveTwo from "@/assets/executive-woman-2.png";
import executiveThree from "@/assets/executive-woman-3.png";
import executiveFour from "@/assets/executive-woman-4.jpg";
import executiveFive from "@/assets/executive-woman-5.jpg";
import edgard from "@/assets/edgard-1.jpg";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const pressurePatterns = [
  "antecipar problemas", "revisar tudo", "assumir responsabilidades", "estar sempre disponível",
  "controlar detalhes", "evitar erros", "trabalhar além da conta", "se cobrar mais do que todo mundo",
];

const signals = [
  "sua mente não desliga", "descansar já não recupera como antes", "sua irritabilidade aumentou",
  "delegar ficou ainda mais difícil", "você sente que tudo depende de você", "existe culpa quando você para",
  "sua concentração piorou", "sua vida profissional ocupa cada vez mais espaço mental",
  "você sente que precisa estar sempre preparada para o próximo problema",
];

const anxietyActions = [
  "antecipar", "conferir", "revisar", "controlar", "assumir", "evitar riscos",
  "preparar-se excessivamente", "permanecer disponível", "nunca sentir que já fez o suficiente",
];

const diagnosticAreas = [
  ["01", "Energia", "O que está drenando sua energia e mantendo sua mente permanentemente ativa."],
  ["02", "Ansiedade e autocobrança", "Quanto da sua performance hoje depende de preocupação, antecipação e pressão interna."],
  ["03", "Controle e delegação", "O que faz você continuar assumindo responsabilidades que poderiam estar distribuídas."],
  ["04", "Limites", "Onde trabalho, carreira e responsabilidade começaram a invadir espaços que deveriam ser protegidos."],
  ["05", "Liderança", "Como o seu estado emocional influencia decisões, comunicação e relacionamento com sua equipe."],
  ["06", "Sustentabilidade", "Se a forma como você está crescendo hoje pode realmente ser sustentada pelos próximos anos."],
];

const fitItems = [
  "Você é executiva, diretora, gerente, C-level, líder ou empreendedora.",
  "Você possui alta responsabilidade profissional.",
  "Você conquistou resultados importantes, mas sente que está carregando peso demais.",
  "Você vive com a mente permanentemente ligada.",
  "Você percebe sinais de ansiedade, estresse ou exaustão.",
  "Você tem dificuldade de delegar.",
  "Você sente culpa quando descansa.",
  "Você não quer abandonar sua carreira ou sua ambição.",
];

const notFitItems = [
  "procura uma solução milagrosa", "não está disposta a rever padrões", "quer apenas motivação",
  "acredita que viver permanentemente esgotada é simplesmente parte do sucesso",
  "não vê necessidade de mudar a forma como está sustentando sua rotina",
];

const sessionItems = [
  "contextualizar seu momento atual",
  "identificar os principais pontos de pressão e desgaste",
  "reconhecer padrões que podem estar alimentando ansiedade, autocobrança e sobrecarga",
  "compreender quais áreas da sua vida e da sua liderança precisam de atenção",
  "enxergar caminhos possíveis para construir uma performance mais sustentável",
];

const CtaButton = ({ children }: { children: React.ReactNode }) => (
  <Button asChild size="lg" className="h-auto min-h-14 whitespace-normal rounded-sm px-7 py-4 text-center font-body text-sm font-semibold uppercase tracking-[0.08em] shadow-premium transition-transform hover:-translate-y-0.5 animate-[cta-pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] md:px-9">
    <a href="#sessao">{children}<ArrowRight aria-hidden="true" /></a>
  </Button>
);

const SectionHeading = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="max-w-4xl">
    <h2 className={`text-4xl font-medium leading-[1.08] md:text-5xl lg:text-6xl ${light ? "text-section-dark-foreground" : "text-foreground"}`}>{children}</h2>
  </div>
);

const DotList = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className="grid gap-3">
    {items.map((item) => (
      <li key={item} className={`flex items-start gap-3 font-body leading-relaxed ${light ? "text-section-dark-foreground/78" : "text-muted-foreground"}`}>
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const HeroSection = () => (
  <section className="relative min-h-[92svh] overflow-hidden bg-hero-bg text-hero-foreground">
    <img src={executiveTwo} alt="Mulher executiva em uma reunião" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="container relative z-10 flex min-h-[92svh] max-w-7xl items-end px-6 pb-16 pt-8 md:items-center md:pb-20 md:pt-20">
      <motion.div {...reveal} className="max-w-4xl">
        <img src={whiteLogo} alt="PresenteMente Corporativo" className="mb-9 h-auto w-56 object-contain object-left md:w-72" />
        <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] md:text-7xl lg:text-8xl">Alta Performance <span className="text-primary">sem Exaustão</span></h1>
        <p className="mt-7 max-w-3xl font-display text-2xl leading-snug text-hero-foreground md:text-3xl">Você não precisa abandonar sua ambição. Precisa deixar de depender da ansiedade, da autocobrança e da sobrecarga para sustentá-la</p>
        <div className="mt-7 grid max-w-3xl gap-4 font-body text-base leading-relaxed text-hero-muted md:grid-cols-2">
          <p>Se você ocupa uma posição de alta responsabilidade e sente que a pressão, o cansaço mental e a ansiedade estão começando a cobrar um preço alto demais, existe uma forma diferente de sustentar sua performance.</p>
          <p>Edgard Gonçalves ajuda mulheres executivas, líderes e empreendedoras a identificar os padrões que estão por trás da exaustão e construir uma forma mais saudável, clara e sustentável de continuar crescendo.</p>
        </div>
        <div className="mt-9"><CtaButton>Quero agendar minha Sessão Diagnóstica</CtaButton></div>
        <p className="mt-4 font-body text-xs leading-relaxed text-hero-muted">Sessão online com Edgard Gonçalves • Aplicação necessária • Vagas limitadas na agenda</p>
      </motion.div>
    </div>
    <a href="#video" aria-label="Assista antes de continuar" className="absolute bottom-6 right-6 z-20 grid h-11 w-11 place-items-center border border-hero-foreground/25 text-hero-foreground transition-colors hover:border-primary hover:text-primary"><ArrowDown className="h-4 w-4" /></a>
  </section>
);

export const VideoSection = () => (
  <section id="video" className="section-light py-24 md:py-32">
    <div className="container max-w-6xl px-6">
      <motion.div {...reveal}>
        <SectionHeading>Por que mulheres extremamente competentes podem estar usando a ansiedade como combustível para performar sem perceber?</SectionHeading>
        <div className="mt-12">
          <div className="relative aspect-video overflow-hidden border border-border bg-secondary shadow-premium">
            <img src={executiveFour} alt="Mulher executiva diante do computador" className="h-full w-full object-cover opacity-55" />
            <div className="absolute inset-0 grid place-items-center bg-video-overlay">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-primary bg-secondary/80 text-primary"><Play className="ml-1 h-7 w-7" fill="currentColor" /></div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div><p className="font-display text-2xl text-foreground">Talvez você tenha chegado onde chegou porque aprendeu a:</p><div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2"><DotList items={pressurePatterns} /></div><p className="mt-8 font-body text-lg text-foreground">E isso trouxe resultado.</p></div>
          <div><p className="border-l-2 border-primary pl-6 font-display text-3xl leading-snug text-foreground">Mas existe uma pergunta que poucas mulheres fazem:<br /><span className="italic text-primary">Quanto está custando continuar funcionando dessa maneira?</span></p><div className="mt-8"><CtaButton>Quero fazer meu diagnóstico</CtaButton></div></div>
        </div>
      </motion.div>
    </div>
  </section>
);

export const IdentificationSection = () => (
  <section className="section-cream overflow-hidden py-24 md:py-32">
    <div className="container max-w-7xl px-6">
      <motion.div {...reveal} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-full w-full border border-primary/45" />
          <img src={executiveFive} alt="Executiva olhando a cidade" className="relative aspect-[4/5] w-full object-cover" />
        </div>
        <div>
          <SectionHeading>Você pode estar performando em alto nível e, ainda assim, estar emocionalmente no limite</SectionHeading>
          <div className="mt-8 space-y-1 font-display text-2xl text-foreground"><p>Você continua participando das reuniões.</p><p>Continua tomando decisões.</p><p>Continua entregando resultados.</p><p>Continua sendo a pessoa em quem todos confiam.</p></div>
          <div className="my-8 space-y-1 font-body text-muted-foreground"><p>Por isso, ninguém percebe.</p><p>Talvez nem você.</p></div>
          <p className="mb-5 font-body font-semibold text-foreground">Mas alguns sinais começam a aparecer:</p>
          <DotList items={signals} />
          <p className="mt-9 font-display text-3xl italic text-primary">Funcionar não significa necessariamente estar bem.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export const ExplanationSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-6xl px-6">
      <motion.div {...reveal}>
        <SectionHeading light>Talvez você não tenha chegado até aqui apesar da ansiedade. Talvez tenha aprendido a performar através dela.</SectionHeading>
        <p className="mt-7 font-display text-2xl italic text-primary">Essa é uma diferença importante.</p>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div><p className="mb-6 font-body text-section-dark-foreground">A ansiedade pode fazer uma mulher extremamente competente:</p><DotList items={anxietyActions} light /></div>
          <div className="space-y-6 border-l border-primary/40 pl-8 font-body text-lg leading-relaxed text-section-dark-foreground/78"><p>Do lado de fora, isso pode parecer apenas comprometimento.</p><p>E por muito tempo, pode gerar resultados.</p><p>Até começar a cobrar a conta.</p><p className="font-display text-3xl font-medium text-section-dark-foreground">O problema não é sua ambição.<br /><span className="text-primary">É precisar da ansiedade para sustentá-la.</span></p></div>
        </div>
      </motion.div>
    </div>
  </section>
);

export const InvisibleCostSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-6xl px-6">
      <motion.div {...reveal} className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div><SectionHeading>Quando a competência começa a virar armadilha</SectionHeading><div className="mt-9 space-y-4 font-body text-lg leading-relaxed text-muted-foreground"><p>Quanto mais você resolve, mais problemas chegam até você.</p><p>Quanto mais assume, mais as pessoas dependem de você.</p><p>Quanto mais controla, mais difícil parece delegar.</p><p>Quanto mais entrega, maior fica o medo de diminuir o ritmo.</p><p>Até que aquilo que ajudou você a crescer começa a limitar sua capacidade de continuar crescendo.</p></div></div>
        <div className="self-end border-y border-border py-12"><p className="font-body text-sm uppercase tracking-[0.18em] text-primary">E surge uma pergunta silenciosa:</p><blockquote className="mt-5 font-display text-4xl leading-tight text-foreground">“Se eu parar de me cobrar tanto, será que ainda vou continuar sendo tão boa?”</blockquote><p className="mt-7 font-body leading-relaxed text-muted-foreground">Essa talvez seja uma das maiores armadilhas da mulher de alta performance.</p></div>
      </motion.div>
    </div>
  </section>
);

export const ThesisSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-7xl px-6">
      <motion.div {...reveal} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div><SectionHeading>Alta performance de verdade não é suportar cada vez mais</SectionHeading><div className="mt-8 space-y-3 font-body text-lg text-muted-foreground"><p>Não é trabalhar até o corpo pedir para parar.</p><p>Não é viver permanentemente em estado de alerta.</p><p>Não é confundir ansiedade com responsabilidade.</p><p>Não é confundir autocobrança com excelência.</p><p>Não é confundir controle com liderança.</p></div></div>
        <div className="bg-secondary p-8 text-section-dark-foreground shadow-premium md:p-12"><p className="font-body leading-relaxed text-section-dark-foreground/75">Alta performance de verdade é conseguir sustentar resultados preservando:</p><div className="my-8 grid grid-cols-2 gap-4 font-display text-2xl text-primary"><p>energia.</p><p>clareza.</p><p>capacidade de decisão.</p><p>relacionamentos.</p><p>saúde emocional.</p><p>presença fora do trabalho.</p></div><p className="border-t border-section-dark-foreground/15 pt-8 font-display text-3xl leading-snug">Você não precisa ser menos ambiciosa.<br /><span className="text-primary">Precisa aprender outra forma de sustentar sua ambição.</span></p></div>
      </motion.div>
    </div>
  </section>
);

export const DiagnosticSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-6xl px-6">
      <motion.div {...reveal}><SectionHeading>O que vamos observar na sua Sessão Diagnóstica</SectionHeading><p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">Durante a conversa, Edgard vai buscar compreender seu momento atual e identificar quais padrões podem estar contribuindo para sua sobrecarga.</p></motion.div>
      <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{diagnosticAreas.map(([number, title, text], index) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.04 }} key={number} className="min-h-64 bg-background p-7 md:p-8"><span className="font-display text-4xl text-primary/50">{number}</span><h3 className="mt-7 text-2xl text-foreground">{title}</h3><p className="mt-3 font-body leading-relaxed text-muted-foreground">{text}</p></motion.article>)}</div>
    </div>
  </section>
);

export const AudienceSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-7xl px-6">
      <motion.div {...reveal} className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div><SectionHeading light>Essa Sessão Diagnóstica faz sentido para você se:</SectionHeading><div className="mt-9"><DotList items={fitItems} light /></div><p className="mt-9 font-display text-3xl leading-snug text-primary">Você quer continuar crescendo. Só não quer continuar pagando o mesmo preço por isso.</p></div>
        <img src={executiveOne} alt="Mulher executiva" className="aspect-[4/5] h-full max-h-[680px] w-full object-cover object-center" />
      </motion.div>
    </div>
  </section>
);

export const NotForYouSection = () => (
  <section className="section-light py-24 md:py-32">
    <motion.div {...reveal} className="container max-w-5xl px-6">
      <SectionHeading>Essa conversa provavelmente não é para você se:</SectionHeading>
      <ul className="mt-12 divide-y divide-border border-y border-border">{notFitItems.map((item) => <li key={item} className="flex items-center gap-4 py-5 font-body text-lg text-muted-foreground"><X className="h-5 w-5 shrink-0 text-primary" />{item}.</li>)}</ul>
      <p className="mt-10 font-display text-3xl italic text-foreground">A Sessão Diagnóstica existe para mulheres que já perceberam que alguma coisa precisa mudar.</p>
    </motion.div>
  </section>
);

export const AboutEdgardSection = () => (
  <section className="section-cream overflow-hidden py-24 md:py-32">
    <div className="container max-w-7xl px-6">
      <motion.div {...reveal} className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div className="relative"><div className="absolute -right-5 -top-5 h-full w-full border border-primary/45" /><img src={edgard} alt="Edgard Gonçalves" className="relative aspect-[4/5] w-full object-cover object-top" /></div>
        <div><h2 className="text-5xl font-medium md:text-6xl">Edgard Gonçalves</h2><p className="mt-4 font-body text-lg font-semibold text-primary">Especialista em Alta Performance sem Exaustão</p><div className="mt-8 space-y-5 font-body leading-relaxed text-muted-foreground"><p>Edgard Gonçalves desenvolve um trabalho voltado à psicologia, comportamento e liderança de mulheres que ocupam posições de alta responsabilidade.</p><p>Sua abordagem busca compreender não apenas o que está acontecendo na superfície, mas os mecanismos emocionais que muitas vezes sustentam a performance:</p><p>ansiedade, controle, autocobrança, necessidade de provar competência, dificuldade de delegar e hiperdisponibilidade.</p><p>Seu trabalho integra:</p><p className="font-display text-2xl leading-relaxed text-foreground">profundidade psicológica; visão de liderança; clareza emocional; comportamento; tomada de decisão; e aplicação prática à realidade executiva.</p><p>Sua tese é simples:</p><p className="font-display text-3xl leading-snug text-foreground">Você não precisa escolher entre ambição e saúde emocional.<br /><span className="text-primary">Você precisa aprender uma maneira diferente de sustentar sua ambição.</span></p></div></div>
      </motion.div>
    </div>
  </section>
);

export const SocialProofSection = () => (
  <section className="section-light py-24 md:py-32">
    <motion.div {...reveal} className="container max-w-6xl px-6 text-center">
      <div className="mx-auto max-w-4xl"><SectionHeading>Mulheres de alta responsabilidade precisam de uma conversa diferente</SectionHeading></div>
      <div className="mx-auto mt-14 max-w-3xl border border-border bg-card p-10 md:p-16"><p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-primary">Espaço reservado para depoimentos reais</p></div>
    </motion.div>
  </section>
);

export const SessionSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-6xl px-6">
      <motion.div {...reveal} className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div><SectionHeading light>O próximo passo não é entrar em uma mentoria</SectionHeading><p className="mt-6 font-display text-3xl italic text-primary">É entender o que está acontecendo.</p><p className="mt-7 font-body text-lg leading-relaxed text-section-dark-foreground/75">Por isso, o primeiro passo é uma Sessão Diagnóstica com Edgard Gonçalves.</p></div>
        <div><p className="mb-6 font-body text-section-dark-foreground">Nessa conversa, você terá espaço para:</p><ul className="space-y-4">{sessionItems.map(item => <li key={item} className="flex gap-3 font-body leading-relaxed text-section-dark-foreground/78"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{item};</li>)}</ul><div className="mt-8 space-y-4 font-body leading-relaxed text-section-dark-foreground/75"><p>Sem compromisso de contratação.</p><p>Ao final da conversa, caso Edgard entenda que pode ajudá-la em um processo de acompanhamento, ele explicará quais seriam os próximos passos.</p></div><div className="mt-9"><CtaButton>Quero solicitar minha Sessão Diagnóstica</CtaButton></div></div>
      </motion.div>
    </div>
  </section>
);

export const ClosingSection = () => (
  <section className="relative overflow-hidden bg-secondary py-24 text-section-dark-foreground md:py-36">
    <img src={executiveThree} alt="Mulher executiva" className="absolute inset-0 h-full w-full object-cover opacity-20" />
    <div className="absolute inset-0 bg-closing-overlay" />
    <motion.div {...reveal} className="container relative z-10 max-w-5xl px-6 text-center">
      <div className="space-y-3 font-display text-3xl leading-snug text-section-dark-foreground/75 md:text-4xl"><p>Talvez você não precise diminuir seus sonhos.</p><p>Talvez não precise trabalhar menos por obrigação.</p><p>Talvez não precise abandonar a carreira que construiu.</p></div>
      <p className="mx-auto mt-9 max-w-4xl font-display text-4xl leading-tight md:text-6xl">Mas talvez precise parar de acreditar que ansiedade, controle e autocobrança são requisitos para continuar sendo excelente.</p>
      <p className="mx-auto mt-9 max-w-3xl font-body text-lg leading-relaxed text-section-dark-foreground/75">Você já provou que consegue chegar longe.<br />Agora precisa descobrir como continuar crescendo sem continuar se perdendo no processo.</p>
      <div className="mt-10"><CtaButton>Quero agendar minha Sessão Diagnóstica</CtaButton></div>
    </motion.div>
  </section>
);

export const Footer = () => (
  <footer className="bg-secondary py-14 text-section-dark-foreground border-t border-section-dark-foreground/10">
    <div className="container max-w-7xl px-6">
      <div className="grid gap-10 md:grid-cols-3 md:items-end">
        <div><img src={whiteLogo} alt="PresenteMente" className="h-auto w-56 object-contain md:w-64" /><p className="mt-4 font-display text-xl">Alta Performance sem Exaustão para Mulheres que Lideram</p></div>
        <div className="font-body text-sm leading-relaxed text-section-dark-foreground/65"><p className="font-semibold text-section-dark-foreground">Edgard Gonçalves</p><p>Especialista em Alta Performance sem Exaustão</p><p className="mt-3">Psicologia, comportamento e liderança para mulheres que ocupam posições de alta responsabilidade.</p></div>
        <p className="font-body text-xs text-section-dark-foreground/50 md:text-right">© 2026 — Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);