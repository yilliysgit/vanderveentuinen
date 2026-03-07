"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
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

export default function WorkArea() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Werkgebied en opdrachtgevers"
      style={{
        background: "var(--bg)",
        padding: "clamp(5rem,9vw,8rem) var(--section-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="lg:grid-cols-[1fr_0.9fr]"
        >

          {/* LINKS */}
          <div>

            <div
              className={[
                "transition-opacity duration-700 ease-out",
                inView ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{ marginBottom: "1.75rem" }}
            >
              <span className="eyebrow">
                Werkgebied & opdrachtgevers
              </span>
            </div>

            <h2
              className={[
                "heading-lg transition-all duration-[900ms] ease-out delay-150",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ maxWidth: "520px", marginBottom: "1.5rem" }}
            >
              Werkgebied &
              <br />
              opdrachtgevers
            </h2>

            <p
              className={[
                "body-lg transition-opacity duration-[900ms] ease-out delay-300",
                inView ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{ maxWidth: "520px" }}
            >
              Wij werken uitsluitend voor particuliere opdrachtgevers met een
              duidelijke visie op kwaliteit en langdurig gebruik. Elk project
              ontstaat vanuit context — de woning, de omgeving en het dagelijks
              leven.
            </p>

          </div>

          {/* RECHTS */}
          <div
            className={[
              "transition-all duration-[900ms] ease-out delay-450",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              maxWidth: "420px",
            }}
          >

            {[
              {
                label: "Regio",
                value: "Nederland — met een focus op de Randstad.",
              },
              {
                label: "Plaatsen",
                value: "Bloemendaal · Wassenaar · Haarlem · Amsterdam",
              },
              {
                label: "Selectie",
                value:
                  "Beperkt aantal projecten per jaar om aandacht en kwaliteit te waarborgen.",
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.75",
                    color: "var(--ink-soft)",
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