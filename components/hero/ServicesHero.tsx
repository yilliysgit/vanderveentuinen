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

export default function ServicesHero() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Wat wij doen"
      style={{
        background: "var(--bg)",
        padding: "clamp(6rem,10vw,9rem) var(--section-x) clamp(5rem,8vw,7rem)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >

        {/* EYEBROW */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
          style={{ marginBottom: "2rem" }}
        >
          <span className="eyebrow">Wat wij doen</span>
        </div>

        {/* TITEL + INTRO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "clamp(3rem,5vw,4rem)",
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >

          {/* Titel */}
          <h1
            className={[
              "heading-lg transition-all duration-[900ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ maxWidth: "520px" }}
          >
            Ontwerp en realisatie
            <br />
            van buitenruimtes
          </h1>

          {/* Tekst */}
          <div
            className={[
              "transition-all duration-[900ms] ease-out delay-250",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              maxWidth: "480px",
            }}
          >

            <p className="body-lg">
              Wij ontwerpen en realiseren buitenruimtes voor particuliere
              opdrachtgevers die waarde hechten aan rust, kwaliteit en
              tijdloosheid. Elk project benaderen wij als een samenhangend geheel —
              van eerste idee tot zorgvuldige oplevering.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.8",
                color: "var(--ink-soft)",
              }}
            >
              Wij werken voornamelijk binnen Nederland, met projecten in onder
              meer Bloemendaal en Wassenaar.
            </p>

          </div>

        </div>

        {/* DRIE KENMERKEN */}
        <div
          className={[
            "transition-all duration-[900ms] ease-out delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            borderTop: "1px solid var(--border)",
          }}
        >

          <div className="lg:grid lg:grid-cols-3">

            {[
              { label: "Werkwijze", value: "Ontwerp · Realisatie · Nazorg" },
              { label: "Opdrachtgevers", value: "Uitsluitend particuliere projecten" },
              { label: "Selectie", value: "Beperkt aantal projecten per jaar" },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  paddingRight: i !== 2 ? "2rem" : "0",
                  borderRight: i !== 2 ? "1px solid var(--border)" : "none",
                }}
              >

                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "10px",
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: "1.5",
                    color: "var(--ink)",
                  }}
                >
                  {value}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}