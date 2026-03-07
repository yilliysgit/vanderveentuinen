"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2800&q=90";

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full h-dvh min-h-[640px] overflow-hidden bg-[var(--ink)] -mt-[80px]"
      aria-label="Van der Veen — Exclusieve tuinen en buitenruimtes"
    >
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Exclusieve tuin met zwembad in avondlicht"
          fill
          priority
          sizes="100vw"
          className={[
            "object-cover object-[center_65%]",
            // Foto ademt — brightness iets hoger dan origineel maar niet te licht
            "saturate-[0.88] brightness-[0.72]",
            "transition-[opacity,transform] duration-[1800ms,9000ms] ease-in-out",
            loaded ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100",
          ].join(" ")}
        />

        {/* Links donkerder waar tekst staat, rechts open laten zodat foto zichtbaar blijft */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,7,5,0.72) 0%, rgba(8,7,5,0.35) 52%, rgba(8,7,5,0.0) 100%)",
          }}
        />

        {/* Onderin voor CTA/tekst leesbaarheid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,7,5,0.78) 0%, rgba(8,7,5,0.18) 35%, transparent 60%)",
          }}
        />

        {/* Subtiele vignette bovenin voor header */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,7,5,0.30) 0%, transparent 28%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center w-full max-w-[var(--max-w)] mx-auto"
        style={{
          paddingLeft: "var(--section-x)",
          paddingRight: "var(--section-x)",
          paddingBottom: "clamp(3rem, 8vh, 6rem)",
        }}
      >
        {/* Eyebrow */}
        <p
          className={[
            "flex items-center gap-3 mb-7",
            "transition-all duration-1000 ease-out delay-300",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <span className="block w-9 h-px bg-[rgba(197,184,165,0.45)]" />
          <span
            className="font-body uppercase tracking-[0.28em]"
            style={{ fontSize: "10px", color: "rgba(197,184,165,0.65)" }}
          >
            Ontwerp · Realisatie · Nazorg
          </span>
        </p>

        {/* Headline */}
        <h1
          className={[
            "font-display",
            "transition-all duration-[1200ms] ease-out delay-500",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
          style={{
            fontSize: "clamp(2.4rem,4.8vw,5.2rem)",
            lineHeight: 1.03,
            letterSpacing: "-0.02em",
            color: "var(--cream)",
            maxWidth: "880px",
            marginBottom: "2rem",
            textShadow: "0 1px 24px rgba(0,0,0,0.5), 0 4px 48px rgba(0,0,0,0.3)",
          }}
        >
          Uw tuin als{" "}
          <em className="italic text-[var(--stone)]">stille</em>
          <br />verlengstuk van
          <br />uw woning.
        </h1>

        {/* Sub text */}
        <p
          className={[
            "font-body",
            "transition-all duration-[1100ms] ease-out delay-700",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
          style={{
            fontSize: "clamp(14px,1.1vw,15.5px)",
            lineHeight: 1.85,
            color: "rgba(220,210,192,0.75)",
            maxWidth: "420px",
            marginBottom: "2.75rem",
            textShadow: "0 1px 12px rgba(0,0,0,0.4)",
          }}
        >
          Wij ontwerpen en realiseren tijdloze buitenruimtes voor particuliere
          opdrachtgevers die kiezen voor maatwerk, rust en hoogwaardige afwerking.
        </p>

        {/* CTA */}
        <div
          className={[
            "flex items-center gap-8 flex-wrap",
            "transition-all duration-1000 ease-out delay-[900ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <Link href="/contact" className="btn-primary-dark group">
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
          <Link href="/projecten" className="btn-ghost">
            Bekijk projecten
          </Link>
        </div>

        {/* Sub note */}
        <p
          className={[
            "mt-6 font-body",
            "transition-opacity duration-1000 ease-out delay-[1100ms]",
            loaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            fontSize: "11px",
            letterSpacing: "0.06em",
            color: "rgba(197,184,165,0.45)",
            maxWidth: "420px",
          }}
        >
          Wij realiseren bewust een beperkt aantal projecten per jaar
          om kwaliteit en aandacht te waarborgen.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={[
          "absolute z-20 flex flex-col items-center gap-2.5 max-sm:hidden",
          "transition-opacity duration-[1200ms] delay-[1400ms]",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          right: "var(--section-x)",
          bottom: "clamp(2.5rem,7vh,5rem)",
        }}
      >
        <div className="w-px h-[52px] bg-[rgba(197,184,165,0.12)] relative overflow-hidden">
          <span className="absolute inset-0 bg-[rgba(197,184,165,0.5)] animate-scrollDrop" />
        </div>
        <span
          className="font-body uppercase"
          style={{
            fontSize: "8px",
            letterSpacing: "0.28em",
            color: "rgba(197,184,165,0.3)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}