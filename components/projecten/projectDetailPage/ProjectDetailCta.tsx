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

export default function ProjectsCta() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Kennismaking"
      style={{
        background: "var(--bg-alt)",
        padding: "clamp(5rem,9vw,8rem) var(--section-x)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]"
          style={{
            gap: "clamp(2.5rem,5vw,6rem)",
            alignItems: "end",
          }}
        >
          {/* LEFT */}
          <div>

            <div
              className={[
                "mb-6 transition-[opacity,transform] duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <span className="eyebrow">Kennismaking</span>
            </div>

            <h2
              className={[
                "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-150",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ maxWidth: "640px" }}
            >
              Overweegt u een
              <br />
              nieuwe buitenruimte?
            </h2>

          </div>

          {/* RIGHT */}
          <div
            className={[
              "flex flex-col gap-8 transition-[opacity,transform] duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{
              maxWidth: "420px",
            }}
          >
            <p className="body-lg">
              In een eerste gesprek verkennen we uw wensen, ideeën en de
              mogelijkheden van uw locatie. Zonder verplichting, met volledige
              aandacht.
            </p>

            <div className="flex flex-col gap-4">

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
                  fontFamily: "var(--font-body)",
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
    </section>
  );
}