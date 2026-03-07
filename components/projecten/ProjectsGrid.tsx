"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type ProjectCard = {
  title: string;
  slug: string;
  location?: string;
  year?: number;
  heroImage: {
    alt?: string;
    asset: { url: string };
  };
};

function ProjectCardLarge({ project }: { project: ProjectCard }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-[900ms] ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <Link href={`/projecten/${project.slug}`} className="group block">

        {/* Image */}
        <div className="img-zoom mb-8">
          <img
            src={project.heroImage.asset.url}
            alt={project.heroImage.alt || project.title}
            className="w-full h-[56vh] lg:h-[70vh] object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-start justify-between gap-6">

          <div style={{ maxWidth: "560px" }}>

            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginBottom: "0.6rem",
              }}
            >
              {project.location ?? "Nederland"}
              {project.year ? ` · ${project.year}` : ""}
            </p>

            <h3 className="heading-md group-hover:text-[var(--forest)] transition-colors">
              {project.title}
            </h3>

          </div>

          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            className="shrink-0 mt-2 text-[var(--ink-faint)] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--forest)]"
          >
            <path
              d="M12 1l5 5-5 5M1 6h16"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>
      </Link>
    </div>
  );
}

function ProjectCardSmall({ project, delay = 0 }: { project: ProjectCard; delay?: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-[900ms] ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      <Link href={`/projecten/${project.slug}`} className="group block">

        <div className="img-zoom mb-7">
          <img
            src={project.heroImage.asset.url}
            alt={project.heroImage.alt || project.title}
            className="w-full h-[38vh] lg:h-[46vh] object-cover"
          />
        </div>

        <div className="flex items-start justify-between gap-5">

          <div>

            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginBottom: "0.6rem",
              }}
            >
              {project.location ?? "Nederland"}
              {project.year ? ` · ${project.year}` : ""}
            </p>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: "clamp(1.45rem,2.1vw,2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
              }}
              className="group-hover:text-[var(--forest)] transition-colors"
            >
              {project.title}
            </h3>

          </div>

          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            className="shrink-0 mt-2 text-[var(--ink-faint)] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--forest)]"
          >
            <path
              d="M11 1l4 4-4 4M1 5h14"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>

      </Link>
    </div>
  );
}

export default function ProjectsGrid({ projects }: { projects: ProjectCard[] }) {
  if (!projects?.length) return null;

  const rows: React.ReactNode[] = [];
  let i = 0;

  while (i < projects.length) {

    const isFirst = i === 0;

    rows.push(
      <div
        key={`large-${i}`}
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: isFirst ? "clamp(3rem,5vw,4rem)" : "clamp(4rem,7vw,6rem)",
        }}
      >
        <ProjectCardLarge project={projects[i]} />
      </div>
    );

    i++;

    if (i < projects.length) {

      const p1 = projects[i];
      const p2 = projects[i + 1];

      rows.push(
        <div
          key={`duo-${i}`}
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "clamp(4rem,7vw,6rem)",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw]"
        >
          <ProjectCardSmall project={p1} delay={0} />
          {p2 ? <ProjectCardSmall project={p2} delay={150} /> : <div />}
        </div>
      );

      i += 2;
    }
  }

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "0 var(--section-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        {rows}
      </div>
    </section>
  );
}