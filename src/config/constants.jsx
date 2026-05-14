import { Mail, Globe, Briefcase, GitBranch } from "lucide-react";

export const servicesData = [
  {
    description:
      "I build production-ready TypeScript applications with clean architecture, maintainable code, and measurable business impact.",
    items: [
      {
        description: "(TypeScript, Python, Java)",
        title: "Primary Languages",
      },
      {
        description: "(React, Next.js, HTML, CSS, Tailwind CSS)",
        title: "Frontend Stack",
      },
      {
        description: "(Node.js, Express.js, Fastify, REST APIs)",
        title: "Application Layer",
      },
    ],
    title: "TypeScript Product Engineering",
  },
  {
    description:
      "I build TypeScript-first AI systems, with RAG workflows, semantic retrieval, and LLM-assisted document applications supported by Python and FastAPI when needed.",
    items: [
      {
        description:
          "(RAG Pipelines, Vector Search, Ollama, Semantic Retrieval)",
        title: "LLM Applications",
      },
      {
        description:
          "(TypeScript, API Integration, FastAPI, Python, Document QA)",
        title: "AI Backends",
      },
      {
        description: "(Prompt Iteration, Retrieval Tuning, Context Control)",
        title: "LLM Workflow Design",
      },
    ],
    title: "AI / LLM Systems",
  },
  {
    description:
      "I design backend systems, secure APIs, and reliable data workflows for high-availability web applications.",
    items: [
      {
        description:
          "(Node.js, Express.js, Fastify, Laravel, .NET Core, REST APIs)",
        title: "Backend Development",
      },
      {
        description: "(SQL Server, PostgreSQL, MySQL, Prisma ORM, Drizzle ORM)",
        title: "Databases & ORMs",
      },
      {
        description:
          "(ASP.NET Core Identity, API Security, Query Optimization, Debugging)",
        title: "API & Performance",
      },
    ],
    title: "Backend & Data Systems",
  },
  {
    description:
      "I handle deployment and developer tooling for production systems, from containerization to cloud hosting and CI workflows.",
    items: [
      {
        description: "(Docker, VPS Deployment, Render, Railway, Contabo)",
        title: "Deployment & Infrastructure",
      },
      {
        description: "(Git, GitHub Actions)",
        title: "DevOps & Collaboration",
      },
      {
        description: "(Power BI, Tableau, Excel)",
        title: "Data & Analytics",
      },
    ],
    title: "Delivery & Tooling",
  },
];

