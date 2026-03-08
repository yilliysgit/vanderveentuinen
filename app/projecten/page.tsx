import ProjectsHero from "@/components/hero/ProjectsHero";
import ProjectsGrid from "@/components/projecten/ProjectsGrid";
import ProjectsCta from "@/components/projecten/ProjectCta";

import { client } from "@/sanity/lib/client";
import { projectsOverviewQuery } from "@/sanity/lib/projectQueries";

export const revalidate = 0;

export default async function ProjectenPage() {
  const projects = await client.fetch(projectsOverviewQuery);
  console.log("projects:", JSON.stringify(projects));

  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectsCta />
    </>
  );
};