import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Landing-Page/Logo";
import { OnboardingSection } from "./OnboardingSection";

const goals = [
    "Speaking confidently",
    "Small talk",
    "Storytelling",
    "Speaking clearly",
    "Reducing filler words",
    "Public speaking",
    "Explaining ideas",
    "Follow-up questions"
];

const weaknesses = [
    "Speaking too quickly",
    "Using filler words",
    "Long pauses",
    "Losing my train of thought",
    "Mumbling or speaking unclearly",
    "Starting conversations",
]

export function Onboarding() {
    const [selectedGoal, setSelectedGoal] = useState<string[]>([]);
    const [selectedWeakness, setSelectedWeakness] = useState<string[]>([]);
    const navigate = useNavigate();

    function toggleGoal(goal: string) {
        if (selectedGoal.includes(goal)) {
            setSelectedGoal(selectedGoal.filter((g) => g !== goal));
        } else {
            setSelectedGoal([...selectedGoal, goal]);
        }
    }

    function toggleWeakness(weakness: string) {
        if (selectedWeakness.includes(weakness)) {
            setSelectedWeakness(selectedWeakness.filter((w) => w !== weakness));
        } else {
            setSelectedWeakness([...selectedWeakness, weakness]);
        }
    }

    // Worked out from the state on every render, so they can't fall out of sync.
    const totalSelected = selectedGoal.length + selectedWeakness.length;
    const canContinue = selectedGoal.length > 0;

    function buildPlan() {
        // Saving the selections to the user's profile comes with the backend.
        navigate("/dashboard");
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 right-[-10%] size-150 rounded-full bg-primary/15 blur-[150px]"
            />

            <header className="relative px-6 py-5">
                <Link to="/" className="inline-block">
                    <Logo />
                </Link>
            </header>

            <main className="relative mx-auto max-w-5xl px-6 pt-8 pb-16 md:pt-12">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-violet-300">
                    <span className="size-1.5 rounded-full bg-violet-400" />
                    Coaching profile
                </p>

                <h1 className="mt-6 font-display text-4xl tracking-tight md:text-5xl">
                    Let’s focus on what matters to you.
                </h1>
                <p className="mt-4 max-w-xl text-muted-foreground">
                    Choose as many as apply. Your answers will shape your practice
                    recommendations and feedback.
                </p>

                <div className="mt-10 divide-y rounded-2xl border bg-card/60">
                    <OnboardingSection
                        label="Your goals"
                        title="What do you want to improve?"
                        options={goals}
                        selected={selectedGoal}
                        onToggle={toggleGoal}
                        columns={4}
                    />
                    <OnboardingSection
                        label="Your challenges"
                        title="What are your weaknesses?"
                        options={weaknesses}
                        selected={selectedWeakness}
                        onToggle={toggleWeakness}
                        columns={3}
                    />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                        Skip for now
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                            {totalSelected} selected
                        </span>
                        <Button
                            type="button"
                            onClick={buildPlan}
                            disabled={!canContinue}
                            className="h-12 rounded-xl px-7 text-base shadow-lg shadow-primary/30"
                        >
                            Build my plan
                            <ArrowRight className="size-4" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
