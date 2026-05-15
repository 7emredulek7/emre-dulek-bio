import React from "react";
import { FolderGit2 } from "lucide-react";
import SectionHead from "../components/SectionHead.jsx";
import { projects } from "../data/profile.js";

export default function Projects() {
  return (
    <section className="section" id="projects" data-section="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <SectionHead kicker="projects.run" title="Projects" icon={FolderGit2}>
          Two projects from the CV show the same preference: build something that people can actually use,
          then keep the architecture grounded.
        </SectionHead>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project reveal" data-code={project.code} key={project.title}>
              <div>
                <p className="section-kicker">{project.kicker}</p>
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
