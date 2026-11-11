import { Link } from "react-router";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Exercise } from "@/types/exercise.types";

const difficultyColors: Record<string, string> = {
  Beginner: "text-emerald-400",
  Intermediate: "text-amber-400",
  Advanced: "text-rose-400",
};

type ExerciseCardType = {
  exercise: Exercise;
};

export function ExerciseCard(props: ExerciseCardType) {
  return (
    <article className="flex flex-col rounded-2xl border bg-card/60 p-6">
      <p
        className={cn(
          "text-xs font-medium",
          difficultyColors[props.exercise.difficulty]
        )}
      >
        {props.exercise.difficulty}
      </p>
      <h2 className="mt-3 font-semibold tracking-tight">{props.exercise.title}</h2>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {props.exercise.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          {props.exercise.duration}
        </span>
        <Button
          asChild
          className="h-10 rounded-xl px-5 shadow-lg shadow-primary/30"
        >
          {/* Every card says "Start", so the label tells screen readers which one. */}
          <Link
            to={`/practice-session/${props.exercise.id}`}
            aria-label={`Start ${props.exercise.title}`}
          >
            <Play className="size-4" />
            Start
          </Link>
        </Button>
      </div>
    </article>
  );
}
