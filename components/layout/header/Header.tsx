"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Diensten", href: "/diensten" },
  { label: "Projecten", href: "/projecten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
<header
  className={`
    fixed inset-x-0 top-0 z-50
    border-b border-[rgba(58,82,53,0.1)]
    bg-[rgba(246,241,233,0.96)]
    backdrop-blur-xl
    transition-all duration-500
    ${scrolled ? "h-[72px]" : "h-[80px]"}
  `}
>
<div className="mx-auto flex h-full w-full items-center justify-between"
  style={{ maxWidth: "var(--max-w)", paddingLeft: "var(--section-x)", paddingRight: "var(--section-x)" }}
>
          <Link
            href="/"
            aria-label="Van der Veen home"
            className="flex shrink-0 flex-col justify-center gap-[5px] leading-none"
          >
            <span className="font-display text-[22px] font-normal tracking-[0.015em] text-[var(--ink)]">
              Van der Veen
            </span>
            <span className="font-body text-[8px] uppercase tracking-[0.28em] text-[rgba(58,82,53,0.6)]">
              Hoveniers &amp; Tuinontwerp
            </span>
          </Link>

          <nav className="hidden flex-1 justify-center md:flex" aria-label="Hoofdnavigatie">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-[10px] uppercase tracking-[0.2em] text-[rgba(26,23,20,0.65)] transition-colors duration-300 hover:text-[var(--ink)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

  <Link
  href="/contact"
  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
  className="hidden md:inline-flex items-center h-[40px] font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--forest)] border border-[rgba(58,82,53,0.3)] transition-all duration-300 hover:bg-[rgba(58,82,53,0.07)] whitespace-nowrap"
>
  Kennismaking plannen
</Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-[34px] w-[34px] flex-col justify-center gap-[6px] md:hidden"
          >
            <span className={`h-px w-full bg-[var(--ink)] transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-[var(--ink)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-[var(--ink)] transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>

        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobiele navigatie"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-40 flex flex-col justify-center bg-[#100f0d]
          px-[clamp(1.5rem,7vw,3rem)]
          transition-opacity duration-500
          ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <ul>
          {NAV_LINKS.map(({ label, href }, index) => (
            <li
              key={href}
              className={`border-[rgba(197,184,165,0.08)] ${index === 0 ? "border-t" : ""} border-b`}
            >
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-5 font-display text-[clamp(2rem,7vw,2.6rem)] text-[rgba(246,241,233,0.8)] transition-colors duration-300 hover:text-[var(--cream)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

      <Link
  href="/contact"
  style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
  className="hidden md:inline-flex items-center h-[40px] font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--forest)] border border-[rgba(58,82,53,0.3)] transition-all duration-300 hover:bg-[rgba(58,82,53,0.07)] whitespace-nowrap"
>
  Kennismaking plannen
</Link>
      </div>
    </>
  );
}