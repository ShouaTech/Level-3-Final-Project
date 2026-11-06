import { Link } from "react-router";
import type { PracticeSession } from "@/types/session.types";

type SessionRowType = {
  session: PracticeSession;
};

export function SessionRow(props: SessionRowType) {
  const score = (props.session.clarityScore + props.session.structureScore) / 2;
  const date = new Date(props.session.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={`/results/${props.session.id}`}
      className="group flex items-center justify-between gap-4 py-4"
    >
      <div className="min-w-0">
        <p className="truncate text-sm font-medium transition-colors group-hover:text-violet-300">
          {props.session.practiceType}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{date}</p>
      </div>
      <span className="shrink-0 rounded-lg bg-muted px-2.5 py-1 text-sm">
        {score}/10
      </span>
    </Link>
  );
}
