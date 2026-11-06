import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function NavLayout() {
  return (
    <div className="min-h-screen md:flex">
      <Navbar />
      <main className="min-w-0 flex-1 px-6 py-8 md:px-10 md:py-10">
        <Outlet />
      </main>
    </div>
  );
}
