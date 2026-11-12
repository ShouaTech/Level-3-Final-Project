import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight, Clock, Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mockExercises, mockSessions } from "../MockData";

type SessionStatus = "ready" | "recording" | "done";

const statusText: Record<SessionStatus, string> = {
  ready: "Ready when you are",
  recording: "Recording",
  done: "Session complete",
};

export function PracticeSessionPage() {
  const { exerciseId } = useParams();
  const exercise = mockExercises.find(
    (mockExercise) => mockExercise.id === exerciseId,
  );

  const [status, setStatus] = useState<SessionStatus>("ready");
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    if (status !== "recording") {
      return;
    }

    const timer = setInterval(() => {
      setSecondsElapsed((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  if (!exercise) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="font-display text-3xl tracking-tight">
          Exercise not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This exercise doesn't exist. Pick one from the library instead.
        </p>
        <Button asChild className="mt-8 h-11 rounded-xl px-6">
          <Link to="/practice-library">Back to Practice Library</Link>
        </Button>
      </div>
    );
  }

  function handleMainButton() {
    if (status === "ready") {
      setStatus("recording");
    } else {
      setStatus("done");
    }
  }

  const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const seconds = String(secondsElapsed % 60).padStart(2, "0");
  const timerText = `${minutes}:${seconds}`;
  const mockResultId = mockSessions[mockSessions.length - 1].id;

  return (
    <div className="mx-auto max-w-2xl">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs text-violet-300">
          {exercise.title}
        </span>
        <Link
          to="/practice-library"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Exit session
        </Link>
      </header>

      <div className="mt-12 flex flex-col items-center text-center md:mt-20">
        <section className="w-full rounded-2xl border bg-card/60 p-6 sm:p-8">
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {exercise.duration} suggested
          </p>
          <p className="mt-4 font-display text-2xl leading-snug tracking-tight">
            “{exercise.prompt}”
          </p>
        </section>

        <p className="mt-12 font-mono text-6xl tracking-widest tabular-nums">
          {timerText}
        </p>

        <p
          className={cn(
            "mt-4 flex items-center gap-2 text-sm",
            status === "recording"
              ? "text-violet-300"
              : "text-muted-foreground",
          )}
        >
          {status === "recording" && (
            <span className="size-2 animate-pulse rounded-full bg-primary" />
          )}
          {statusText[status]}
        </p>

        <div className="mt-8">
          {status === "done" ? (
            <Button
              asChild
              className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/30"
            >
              <Link to={`/results/${mockResultId}`}>
                See Results
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleMainButton}
              className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/30"
            >
              {status === "ready" ? (
                <>
                  <Mic className="size-4" />
                  Start
                </>
              ) : (
                <>
                  <Square className="size-4" />
                  Finish
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
