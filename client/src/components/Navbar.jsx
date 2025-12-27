import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket } from "./icons.jsx";

export default function Navbar() {
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/todo", label: "Todo" },
    { to: "/notes", label: "Notes" },
    { to: "/mytube", label: "MyTube" },
    { to: "/store", label: "Store" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-ink">
          <Rocket className="w-6 h-6" />
          <span className="font-semibold">Mega App</span>
        </div>

        <nav className="ml-auto flex gap-1 relative">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                "px-3 py-2 rounded-lg text-sm " +
                (pathname === l.to ? "text-primary font-semibold" : "text-slate-600 hover:text-ink")
              }
            >
              {l.label}
              {pathname === l.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-0.5 bg-primary rounded-full mt-2"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
