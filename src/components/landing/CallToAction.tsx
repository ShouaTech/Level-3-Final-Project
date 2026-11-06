import { StartPracticingButton } from "./StartPracticingButton";

export function CallToAction() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-start gap-8 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/15 via-primary/5 to-transparent p-10 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Your voice is worth developing.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free. No credit card required. See progress in the first
            session.
          </p>
        </div>
        <StartPracticingButton />
      </div>
    </section>
  );
}
