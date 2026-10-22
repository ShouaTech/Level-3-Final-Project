import { Link, Outlet } from "react-router";
import { Logo } from "@/components/Landing-Page/Logo";

// Shared frame for the public auth pages (Log In, Sign Up): logo, background
// glow, and a centered column where the matched page renders.
export function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-125 rounded-full bg-primary/15 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-[-10%] size-180 rounded-full bg-primary/10 blur-[150px]"
      />

      <header className="relative px-6 py-5">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>
      </header>

      <main className="relative flex justify-center px-6 pt-8 pb-16 md:pt-16">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
