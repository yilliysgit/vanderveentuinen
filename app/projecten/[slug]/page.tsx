import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { projectDetailQuery } from "@/sanity/lib/projectQueries";

import ProjectIntro from "@/components/projecten/projectDetailPage/ProjectIntro";
import ProjectGallery from "@/components/projecten/projectDetailPage/ProjectGallery";
import ProjectReflection from "@/components/projecten/projectDetailPage/ProjectReflection";
import ProjectNavigation from "@/components/projecten/projectDetailPage/Projectnavigation";
import ProjectDetailCta from "@/components/projecten/projectDetailPage/ProjectDetailCta";

import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getAdjacentProjects(slug: string) {
  const allProjects = await client.fetch<
    {
      slug: string;
      title: string;
      heroImage?: { asset: { url: string }; alt?: string };
    }[]
  >(`
    *[_type == "project" && defined(slug.current)]
    | order(year desc) {
      title,
      "slug": slug.current,
      heroImage {
        asset->{ url },
        alt
      }
    }
  `);

  const index = allProjects.findIndex((p) => p.slug === slug);

  return {
    previous: index > 0 ? allProjects[index - 1] : undefined,
    next: index < allProjects.length - 1 ? allProjects[index + 1] : undefined,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await client.fetch(projectDetailQuery, { slug });

  if (!project) return {};

  return {
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.intro,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const [project, { previous, next }] = await Promise.all([
    client.fetch(projectDetailQuery, { slug }),
    getAdjacentProjects(slug),
  ]);

  if (!project) return notFound();

  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
      }}
    >
    

      {/* INTRO */}
      <ProjectIntro
        title={project.title}
        intro={project.intro}
        location={project.location}
        year={project.year}
        propertyType={project.propertyType}
        tags={project.tags}
      />

      {/* GALLERY */}
      {project.gallery?.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}

      {/* REFLECTION */}
      <ProjectReflection text={project.reflectionText} />

      {/* NEXT / PREVIOUS */}
      <ProjectNavigation previous={previous} next={next} />

      {/* CTA */}
      <ProjectDetailCta />
    </main>
  );
}