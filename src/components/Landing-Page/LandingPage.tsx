import { LandingHeader } from "./LandingHeader";
import { HeroSection } from "./HeroSection";
import { HowItWorks } from "./HowItWorks";
import { PracticePreview } from "./PracticePreview";
import { CallToAction } from "./CallToAction";
import { LandingFooter } from "./LandingFooter";

export function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* soft purple glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] size-[720px] rounded-full bg-primary/20 blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <LandingHeader />
        <main>
          <HeroSection />
          <HowItWorks />
          <PracticePreview />
          <CallToAction />
        </main>
      </div>

      <LandingFooter />
    </div>
  );
}
