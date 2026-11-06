import { Link } from "react-router";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionRow } from "../components/SessionRow";
import { RecommendedCard } from "../components/dashboard/RecommendedCard";
import { SkillRow } from "../components/SkillRow";
import { StatCard } from "../components/StatCard";
import {
  mockExercises,
  mockPerformance,
  mockSessions,
  mockUser,
} from "../MockData";

export function Dashboard() {
  const latestSession = mockSessions[mockSessions.length - 1];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const totalScore = mockSessions.reduce(
    (total, mockSession) =>
      total + mockSession.clarityScore + mockSession.structureScore,
    0,
  );

  const overallScore = totalScore / (mockSessions.length * 2);

  const recommendedExercise =
    mockExercises.find(
      (exercise) => exercise.title === mockPerformance.recommendedPractice,
    ) ?? mockExercises[0];

  const newest = [...mockSessions].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl tracking-tight">
            Welcome back, {mockUser.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {today} · {mockSessions.length} sessions completed
          </p>
        </div>
        <Button
          asChild
          className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/30"
        >
          <Link to="/practice-library">
            <Mic className="size-4" />
            Start Practice
          </Link>
        </Button>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Overall Score"
          value={`${overallScore.toFixed(1)}/10`}
          note="Clarity and structure average"
        />
        <StatCard
          label="Sessions"
          value={String(mockSessions.length)}
          note="Completed so far"
        />
        <StatCard
          label="Strongest"
          value={mockPerformance.strengths[0]}
          note="Your top skill"
        />
        <StatCard
          label="Focus Area"
          value={mockPerformance.weaknesses[0]}
          note="Needs attention"
          noteClassName="text-rose-400"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section className="rounded-2xl border bg-card/60 p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-medium">Skill Breakdown</h2>
            <p className="text-xs text-muted-foreground">Latest session</p>
          </div>
          <div className="mt-6 space-y-5">
            <SkillRow
              label="Clarity"
              value={`${latestSession.clarityScore}/10`}
              percent={latestSession.clarityScore * 10}
            />
            <SkillRow
              label="Structure"
              value={`${latestSession.structureScore}/10`}
              percent={latestSession.structureScore * 10}
            />
            <SkillRow
              label="Speaking pace"
              value={`${latestSession.speakingPace} wpm`}
            />
            <SkillRow
              label="Filler words"
              value={String(latestSession.fillerWordCount)}
            />
          </div>
        </section>

        <RecommendedCard exercise={recommendedExercise} />
      </div>

      <section className="mt-6 rounded-2xl border bg-card/60 p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-medium">Recent Sessions</h2>
          <Link
            to="/session-history"
            className="text-xs text-violet-400 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-2 divide-y">
          {newest.map((orderedSession) => (
            <SessionRow 
            key={orderedSession.id} 
            session={orderedSession} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
