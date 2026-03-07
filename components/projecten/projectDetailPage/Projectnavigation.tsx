import Link from "next/link";

interface NavProject {
  title: string;
  slug: string;
  heroImage?: { asset: { url: string }; alt?: string };
}

interface ProjectNavigationProps {
  previous?: NavProject;
  next?: NavProject;
}

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  if (!previous && !next) return null;

  return (
    <section
      aria-label="Projectnavigatie"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "clamp(4rem,7vw,6rem) var(--section-x)",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        {/* Vorig */}
        <div
          style={{
            paddingRight: "clamp(0rem,2vw,2.5rem)",
            paddingBottom: "clamp(2.5rem,4vw,3rem)",
            borderBottom: next ? "1px solid var(--border)" : "none",
            borderRight: "none",
          }}
          className="lg:pb-0 lg:border-b-0"
        >
          {previous ? (
            <NavCard
              href={`/projecten/${previous.slug}`}
              label="Vorig project"
              direction="left"
              title={previous.title}
              imageUrl={previous.heroImage?.asset?.url}
              alt={previous.heroImage?.alt ?? previous.title}
              align="left"
            />
          ) : null}
        </div>

        {/* Volgend */}
        <div
          style={{
            paddingLeft: "0",
            paddingTop: previous ? "clamp(2.5rem,4vw,3rem)" : 0,
            borderLeft: "none",
          }}
          className="lg:pt-0"
        >
          <div
            style={{
              borderLeft: next ? "none" : "none",
              paddingLeft: "0",
            }}
            className="lg:[border-left:1px_solid_var(--border)] lg:[padding-left:clamp(0rem,2vw,2.5rem)]"
          >
            {next ? (
              <NavCard
                href={`/projecten/${next.slug}`}
                label="Volgend project"
                direction="right"
                title={next.title}
                imageUrl={next.heroImage?.asset?.url}
                alt={next.heroImage?.alt ?? next.title}
                align="right"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function NavCard({
  href,
  label,
  direction,
  title,
  imageUrl,
  alt,
  align,
}: {
  href: string;
  label: string;
  direction: "left" | "right";
  title: string;
  imageUrl?: string;
  alt: string;
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <Link
      href={href}
      className={`group block ${isRight ? "lg:text-right" : ""}`}
    >
      <span
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          fontFamily: "var(--font-body)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-faint)",
        }}
      >
        {direction === "left" ? "← " : ""}
        {label}
        {direction === "right" ? " →" : ""}
      </span>

      {imageUrl && (
        <div className="img-zoom" style={{ marginBottom: "1.25rem" }}>
          <img
            src={imageUrl}
            alt={alt}
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 300,
          fontSize: "clamp(1.35rem,1.8vw,1.9rem)",
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
          transition: "color .3s",
        }}
        className="group-hover:text-[var(--forest)]"
      >
        {title}
      </h3>
    </Link>
  );
}