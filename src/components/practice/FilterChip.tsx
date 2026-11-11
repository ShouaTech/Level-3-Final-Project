import { cn } from "@/lib/utils";

type FilterChipType = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export function FilterChip(props: FilterChipType) {
  return (
    <button
      type="button"
      aria-pressed={props.selected}
      onClick={props.onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        props.selected
          ? "border-primary/40 bg-primary/15 text-violet-300"
          : "text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {props.label}
    </button>
  );
}
