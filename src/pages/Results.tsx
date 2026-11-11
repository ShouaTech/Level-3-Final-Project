 import { Link, useParams } from "react-router";
import { ArrowRight, Check, Clock, RotateCcw, TriangleAlert, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillRow } from "../components/SkillRow";
import { FeedbackCard } from "../components/results/FeedbackCard";
import { mockExercises, mockSessions } from "../MockData";

export function Results() {
  const { sessionId } = useParams();
  const session = mockSessions.find((mockSession) => mockSession.id === sessionId);

  if (!session) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="font-display text-3xl tracking-tight">Session not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This session doesn't exist or may have been deleted.
        </p>
        <Button asChild className="mt-8 h-11 rounded-xl px-6">
          <Link to="/session-history">Back to Session History</Link>
        </Button>
      </div>
    );
  }

  const score = (session.clarityScore + session.structureScore) / 2;
  let scoreLabel;

  if (score >= 7) {
    scoreLabel = "Strong session";
  } else if (score >= 5) {
    scoreLabel = "Solid progress";
  } else {
    scoreLabel = "Room to grow";
  }
  const exercise = mockExercises.find((mockExercise) => mockExercise.title === session.practiceType) ?? mockExercises[0];

  const date = new Date(session.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const minutes = Math.floor(session.duration / 60);
  const seconds = String(session.duration % 60).padStart(2, "0");

  return (
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">{date}</p>
          <h1 className="mt-1 font-display text-4xl tracking-tight">Session Results</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs text-violet-300">
              {session.practiceType}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {minutes}:{seconds}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="h-11 rounded-xl px-5">
            <Link to={`/practice-session/${exercise.id}`}>
              <RotateCcw className="size-4" />
              Try Again
            </Link>
          </Button>
          <Button
            asChild
            className="h-11 rounded-xl px-5 shadow-lg shadow-primary/30"
          >
            <Link to="/practice-library">
              Next Drill
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className="min-w-0 space-y-6">
          <section className="flex flex-col gap-6 rounded-2xl border bg-card/60 p-6 sm:flex-row sm:items-center">
            <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary/60 bg-primary/10">
              <span className="text-3xl font-semibold tracking-tight">
                {score.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">/ 10</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Overall session score</p>
              <h2 className="mt-1 font-display text-3xl tracking-tight">{scoreLabel}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The average of your clarity and structure scores.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-medium">Score Breakdown</h2>
            <div className="mt-6 space-y-5">
              <SkillRow
                label="Clarity"
                value={`${session.clarityScore}/10`}
                percent={session.clarityScore * 10}
              />
              <SkillRow
                label="Structure"
                value={`${session.structureScore}/10`}
                percent={session.structureScore * 10}
              />
              <SkillRow
                label="Speaking pace"
                value={`${session.speakingPace} wpm`}
              />
              <SkillRow
                label="Filler words"
                value={String(session.fillerWordCount)}
              />
            </div>
          </section>

          <section className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-medium">Transcript</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {session.transcript}
            </p>
          </section>
        </div>

        <div className="space-y-6">
          <FeedbackCard
            title="What You Did Well"
            icon={Check}
            tone="good"
            items={session.feedback.didWell}
          />
          <FeedbackCard
            title="Areas to Improve"
            icon={TriangleAlert}
            tone="improve"
            items={session.feedback.toImprove}
          />
          <section className="rounded-2xl border border-primary/40 bg-primary/5 p-6">
            <div className="flex items-center gap-2 text-violet-300">
              <Zap className="size-4" />
              <h2 className="font-medium">Next Session</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {session.feedback.recommendedFocus}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
