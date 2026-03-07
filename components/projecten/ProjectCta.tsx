"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProjectsCta() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#eee9e1] px-[7vw] py-[clamp(5rem,9vw,8rem)]">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">

          <div>
            <div className={[
              "flex items-center gap-3.5 mb-8",
              "transition-[opacity,transform] duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}>
              <span className="block w-8 h-px bg-[#5a7a52] shrink-0" />
              <span className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#5a7a52]">
                Kennismaking
              </span>
            </div>
            <h2 className={[
              "font-[Cormorant_Garamond,serif] font-light text-[clamp(2.4rem,4.5vw,4.8rem)] leading-[1.05] tracking-[-0.015em] text-[#1a1712]",
              "transition-[opacity,transform] duration-[900ms] ease-out delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}>
              Overweegt u een<br />nieuwe buitenruimte?
            </h2>
          </div>

          <div className={[
            "flex flex-col gap-8",
            "transition-[opacity,transform] duration-[900ms] ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}>
            <p className="text-[15px] font-light leading-[1.85] text-[#5a5249] max-w-[440px]">
              In een eerste gesprek verkennen we uw wensen, ideeën en de
              mogelijkheden van uw locatie. Zonder verplichting, met volledige
              aandacht.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-[rgba(26,23,18,0.28)] text-[#1a1712] px-10 py-4 text-[11px] font-medium tracking-[0.22em] uppercase w-fit transition-[background,border-color] duration-300 hover:bg-[rgba(26,23,18,0.05)] hover:border-[rgba(26,23,18,0.6)]"
              >
                Plan een kennismaking
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <path d="M11 1l4 4-4 4M1 5h14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="text-[11px] font-light tracking-[0.06em] text-[rgba(90,82,73,0.45)]">
                Een eerste gesprek is bedoeld om te verkennen of we bij elkaar passen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}