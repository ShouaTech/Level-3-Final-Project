import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function LandingHeader() {
  return (
    <header className="flex items-center justify-between py-6">
      <Logo />

      <nav className="flex items-center gap-3">
        <Button
          asChild
          variant="outline"
          className="hidden h-10 rounded-xl px-5 text-sm sm:inline-flex"
        >
          <Link to="/log-in">Log In</Link>
        </Button>
        <Button
          asChild
          className="h-10 rounded-xl px-5 text-sm shadow-lg shadow-primary/30"
        >
          <Link to="/sign-up">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}
