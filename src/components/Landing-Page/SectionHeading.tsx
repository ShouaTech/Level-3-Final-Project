type SectionHeadingType = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading(props: SectionHeadingType) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
        {props.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-3 text-muted-foreground">{props.subtitle}</p>
      )}
    </div>
  );
}
