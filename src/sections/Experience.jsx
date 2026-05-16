import React, { useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionHead from "../components/SectionHead.jsx";
import { experienceEntries } from "../data/profile.js";

export default function Experience() {
  const [activeId, setActiveId] = useState(experienceEntries[0].id);
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef({});
  const activeEntry = experienceEntries.find((entry) => entry.id === activeId) ?? experienceEntries[0];

  const motionTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.36, ease: [0.22, 1, 0.36, 1] };

  const selectEntry = (id, shouldFocus = false) => {
    setActiveId(id);

    window.requestAnimationFrame(() => {
      const tab = tabRefs.current[id];

      if (shouldFocus) tab?.focus();
      tab?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "nearest",
      });
    });
  };

  const moveTab = (currentIndex, key) => {
    const nextKeys = ["ArrowDown", "ArrowRight"];
    const prevKeys = ["ArrowUp", "ArrowLeft"];
    let nextIndex = currentIndex;

    if (nextKeys.includes(key)) nextIndex = (currentIndex + 1) % experienceEntries.length;
    if (prevKeys.includes(key)) nextIndex = (currentIndex - 1 + experienceEntries.length) % experienceEntries.length;
    if (key === "Home") nextIndex = 0;
    if (key === "End") nextIndex = experienceEntries.length - 1;

    return nextIndex;
  };

  return (
    <section className="section" id="experience" data-section="experience" aria-labelledby="experience-title">
      <div className="section-inner">
        <SectionHead kicker="experience.log" title="Experience" icon={Briefcase}>
          I’m a software engineer based in <span className="font-bold text-[var(--secondary)]">Türkiye</span>. I enjoy working close to the system level — infrastructure, observability, and architecture decisions.
        </SectionHead>

        <div className="experience-switcher reveal">
          <div className="experience-tabs" role="tablist" aria-label="Experience entries">
            {experienceEntries.map((entry, index) => {
              const selected = entry.id === activeId;

              return (
                <button
                  className="experience-tab"
                  id={`tab-${entry.id}`}
                  key={entry.id}
                  ref={(node) => {
                    if (node) tabRefs.current[entry.id] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${entry.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectEntry(entry.id)}
                  onKeyDown={(event) => {
                    const nextIndex = moveTab(index, event.key);
                    if (nextIndex === index) return;
                    event.preventDefault();
                    const nextEntry = experienceEntries[nextIndex];
                    selectEntry(nextEntry.id, true);
                  }}
                >
                  {selected && (
                    <motion.span
                      className="experience-tab-active"
                      layoutId="experience-tab-active"
                      transition={motionTransition}
                    />
                  )}
                  <span className="experience-tab-orb" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="experience-tab-copy">
                    <strong>{entry.company}</strong>
                    <span>{entry.tabMeta}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="experience-panels">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                className="experience-panel"
                id={`panel-${activeEntry.id}`}
                key={activeEntry.id}
                role="tabpanel"
                aria-labelledby={`tab-${activeEntry.id}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={motionTransition}
              >
                <motion.div
                  className="experience-meta"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...motionTransition, delay: shouldReduceMotion ? 0 : 0.05 }}
                >
                  <span>{activeEntry.dates}</span>
                  <span>{activeEntry.location}</span>
                </motion.div>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...motionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                >
                  <h3>{activeEntry.title}</h3>
                  <p>{activeEntry.body}</p>
                </motion.div>
                {activeEntry.tags.length > 0 && (
                  <motion.div
                    className="tags"
                    aria-label={`Technologies used at ${activeEntry.company}`}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...motionTransition, delay: shouldReduceMotion ? 0 : 0.15 }}
                  >
                    {activeEntry.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
