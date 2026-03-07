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

export default function ForWhoWeWork() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-label="Voor wie wij werken"
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
          <span className="eyebrow">Voor wie wij werken</span>
        </div>

        {/* Titel + tekst */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "clamp(3rem,5vw,4rem)"
          }}
          className="lg:grid-cols-[7fr_5fr]"
        >

          <h2
            className={[
              "heading-lg transition-all duration-[1000ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ].join(" ")}
            style={{ maxWidth: "620px" }}
          >
            Uitsluitend particuliere
            <br />
            opdrachtgevers
          </h2>

          <p
            className={[
              "body-lg transition-all duration-[900ms] ease-out delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            ].join(" ")}
            style={{ maxWidth: "440px" }}
          >
            Wij werken voor particuliere opdrachtgevers die waarde hechten aan rust,
            kwaliteit en tijdloosheid. Door bewust een beperkt aantal projecten per
            jaar aan te nemen, kunnen wij elk project met volledige aandacht begeleiden.
          </p>

        </div>

        {/* Drie feiten */}
        <div
          className={[
            "transition-all duration-[900ms] ease-out delay-450",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          ].join(" ")}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            borderTop: "1px solid var(--border)"
          }}
        >

          <div className="lg:grid lg:grid-cols-3">

            {[
              {
                label: "Selectie",
                value:
                  "Beperkt aantal projecten per jaar om kwaliteit en aandacht te waarborgen."
              },
              {
                label: "Werkgebied",
                value:
                  "Projecten door heel Nederland, met een focus op Bloemendaal, Wassenaar en omgeving."
              },
              {
                label: "Samenwerking",
                value:
                  "Eén vast aanspreekpunt en een traject dat ontstaat vanuit vertrouwen en zorgvuldigheid."
              }
            ].map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  paddingRight: i !== 2 ? "2rem" : "0",
                  borderRight: i !== 2 ? "1px solid var(--border)" : "none"
                }}
              >

                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "10px"
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
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
    </section>
  );
}