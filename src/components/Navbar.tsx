import { NavLink } from "react-router";

const links = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/practice-library", label: "Practice Library" },
  { path: "/session-history", label: "My Sessions" },
  { path: "/settings", label: "Settings" },
];

export function Navbar() {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({isActive}) => isActive ? "font-bold shadow-md" : ""}
        >{link.label}</NavLink>
      ))}
    </>
  );
}
