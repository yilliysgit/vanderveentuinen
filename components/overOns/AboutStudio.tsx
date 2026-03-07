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
      { threshold }
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
      ref={ref}
      aria-label="Het atelier"
      style={{
        background: "var(--bg)",
        padding: "clamp(5rem,9vw,8rem) var(--section-x)"
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto"
        }}
      >

        {/* Eyebrow */}
        <div
          className={[
            "transition-opacity duration-700 ease-out",
            inView ? "opacity-100" : "opacity-0"
          ].join(" ")}
          style={{ marginBottom: "2rem" }}
        >
          <span className="eyebrow">Het atelier</span>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem"
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >

          {/* Titel */}
          <h2
            className={[
              "heading-lg transition-all duration-[1000ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
              "transition-all duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            ].join(" ")}
          >

            <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
              Van der Veen is een kleinschalig atelier voor ontwerp en realisatie
              van buitenruimtes. We werken bewust met een beperkt aantal
              projecten per jaar, zodat er ruimte blijft voor aandacht,
              afstemming en kwaliteit.
            </p>

            <p className="body-lg" style={{ marginBottom: "2rem" }}>
              U werkt direct met de ontwerper die ook de realisatie begeleidt.
              Geen overdracht, geen ruis — maar één visie, van eerste schets tot
              oplevering.
            </p>

            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-faint)"
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