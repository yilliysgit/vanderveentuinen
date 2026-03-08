import type { Metadata } from "next";
import HomeHero from "@/components/hero/HomeHero";
import HowWeWork from "@/components/sections/HowWeWork";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Reviews from "@/components/sections/Reviews";
import Principes from "@/components/sections/Principes";
import CtaSection from "@/components/sections/CtaSection";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Van der Veen — Exclusieve tuinen & buitenruimtes op maat",
  description:
    "Van der Veen ontwerpt en realiseert exclusieve buitenruimtes voor particulieren. Tijdloos vakmanschap, perfecte afwerking, bewust een beperkt aantal projecten per jaar.",
  alternates: {
    canonical: "https://www.vanderveen-tuinen.nl",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HowWeWork />
      <ProjectsSection />
      <Reviews />
      <Principes />
      <CtaSection />
    </>
  );
}