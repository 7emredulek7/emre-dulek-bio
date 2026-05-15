import React from "react";

export default function SectionHead({ kicker, title, icon: Icon, children }) {
  return (
    <div className="section-head reveal">
      <div>
        <p className="section-kicker">
          {Icon && <Icon aria-hidden="true" />}
          <span>{kicker}</span>
        </p>
        <h2 id={`${title.toLowerCase()}-title`}>{title}</h2>
      </div>
      <p className="section-note">{children}</p>
    </div>
  );
}
