import React from "react";
import { Send, Terminal } from "lucide-react";
import { email, terminalRows } from "../data/profile.js";

export default function Hero() {
  return (
    <section className="hero" id="top" data-section="top" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-main reveal">
          <p className="eyebrow">emre --profile</p>
          <h1 id="hero-title">Emre Dülek</h1>
          <p className="hero-copy">
            Software engineer focused on backend systems and distributed architecture. I build microservices, cloud infrastructure, and scalable products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">
              <Terminal aria-hidden="true" />
              <span>Experience</span>
            </a>
            <a className="button secondary" href={`mailto:${email}`}>
              <Send aria-hidden="true" />
              <span>Say hi!</span>
            </a>
          </div>
        </div>

        <aside className="terminal-card reveal" aria-label="Profile summary terminal">
          <div className="terminal-bar">
            <span className="dot" aria-hidden="true"></span>
            <span className="dot" aria-hidden="true"></span>
            <span className="dot" aria-hidden="true"></span>
            /usr/emre/profile
          </div>
          <div className="terminal-body">
            {terminalRows.map(([key, value]) => (
              <div className="terminal-line" key={key}>
                <span className="terminal-key">{key}</span>
                <span className="terminal-value">{value}</span>
              </div>
            ))}
            <div className="terminal-line">
              <span className="terminal-key">prompt</span>
              <span className="terminal-value">
                clear code, clear APIs, clear ownership<span className="cursor" aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
