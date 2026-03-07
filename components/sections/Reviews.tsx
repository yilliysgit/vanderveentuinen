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

const REVIEWS = [
  {
    quote:
      "Vanaf het eerste gesprek was duidelijk dat rust, detail en kwaliteit voorop stonden. Het resultaat voelt als een natuurlijk verlengstuk van ons huis.",
    attribution: "Particuliere opdrachtgever, Bloemendaal",
  },
  {
    quote:
      "Wat ons raakte was de manier waarop ze luisterden. Geen haast, geen druk. Alleen aandacht voor wat wij echt wilden — en dat zie je terug in elk detail.",
    attribution: "Particuliere opdrachtgever, Wassenaar",
  },
];

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Ervaringen van opdrachtgevers"
      style={{
        background: "var(--bg-alt)",
        padding: "clamp(5rem, 8vw, 7rem) var(--section-x)",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            position: "relative",
            columnGap: "clamp(3rem, 5vw, 5rem)",
            rowGap: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          {/* Vertical divider desktop */}
          <span
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "rgba(58, 82, 53, 0.08)",
              transform: "translateX(-0.5px)",
            }}
          />

          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className={[
                "transition-[opacity,transform] duration-[900ms] ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{
                maxWidth: "520px",
                width: "100%",
                margin: i === 0 ? "0 auto 0 0" : "0 0 0 auto",
                transitionDelay: inView ? `${i * 180}ms` : "0ms",
              }}
            >
              {/* Openingsquote — Playfair Display voor sfeer */}
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "3.2rem",
                  lineHeight: 1,
                  color: "rgba(58, 82, 53, 0.16)",
                  marginBottom: "1rem",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              {/* Quote — Playfair Display italic voor elegantie */}
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)",
                  lineHeight: 1.75,
                  letterSpacing: "-0.005em",
                  color: "var(--ink)",
                  marginBottom: "1.75rem",
                }}
              >
                {review.quote}
              </blockquote>

              <div className="flex items-center gap-3">
                <span
                  style={{
                    width: "1.3rem",
                    height: "1px",
                    background: "rgba(58, 82, 53, 0.22)",
                    flexShrink: 0,
                  }}
                />
                <cite
                  style={{
                    fontStyle: "normal",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                  }}
                >
                  {review.attribution}
                </cite>
              </div>
            </article>
          ))}
        </div>

        <p
          className={[
            "text-center",
            "transition-opacity duration-[800ms] ease-out delay-[400ms]",
            inView ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            marginTop: "clamp(3rem, 5vw, 4rem)",
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.14em",
            color: "var(--ink-faint)",
          }}
        >
          Gemiddeld beoordeeld met 4.9 op Google
        </p>
      </div>
    </section>
  );
}