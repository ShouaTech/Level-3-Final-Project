import { Link, NavLink } from "react-router";
import { BookOpen, History, LayoutDashboard, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../Logo";

const links = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/practice-library", label: "Practice Library", icon: BookOpen },
  { path: "/session-history", label: "My Sessions", icon: History },
  { path: "/settings", label: "Settings", icon: Settings },
];

export function Navbar() {
  return (
    <aside className="border-b p-4 md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0">
      <Link to="/dashboard" className="inline-block">
        <Logo />
      </Link>

      <nav className="mt-4 flex gap-1 overflow-x-auto md:mt-8 md:flex-col">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "flex shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "border-primary/40 bg-primary/15 text-violet-300"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )
            }
          >
            <link.icon className="size-4" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
