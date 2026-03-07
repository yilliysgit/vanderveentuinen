"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const SERVICES = [
  {
    number: "01",
    title: "Ontwerp van buitenruimtes",
    intro: "Van eerste schets tot uitgewerkt plan.",
    body: "Analyse en ontwerp waarin woning, tuin en omgeving samenkomen in één helder en doordacht geheel. Van eerste schets tot uitgewerkt ontwerp met aandacht voor verhoudingen, zichtlijnen en materiaalgebruik.",
  },
  {
    number: "02",
    title: "Realisatie & projectbegeleiding",
    intro: "Eén aanspreekpunt, van start tot oplevering.",
    body: "Zorgvuldige uitvoering met vaste vakmensen, duidelijke planning en één aanspreekpunt gedurende het volledige traject. Wij bewaken kwaliteit, rust en afwerking tot in het kleinste detail.",
  },
  {
    number: "03",
    title: "Maatwerk buitenarchitectuur",
    intro: "Ontworpen voor de plek en de architectuur.",
    body: "Ontwerp en realisatie van unieke elementen zoals pergola's, trappen, zitplekken en maatwerk constructies — altijd afgestemd op de architectuur van de woning en de buitenruimte.",
  },
  {
    number: "04",
    title: "Verlichting & sfeerregie",
    intro: "Licht als subtiel verlengstuk van architectuur.",
    body: "Doordachte buitenverlichting die rust, diepte en veiligheid creëert zonder zichtbaar aanwezig te zijn. Licht als subtiel verlengstuk van architectuur en landschap.",
  },
  {
    number: "05",
    title: "Nazorg & onderhoud op maat",
    intro: "Betrokkenheid die niet stopt bij oplevering.",
    body: "Langdurige kwaliteit door periodieke controle en onderhoud. Deze dienst bieden wij uitsluitend voor door ons gerealiseerde projecten, zodat het ontwerp ook op lange termijn zijn karakter behoudt.",
  },
];

export default function ServicesList() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "0 var(--section-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceRow
            key={service.number}
            number={service.number}
            title={service.title}
            intro={service.intro}
            body={service.body}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  number,
  title,
  intro,
  body,
  index,
}: {
  number: string;
  title: string;
  intro: string;
  body: string;
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        borderTop: "1px solid var(--border)",
        padding: "clamp(2.5rem,4vw,3.5rem) 0",
      }}
      className="lg:grid-cols-[80px_1fr_1fr] lg:gap-10"
    >

      {/* Nummer */}
      <div
        className={[
          "transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
        style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem,3vw,3.5rem)",
            color: "var(--forest-muted)",
            lineHeight: 1,
          }}
        >
          {number}
        </span>
      </div>

      {/* Titel + intro */}
      <div
        className={[
          "transition-all duration-[900ms] ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{
          paddingRight: "clamp(1rem,2vw,3rem)",
          transitionDelay: inView ? `${80 + index * 80}ms` : "0ms",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(1.8rem,2.4vw,2.6rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: "0.4rem",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            color: "var(--accent)",
            fontSize: "1rem",
          }}
        >
          {intro}
        </p>
      </div>

      {/* Body */}
      <div
        className={[
          "transition-all duration-[900ms] ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
        style={{ transitionDelay: inView ? `${160 + index * 80}ms` : "0ms" }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: "var(--forest-muted)",
            marginBottom: "1rem",
          }}
        />

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.9",
            color: "var(--ink-soft)",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}