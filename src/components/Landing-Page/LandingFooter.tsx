import { Logo } from "./Logo";

export function LandingFooter() {
  return (
    <footer className="relative mt-8 border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Logo />
        <p className="text-sm text-muted-foreground">© 2026 CommLab</p>
      </div>
    </footer>
  );
}
