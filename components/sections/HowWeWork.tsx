"use client";

import { useEffect, useRef, useState } from "react";

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
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const STEPS = [
  {
    number: "01",
    title: "Ontwerp",
    intro: "Van eerste gesprek tot definitief plan.",
    body: "Elk project begint met luisteren. We vertalen uw wensen en de architectuur van de woning naar een doordacht ontwerp waarin materiaal, verhoudingen en sfeer samenkomen.",
  },
  {
    number: "02",
    title: "Realisatie",
    intro: "Vakmanschap dat zichtbaar is in elk detail.",
    body: "De uitvoering gebeurt met vaste vakmensen en hoogwaardige materialen. Gedurende het hele proces staan precisie, afwerking en rust centraal.",
  },
  {
    number: "03",
    title: "Nazorg",
    intro: "Betrokkenheid die niet stopt bij oplevering.",
    body: "Ook na oplevering blijven wij betrokken. Met onderhoud en periodieke controle zorgen we dat uw buitenruimte zijn kwaliteit behoudt — seizoen na seizoen.",
  },
];

export default function HowWeWork() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Werkwijze"
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        {/* HEADER */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10"
          style={{
            marginBottom: "clamp(3.5rem,4vw,5rem)",
          }}
        >
          <div
            className={[
              "transition-[opacity,transform] duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <span className="eyebrow mb-6 block">Werkwijze</span>

            <h2 className="heading-lg">
              Een doordachte benadering
              <br />
              van buitenruimtes
            </h2>
          </div>

          <div
            className={[
              "transition-[opacity,transform] duration-700 ease-out delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{
              paddingTop: "clamp(3rem,4vw,4rem)",
            }}
          >
            <p className="body-lg" style={{ maxWidth: "440px" }}>
              Elke buitenruimte vraagt om aandacht, visie en zorgvuldige
              uitvoering. Wij begeleiden het volledige traject — van eerste
              idee tot oplevering — met oog voor detail en rust.
            </p>
          </div>
        </div>

        {/* STEPS */}
        <div className="flex flex-col">
          {STEPS.map((step, index) => (
            <StepRow key={step.number} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepRow({
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
      className="grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_1fr] gap-x-14 gap-y-4"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "clamp(2.4rem,3vw,3rem) 0",
      }}
    >
      {/* NUMBER */}
      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem,3vw,3.2rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "rgba(58,82,53,0.12)",
          }}
        >
          {number}
        </span>
      </div>

      {/* TITLE */}
      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{ transitionDelay: `${80 + index * 80}ms` }}
      >
        <h3 className="heading-md mb-2">{title}</h3>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "var(--stone-mid)",
            lineHeight: 1.6,
          }}
        >
          {intro}
        </p>
      </div>

      {/* TEXT */}
      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{ transitionDelay: `${160 + index * 80}ms` }}
      >
        <span
          className="block mb-5"
          style={{
            width: "1.5rem",
            height: "1px",
            background: "var(--forest-muted)",
          }}
        />

        <p className="body-sm">{body}</p>
      </div>
    </div>
  );
}