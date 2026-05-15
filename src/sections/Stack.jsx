import React from "react";
import { Layers } from "lucide-react";
import SectionHead from "../components/SectionHead.jsx";
import { educationRows, technicalRows } from "../data/profile.js";

function StackBoard({ title, rows }) {
  return (
    <div className="stack-board reveal">
      <h3>{title}</h3>
      <dl className="stack-list">
        {rows.map((row) => (
          <div className={row.degree ? "stack-row stack-row--education" : "stack-row"} key={row.term}>
            <dt>{row.term}</dt>
            <dd>
              {row.degree ? (
                <div className="education-entry">
                  <strong>{row.degree}</strong>
                  <span>{row.school}</span>
                  <div className="education-highlights" aria-label={`${row.degree} highlights`}>
                    {row.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>
              ) : (
                row.detail
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="section" id="stack" data-section="stack" aria-labelledby="stack-title">
      <div className="section-inner">
        <SectionHead kicker="stack.inspect" title="Stack" icon={Layers}>
          Studied both <span className="font-bold text-[var(--secondary)]">computer</span> and{" "}
          <span className="font-bold text-[var(--secondary)]">electrical & electronics</span> engineering because one
          degree wasn’t painful enough.
        </SectionHead>

        <div className="skills-panel">
          <StackBoard title="Education" rows={educationRows} />
          <StackBoard title="Technical interests" rows={technicalRows} />
        </div>
      </div>
    </section>
  );
}
