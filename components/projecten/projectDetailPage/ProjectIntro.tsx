interface ProjectIntroProps {
  title: string;
  intro: string;
  location?: string;
  year?: number;
  propertyType?: string;
  tags?: string[];
}

const propertyTypeLabels: Record<string, string> = {
  villa: "Villa",
  vrijstaand: "Vrijstaande woning",
  stadstuin: "Stadstuin",
  tweekapper: "Twee-onder-een-kap",
  nieuwbouw: "Nieuwbouw",
};

export default function ProjectIntro({
  title,
  intro,
  location,
  year,
  propertyType,
  tags,
}: ProjectIntroProps) {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "clamp(4rem,7vw,6rem) var(--section-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "6vw",
            alignItems: "start",
          }}
        >
          {/* LINKS */}
          <div>

            <h1
              className="heading-lg"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              {title}
            </h1>

            <p
              className="body-lg"
              style={{
                maxWidth: "520px",
              }}
            >
              {intro}
            </p>

          </div>

          {/* RECHTS */}
          <div
            style={{
              borderLeft: "1px solid var(--border)",
              paddingLeft: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
              paddingTop: "0.5rem",
            }}
          >

            {location && (
              <Meta label="Locatie" value={location} />
            )}

            {year && (
              <Meta label="Jaar" value={year} />
            )}

            {propertyType && (
              <Meta
                label="Type"
                value={propertyTypeLabels[propertyType] ?? propertyType}
              />
            )}

            {tags && tags.length > 0 && (
              <div>

                <span className="eyebrow" style={{ fontSize: "9px" }}>
                  Kenmerken
                </span>

                <div
                  style={{
                    marginTop: "0.6rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        border: "1px solid var(--border)",
                        padding: "4px 10px",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: any }) {
  return (
    <div>
      <span
        className="eyebrow"
        style={{
          fontSize: "9px",
          display: "block",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </span>

      <p className="body-sm">{value}</p>
    </div>
  );
}