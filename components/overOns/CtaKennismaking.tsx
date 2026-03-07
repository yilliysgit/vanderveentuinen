"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.2) {
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

export default function CtaKennismaking() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Kennismaking"
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
          className={[
            "transition-all duration-[900ms] ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "end",
          }}
        >

          <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-[6vw]">

            {/* LEFT */}
            <div>

              <div style={{ marginBottom: "1.5rem" }}>
                <span className="eyebrow">Kennismaking</span>
              </div>

              <h2
                className="heading-lg"
                style={{ maxWidth: "520px" }}
              >
                Kennismaken
              </h2>

            </div>

            {/* RIGHT */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
                maxWidth: "440px",
              }}
            >

              <p className="body-lg">
                Een eerste gesprek is bedoeld om te verkennen of we bij elkaar
                passen. Zonder verplichtingen, met volledige aandacht.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

                <Link href="/contact" className="btn-primary group">
                  Plan een kennismaking

                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <path
                      d="M11 1l4 4-4 4M1 5h14"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </Link>

                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "var(--ink-faint)",
                  }}
                >
                  Een eerste gesprek is bedoeld om te verkennen of we bij elkaar passen.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}