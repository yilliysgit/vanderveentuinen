import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery } from "@/sanity/lib/projectQueries";
import Link from "next/link";

export default async function ProjectsSection() {
  const projects = await client.fetch(featuredProjectsQuery);
  if (!projects || projects.length === 0) return null;
  const [project1, project2, project3] = projects;

  return (
    <section className="bg-[#f5f0ea] px-[7vw] pt-[3vw] pb-[8vw]">
      <div className="max-w-[1400px] mx-auto">

        {/* ── EYEBROW + TITEL ── */}
        <div className="flex items-center gap-3.5 mb-10">
          <span className="block w-8 h-px bg-[#5a7a52] shrink-0" />
          <span className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#5a7a52]">
            Projecten
          </span>
        </div>

        <div className="flex items-end justify-between mb-14 lg:mb-16 gap-8 flex-wrap">
          <h2 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.1] tracking-[-0.01em] text-[#1a1712]">
            Geselecteerde projecten
          </h2>
          <Link
            href="/projecten"
            className="text-[11px] font-light tracking-[0.18em] uppercase text-[rgba(90,82,73,0.5)] border-b border-[rgba(90,82,73,0.2)] pb-0.5 whitespace-nowrap transition-[color,border-color] duration-300 hover:text-[#1a1712] hover:border-[#1a1712]"
          >
            Alle projecten bekijken
          </Link>
        </div>

        {/* ── PROJECT 1 — groot ── */}
        {project1 && (
          <Link href={`/projecten/${project1.slug}`} className="group block mb-[6vw]">
            <div className="overflow-hidden mb-7">
              <img
                src={project1.heroImage.asset.url}
                alt={project1.heroImage.alt}
                className="w-full h-[55vh] lg:h-[75vh] object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="max-w-[520px]">
                <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[rgba(90,82,73,0.5)] mb-3">
                  {project1.location} · {project1.year}
                </p>
                <h3 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1712] transition-colors duration-300 group-hover:text-[#3d5c36]">
                  {project1.title}
                </h3>
              </div>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                className="shrink-0 mt-2 text-[rgba(90,82,73,0.3)] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-[#3d5c36]">
                <path d="M12 1l5 5-5 5M1 6h16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        )}

        {/* ── PROJECT 2 & 3 — twee kolommen ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] border-t border-[rgba(90,122,82,0.12)] pt-[5vw]">
          {[project2, project3].map((project) =>
            project && (
              <Link key={project.slug} href={`/projecten/${project.slug}`} className="group block">
                <div className="overflow-hidden mb-6">
                  <img
                    src={project.heroImage.asset.url}
                    alt={project.heroImage.alt}
                    className="w-full h-[40vh] lg:h-[50vh] object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[rgba(90,82,73,0.5)] mb-3">
                      {project.location} · {project.year}
                    </p>
                    <h3 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.2] tracking-[-0.01em] text-[#1a1712] transition-colors duration-300 group-hover:text-[#3d5c36]">
                      {project.title}
                    </h3>
                  </div>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                    className="shrink-0 mt-2 text-[rgba(90,82,73,0.3)] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-[#3d5c36]">
                    <path d="M11 1l4 4-4 4M1 5h14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
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