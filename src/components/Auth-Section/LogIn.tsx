import { AuthCard } from "./AuthCard";

export function LogIn() {
    return(
        <div className="mx-auto max-w-sm text-center">
            <h1 className="font-display text-4xl tracking-tight md:text-5xl">Welcome Back</h1>
            <p className="mt-2 text-sm text-muted-foreground">Continue your practice session.</p>
        <AuthCard />
        </div>
    )
}