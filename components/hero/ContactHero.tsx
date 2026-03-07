export default function ContactHero() {
  return (
    <section
      aria-label="Kennismaking"
      style={{
        background: "var(--bg)",
        padding: "clamp(6rem, 10vw, 8rem) var(--section-x) clamp(3rem, 6vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <div 
          className="eyebrow" 
          style={{ 
            marginBottom: "2rem", 
            letterSpacing: "0.1em", 
            textTransform: "uppercase",
            opacity: 0.8 
          }}
        >
          Kennismaking
        </div>

        <div
          style={{
            display: "grid",
            // Iets meer ruimte voor de kop, rechterkant blijft compact
            gridTemplateColumns: "1.4fr 0.6fr", 
            gap: "8vw",
            // 'start' zorgt voor een strakke bovenlijn, 'end' is vaak onvoorspelbaar bij tekst
            alignItems: "start",
          }}
        >
          {/* LEFT: Heading & Intro */}
          <div>
            <h1 
              className="heading-xl" 
              style={{ 
                marginBottom: "2rem",
                // Handmatige override als de class te groot is:
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                lineHeight: "1.1",
                fontWeight: "400", // Of wat past bij jouw font-style
                letterSpacing: "-0.02em"
              }}
            >
              Overweegt u een
              <br />
              nieuwe buitenruimte?
            </h1>

            <p className="body-lg" style={{ maxWidth: "480px", opacity: 0.9 }}>
              Een eerste gesprek is bedoeld om te verkennen of we bij elkaar
              passen. We luisteren naar uw wensen, ideeën en de mogelijkheden
              van uw locatie — zonder verplichtingen, met volledige aandacht.
            </p>
          </div>

          {/* RIGHT: Specificaties / Focus */}
          <div style={{ paddingTop: "0.5rem" }}> {/* Kleine offset om optisch uit te lijnen met de h1 */}
            <p className="body-sm" style={{ lineHeight: "1.6" }}>
              Wij werken uitsluitend voor particuliere opdrachtgevers en nemen
              een beperkt aantal projecten per jaar aan.
            </p>

            <p className="body-sm" style={{ marginTop: "1.5rem", lineHeight: "1.6", opacity: 0.7 }}>
              Projecten door heel Nederland, met een focus op Bloemendaal,
              Wassenaar en omgeving.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: "4rem",
            borderTop: "1px solid var(--border)",
            opacity: 0.3
          }}
        />
      </div>
    </section>
  );
}