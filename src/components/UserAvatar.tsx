import { cn } from "@/lib/utils";

type UserAvatarType = {
  name: string;
  className?: string;
};

// A circle with the first letter of the user's name.
export function UserAvatar(props: UserAvatarType) {
  const initial = props.name.trim().charAt(0).toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-violet-300",
        props.className
      )}
    >
      {initial}
    </span>
  );
}
