import { Mail, Globe, Briefcase, GitBranch } from "lucide-react";

export const servicesData = [
  {
    description:
      "I build scalable full-stack web products using modern JavaScript frameworks and strong engineering fundamentals in architecture and system design.",
    items: [
      {
        description: "(Java, JavaScript, TypeScript)",
        title: "Programming Languages",
      },
      {
        description: "(React, Next.js, HTML, CSS, Tailwind CSS)",
        title: "Frontend Development",
      },
      {
        description:
          "(Data Structures, Backend Architecture, Scalable System Design)",
        title: "Core Engineering",
      },
    ],
    title: "Software Engineering",
  },
  {
    description:
      "I design and develop backend systems, secure APIs, and database workflows for production-ready platforms with maintainable service architecture.",
    items: [
      {
        description: "(Node.js, Express.js, Fastify, Laravel, REST APIs)",
        title: "Backend Development",
      },
      {
        description: "(PostgreSQL, Prisma ORM, Drizzle ORM, ChromaDB)",
        title: "Databases & ORMs",
      },
      {
        description: "(Authentication, API Security, Query Optimization)",
        title: "API & Performance",
      },
    ],
    title: "Backend & Data Systems",
  },
  {
    description:
      "I build mobile and AI-powered experiences, including RAG pipelines, semantic search systems, and production mobile app integrations.",
    items: [
      {
        description: "(Flutter, API Integration, Hive Offline Caching)",
        title: "Mobile Development",
      },
      {
        description: "(RAG Pipelines, Vector Search, Ollama Integration)",
        title: "AI Systems",
      },
      {
        description: "(FastAPI, Real-time Document Query Interfaces)",
        title: "AI Platform APIs",
      },
    ],
    title: "Mobile & AI Platforms",
  },
  {
    description:
      "I handle deployment and tooling for production systems, from containerization to cloud hosting and workflow automation.",
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
    bgImage: "https://picsum.photos/600/400?random=1",
    description:
      "AI-powered assistant that answers questions from uploaded PDF documents using vector embeddings and semantic retrieval pipelines.",
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
    ],
    href: "https://github.com/nileshsehrawat",
    id: 1,
    image: "images/1.webp",
    name: "Smart PDF Chatbot",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=2",
    description:
      "An experimental tool that transforms plain text into unique, algorithmically generated waveform audio inspired by Angelcore music.",
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
    bgImage: "https://picsum.photos/600/400?random=3",
    description:
      "Production-ready waitlist platform deployed on VPS with secure APIs, scalable PostgreSQL schema design, and hardened middleware.",
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
    ],
    href: "https://waitlist.thewillrise.com",
    id: 3,
    image: "images/3.webp",
    name: "Welcome to Rise",
    preview: "https://waitlist.thewillrise.com",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=4",
    description:
      "Monorepo-based productivity platform in progress with event-driven backend design, modular services, and web/mobile clients.",
    frameworks: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "React Native",
      },
      {
        id: 3,
        name: "Hono",
      },
      {
        id: 4,
        name: "Drizzle ORM",
      },
      {
        id: 5,
        name: "Kafka",
      },
    ],
    href: "https://github.com/nileshsehrawat",
    id: 4,
    image: "images/4.webp",
    name: "WillRise (In Progress)",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=5",
    description:
      "Real-time private chat application focused on secure one-to-one messaging and live communication workflows.",
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
        name: "Elysia.js",
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
  degree: "B.Tech in Computer Science (CGPA: 8.16 / 10)",
  university: "PDM University",
};

export const workExperienceData = [
  {
    company: "NotionZoa",
    description: [
      "Worked on production web and mobile applications across frontend, backend, and API layers.",
      "Built and shipped product features using React, Laravel, and REST APIs.",
      "Designed backend endpoints and PostgreSQL workflows for core application modules.",
      "Implemented authentication flows and secure API access patterns.",
      "Optimized critical database queries and API response times by around 35%.",
      "Integrated APIs into a Flutter app and implemented offline caching using Hive.",
      "Debugged production issues and resolved API-level failures.",
    ],
    duration: "Jul 2025 - Jan 2026",
    position: "SDE",
  },
  {
    company: "Delhi Metro Rail Corporation (DMRC)",
    description: [
      "Engineered a Retrieval-Augmented Generation chatbot to query PDF documents using React, Next.js, and FastAPI.",
      "Implemented vector search pipelines that improved response accuracy by 40% and reduced hallucinated outputs.",
      "Built modular backend APIs and integrated them with a real-time React/Next.js document search interface.",
      "Received practical training in networking, cybersecurity, SAP ERP, data analytics, DBMS, and Power BI.",
    ],
    duration: "May 2025 - Jul 2025",
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
    value: "8950525050",
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
    value: "https://github.com/nileshsehrawat",
  },
  {
    label: "Resume",
    value: "/resume",
  },
  {
    label: "Cover Letter (Template)",
    value: `I am writing to express my interest in the [Job Title] role at [Company Name]. I am a Software Engineer with experience building full-stack web systems, mobile applications, and AI-powered platforms using React, Next.js, Node.js, Flutter, and PostgreSQL. I enjoy designing scalable backend systems and shipping production-ready products with strong engineering fundamentals.`,
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
