import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type OptionChipType = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export function OptionChip(props: OptionChipType) {
  return (
    <button
      type="button"
      aria-pressed={props.selected}
      onClick={props.onClick}
      className={cn(
        "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
        props.selected
          ? "border-primary/60 bg-primary/15 text-foreground"
          : "bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {props.label}
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-full border",
          props.selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-input bg-muted/60"
        )}
      >
        {props.selected && <Check className="size-3" />}
      </span>
    </button>
  );
}
