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

export default function AboutHero() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Over ons"
      style={{
        background: "var(--bg)",
        padding: "clamp(6rem,10vw,9rem) var(--section-x) clamp(4rem,6vw,5rem)"
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
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          ].join(" ")}
          style={{ marginBottom: "1.75rem" }}
        >
          <span className="eyebrow">Over ons</span>
        </div>

        {/* Titel */}
        <h1
          className={[
            "heading-xl transition-all duration-[1000ms] ease-out delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          ].join(" ")}
          style={{
            maxWidth: "720px",
            fontSize: "clamp(2.8rem,5vw,4.5rem)",
            lineHeight: "1.08",
            marginBottom: "clamp(3rem,5vw,4rem)"
          }}
        >
          Rust, aandacht en
          <br />
          tijdloos ontwerp
        </h1>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            borderTop: "1px solid var(--border)",
            paddingTop: "2.5rem"
          }}
          className="lg:grid-cols-[1fr_380px]"
        >

          {/* Intro */}
          <p
            className={[
              "body-lg transition-all duration-[900ms] ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ].join(" ")}
            style={{ maxWidth: "560px" }}
          >
            Van der Veen ontwerpt en realiseert exclusieve buitenruimtes
            voor particuliere opdrachtgevers. Elk project benaderen wij
            als een samenhangend geheel — met aandacht voor detail,
            verhoudingen en langdurige kwaliteit.
          </p>

          {/* Feiten */}
          <div
            className={[
              "transition-all duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ].join(" ")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}
          >

            {[
              { label: "Focus", value: "Exclusieve tuinen & buitenarchitectuur" },
              { label: "Werkgebied", value: "Nederland — o.a. Bloemendaal, Wassenaar" },
              { label: "Schaal", value: "Beperkt aantal projecten per jaar" }
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "baseline"
                }}
              >

                <span
                  style={{
                    fontSize: "9.5px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    width: "90px",
                    flexShrink: 0
                  }}
                >
                  {label}
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "var(--ink-soft)"
                  }}
                >
                  {value}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}