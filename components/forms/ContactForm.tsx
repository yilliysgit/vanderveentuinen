"use client"
export default function ContactForm() {
  return (
    <section
      aria-label="Contactformulier"
      style={{
        background: "var(--bg)",
        // Padding iets strakker aangetrokken voor de overgang vanaf de Hero
        padding: "0 var(--section-x) clamp(6rem, 10vw, 10rem)",
      }}
    >
      <div
        style={{
          maxWidth: "820px", // Iets smaller voor betere leesbaarheid op desktop
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "grid",
            gap: "3.5rem", // Grotere gap tussen de velden voor "lucht"
          }}
        >
          {/* We herhalen de input-groepen met een iets verfijndere stijl */}
          {[
            { label: "Naam", type: "text", required: true },
            { label: "E-mail", type: "email", required: true },
            { label: "Plaats van het project", type: "text", required: false },
          ].map((field, index) => (
            <div key={index} style={{ position: "relative" }}>
              <label
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--forest)",
                  opacity: 0.6,
                  marginBottom: "1rem",
                  display: "block",
                  fontWeight: "500"
                }}
              >
                {field.label} {field.required && "*"}
              </label>

              <input
                type={field.type}
                required={field.required}
                placeholder="..." // Subtiele placeholder voor diepte
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.5rem 0 1rem 0",
                  fontSize: "16px",
                  fontFamily: "var(--font-body)",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                  color: "var(--ink)",
                  borderRadius: 0, // Voorkomt ronde hoeken op iOS
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--forest)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
          ))}

          {/* Toelichting (Textarea) */}
          <div style={{ position: "relative" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--forest)",
                opacity: 0.6,
                marginBottom: "1rem",
                display: "block",
                fontWeight: "500"
              }}
            >
              Korte toelichting
            </label>

            <textarea
              rows={3}
              placeholder="Vertel ons kort over uw plannen..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--border)",
                padding: "0.5rem 0 1rem 0",
                fontSize: "16px",
                fontFamily: "var(--font-body)",
                resize: "none",
                outline: "none",
                transition: "border-color 0.3s ease",
                color: "var(--ink)",
                borderRadius: 0,
                lineHeight: "1.6"
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--forest)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            {/* Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{
                padding: "1.2rem 3rem",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Verzenden →
            </button>

            {/* Disclaimer / Privacy klein ernaast of eronder */}
            <p
              style={{
                maxWidth: "340px",
                fontSize: "11px",
                color: "var(--ink-faint)",
                lineHeight: "1.6",
                opacity: 0.7,
                margin: 0
              }}
            >
              Door dit formulier te verzenden gaat u akkoord met onze verwerking van uw gegevens voor dit kennismakingsgesprek.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}