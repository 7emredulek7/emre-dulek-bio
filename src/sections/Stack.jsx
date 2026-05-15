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
          <div className="stack-row" key={row.term}>
            <dt>{row.term}</dt>
            <dd>{row.detail}</dd>
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
          Broad enough to move across product layers, focused enough to keep backend systems reliable.
        </SectionHead>

        <div className="skills-panel">
          <StackBoard title="Education" rows={educationRows} />
          <StackBoard title="Technical interests" rows={technicalRows} />
        </div>
      </div>
    </section>
  );
}
