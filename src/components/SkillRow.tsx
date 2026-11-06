type SkillRowType = {
  label: string;
  value: string;
  percent?: number;
};

export function SkillRow(props: SkillRowType) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{props.label}</span>
        <span>{props.value}</span>
      </div>

      {/* The width comes from data, so it can't be a Tailwind class. */}
      {props.percent !== undefined && (
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${props.percent}%` }}
          />
        </div>
      )}
    </div>
  );
}
