import {
  phoneNumber,
  educationData,
  projectsData,
  workExperienceData,
} from "../config/constants";

const Section = ({ children, title }) => {
  return (
    <section className="print:break-inside-avoid print:mb-0.5">
      <Title bordered={true}>{title}</Title>
      {children}
    </section>
  );
};

const Title = ({ children, bordered = false }) => {
  return (
    <h2
      className={`pb-1 font-semibold print:pb-0.5 ${bordered && "mb-1 border-dark/20 border-b-2 print:mb-0.5"}`}
    >
      {children}
    </h2>
  );
};

const Resume = () => {
  const MAX_EXPERIENCE_BULLETS = 5;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 py-4">
      <div className="print:hidden">
        <button
          className="rounded-2xl bg-dark px-8 py-4 font-medium text-light"
          onClick={() => window.print()}
          type="button"
        >
          Save as PDF
        </button>
      </div>
      <div
        className="space-y-2.5 px-4 text-sm print:space-y-1 print:px-0 print:text-[11px]"
        id="resume-content"
      >
        <header className="space-y-2 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-between">
            <h1 className="font-bold tracking-wider">Nilesh</h1>
            <h2 className="font-bold tracking-wider">India</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-between">
            {[
              {
                subName: phoneNumber,
                href: "tel:+918950525050",
                name: "Phone",
              },
              {
                subName: "nileshbyte@gmail.com",
                href: "mailto:nileshbyte@gmail.com",
                name: "E-Mail",
              },
              {
                subName: "github.com/nileshsehrawat",
                href: "https://github.com/nileshsehrawat",
                name: "Github",
              },
              {
                subName: "linkedin.com/in/nilesh-sehrawat-a0a942322",
                href: "https://www.linkedin.com/in/nilesh-sehrawat-a0a942322/",
                name: "LinkedIn",
              },
              {
                subName: "leetcode.com/u/nileshsehrawat",
                href: "https://leetcode.com/u/nileshsehrawat/",
                name: "LeetCode",
              },
            ].map((link) => (
              <a
                className="break-all sm:break-normal underline underline-offset-2 cursor-pointer"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                key={link.name}
              >
                <span className="font-semibold">{link.name}: </span>
                {link.subName}
              </a>
            ))}
          </div>
        </header>

        <Section title="Professional Summary">
          <p>
            TypeScript-first Software Engineer focused on building
            production-grade AI applications, high-performance backend systems,
            and scalable full-stack platforms. Experienced in developing RAG
            pipelines, semantic retrieval systems, and AI-assisted workflows
            using Node.js, Python, and modern LLM tooling. Strong foundation in
            concurrency, in-memory processing, and type-safe architecture
            design, with hands-on experience shipping real-world product
            features across web, mobile, and AI-driven systems.
          </p>
        </Section>

        <Section title="Work Experience">
          <div className="space-y-3 print:space-y-1.5">
            {workExperienceData.map((exp) => (
              <div className="resume-block" key={exp.company}>
                <div className="flex justify-between">
                  <p className="font-semibold">{exp.company}</p>
                  <p>{exp.duration}</p>
                </div>
                <p className="italic">{exp.position}</p>
                <ul className="list-inside list-disc">
                  {exp.description
                    .slice(0, MAX_EXPERIENCE_BULLETS)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="space-y-1 leading-snug print:space-y-0.5">
            <p>
              <span className="font-semibold">Languages:</span> TypeScript
              (Primary), Python, Java
            </p>
            <p>
              <span className="font-semibold">AI / LLM Systems:</span> RAG
              Pipelines, Semantic Retrieval, Vector Search, Context Engineering,
              AI Agents, Prompt Engineering, Structured Outputs, Ollama, OpenAI
              APIs, Long-Term Memory Systems
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> Next.js, React,
              Tailwind CSS, HTML/CSS
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js (Fastify,
              Express, Hono, Elysia), FastApi
            </p>
            <p>
              <span className="font-semibold">Database:</span> PostgreSQL,
              MySQL, Sqlite, MongoDb
            </p>
            <p>
              <span className="font-semibold">Infrastructure & Systems: </span>{" "}
              Docker, GitHub Actions, VPS Deployment (Contabo/Railway), REST
              APIs, Kafka, Worker Threads, Concurrency, Performance
              Optimization, In-Memory Processing, Git
            </p>
            {/* <p>
              <span className="font-semibold">Analytics:</span> Power BI,
              Tableau, Excel
            </p> */}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-2.5 print:space-y-1.5">
            {projectsData.map((project) =>
              project.id === 1 ? (
                <div
                  className="resume-block space-y-1 leading-snug"
                  key={project.id}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                    <div className="flex items-baseline gap-x-2">
                      <span className="font-semibold">{project.name}</span>
                      <span className="text-dark/75 print:text-[9px]">|</span>
                      <a
                        className="text-xs underline underline-offset-2"
                        href="https://github.com/nileshsehrawat/dmrc-chatbot-backend"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Python
                      </a>
                      <span className="text-dark/75 print:text-[9px]">|</span>
                      <a
                        className="text-xs underline underline-offset-2"
                        href="https://github.com/nileshsehrawat/rag-backend-ts"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TypeScript
                      </a>
                    </div>
                    <span className="text-dark/75 text-xs print:text-[9px]">
                      React, Next.js, FastAPI, TypeScript, Ollama
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed text-dark/90">
                    Engineered a RAG-powered assistant for technical document
                    querying using local LLM workflows (Ollama) to ensure data
                    privacy and zero-latency inference. Architected a dual-stack
                    system, leveraging Python/FastAPI for heavy-duty AI
                    processing and TypeScript for a type-safe, high-concurrency
                    orchestration layer. Optimized retrieval accuracy by
                    implementing custom document ingestion pipelines with
                    semantic chunking and context-aware prompt engineering.
                  </p>
                </div>
              ) : project.id === 3 ? (
                <div
                  className="resume-block space-y-1 leading-snug"
                  key={project.id}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                    <div className="flex items-baseline gap-x-2">
                      <span className="font-semibold">{project.name}</span>
                      <span className="text-dark/75 print:text-[9px]">|</span>
                      <a
                        className="text-xs underline underline-offset-2"
                        href="https://waitlist.thewillrise.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Waitlist
                      </a>
                      <span className="text-dark/75 print:text-[9px]">|</span>
                      <a
                        className="text-xs underline underline-offset-2"
                        href="https://github.com/nileshsehrawat"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Core Platform
                      </a>
                    </div>
                    <span className="text-dark/75 text-xs print:text-[9px]">
                      Next.js, React Native, Hono, PostgreSQL, Drizzle, Kafka,
                      Docker
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed text-dark/90">
                    Architected a full-stack monorepo platform designed to
                    combine behavioral tracking, goal management, and
                    AI-assisted productivity workflows across Web and Mobile
                    applications. Built shared business-logic layers and
                    event-driven backend pipelines using Kafka and Hono to
                    support scalable user activity ingestion and low-latency
                    APIs.
                  </p>
                  <p className="mt-1 leading-relaxed text-dark/90">
                    Designed the platform architecture to support personalized
                    AI workflows using contextual memory, semantic retrieval,
                    and adaptive task generation based on user habits, progress
                    history, and long-term goals. Implemented containerized
                    infrastructure and shared type-safe systems to streamline
                    deployment consistency and rapid feature iteration.
                  </p>
                </div>
              ) : (
                <div
                  className="resume-block space-y-1 leading-snug"
                  key={project.id}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                    <a
                      className="font-semibold underline underline-offset-2"
                      href={project.preview || project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.name}
                    </a>
                    <span className="text-dark/75 text-xs print:text-[9px]">
                      {project.frameworks
                        .map((framework) => framework.name)
                        .join(", ")}
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed text-dark/90">
                    {project.description}
                  </p>
                  {project.subProjects?.length ? (
                    <p className="mt-1 text-xs text-dark/80 print:mt-0.25 print:text-[9px]">
                      {project.subProjects
                        .map(
                          (subProject) =>
                            `${subProject.name} (${subProject.status})`,
                        )
                        .join("; ")}
                    </p>
                  ) : null}
                </div>
              ),
            )}
          </div>
        </Section>

        <Section title="Education">
          <p className="font-semibold">{educationData.university}</p>
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
            <p>{educationData.degree}</p>
            <p className="text-dark/75 print:text-[9px]">
              {/* {educationData.timeframe} | CGPA: {educationData.cgpa} */}
              {educationData.timeframe}
            </p>
          </div>
        </Section>
      </div>
      <style global jsx>{`
        @media print {
          @page {
            margin: 8mm;
            size: A4;
          }

          body * {
            visibility: hidden;
          }
          #resume-content,
          #resume-content * {
            visibility: visible;
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            line-height: 1.35;
            color: black;
            background: white;
            text-shadow: none;
            box-shadow: none;
            -webkit-print-color-adjust: exact;
          }

          #resume-content section {
            break-inside: avoid;
            margin-bottom: 0.35rem;
          }

          #resume-content ul {
            margin-top: 0.1rem;
          }

          #resume-content li {
            margin-bottom: 0.05rem;
          }

          #resume-content h1,
          #resume-content h2,
          #resume-content h3,
          #resume-content p {
            margin: 0;
          }

          #resume-content .resume-block {
            margin-bottom: 0.25rem;
          }

          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            margin: 0;
          }
          #resume-content a {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
