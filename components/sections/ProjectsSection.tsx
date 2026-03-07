import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery } from "@/sanity/lib/projectQueries";
import Link from "next/link";

export default async function ProjectsSection() {
  const projects = await client.fetch(featuredProjectsQuery);
  if (!projects || projects.length === 0) return null;

  const [project1, project2, project3] = projects;

  return (
    <section
      aria-label="Geselecteerde projecten"
      style={{
        background: "var(--bg)",
        padding: "0 var(--section-x) var(--section-y)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* EYEBROW */}
        <div style={{ marginBottom: "0.9rem" }}>
          <span className="eyebrow">Projecten</span>
        </div>

        {/* HEADER */}
        <div
          className="flex items-end justify-between flex-wrap gap-6"
          style={{ marginBottom: "clamp(2rem,3vw,2.5rem)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem,3.6vw,3.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
            }}
          >
            Geselecteerde projecten
          </h2>

          <Link href="/projecten" className="btn-ghost">
            Alle projecten bekijken
          </Link>
        </div>

        {/* PROJECT 1 (FEATURED) */}
        {project1 && (
          <Link
            href={`/projecten/${project1.slug}`}
            className="group block"
            style={{ marginBottom: "clamp(3rem,5vw,4rem)" }}
          >
            <div
              className="img-zoom"
              style={{ marginBottom: "clamp(1rem,1.6vw,1.2rem)" }}
            >
              <img
                src={project1.heroImage.asset.url}
                alt={project1.heroImage.alt}
                className="w-full object-cover"
                style={{ height: "clamp(48vh,62vh,70vh)" }}
                loading="lazy"
              />
            </div>

            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div style={{ maxWidth: "520px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project1.location} · {project1.year}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(1.5rem,2.4vw,2.2rem)",
                    lineHeight: 1.18,
                    letterSpacing: "-0.01em",
                    color: "var(--ink)",
                    transition: "color 0.3s",
                  }}
                  className="group-hover:text-[var(--forest)]"
                >
                  {project1.title}
                </h3>
              </div>

              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                className="shrink-0 mt-2 text-[var(--ink-faint)] transition-[transform,color] duration-300 group-hover:translate-x-2 group-hover:text-[var(--forest)]"
              >
                <path
                  d="M12 1l5 5-5 5M1 6h16"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        )}

        {/* PROJECT GRID */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(2rem,3vw,2.5rem)" }}
        >
          {[project2, project3].map(
            (project) =>
              project && (
                <Link
                  key={project.slug}
                  href={`/projecten/${project.slug}`}
                  className="group block"
                >
                  <div className="img-zoom" style={{ marginBottom: "1rem" }}>
                    <img
                      src={project.heroImage.asset.url}
                      alt={project.heroImage.alt}
                      className="w-full object-cover"
                      style={{ height: "clamp(34vh,42vh,48vh)" }}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "10px",
                          fontWeight: 400,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--ink-faint)",
                          marginBottom: "0.45rem",
                        }}
                      >
                        {project.location} · {project.year}
                      </p>

                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          fontSize: "clamp(1.25rem,1.8vw,1.6rem)",
                          lineHeight: 1.22,
                          letterSpacing: "-0.01em",
                          color: "var(--ink)",
                          transition: "color 0.3s",
                        }}
                        className="group-hover:text-[var(--forest)]"
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
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              )
          )}
        </div>

      </div>
    </section>
  );
}