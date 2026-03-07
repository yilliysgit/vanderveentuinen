import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-nav-link {
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(246, 241, 233, 0.7);
          text-decoration: none;
          transition: color 0.25s;
        }
        .footer-nav-link:hover { color: #f6f1e9; }

        .footer-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(246, 241, 233, 0.75);
          text-decoration: none;
          border-bottom: 1px solid rgba(246, 241, 233, 0.25);
          padding-bottom: 2px;
          transition: color 0.25s, border-color 0.25s;
        }
        .footer-cta-link:hover {
          color: #f6f1e9;
          border-color: rgba(246, 241, 233, 0.55);
        }
      `}</style>

      <footer
        style={{
          background: "var(--ink)",
          color: "var(--cream)",
          padding: "clamp(4rem, 7vw, 7rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem)",
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 mb-14 lg:mb-16">

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
                  letterSpacing: "0.02em",
                  color: "var(--cream)",
                  marginBottom: "1.25rem",
                }}
              >
                Van der Veen
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "rgba(246, 241, 233, 0.6)",
                  maxWidth: "380px",
                }}
              >
                Ontwerp en realisatie van exclusieve buitenruimtes voor particuliere
                opdrachtgevers. Van eerste idee tot zorgvuldige oplevering —
                met aandacht voor rust, detail en kwaliteit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">

              <nav aria-label="Footer navigatie">
                <p style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 400, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(246, 241, 233, 0.4)", marginBottom: "1.25rem" }}>
                  Navigatie
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "Diensten", href: "/diensten" },
                    { label: "Projecten", href: "/projecten" },
                    { label: "Over ons", href: "/over-ons" },
                    { label: "Contact", href: "/contact" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="footer-nav-link">{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 400, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(246, 241, 233, 0.4)", marginBottom: "1.25rem" }}>
                  Contact
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.85, color: "rgba(246, 241, 233, 0.6)", marginBottom: "1.25rem" }}>
                  Wij werken uitsluitend voor particuliere opdrachtgevers en nemen
                  een beperkt aantal projecten per jaar aan.
                </p>
                <Link href="/contact" className="footer-cta-link">
                  Kennismaking plannen →
                </Link>
              </div>

            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row justify-between gap-4"
            style={{ borderTop: "1px solid rgba(246, 241, 233, 0.1)", paddingTop: "1.5rem", fontFamily: "var(--font-body)", fontSize: "10.5px", fontWeight: 300, letterSpacing: "0.04em", color: "rgba(246, 241, 233, 0.3)" }}
          >
            <span>© {new Date().getFullYear()} Van der Veen — Alle rechten voorbehouden</span>
            <span>Ontwerp &amp; realisatie van buitenruimtes</span>
          </div>

        </div>
      </footer>
    </>
  );
}