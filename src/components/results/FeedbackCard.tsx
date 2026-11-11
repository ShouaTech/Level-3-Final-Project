import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Full class names live here so Tailwind can find them.
const toneStyles = {
  good: {
    badge: "bg-emerald-500/15 text-emerald-400",
    line: "border-emerald-500/40",
  },
  improve: {
    badge: "bg-amber-500/15 text-amber-400",
    line: "border-amber-500/40",
  },
};

type FeedbackCardType = {
  title: string;
  icon: LucideIcon;
  tone: "good" | "improve";
  items: string[];
};

export function FeedbackCard(props: FeedbackCardType) {
  const styles = toneStyles[props.tone];

  return (
    <section className="rounded-2xl border bg-card/60 p-6">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-full",
            styles.badge
          )}
        >
          <props.icon className="size-3.5" />
        </span>
        <h2 className="font-medium">{props.title}</h2>
      </div>

      <ul className="mt-5 space-y-4">
        {props.items.map((item) => (
          <li
            key={item}
            className={cn(
              "border-l-2 pl-4 text-sm leading-relaxed text-muted-foreground",
              styles.line
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
