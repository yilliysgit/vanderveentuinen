import ProjectHero from "@/components/hero/ProjectsHero";
import ProjectsGrid from "@/components/projecten/ProjectsGrid";
import ProjectsCta from "@/components/projecten/ProjectCta";

import { client } from "@/sanity/lib/client";
import { projectsOverviewQuery } from "@/sanity/lib/projectQueries";

export default async function ProjectenPage() {
  const projects = await client.fetch(projectsOverviewQuery);

  return (
    <>
      <ProjectHero imageUrl="/images/projects-hero.jpg" alt="Projects Hero" />
      <ProjectsGrid projects={projects} />
      <ProjectsCta />
    </>
  );
}
