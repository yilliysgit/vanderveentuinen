export default function ProjectsHero() {
  return (
    <section className="bg-[#f5f0ea] px-[7vw] pt-[10vh] pb-[6vh] lg:pt-[8vh]">
      <div className="mx-auto max-w-[1400px]">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="block w-8 h-px bg-[#5a7a52]/60" />
          <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#5a7a52]">
            Projecten
          </span>
        </div>

        {/* Titel + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] items-end">

          <h1 className="font-[Cormorant_Garamond,serif] font-light text-[clamp(2.4rem,4vw,4rem)] leading-[1.05] tracking-[-0.01em] text-[#1a1712]">
            Geselecteerde<br/>buitenruimtes
          </h1>

          <div className="max-w-[520px] text-[15px] font-light leading-[1.85] text-[#5a5249]">
            <p className="mb-6">
              Een selectie van gerealiseerde projecten, ontworpen en uitgevoerd
              met aandacht voor rust, detail en tijdloos gebruik.
            </p>

            <p>
              Elke buitenruimte is afgestemd op de woning, de omgeving en het
              leven van de opdrachtgever.
            </p>
          </div>

        </div>

        {/* divider */}
        <div className="mt-[6vh] border-t border-[rgba(90,122,82,0.12)]"></div>

      </div>
    </section>
  );
}