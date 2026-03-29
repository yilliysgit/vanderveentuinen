"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      e.target.reset();
    } else {
      alert("Er ging iets mis.");
    }
  }

  return (
    <section
      aria-label="Contactformulier"
      style={{
        background: "var(--bg)",
        padding: "0 var(--section-x) clamp(6rem, 10vw, 10rem)",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "3.5rem" }}
        >
          {[
            { label: "Naam", type: "text", name: "name", required: true },
            { label: "E-mail", type: "email", name: "email", required: true },
            {
              label: "Plaats van het project",
              type: "text",
              name: "location",
              required: false,
            },
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
                  fontWeight: "500",
                }}
              >
                {field.label} {field.required && "*"}
              </label>

              <input
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder="..."
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.5rem 0 1rem 0",
                  fontSize: "16px",
                  outline: "none",
                  color: "var(--ink)",
                }}
              />
            </div>
          ))}

          <div>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--forest)",
                opacity: 0.6,
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Korte toelichting
            </label>

            <textarea
              name="message"
              rows={3}
              placeholder="Vertel ons kort over uw plannen..."
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid var(--border)",
                padding: "0.5rem 0 1rem 0",
                fontSize: "16px",
                resize: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <button type="submit" disabled={loading}>
              {loading ? "Versturen..." : "Verzenden →"}
            </button>

            {sent && <p>✅ Bericht verzonden!</p>}
          </div>
        </form>
      </div>
    </section>
  );
}