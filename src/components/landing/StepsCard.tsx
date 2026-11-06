type StepsCardType = {
  step: string;
  title: string;
  description: string;
};

export const StepsCard = (props: StepsCardType) => {
  return (
    <div className="rounded-2xl border bg-card/60 p-6">
      <p className="font-mono text-xs text-violet-400">{props.step}</p>
      <div className="mt-4 h-px w-8 bg-primary" />
      <h3 className="mt-6 font-medium">{props.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {props.description}
      </p>
    </div>
  );
};
