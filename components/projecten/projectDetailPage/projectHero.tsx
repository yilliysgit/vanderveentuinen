interface ProjectHeroProps {
  imageUrl: string;
  alt: string;
}

export default function ProjectHero({ imageUrl, alt }: ProjectHeroProps) {
  return (
<section
  aria-label="Projecten"
  style={{
    background: "var(--bg)",
    padding: "var(--section-y) var(--section-x)",
  }}
>
  <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
    {/* HEADER */}
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-20"
      style={{
        alignItems: "start",
        paddingBottom: "24px",
        marginBottom: "clamp(1.5rem,2.2vw,3rem)",
      }}
    >
      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <span className="eyebrow mb-5 block">Projecten</span>
        <h1 className="heading-lg">
          Geselecteerde
          <br />
          buitenruimtes
        </h1>
      </div>

      <div
        className={[
          "transition-[opacity,transform] duration-700 ease-out delay-150",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{
          paddingTop: "clamp(3.25rem, 4vw, 4.25rem)",
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

    {/* SUBTIELE DIVIDER */}
    <div
      style={{
        borderTop: "1px solid var(--line-soft)",
      }}
    />
  </div>
</section>  );
}