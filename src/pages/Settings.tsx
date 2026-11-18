import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "../components/FormField";
import { OptionChip } from "../components/OptionChip";
import { UserAvatar } from "../components/UserAvatar";
import { SettingsCard } from "../components/settings/SettingsCard";
import { goalOptions, weaknessOptions } from "../data/profileOptions";
import { mockUser } from "../MockData";

export function Settings() {
  const [name, setName] = useState(mockUser.name);
  const [selectedGoals, setSelectedGoals] = useState(mockUser.communicationGoals);
  const [selectedWeaknesses, setSelectedWeaknesses ] = useState(mockUser.selfReportedWeaknesses);

  function toggleGoal(goal: string) {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  }

  function toggleWeakness(weakness: string) {
    if (selectedWeaknesses.includes(weakness)) {
      setSelectedWeaknesses(selectedWeaknesses.filter((w) => w !== weakness));
    } else {
      setSelectedWeaknesses([...selectedWeaknesses, weakness]);
    }
  }

  const canSave = name.trim().length > 0;

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl tracking-tight">Settings</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your profile and what you want to practice.
          </p>
        </div>
        <Button
          type="button"
          onClick={handleSave}
          disabled={!canSave}
          className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/30"
        >
          {saved ? (
            <>
              <Check className="size-4" />
              Saved
            </>
          ) : (
            "Save changes"
          )}
        </Button>
      </header>

      <div className="mt-8 space-y-6">
        <SettingsCard
          title="Profile"
          description="The details attached to your CommLab account."
        >
          <div className="flex items-center gap-4">
            <UserAvatar name={name} className="size-12 text-lg" />
            <div className="min-w-0">
              <p className="truncate font-medium">{name}</p>
              <p className="truncate text-sm text-muted-foreground">{mockUser.email}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FormField
              id="name"
              label="Full name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div>
              <FormField
                id="email"
                label="Email address"
                type="email"
                value={mockUser.email}
                readOnly
                aria-describedby="email-note"
                className="cursor-not-allowed text-muted-foreground"
              />
              <p id="email-note" className="mt-2 text-xs text-muted-foreground">
                Your email is used to log in, so it can't be changed here.
              </p>
            </div>
          </div>
        </SettingsCard>

        <SettingsCard
          title="Your goals"
          description="What you want to improve. Your recommendations are based on these."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {goalOptions.map((goal) => (
              <OptionChip
                key={goal}
                label={goal}
                selected={selectedGoals.includes(goal)}
                onClick={() => toggleGoal(goal)}
              />
            ))}
          </div>
        </SettingsCard>

        <SettingsCard
          title="Focus areas"
          description="The challenges you want your practice to target."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {weaknessOptions.map((weakness) => (
              <OptionChip
                key={weakness}
                label={weakness}
                selected={selectedWeaknesses.includes(weakness)}
                onClick={() => toggleWeakness(weakness)}
              />
            ))}
          </div>
        </SettingsCard>
      </div>
    </div>
  );
}
