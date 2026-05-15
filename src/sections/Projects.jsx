import React from "react";
import { FolderGit2 } from "lucide-react";
import SectionHead from "../components/SectionHead.jsx";
import { projects } from "../data/profile.js";

export default function Projects() {
  return (
    <section className="section" id="projects" data-section="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <SectionHead kicker="projects.run" title="Projects" icon={FolderGit2}>
          I like making strange projects at the intersection of{" "}
          <span className="font-bold text-[var(--secondary)]">hardware</span> and{" "}
          <span className="font-bold text-[var(--secondary)]">software</span> by night.
        </SectionHead>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project reveal" data-code={project.code} key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
              </div>
              <div className="project-foot">
                {project.foot.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
