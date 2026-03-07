interface ProjectReflectionProps {
  text?: string;
}

export default function ProjectReflection({ text }: ProjectReflectionProps) {
  const defaultText =
    "Het ontwerp is afgestemd op de architectuur van de woning en het dagelijks gebruik van de tuin — met rust als uitgangspunt.";

  const value = (text ?? "").trim();

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "clamp(2rem,3vw,3rem) var(--section-x) clamp(4rem,7vw,6rem)",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "1px",
            background: "var(--border)",
            margin: "0 auto 1.75rem",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(1.3rem,2vw,1.7rem)",
            lineHeight: 1.65,
            letterSpacing: "-0.01em",
            color: "var(--ink-soft)",
          }}
        >
          {value.length ? value : defaultText}
        </p>
      </div>
    </section>
  );
}