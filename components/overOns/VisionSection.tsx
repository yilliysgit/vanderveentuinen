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

export default function VisionSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Onze visie"
      style={{
        background: "var(--bg-alt)",
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
          style={{ marginBottom: "2.5rem" }}
        >
          <span className="eyebrow">Visie</span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem"
          }}
          className="lg:grid-cols-[7fr_5fr]"
        >

          {/* Titel */}
          <h2
            className={[
              "heading-lg transition-all duration-[1000ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ].join(" ")}
            style={{ maxWidth: "620px" }}
          >
            Ontwerpen vanuit rust,
            <br />
            niet vanuit haast
          </h2>

          {/* Tekst */}
          <div
            className={[
              "transition-all duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            ].join(" ")}
          >

            <div
              className="body-lg"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                maxWidth: "440px"
              }}
            >
              <p>
                Wij geloven dat een buitenruimte pas echt waardevol wordt wanneer
                zij in balans is met de woning, de omgeving en het leven van de
                opdrachtgever. Dat vraagt om aandacht, vertraging en zorgvuldige
                keuzes.
              </p>

              <p>
                Daarom werken wij niet met standaardoplossingen of snelle
                trajecten. Elk ontwerp ontstaat vanuit context, materiaal en
                gebruik — met als doel een tijdloos resultaat dat vandaag rust
                geeft en over jaren nog steeds vanzelfsprekend voelt.
              </p>
            </div>

            {/* Drie ankers */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "1.5rem",
                borderTop: "1px solid var(--border)",
                paddingTop: "1.5rem"
              }}
            >
              {[
                { label: "Benadering", value: "Context & verhoudingen" },
                { label: "Materiaal", value: "Rustige, duurzame keuzes" },
                { label: "Doel", value: "Tijdloos gebruik" }
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "9.5px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "6px"
                    }}
                  >
                    {label}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "var(--ink-soft)"
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}