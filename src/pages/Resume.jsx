import {
  phoneNumber,
  educationData,
  projectsData,
  servicesData,
  workExperienceData,
} from "../config/constants";

const Section = ({ children, title }) => {
  return (
    <section className="print:break-inside-avoid print:mb-1">
      <Title bordered={true}>{title}</Title>
      {children}
    </section>
  );
};

const Title = ({ children, bordered = false }) => {
  return (
    <h2
      className={`pb-2 font-semibold print:pb-1 ${bordered && "mb-2 border-dark/20 border-b-2 print:mb-1"}`}
    >
      {children}
    </h2>
  );
};

const Resume = () => {
  const MAX_EXPERIENCE_BULLETS = 4;

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
        className="space-y-4 px-4 text-sm print:space-y-2 print:px-0 print:text-[10px]"
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
                className="break-all sm:break-normal"
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
            Software Engineer with close to 2 years of hands-on experience
            building production web applications using React, Next.js, and REST
            APIs across internship and SDE roles. Strong in feature delivery,
            backend integration, API security patterns, and debugging. Focused
            on React-based frontend development with working knowledge of
            backend technologies including Node.js, Laravel, ASP.NET Core Web
            API, and SQL-backed data workflows.
          </p>
        </Section>

        <Section title="Work Experience">
          <div className="space-y-4 print:space-y-2">
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2">
            {servicesData.map((service) => (
              <div className="print:leading-tight" key={service.title}>
                <h3 className="font-semibold print:mb-0.5">{service.title}</h3>
                <ul className="list-inside list-disc print:mt-0 print:leading-tight">
                  {service.items.map((item) => (
                    <li className="print:mb-0" key={item.title}>
                      {item.title}{" "}
                      <span className="text-dark/60">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-4">
            {projectsData.map((project) => (
              <div className="resume-block" key={project.id}>
                <div className="flex items-center justify-between gap-2">
                  <a
                    className="underline underline-offset-2"
                    href={project.preview || project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.name}
                  </a>
                  <div className="flex items-center gap-2">
                    {project.frameworks.map((framework) => (
                      <span key={framework.id}>{framework.name}</span>
                    ))}
                  </div>
                </div>
                <p>{project.description}</p>
                {project.subProjects?.length ? (
                  <div className="mt-2 flex flex-wrap gap-3 text-xs">
                    {project.subProjects.map((subProject) => (
                      <a
                        className="rounded-full border border-dark/30 px-3 py-1"
                        href={subProject.href}
                        key={subProject.id}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {subProject.name} ({subProject.status})
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <p className="font-semibold">{educationData.university}</p>
          <p>{educationData.degree}</p>
          <p>{educationData.timeframe}</p>
        </Section>
      </div>
      <style global jsx>{`
        @media print {
          @page {
            margin: 9mm;
            size: A4;
          }

          body * {
            visibility: hidden;
          }
          #resume-content,
          #resume-content * {
            visibility: visible;
            font-family: "Roboto", sans-serif;
            font-size: 10.8px;
            line-height: 1.26;
            color: black;
            background: white;
            text-shadow: none;
            box-shadow: none;
            -webkit-print-color-adjust: exact;
          }

          #resume-content section {
            break-inside: avoid;
            margin-bottom: 0.4rem;
          }

          #resume-content ul {
            margin-top: 0.15rem;
          }

          #resume-content li {
            margin-bottom: 0.1rem;
          }

          #resume-content h1,
          #resume-content h2,
          #resume-content h3,
          #resume-content p {
            margin: 0;
          }

          #resume-content .resume-block {
            margin-bottom: 0.3rem;
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
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
