"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const STEPS = [
  {
    number: "01",
    title: "Ontwerp",
    sub: "Van eerste gesprek tot definitief plan",
    body: "We vertalen uw wensen en de architectuur van de woning naar een doordacht ontwerp waarin verhoudingen, materiaal en sfeer samenkomen.",
  },
  {
    number: "02",
    title: "Realisatie",
    sub: "Vakmanschap dat zichtbaar is in elk detail",
    body: "De uitvoering gebeurt met vaste vakmensen en hoogwaardige materialen. Gedurende het proces staan precisie, afwerking en rust centraal.",
  },
  {
    number: "03",
    title: "Nazorg",
    sub: "Betrokkenheid die niet stopt bij oplevering",
    body: "Ook na oplevering blijven wij betrokken. Met onderhoud en periodieke controle zorgen we dat uw buitenruimte zijn kwaliteit behoudt.",
  },
];

export default function ProcessCompact() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Werkwijze in het kort"
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

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "clamp(3rem,5vw,4rem)"
          }}
          className="lg:grid-cols-2"
        >

          <div>

            <div
              className={[
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              ].join(" ")}
              style={{ marginBottom: "1.5rem" }}
            >
              <span className="eyebrow">Werkwijze</span>
            </div>

            <h2
              className={[
                "heading-lg transition-all duration-[900ms] ease-out delay-150",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              ].join(" ")}
              style={{ maxWidth: "520px" }}
            >
              Een helder traject,
              <br />
              van ontwerp tot nazorg
            </h2>

          </div>

          <p
            className={[
              "body-lg transition-all duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            ].join(" ")}
            style={{
              maxWidth: "460px",
              alignSelf: "end"
            }}
          >
            Geen ruis, geen omwegen. We begeleiden het volledige proces met één
            aanspreekpunt, duidelijke keuzes en zorgvuldige uitvoering.
          </p>

        </div>

        {/* Steps */}
        <div>

          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={[
                "transition-all duration-[900ms] ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              ].join(" ")}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                borderTop: "1px solid var(--border)",
                padding: "clamp(2rem,3vw,2.5rem) 0",
                transitionDelay: inView ? `${300 + index * 120}ms` : "0ms"
              }}
            >

              <div className="lg:grid lg:grid-cols-[80px_1fr_1fr] lg:gap-10">

                {/* Nummer */}
                <div style={{ marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2.2rem,3vw,3.5rem)",
                      color: "var(--forest-muted)",
                      lineHeight: 1
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Titel */}
                <div style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.6rem,2vw,2.2rem)",
                      fontWeight: 300,
                      marginBottom: "4px",
                      color: "var(--ink)"
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      color: "var(--accent)",
                      fontSize: "0.95rem"
                    }}
                  >
                    {step.sub}
                  </p>
                </div>

                {/* Body */}
                <div>
                  <span
                    style={{
                      display: "block",
                      width: "24px",
                      height: "1px",
                      background: "var(--forest-muted)",
                      marginBottom: "1rem"
                    }}
                  />

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.85",
                      color: "var(--ink-soft)"
                    }}
                  >
                    {step.body}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}