import { Mic } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Mic className="size-4" />
      </span>
      <span className="font-semibold tracking-tight">CommLab</span>
    </div>
  );
}
