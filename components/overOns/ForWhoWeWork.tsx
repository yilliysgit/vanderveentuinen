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

export default function ForWhoWeWork() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Voor wie wij werken"
      className="section-pad"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="section-inner">

        {/* Eyebrow */}
        <div
          ref={ref}
          className={[
            "mb-10 transition-opacity duration-700 ease-out",
            inView ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <span className="eyebrow">Voor wie wij werken</span>
        </div>

        {/* Titel + intro */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-x-24 gap-y-10"
          style={{ marginBottom: "clamp(3rem,5vw,4rem)" }}
        >

          <h2
            className={[
              "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ maxWidth: "620px" }}
          >
            Uitsluitend particuliere
            <br />
            opdrachtgevers
          </h2>

          <p
            className={[
              "body-lg transition-[opacity,transform] duration-[900ms] ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ maxWidth: "440px" }}
          >
            Wij werken voor particuliere opdrachtgevers die waarde hechten aan rust,
            kwaliteit en tijdloosheid. Door bewust een beperkt aantal projecten per
            jaar aan te nemen, kunnen wij elk project met volledige aandacht begeleiden.
          </p>

        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginBottom: "clamp(2rem,3vw,2.5rem)",
          }}
        />

        {/* Feiten */}
        <div
          className={[
            "grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-16",
            "transition-[opacity,transform] duration-[900ms] ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          {[
            {
              label: "Selectie",
              value:
                "Beperkt aantal projecten per jaar om kwaliteit en aandacht te waarborgen.",
            },
            {
              label: "Werkgebied",
              value:
                "Projecten door heel Nederland, met een focus op Bloemendaal, Wassenaar en omgeving.",
            },
            {
              label: "Samenwerking",
              value:
                "Eén vast aanspreekpunt en een traject dat ontstaat vanuit vertrouwen en zorgvuldigheid.",
            },
          ].map(({ label, value }) => (
            <div key={label}>

              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--forest)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {label}
              </span>

              <p className="body-sm" style={{ maxWidth: "320px" }}>
                {value}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}