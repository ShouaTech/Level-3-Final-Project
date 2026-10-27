import { Link, useNavigate } from "react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "../FormField";
import { AuthCard } from "./AuthCard";

const perks = [
  "Free to start — no credit card required",
  "AI feedback after your first session",
  "Progress tracked from day one",
];

export function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">
          Get started
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Create your free account.
        </p>
      </div>

      <AuthCard>
        {/* Real sign-up comes with Supabase Auth. Until then, stop the browser
            from reloading the page when the form is submitted. */}
        <form className="space-y-5" onSubmit={(e) => {
          e.preventDefault();
          navigate("/onboarding");
          }}>
          <FormField
            id="name"
            label="Full name"
            type="text"
            placeholder="Marcus Chen"
            autoComplete="name"
          />
          <FormField
            id="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            className="mt-3 h-12 w-full rounded-xl text-base shadow-lg shadow-primary/30"
          >
            Create Account
          </Button>
        </form>

        <ul className="mt-8 space-y-3">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-violet-300">
                <Check className="size-3" />
              </span>
              {perk}
            </li>
          ))}
        </ul>
      </AuthCard>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/log-in" className="text-violet-400 hover:underline">
          Log in
        </Link>
      </p>
    </>
  );
}
