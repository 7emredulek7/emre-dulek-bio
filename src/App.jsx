import React, { useEffect, useState } from "react";

const navItems = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

const experienceEntries = [
  {
    id: "armut",
    company: "Armut Technology",
    tabMeta: "Backend engineer / remote",
    dates: "November 2025 - Current",
    location: "Remote",
    title: "Software Engineer - Backend",
    body: "Designs and develops microservice and event-driven backend systems with Go and .NET Core, manages AWS infrastructure with CDK, and builds RESTful APIs for products reaching 20,000,000+ real users.",
    tags: ["Go", ".NET Core", "AWS CDK", "Lambda", "SNS/SQS", "Docker", "Grafana"],
  },
  {
    id: "digitus",
    company: "Digitus Technology",
    tabMeta: "Backend engineer / remote",
    dates: "February 2024 - November 2025",
    location: "Remote",
    title: "Software Engineer - Backend",
    body: "Built monolithic and microservice backend solutions with .NET Core, SQL and NoSQL databases, plus deployment, monitoring, logging, and client-facing delivery work for systems serving 100,000+ users.",
    tags: ["CQRS", "ONION", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "OAuth2/JWT"],
  },
  {
    id: "aselsan",
    company: "ASELSAN",
    tabMeta: "Linux kernel intern / on-site",
    dates: "July 2023 - August 2023",
    location: "On-site",
    title: "Computer Engineering Intern - Linux Kernel Development",
    body: "Developed Linux device drivers and kernel modules, connecting user-space applications with kernel-space behavior through ioctl, rootfs, and sysfs.",
    tags: ["Linux", "C/C++", "ARM", "Qemu", "Petalinux"],
  },
  {
    id: "tusas",
    company: "Turkish Aerospace",
    tabMeta: "Hardware design intern / on-site",
    dates: "August 2024 - September 2024",
    location: "On-site",
    title: "Electrical and Electronics Engineering Intern - Hardware Design",
    body: "Designed and developed an EMI/EMC filter for noise filtering and power protection, bringing the hardware side of systems thinking into the same engineering practice.",
    tags: [],
  },
];

const projects = [
  {
    code: "01",
    kicker: "co-founder / medical app",
    title: "Care+",
    body: "Startup project formally supported by Dokuz Eylül University's pre-incubation center. Emre designed, built, and tested RESTful APIs with ASP.NET, MSSQL, and React Native, then deployed and managed the server and database on Azure.",
    foot: ["ASP.NET / MSSQL / React Native", "Azure Web Services"],
  },
  {
    code: "02",
    kicker: "education / project management",
    title: "TPS",
    body: "A project management tool developed with a professor and currently used by students in coursework and lectures. The value is direct: a classroom workflow turned into a working product surface.",
    foot: ["Project management tool", "Used in lectures"],
  },
];

const educationRows = [
  {
    term: "2020-24",
    detail:
      "B.S. Computer Engineering, Izmir University of Economics. Graduated with the highest grade in department. GPA 3.67.",
  },
  {
    term: "2021-25",
    detail:
      "B.S. Electrical and Electronics Engineering double major, Izmir University of Economics. GPA 3.77.",
  },
];

const technicalRows = [
  {
    term: "Languages",
    detail: "Go, C/C++, C#/.NET, Python/Django, Java, JavaScript/Node.js",
  },
  {
    term: "Cloud & data",
    detail:
      "AWS CDK, Lambda, ECR/EC2, SNS/SQS, Azure, PostgreSQL, MySQL, MSSQL, MongoDB, Redis, Elasticsearch",
  },
  {
    term: "Design",
    detail:
      "OOP/SOLID, design patterns, CLEAN/ONION architecture, CQRS, microservices, event-driven architecture, webhooks",
  },
  {
    term: "Testing",
    detail: "Unit testing, integration testing, XUnit, Testcontainers",
  },
];

function Topbar() {
  return (
    <header className="topbar" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Emre Dülek home">
        ED
      </a>
      <nav className="nav-links" aria-label="Sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} aria-current="false">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="status-chip" aria-label="Current role">
        backend engineer
      </div>
    </header>
  );
}

function Hero() {
  const terminalRows = [
    ["role", "Software Engineer - Backend"],
    ["now", "Armut Technology, remote"],
    ["systems", "Go, .NET Core, AWS, Docker, Grafana"],
    ["education", "Computer Engineering + Electrical & Electronics double major"],
  ];

  return (
    <section className="hero" id="top" data-section="top" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-main reveal">
          <p className="eyebrow">emre --profile</p>
          <h1 id="hero-title">Emre Dülek</h1>
          <p className="hero-copy">
            Backend software engineer building APIs, microservices, and cloud systems that stay
            understandable after they ship.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">
              Read the system log
            </a>
            <a className="button secondary" href="mailto:7emredulek7@gmail.com">
              Contact Emre
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

function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 id={`${title.toLowerCase()}-title`}>{title}</h2>
      </div>
      <p className="section-note">{children}</p>
    </div>
  );
}

function Experience() {
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
        <SectionHead kicker="experience.log" title="Experience">
          One role at a time: the current backend work first, earlier systems work one click away.
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
                  <strong>{entry.company}</strong>
                  <span>{entry.tabMeta}</span>
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

function Projects() {
  return (
    <section className="section" id="projects" data-section="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <SectionHead kicker="projects.run" title="Projects">
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

function Stack() {
  return (
    <section className="section" id="stack" data-section="stack" aria-labelledby="stack-title">
      <div className="section-inner">
        <SectionHead kicker="stack.inspect" title="Stack">
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

function Contact() {
  const [copyLabel, setCopyLabel] = useState("ready");
  const email = "7emredulek7@gmail.com";

  const copyEmail = async () => {
    setCopyLabel("copied");

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      setCopyLabel(email);
    }

    window.setTimeout(() => {
      setCopyLabel("ready");
    }, 1800);
  };

  return (
    <section className="section contact" id="contact" data-section="contact" aria-labelledby="contact-title">
      <div className="section-inner">
        <div className="reveal">
          <p className="section-kicker">contact.exec</p>
          <h2 id="contact-title">Contact</h2>
          <p className="contact-copy">
            For recruiting, engineering conversations, or friend-to-friend catchups, email is the cleanest
            entry point. GitHub and LinkedIn can sit beside it once the public URLs are shared.
          </p>
        </div>

        <aside className="contact-card reveal" aria-label="Contact options">
          <a className="contact-link" href={`mailto:${email}`}>
            <span>email</span>
            <strong>{email}</strong>
          </a>
          <a className="contact-link" href="tel:+905350142136">
            <span>phone</span>
            <strong>+90 535 014 21 36</strong>
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            <span>copy email</span>
            <strong>{copyLabel}</strong>
          </button>
          <p className="small-print">Public GitHub / LinkedIn URLs can be added once shared.</p>
        </aside>
      </div>
    </section>
  );
}

function useRevealAndNavObservers() {
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

export default function App() {
  useRevealAndNavObservers();

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <Topbar />
        <main id="content">
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
