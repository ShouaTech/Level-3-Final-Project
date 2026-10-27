import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { FormField } from "../FormField";
import { AuthCard } from "./AuthCard";

export function LogIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Continue your practice session.
        </p>
      </div>

      <AuthCard>
        <form className="space-y-5" onSubmit={(e) => {
          e.preventDefault();
          navigate("/onboarding");
        }}>
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
            autoComplete="current-password"
          />

          <Button
            type="submit"
            className="mt-3 h-12 w-full rounded-xl text-base shadow-lg shadow-primary/30"
          >
            Log In
          </Button>

        </form>
      </AuthCard>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-violet-400 hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
