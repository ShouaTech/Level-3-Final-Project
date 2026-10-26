import { OptionChip } from "./OptionChip";


const gridColumns = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

type OnboardingSectionType = {
  label: string;
  title: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  columns: 3 | 4;
};

export function OnboardingSection(props: OnboardingSectionType) {
  return (
    <section className="p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
            {props.label}
          </p>
          <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
            {props.title}
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">Select all that apply</p>
      </div>

      <div className={`mt-6 grid gap-3 ${gridColumns[props.columns]}`}>
        {props.options.map((option) => (
          <OptionChip
            key={option}
            label={option}
            selected={props.selected.includes(option)}
            onClick={() => props.onToggle(option)}
          />
        ))}
      </div>
    </section>
  );
}
