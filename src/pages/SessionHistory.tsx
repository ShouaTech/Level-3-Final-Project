import { Link } from "react-router";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionRow } from "../components/SessionRow";
import { SkillRow } from "../components/SkillRow";
import { StatCard } from "../components/StatCard";
import { mockSessions } from "../MockData";

export function SessionHistory() {
  const sortedSessions = [...mockSessions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const totalScore = mockSessions.reduce((total, mockSession) => total + mockSession.clarityScore + mockSession.structureScore, 0);

  const averageScore = totalScore / (mockSessions.length * 2);

  const bestScore = mockSessions.reduce((highest, mockSession) => {
    const sessionScore = (mockSession.clarityScore + mockSession.structureScore) / 2;
    return Math.max(highest, sessionScore);
  }, 0)

  const totalSeconds = mockSessions.reduce((total, mockSession) => total + mockSession.duration, 0);

  const totalClarity = mockSessions.reduce((total, mockSession) => total + mockSession.clarityScore, 0);
  const clarityAverage = totalClarity / mockSessions.length;

  const totalStructure = mockSessions.reduce((total, mockSession) => total + mockSession.structureScore, 0)
  const structureAverage = totalStructure / mockSessions.length;

  const totalPace = mockSessions.reduce((total, mockSession) => total + mockSession.speakingPace, 0);
  const paceAverage = totalPace / mockSessions.length;

  const totalFiller = mockSessions.reduce((total, mockSession) => total + mockSession.fillerWordCount, 0);
  const fillerAverage = totalFiller / mockSessions.length;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl tracking-tight">Session History</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mockSessions.length} sessions
          </p>
        </div>
        <Button
          asChild
          className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/30"
        >
          <Link to="/practice-library">
            <Mic className="size-4" />
            New Session
          </Link>
        </Button>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total sessions"
          value={String(mockSessions.length)}
          note="All time"
        />
        <StatCard
          label="Avg score"
          value={`${averageScore.toFixed(1)}/10`}
          note="Clarity and structure"
        />
        <StatCard
          label="Best session"
          value={`${bestScore.toFixed(1)}/10`}
          note="Highest single session"
        />
        <StatCard
          label="Total practice time"
          value={`${minutes}m ${seconds}s`}
          note="Across all sessions"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <section className="rounded-2xl border bg-card/60 p-6">
          <h2 className="font-medium">All Sessions</h2>
          <div className="mt-2 divide-y">
            {sortedSessions.map((session) => (
              <SessionRow key={session.id} session={session} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border bg-card/60 p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-medium">Skill Averages</h2>
            <p className="text-xs text-muted-foreground">All sessions</p>
          </div>
          <div className="mt-6 space-y-5">
            <SkillRow
              label="Clarity"
              value={`${clarityAverage.toFixed(1)}/10`}
              percent={clarityAverage * 10}
            />
            <SkillRow
              label="Structure"
              value={`${structureAverage.toFixed(1)}/10`}
              percent={structureAverage * 10}
            />
            <SkillRow
              label="Speaking pace"
              value={`${Math.round(paceAverage)} wpm`}
            />
            <SkillRow
              label="Filler words"
              value={`${fillerAverage.toFixed(1)} per session`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
