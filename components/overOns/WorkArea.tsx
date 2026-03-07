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
      { threshold, rootMargin: "0px 0px -80px 0px" }
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
      aria-label="Werkgebied en opdrachtgevers"
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-x-24 gap-y-10"
        >

          {/* LINKS */}
          <div>

            <div
              className={[
                "mb-7 transition-opacity duration-700 ease-out",
                inView ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <span className="eyebrow">
                Werkgebied & opdrachtgevers
              </span>
            </div>

            <h2
              className={[
                "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-150",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ maxWidth: "520px", marginBottom: "1.4rem" }}
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
              "transition-[opacity,transform] duration-[900ms] ease-out delay-450",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
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

                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                    display: "block",
                    marginBottom: "0.45rem",
                  }}
                >
                  {label}
                </span>

                <p className="body-sm">
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