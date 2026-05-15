import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import SectionHead from "../components/SectionHead.jsx";
import { experienceEntries } from "../data/profile.js";

export default function Experience() {
  const [activeId, setActiveId] = useState(experienceEntries[0].id);
  const activeEntry = experienceEntries.find((entry) => entry.id === activeId) ?? experienceEntries[0];

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
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${entry.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(entry.id)}
                  onKeyDown={(event) => {
                    const nextIndex = moveTab(index, event.key);
                    if (nextIndex === index) return;
                    event.preventDefault();
                    const nextEntry = experienceEntries[nextIndex];
                    setActiveId(nextEntry.id);
                    window.requestAnimationFrame(() => {
                      document.getElementById(`tab-${nextEntry.id}`)?.focus();
                    });
                  }}
                >
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
            {experienceEntries.map((entry) => {
              const hidden = entry.id !== activeEntry.id;

              return (
                <article
                  className="experience-panel"
                  id={`panel-${entry.id}`}
                  key={entry.id}
                  role="tabpanel"
                  aria-labelledby={`tab-${entry.id}`}
                  hidden={hidden}
                >
                  <div className="experience-meta">
                    <span>{entry.dates}</span>
                    <span>{entry.location}</span>
                  </div>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.body}</p>
                  </div>
                  {entry.tags.length > 0 && (
                    <div className="tags" aria-label={`Technologies used at ${entry.company}`}>
                      {entry.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
