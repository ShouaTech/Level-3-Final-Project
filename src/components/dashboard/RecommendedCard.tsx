import { Link } from "react-router";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Exercise } from "@/types/exercise.types";

type RecommendedCardType = {
  exercise: Exercise;
};

export function RecommendedCard(props: RecommendedCardType) {
  return (
    <section className="flex flex-col rounded-2xl border border-primary/40 bg-primary/5 p-6">
      <p className="text-sm text-violet-300">Recommended next</p>
      <h2 className="mt-3 text-lg font-semibold tracking-tight">
        {props.exercise.title}
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">
        {props.exercise.duration} · {props.exercise.difficulty}
      </p>
      <p className="mt-4 flex-1 text-sm text-muted-foreground">
        {props.exercise.description}
      </p>
      <Button
        asChild
        className="mt-6 h-11 w-full rounded-xl shadow-lg shadow-primary/30"
      >
        <Link to={`/practice-session/${props.exercise.id}`}>
          <Play className="size-4" />
          Start Exercise
        </Link>
      </Button>
    </section>
  );
}
