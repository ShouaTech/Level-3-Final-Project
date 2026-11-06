import { cn } from "@/lib/utils";

type StatCardType = {
  label: string;
  value: string;
  note: string;
  noteClassName?: string;
};

export function StatCard(props: StatCardType) {
  return (
    <div className="rounded-2xl border bg-card/60 p-5">
      <p className="text-sm text-muted-foreground">{props.label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{props.value}</p>
      <p className={cn("mt-1 text-xs", props.noteClassName ?? "text-muted-foreground")}>
        {props.note}
      </p>
    </div>
  );
}
