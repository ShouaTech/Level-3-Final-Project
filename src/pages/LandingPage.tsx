import { LandingHeader } from "../components/landing/LandingHeader";
import { HeroSection } from "../components/landing/HeroSection";
import { HowItWorks } from "../components/landing/HowItWorks";
import { PracticePreview } from "../components/landing/PracticePreview";
import { CallToAction } from "../components/landing/CallToAction";
import { LandingFooter } from "../components/landing/LandingFooter";

export function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* soft purple glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] size-180 rounded-full bg-primary/20 blur-[160px]"
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