export const projectsData = [
  {
    bgImage: "https://picsum.photos/600/400?random=12",
    description:
      "Built a high-throughput TypeScript PDF rendering engine with Worker Threads and in-memory processing. Added Typst-based output, job queues, and concurrency control to improve throughput and scale toward 50+ PDF generations per second.",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Worker Threads",
      },
      {
        id: 3,
        name: "Typst",
      },
      {
        id: 4,
        name: "Node.js",
      },
    ],
    href: "https://github.com/nileshsehrawat/fluxprint",
    id: 7,
    image: "images/7.webp",
    name: "Flux Print",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=1",
    description:
      "RAG-based document assistant for querying technical PDF documents. Built a Python backend foundation and later rebuilt the orchestration in TypeScript for cleaner maintainability and easier scaling.",
    frameworks: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Next.js",
      },
      {
        id: 3,
        name: "FastAPI",
      },
      {
        id: 4,
        name: "Ollama LLM",
      },
      {
        id: 5,
        name: "TypeScript",
      },
    ],
    // href: "https://github.com/nileshsehrawat",
    id: 1,
    image: "images/1.webp",
    name: "Smart PDF Chatbot",
    subProjects: [
      {
        href: "https://github.com/nileshsehrawat/dmrc-chatbot-backend",
        id: "smart-pdf-python",
        name: "Python Backend Version",
        status: "Original",
      },
      {
        href: "https://github.com/nileshsehrawat/rag-backend-ts",
        id: "smart-pdf-ts",
        name: "TypeScript Rewrite",
        status: "Rebuilt",
      },
    ],
  },
  {
    bgImage: "https://picsum.photos/600/400?random=3",
    description:
      "Unified WillRise ecosystem composed of two connected products: a production waitlist platform and an in-progress monorepo productivity suite.",
    frameworks: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "Express.js",
      },
      {
        id: 3,
        name: "PostgreSQL",
      },
      {
        id: 4,
        name: "Prisma",
      },
      {
        id: 5,
        name: "Docker",
      },
      {
        id: 6,
        name: "React Native",
      },
      {
        id: 7,
        name: "Hono",
      },
      {
        id: 8,
        name: "Drizzle ORM",
      },
      {
        id: 9,
        name: "Kafka",
      },
    ],
    href: "https://waitlist.thewillrise.com",
    id: 3,
    image: "images/3.webp",
    name: "WillRise | AI-Powered Productivity Platform",
    preview: "https://waitlist.thewillrise.com",
    subProjects: [
      {
        href: "https://waitlist.thewillrise.com",
        id: "willrise-waitlist",
        name: "Welcome to Rise (Live)",
        status: "Production",
      },
      {
        href: "https://github.com/nileshsehrawat",
        id: "willrise-core",
        name: "WillRise Core Platform",
        status: "In Progress",
      },
    ],
  },
  {
    bgImage: "https://picsum.photos/600/400?random=2",
    description:
      "TypeScript toolchain that transforms text into generated waveform audio through deterministic processing pipelines.",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Bun",
      },
      {
        id: 3,
        name: "Web Audio API",
      },
    ],
    href: "https://github.com/nileshsehrawat/wavify",
    id: 2,
    image: "images/2.webp",
    name: "Wavify",
  },

  {
    bgImage: "https://picsum.photos/600/400?random=5",
    description:
      "Real-time private chat system focused on secure one-to-one messaging, low-latency delivery, and reliable session handling.",
    frameworks: [
      {
        id: 1,
        name: "Real-time Chat",
      },
      {
        id: 2,
        name: "Private Messaging",
      },
      {
        id: 3,
        name: "Elysia.js",
      },
      {
        id: 4,
        name: "WebSocket",
      },
      {
        id: 5,
        name: "Redis",
      },
      {
        id: 6,
        name: "Upstash",
      },
    ],
    href: "https://github.com/nileshsehrawat/realtime_private_chat",
    id: 5,
    image: "images/5.webp",
    name: "Realtime Private Chat",
  },
  // {
  //   bgImage: "https://picsum.photos/600/400?random=11",
  //   description:
  //     "Built a full-stack operations dashboard with React and ASP.NET Core 8 Web API to manage entities, track records, and run CSV bulk import/export workflows with secure auth and optimized EF Core queries.",
  //   frameworks: [
  //     {
  //       id: 1,
  //       name: "React",
  //     },
  //     {
  //       id: 2,
  //       name: "ASP.NET Core 8",
  //     },
  //     {
  //       id: 3,
  //       name: "EF Core",
  //     },
  //     {
  //       id: 4,
  //       name: "SQL Server",
  //     },
  //     {
  //       id: 5,
  //       name: "ASP.NET Identity",
  //     },
  //   ],
  //   href: "https://github.com/nileshsehrawat",
  //   id: 6,
  //   image: "https://picsum.photos/900/520?random=111",
  //   name: "OpsBoard - Full Stack Operations Dashboard",
  // },
];

export const socialLinks = [
  {
    href: "mailto:nileshbyte@gmail.com",
    icon: Mail,
    name: "Mail",
  },
  {
    href: "https://github.com/nileshsehrawat",
    icon: GitBranch,
    name: "Github",
  },
  {
    href: "https://linkedin.com/in/nilesh-sehrawat-a0a942322/",
    icon: Briefcase,
    name: "LinkedIn",
  },
  {
    href: "https://leetcode.com/u/nileshsehrawat/",
    icon: Globe,
    name: "LeetCode",
  },
];

export const educationData = {
  degree: "Bachelor's in Computer Science",
  // cgpa: "8.16 / 10",
  timeframe: "2022 - 2026",
  university: "PDM University",
};

export const phoneNumber = "+91 8950525050";

