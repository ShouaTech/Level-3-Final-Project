import { AuthToggle } from "./AuthToggle";

export function AuthCard() {
  return (
    <div className="border rounded-3xl padding">
      <AuthToggle />

      <label>Email address</label>
      <input type="email" className="h-12 w-full rounded-xl border border-input bg-muted/40 px-4 text-base placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30" placeholder="you@example.com"/>
      <label>Password</label>
      <input type="password" className="h-12 w-full rounded-xl border border-input bg-muted/40 px-4 text-base placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30" placeholder="********"/>

      <button className="border px-15 py-5 rounded-2xl m-5">Log In</button>
    </div>
  );
}
