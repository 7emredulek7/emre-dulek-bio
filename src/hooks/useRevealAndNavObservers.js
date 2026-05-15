import { useEffect } from "react";

export default function useRevealAndNavObservers() {
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          const target = link.getAttribute("href")?.replace("#", "");
          link.setAttribute("aria-current", String(target === visible.target.id));
        });
      },
      {
        threshold: [0.22, 0.44, 0.66],
        rootMargin: "-18% 0px -54% 0px",
      },
    );

    sections.forEach((section) => navObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);
}
