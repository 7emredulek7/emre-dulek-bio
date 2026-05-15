import React from "react";
import Topbar from "./components/Topbar.jsx";
import useRevealAndNavObservers from "./hooks/useRevealAndNavObservers.js";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Stack from "./sections/Stack.jsx";

export default function App() {
  useRevealAndNavObservers();

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="relative z-[1]">
        <Topbar />
        <main id="content" className="bg-[var(--surface)]">
          <Hero />
          <Experience />
          <Projects />
          <Stack />
          <Contact />
        </main>
      </div>
    </>
  );
}
