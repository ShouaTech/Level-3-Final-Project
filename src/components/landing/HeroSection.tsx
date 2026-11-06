import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { StartPracticingButton } from "./StartPracticingButton";

export function HeroSection() {
  return (
    <section className="pt-16 pb-24 md:pt-24">
      <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-violet-300">
        <span className="size-1.5 rounded-full bg-violet-400" />
        AI-Powered Communication Coach
      </p>

      <h1 className="mt-8 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
        Speak with clarity.
        <span className="block bg-linear-to-r from-violet-300 to-violet-500 bg-clip-text pb-2 text-transparent">
          Lead every room.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        CommLab analyzes your speech and gives you precise, actionable feedback
        on pace, clarity, filler words, and structure. Practice daily. Improve
        measurably.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <StartPracticingButton />
        <Button asChild variant="outline" className="h-12 rounded-xl px-6 text-base">
          <Link to="/log-in">Log In</Link>
        </Button>
      </div>
    </section>
  );
}
