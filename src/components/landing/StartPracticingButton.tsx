import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// The large glowing call-to-action used in the hero and at the bottom of the page.
export function StartPracticingButton() {
  return (
    <Button
      asChild
      className="h-12 shrink-0 rounded-xl px-7 text-base shadow-lg shadow-primary/40"
    >
      <Link to="/sign-up">
        Start Practicing
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}
