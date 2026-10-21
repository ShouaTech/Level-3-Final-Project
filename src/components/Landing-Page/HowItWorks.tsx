import { SectionHeading } from "./SectionHeading";
import { StepsCard } from "./StepsCard";

const steps = [
  {
    step: "01",
    title: "Choose a skill",
    description:
      "Select from targeted drills: clarity, pace, storytelling, filler words, and more.",
  },
  {
    step: "02",
    title: "Record yourself",
    description:
      "Practice in the browser. Record a response, presentation, or spontaneous answer.",
  },
  {
    step: "03",
    title: "Receive AI feedback",
    description:
      "Get instant, specific feedback - scored and explained, not just flagged.",
  },
  {
    step: "04",
    title: "Track improvement",
    description:
      "Watch your skill scores rise over sessions with granular progress analytics.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <SectionHeading eyebrow="How it works" title="Four steps to a stronger voice" />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <StepsCard
            key={s.step}
            step={s.step}
            title={s.title}
            description={s.description}
          />
        ))}
      </div>
    </section>
  );
}
