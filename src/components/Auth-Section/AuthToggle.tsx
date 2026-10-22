import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

const links = [
    { path: "/log-in", label: "Log In" },
    { path: "/sign-up", label: "Sign Up"}
];

export function AuthToggle() {
    return(
        <div className="bg-muted rounded-xl p-1 grid grid-cols-2">
        {links.map((link) => (
            <NavLink
            key={link.path}
            to={link.path}
            className={({isActive}) => cn("rounded-lg border py-2 text-center text-sm transition-colors", isActive ? "border-primary/40 bg-primary/15 text-violet-300" : "border-transparent text-muted-foreground hover:text-foreground") }
            >{link.label}</NavLink>
        ))}
        </div>
    )
}