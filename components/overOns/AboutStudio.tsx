"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function AboutStudio() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Het atelier"
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">

        {/* Eyebrow */}
        <div
          ref={ref}
          className={[
            "mb-8 transition-opacity duration-700 ease-out",
            inView ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <span className="eyebrow">Het atelier</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10">

          {/* Titel */}
          <h2
            className={[
              "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ maxWidth: "520px" }}
          >
            Een klein atelier
            <br />
            met volledige aandacht
          </h2>

          {/* Tekst */}
          <div
            className={[
              "transition-[opacity,transform] duration-[900ms] ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ maxWidth: "460px" }}
          >

            <p className="body-lg" style={{ marginBottom: "1.4rem" }}>
              Van der Veen is een kleinschalig atelier voor ontwerp en realisatie
              van buitenruimtes. We werken bewust met een beperkt aantal
              projecten per jaar, zodat er ruimte blijft voor aandacht,
              afstemming en kwaliteit.
            </p>

            <p className="body-lg" style={{ marginBottom: "1.8rem" }}>
              U werkt direct met de ontwerper die ook de realisatie begeleidt.
              Geen overdracht, geen ruis — maar één visie, van eerste schets tot
              oplevering.
            </p>

            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
              }}
            >
              Rust · Vakmanschap · Tijdloosheid
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}