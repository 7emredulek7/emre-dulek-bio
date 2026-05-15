import React from "react";
import { navItems } from "../data/profile.js";

export default function Topbar() {
  return (
    <header className="topbar" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Emre Dülek home">
        ED
      </a>
      <nav className="nav-links" aria-label="Sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} aria-current="false">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="status-chip" aria-label="Current role">
        software engineer
      </div>
    </header>
  );
}
