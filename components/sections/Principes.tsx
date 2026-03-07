"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const PRINCIPES = [
  {
    titel: "Rust vóór overdaad",
    tekst:
      "Een goede tuin hoeft zich niet te bewijzen. Wij ontwerpen buitenruimtes waarin verhoudingen kloppen, materialen spreken en niets te veel is.",
  },
  {
    titel: "Aandacht voor detail",
    tekst:
      "Van lijnvoering tot materiaalovergangen en verlichting: elk detail draagt bij aan het geheel en blijft ook op lange termijn kloppen.",
  },
  {
    titel: "Tijdloos in gebruik",
    tekst:
      "Wij ontwerpen met het oog op de toekomst. Buitenruimtes die vandaag rust geven en over jaren nog steeds vanzelfsprekend voelen.",
  },
];

export default function Principes() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Onze principes"
      style={{
        background: "var(--bg)",
        padding: "clamp(5rem,8vw,7rem) var(--section-x)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "clamp(3rem,5vw,4rem)" }}>
          <span className="eyebrow">Principes</span>

          <h2
            className={[
              "transition-[opacity,transform] duration-[900ms] ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem,3.6vw,3.4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginTop: "0.8rem",
            }}
          >
            Onze principes
          </h2>
        </div>

        {/* GRID */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{
            borderTop: "1px solid var(--forest-muted)",
          }}
        >
          {PRINCIPES.map(({ titel, tekst }, i) => (
            <div
              key={titel}
              className={[
                "transition-[opacity,transform] duration-[900ms] ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{
                padding: "clamp(2.5rem,4vw,3.2rem) clamp(1.5rem,2.5vw,2rem)",
                borderLeft:
                  i !== 0 ? "1px solid var(--forest-muted)" : "none",
                transitionDelay: inView ? `${200 + i * 120}ms` : "0ms",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "1.2rem",
                  height: "1px",
                  background: "rgba(58,82,53,0.3)",
                  marginBottom: "1.1rem",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.3rem,1.6vw,1.6rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  marginBottom: "0.8rem",
                }}
              >
                {titel}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem,1vw,1rem)",
                  lineHeight: 1.7,
                  color: "var(--ink-soft)",
                  maxWidth: "36ch",
                }}
              >
                {tekst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}