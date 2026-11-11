import { ExerciseCard } from "../components/practice/ExerciseCard";
import { FilterChip } from "../components/practice/FilterChip";
import { mockExercises } from "../MockData";
import { useState } from "react";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export function PracticeLibrary() {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const visibleExercises = selectedLevel === "All" ? mockExercises : mockExercises.filter((exercise) => exercise.difficulty === selectedLevel);

  return (
    <div className="mx-auto max-w-6xl">
      <header>
        <h1 className="font-display text-4xl tracking-tight">Practice Library</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {visibleExercises.length} exercises
        </p>
      </header>

      <div
        role="group"
        aria-label="Filter by level"
        className="mt-8 flex flex-wrap gap-2"
      >
        {levels.map((level) => (
          <FilterChip
            key={level}
            label={level}
            selected={level === selectedLevel}
            onClick={() => setSelectedLevel(level)}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
