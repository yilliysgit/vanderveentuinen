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
      aria-label="Plan een kennismaking"
      className="section-pad"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="section-inner">

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end"
        >

          {/* LEFT */}
          <div>

            <div
              className={[
                "mb-8",
                "transition-[opacity,transform] duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <span className="eyebrow">Kennismaking</span>
            </div>

            <h2
              className={[
                "heading-xl",
                "transition-[opacity,transform] duration-[900ms] ease-out delay-150",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              Overweegt u een
              <br />
              nieuwe buitenruimte?
            </h2>

          </div>

          {/* RIGHT */}
          <div
            className={[
              "flex flex-col gap-8",
              "transition-[opacity,transform] duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >

            <p className="body-lg" style={{ maxWidth: "440px" }}>
              In een eerste gesprek verkennen we uw wensen, ideeën en de
              mogelijkheden van uw locatie. Zonder verplichting, met volledige
              aandacht.
            </p>

            <div className="flex flex-col gap-4">

              <Link
                href="/contact"
                className="btn-primary group"
                style={{ width: "fit-content" }}
              >
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
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </Link>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 300,
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