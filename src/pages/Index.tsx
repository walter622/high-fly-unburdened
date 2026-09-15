import {
  AboutEdgardSection,
  AudienceSection,
  ClosingSection,
  DiagnosticSection,
  ExplanationSection,
  Footer,
  HeroSection,
  IdentificationSection,
  InvisibleCostSection,
  NotForYouSection,
  SessionSection,
  SocialProofSection,
  ThesisSection,
  VideoSection,
} from "@/components/sections/SalesPageSections";
import ApplicationFormSection from "@/components/sections/ApplicationFormSection";
import FaqSection from "@/components/sections/FaqSection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <VideoSection />
    <IdentificationSection />
    <ExplanationSection />
    <InvisibleCostSection />
    <ThesisSection />
    <DiagnosticSection />
    <AudienceSection />
    <NotForYouSection />
    <AboutEdgardSection />
    <SocialProofSection />
    <SessionSection />
    <ApplicationFormSection />
    <FaqSection />
    <ClosingSection />
    <Footer />
  </main>
);

export default Index;