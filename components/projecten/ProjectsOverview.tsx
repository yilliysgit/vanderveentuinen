import { client } from "@/sanity/lib/client";
import { projectsOverviewQuery } from "@/sanity/lib/projectQueries";
import Link from "next/link";


type Project = {
  title: string;
  slug: string;
  location: string;
  year: number;
  heroImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
};


export default async function ProjectsOverview() {
const projects: Project[] = await client.fetch(projectsOverviewQuery);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-[#f5f0ea] px-[7vw] pt-[8vw] pb-[6vw]">
      <div className="mx-auto max-w-[1400px]">

        {/* ── HERO ── */}
        <header className="mb-[10vw] max-w-[640px]">
          <div className="flex items-center gap-3.5 mb-8">
            <span className="block w-8 h-px bg-[#5a7a52]" />
            <span className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#5a7a52]">
              Projecten
            </span>
          </div>

          <h1 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.1] tracking-[-0.01em] text-[#1a1712] mb-6">
            Geselecteerde buitenruimtes
          </h1>

          <p className="text-[15px] font-light leading-[1.9] text-[#5a5249]">
            Een selectie van gerealiseerde projecten, ontworpen en uitgevoerd
            met aandacht voor rust, detail en tijdloos gebruik.
          </p>
        </header>

        {/* ── PROJECTEN ── */}
        <div className="space-y-[10vw]">

          {projects.map((project, index) => {
            const isLarge = index % 3 === 0;

            if (isLarge) {
              return (
                <Link
                  key={project.slug}
                  href={`/projecten/${project.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden mb-7">
                    <img
                      src={project.heroImage.asset.url}
                      alt={project.heroImage.alt || project.title}
                      className="w-full h-[55vh] lg:h-[75vh] object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-6">
                    <div className="max-w-[520px]">
                      <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[rgba(90,82,73,0.5)] mb-3">
                        {project.location} · {project.year}
                      </p>
                      <h2 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1712] transition-colors duration-300 group-hover:text-[#3d5c36]">
                        {project.title}
                      </h2>
                    </div>

                    <Arrow />
                  </div>
                </Link>
              );
            }

            // Klein project
            return null;
          })}

          {/* ── KLEINE PROJECTEN PER 2 ── */}
          {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, row) => {
            const start = row * 3 + 1;
            const pair = projects.slice(start, start + 2);

            if (pair.length === 0) return null;

            return (
              <div
                key={`row-${row}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] lg:gap-[4vw]"
              >
                {pair.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projecten/${project.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden mb-6">
                      <img
                        src={project.heroImage.asset.url}
                        alt={project.heroImage.alt || project.title}
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
                      <Arrow small />
                    </div>
                  </Link>
                ))}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

/* ── Arrow component ── */
function Arrow({ small = false }: { small?: boolean }) {
  return (
    <svg
      width={small ? 16 : 18}
      height={small ? 10 : 12}
      viewBox="0 0 18 12"
      fill="none"
      className="shrink-0 mt-2 text-[rgba(90,82,73,0.3)] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-[#3d5c36]"
    >
      <path
        d="M12 1l5 5-5 5M1 6h16"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