export const workExperienceData = [
  {
    company: "NotionZoa",
    description: [
      "Contributed to a modular hotel-platform architecture initiative by developing reusable frontend component systems designed to accelerate AI-assisted generation and customization of high-feature web applications for hospitality businesses.",
      "Reduced booking friction by delivering high-performance features for a hotel service-management app, directly impacting user conversion across web and mobile platforms.",
      "Delivered product modules using React, Laravel, and REST APIs in sprint-based releases.",
      "Optimized backend throughput by designing PostgreSQL workflows and REST endpoints that handled business-critical modules for ticket management and technician scheduling.",
      "Accelerated time-to-market for an industrial HVAC servicing platform by implementing a modular technician availability system, reducing manual scheduling overhead.",
      "Designed backend endpoints and PostgreSQL workflows for business-critical modules.",
      "Optimized critical database queries and API response times by around 35%.",
      "Integrated APIs into a Flutter app and implemented offline caching using Hive.",
      "Supported admin dashboard flows for reviews, support operations, and end-to-end service lifecycle management.",
      "Debugged production incidents and resolved API-level failures with root-cause analysis.",
    ],
    duration: "Jul 2025 - Jan 2026",
    position: "SDE",
  },
  {
    company: "Delhi Metro Rail Corporation (DMRC)",
    description: [
      "Automated technical knowledge retrieval by engineering a RAG-based chatbot, eliminating manual document searching across thousands of operational PDFs.",
      "Improved decision-making accuracy by 40% through the implementation of vector search pipelines that minimized LLM hallucinations.",
      "Built modular backend APIs and integrated them with a real-time React/Next.js document search interface.",
      "Modernized internal analytics capability by integrating Power BI dashboards with SAP ERP data, providing leadership with real-time operational insights.",
    ],
    duration: "May 2025 - Jul 2025",
    position: "SDE Intern",
  },
  {
    company: "Business Web Solution",
    description: [
      "Standardized frontend development for an EdTech platform by creating a library of reusable React components, reducing UI development time for future modules.",
      "Minimized production downtime by taking ownership of backend bug fixes and API contract validation within the first 90 days of the internship.",
      // "Worked with C# and .NET fundamentals for supervised feature-level updates, including endpoint and validation fixes.",
      // "Participated in sprint planning, QA handoff, and release cycles to ship production features on schedule.",
    ],
    duration: "Jan 2023 - Jan 2024",
    position: "SDE Intern",
  },
];

export const detailsData = [
  {
    label: "Full Name",
    value: "Nilesh",
  },
  {
    label: "Email",
    value: socialLinks[0].href.replace("mailto:", ""),
  },
  {
    label: "Phone Number",
    value: phoneNumber,
  },
  {
    label: "Location",
    value: "India",
  },
  {
    label: "LinkedIn",
    value: socialLinks[2].href,
  },
  {
    label: "LeetCode",
    value: "https://leetcode.com/u/nileshsehrawat/",
  },
  {
    label: "GitHub",
    value: socialLinks[1].href,
  },
  {
    label: "Portfolio Website",
    value: "https://nileshsehrawat.vercel.app",
  },
  {
    label: "Resume",
    value: "/resume",
  },
  {
    label: "Cover Letter (Template)",
    value: `I am writing to express my interest in an AI/LLM-focused software engineer role. I have hands-on experience shipping production features in TypeScript-led web applications, building RAG-based document assistants, integrating LLM workflows, and supporting backend API modules across internship and SDE roles. My recent work includes vector search, FastAPI integrations, secure backend workflow design, query optimization, and reliability-focused debugging. I am comfortable working across TypeScript, React, Next.js, Python, and APIs to build production-ready AI applications.`,
  },
  {
    label: "Notice Period",
    value: "Immediately Available",
  },
];

export const navbarLinks = [
  {
    image: "https://picsum.photos/600/400?random=1",
    link: "home",
    text: "home",
  },
  {
    image: "https://picsum.photos/600/400?random=2",
    link: "services",
    text: "services",
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    link: "about",
    text: "about",
  },
  {
    image: "https://picsum.photos/600/400?random=4",
    link: "work",
    text: "work",
  },
  {
    image: "https://picsum.photos/600/400?random=5",
    link: "contact",
    text: "contact",
  },
];
