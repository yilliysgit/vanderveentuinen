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
      { threshold, rootMargin: "0px 0px -80px 0px" }
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
      aria-label="Over ons"
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10"
          style={{
            marginBottom: "clamp(3rem,5vw,4rem)",
          }}
        >

          {/* Titelblok */}
          <div>

            <div
              className={[
                "mb-6 transition-[opacity,transform] duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              <span className="eyebrow">Over ons</span>
            </div>

            <h1
              className={[
                "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-100",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              Rust, aandacht en
              <br />
              tijdloos ontwerp
            </h1>

          </div>

          {/* Intro tekst */}
          <div
            className={[
              "transition-[opacity,transform] duration-[900ms] ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{
              paddingTop: "clamp(3rem,4vw,4rem)",
              maxWidth: "520px",
            }}
          >
            <p className="body-lg">
              Van der Veen ontwerpt en realiseert exclusieve buitenruimtes
              voor particuliere opdrachtgevers. Elk project benaderen wij
              als een samenhangend geheel — met aandacht voor detail,
              verhoudingen en langdurige kwaliteit.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginBottom: "clamp(2.5rem,4vw,3rem)",
          }}
        />

        {/* Facts */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-16"
        >
          {[
            { label: "Focus", value: "Exclusieve tuinen & buitenarchitectuur" },
            { label: "Werkgebied", value: "Nederland — o.a. Bloemendaal, Wassenaar" },
            { label: "Schaal", value: "Beperkt aantal projecten per jaar" },
          ].map(({ label, value }) => (
            <div key={label}>

              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--forest)",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                {label}
              </span>

              <p
                className="body-sm"
                style={{ maxWidth: "280px" }}
              >
                {value}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}