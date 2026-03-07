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

export default function ProjectsHero() {
  const { ref, inView } = useInView();

  return (
    <section
      aria-label="Projecten"
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

          {/* TITLE */}
          <div
            className={[
              "transition-[opacity,transform] duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <span className="eyebrow mb-6 block">Projecten</span>

            <h1 className="heading-lg">
              Geselecteerde
              <br />
              buitenruimtes
            </h1>
          </div>

          {/* INTRO */}
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
              Een selectie van gerealiseerde projecten, ontworpen en uitgevoerd
              met aandacht voor rust, detail en tijdloos gebruik.
            </p>

            <p
              className="body-lg"
              style={{
                maxWidth: "440px",
                marginTop: "1.25rem",
              }}
            >
              Elke buitenruimte is afgestemd op de woning, de omgeving en het
              leven van de opdrachtgever.
            </p>
          </div>

        </div>

        

      </div>
    </section>
  );
}