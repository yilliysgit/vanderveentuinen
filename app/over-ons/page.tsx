import AboutHero from "@/components/overOns/AboutHero";
import VisionSection from "@/components/overOns/VisionSection";
import ForWhoWeWork from "@/components/overOns/ForWhoWeWork";
import ProcessCompact from "@/components/overOns/ProcessCompact";
import AboutStudio from "@/components/overOns/AboutStudio";
import WorkArea from "@/components/overOns/WorkArea";
import CtaKennismaking from "@/components/overOns/CtaKennismaking";

import React from 'react'

export default function page() {
  return (
    <div>
        <AboutHero />
        <VisionSection />
        <ForWhoWeWork />
        <ProcessCompact />
        <AboutStudio />
        <WorkArea />
        <CtaKennismaking />

    </div>
  )
}
