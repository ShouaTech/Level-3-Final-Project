import type { ReactNode } from "react";
import { AuthToggle } from "./AuthToggle";

// The card on the Log In and Sign Up pages: the toggle at the top, then
// whatever form the page passes in as children.
type AuthCardType = {
  children: ReactNode;
};

export function AuthCard(props: AuthCardType) {
  return (
    <div className="rounded-3xl border bg-card/80 p-8 shadow-2xl shadow-black/40">
      <AuthToggle />
      <div className="mt-8">{props.children}</div>
    </div>
  );
}
