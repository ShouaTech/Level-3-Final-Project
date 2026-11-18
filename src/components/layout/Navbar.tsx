import { Link, NavLink } from "react-router";
import { BookOpen, History, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../Logo";
import { UserAvatar } from "../UserAvatar";
import { mockUser } from "../../MockData";
import { useNavigate } from "react-router";

const links = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/practice-library", label: "Practice Library", icon: BookOpen },
  { path: "/session-history", label: "My Sessions", icon: History },
  { path: "/settings", label: "Settings", icon: Settings },
];

export function Navbar() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/");
  }

  return (
    <aside className="border-b p-4 md:sticky md:top-0 md:flex md:h-screen md:w-60 md:shrink-0 md:flex-col md:border-r md:border-b-0">
      <div className="flex items-center justify-between gap-4">
        <Link to="/dashboard" className="inline-block">
          <Logo />
        </Link>
        <Button
          type="button"
          variant="ghost"
          onClick={handleLogout}
          aria-label="Log out"
          className="size-9 rounded-xl md:hidden"
        >
          <LogOut className="size-4" />
        </Button>
      </div>

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

      <div className="mt-auto hidden rounded-xl border bg-card/60 p-3 md:block">
        <div className="flex items-center gap-3">
          <UserAvatar name={mockUser.name} />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{mockUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          onClick={handleLogout}
          className="mt-2 h-9 w-full justify-start rounded-lg px-2 text-sm text-muted-foreground"
        >
          <LogOut className="size-4" />
          Log out
        </Button>
      </div>
    </aside>
  );
}
