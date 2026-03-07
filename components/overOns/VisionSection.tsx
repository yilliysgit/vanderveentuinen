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

export default function VisionSection() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Onze visie"
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
          <span className="eyebrow">Visie</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-x-24 gap-y-10">

          {/* Titel */}
          <h2
            className={[
              "heading-lg transition-[opacity,transform] duration-[900ms] ease-out delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ maxWidth: "620px" }}
          >
            Ontwerpen vanuit rust,
            <br />
            niet vanuit haast
          </h2>

          {/* Tekstblok */}
          <div
            className={[
              "transition-[opacity,transform] duration-[900ms] ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >

            {/* Tekst */}
            <div
              className="body-lg"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                maxWidth: "440px",
              }}
            >
              <p>
                Wij geloven dat een buitenruimte pas echt waardevol wordt
                wanneer zij in balans is met de woning, de omgeving en het
                leven van de opdrachtgever. Dat vraagt om aandacht,
                vertraging en zorgvuldige keuzes.
              </p>

              <p>
                Daarom werken wij niet met standaardoplossingen of snelle
                trajecten. Elk ontwerp ontstaat vanuit context, materiaal
                en gebruik — met als doel een tijdloos resultaat dat
                vandaag rust geeft en over jaren nog steeds vanzelfsprekend
                voelt.
              </p>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginTop: "clamp(2rem,3vw,2.5rem)",
                paddingTop: "1.5rem",
              }}
            />

            {/* Ankers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6">

              {[
                { label: "Benadering", value: "Context & verhoudingen" },
                { label: "Materiaal", value: "Rustige, duurzame keuzes" },
                { label: "Doel", value: "Tijdloos gebruik" },
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

                  <p className="body-sm">
                    {value}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}