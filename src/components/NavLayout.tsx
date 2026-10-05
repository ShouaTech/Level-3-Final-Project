import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function NavLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
