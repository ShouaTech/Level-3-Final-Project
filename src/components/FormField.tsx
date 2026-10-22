import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

// A label + input pair. Any normal <input> prop (type, placeholder, value,
// onChange...) can be passed and is handed straight to the input.
type FormFieldType = {
  id: string;
  label: string;
} & ComponentProps<"input">;

export function FormField({ id, label, className, ...inputProps }: FormFieldType) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border border-input bg-muted/40 px-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30",
          className
        )}
        {...inputProps}
      />
    </div>
  );
}
