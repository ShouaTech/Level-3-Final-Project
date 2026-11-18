import type { ReactNode } from "react";

type SettingsCardType = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SettingsCard(props: SettingsCardType) {
  return (
    <section className="rounded-2xl border bg-card/60">
      <div className="border-b p-6">
        <h2 className="font-medium">{props.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
      </div>
      <div className="p-6">{props.children}</div>
    </section>
  );
}
