interface GalleryImage {
  asset: { url: string };
  alt?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < images.length) {

    // Eerste beeld altijd groot
    if (i === 0) {
      blocks.push(
        <div key={i} className="img-zoom" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={images[i].asset.url}
            alt={images[i].alt ?? `Projectfoto ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
      );

      i++;
      continue;
    }

    // Twee naast elkaar
    if (i + 1 < images.length) {
      blocks.push(
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem"
          }}
        >
          <div className="img-zoom" style={{ aspectRatio: "4 / 3" }}>
            <img
              src={images[i].asset.url}
              alt={images[i].alt ?? `Projectfoto ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="img-zoom" style={{ aspectRatio: "4 / 3" }}>
            <img
              src={images[i + 1].asset.url}
              alt={images[i + 1].alt ?? `Projectfoto ${i + 2}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
        </div>
      );

      i += 2;
      continue;
    }

    // Laatste single image
    blocks.push(
      <div key={i} className="img-zoom" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={images[i].asset.url}
          alt={images[i].alt ?? `Projectfoto ${i + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>
    );

    i++;
  }

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "var(--section-y) var(--section-x)"
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}
      >
        {blocks}
      </div>
    </section>
  );
}