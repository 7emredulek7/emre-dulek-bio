export const navItems = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export const terminalRows = [
  ["role", "Software Engineer - Backend"],
  ["now", "Armut Technology, remote"],
  ["systems", "Go, .NET Core, AWS, Docker, Grafana"],
  ["education", "Computer Engineering + Electrical & Electronics double major"],
];

export const experienceEntries = [
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

export const projects = [
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

export const educationRows = [
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

export const technicalRows = [
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

export const email = "7emredulek7@gmail.com";
