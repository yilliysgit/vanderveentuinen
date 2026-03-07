import { client } from "@/sanity/lib/client";
import { projectDetailQuery } from "@/sanity/lib/projectQueries";
import { notFound } from "next/navigation";
import ProjectsSection from "@/components/TestProject";

interface Props {
  params: { slug: string };
}

export default async function ProjectPage({ params }: Props) {
  const data = await client.fetch(projectDetailQuery, { slug: params.slug });
  if (!data) notFound();

  return <ProjectsSection project={data} />;
}