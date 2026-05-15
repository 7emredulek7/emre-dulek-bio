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
  ["education", "Computer Engineering | Electrical & Electronics Engineering"],
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
    tags: ["Go", ".NET Core", "AWS CDK", "Lambda", "SNS/SQS", "S3", "CI/CD", "Docker", "Grafana", "MSSQL", "MongoDB", "Redis", "Unit testing", "Integration testing", "Testcontainers"],
  },
  {
    id: "digitus",
    company: "Digitus Technology",
    tabMeta: "Backend engineer / remote",
    dates: "February 2024 - November 2025",
    location: "Remote",
    title: "Software Engineer - Backend",
    body: "Built monolithic and microservice backend solutions with .NET Core, SQL and NoSQL databases, plus deployment, monitoring, logging, and client-facing delivery work for systems serving 100,000+ users.",
    tags: [".NET Core", "CQRS", "CLEAN Architecture", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Docker", "AWS", "Unit testing"],
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
    title: "Electrical & Electronics Intern - Hardware Design",
    body: "Designed and developed an EMI/EMC filter for noise filtering and power protection, bringing the hardware side of systems thinking into the same engineering practice.",
    tags: ["Altium Designer", "LTSpice", "PCB"],
  },
];

export const projects = [
  {
    code: "01",
    title: "HTTP Protocol from Stratch",
    body: "A minimal HTTP/1.1 server implementation in Go built completely from scratch using TCP — without using Go’s net/http package. The project focuses on understanding how web servers work internally by handling low-level network communication, request parsing, routing, headers, and response generation manually.",
    foot: ["Go", "TCP", "HTTP"],
  },
  {
    code: "02",
    title: "Mechanical Keyboard from Stratch",
    body: "A custom mechanical keyboard designed and built completely from scratch! The project included designing the PCB in KiCAD, manufacturing the hardware, implementing and flashing custom firmware using QMK, and modeling the keyboard case for 3D printing using Blender.",
    foot: ["KiCAD", "PCB", "Firmware", "C++", "3D Design"],
  },
];

export const educationRows = [
  {
    term: "2020-24",
    degree: "B.S. Computer Engineering",
    school: "Izmir University of Economics",
    highlights: ["Highest grade in department", "GPA 3.67"],
  },
  {
    term: "2021-25",
    degree: "B.S. Electrical & Electronics Engineering",
    school: "Izmir University of Economics",
    highlights: ["Double major", "GPA 3.77"],
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
      "AWS CDK, Lambda, ECR/EC2, SNS/SQS, Azure, PostgreSQL, MySQL, MSSQL, MongoDB, Redis, Elasticsearch, Grafana",
  },
  {
    term: "Design",
    detail:
      "Distributed systems, microservices, event-driven architecture, design patterns, OOP/SOLID, DDD, CLEAN architecture, CQRS",
  },
  {
    term: "Testing",
    detail: "Unit testing, integration testing, XUnit, Testcontainers, Cucumber",
  },
];

export const email = "7emredulek7@gmail.com";
