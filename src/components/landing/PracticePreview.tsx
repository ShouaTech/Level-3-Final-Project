import { TrendingDown, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// Illustrative numbers for the landing page, taken from the first and latest
// mock sessions. This is a picture of the dashboard, not live data.
const metrics = [
  { label: "Clarity", value: "7/10", change: "+3 since first session", rising: true },
  { label: "Structure", value: "8/10", change: "+3 since first session", rising: true },
  { label: "Pace", value: "152 wpm", change: "29 wpm calmer", rising: false },
  { label: "Filler words", value: "5", change: "9 fewer per session", rising: false },
];

const highlights = [
  { label: "Strongest skill", value: "Structure", detail: "8/10 in the latest session" },
  { label: "Biggest improvement", value: "Filler words", detail: "Down from 14 to 5" },
  { label: "Sessions completed", value: "5", detail: "3 this week" },
];

export function PracticePreview() {
  return (
    <section className="py-20">
      <SectionHeading
        label="The practice experience"
        title="Built for serious improvement"
        subtitle="A clean, focused environment that keeps you on track."
      />

      <div
        role="img"
        aria-label="Preview of the CommLab dashboard"
        className="mt-12 rounded-2xl border border-primary/30 bg-card/40 shadow-2xl shadow-primary/10"
      >
        {/* browser window bar */}
        <div className="flex items-center gap-4 border-b px-5 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex-1 rounded-md bg-muted/60 py-1 text-center text-xs text-muted-foreground">
            commlab.app/dashboard
          </div>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">Welcome back, Alex</p>
                <p className="text-xs text-muted-foreground">
                  Your filler words are trending down
                </p>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Start Practice
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border bg-card/60 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {m.label}
                    {m.rising ? (
                      <TrendingUp className="size-3.5 text-emerald-400" />
                    ) : (
                      <TrendingDown className="size-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="mt-2 text-xl font-medium">{m.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
              <p className="text-xs text-violet-300">Recommended drill</p>
              <p className="mt-1 font-medium">Reducing Filler Words</p>
              <p className="text-xs text-muted-foreground">60 sec · Beginner</p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl border bg-card/60 p-4">
                <p className="text-xs text-muted-foreground">{h.label}</p>
                <p className="mt-1 text-lg font-medium">{h.value}</p>
                <p className="text-xs text-muted-foreground">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
