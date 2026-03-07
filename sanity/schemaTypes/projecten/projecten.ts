// client/sanity/schemaTypes/projecten/projecten.ts

import { defineField, defineType } from "sanity";

export const projecten = defineType({
  name: "project",
  title: "Projecten",
  type: "document",

  fields: [
    /* ─────────────────────────────
       BASIS
    ───────────────────────────── */
    defineField({
      name: "title",
      title: "Projecttitel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Locatie",
      type: "string",
      description: "Bijv. Bloemendaal, Haarlem, Amsterdam",
    }),

    defineField({
      name: "year",
      title: "Jaar",
      type: "number",
    }),

    defineField({
     name: "propertyType",
     title: "Type woning",
     type: "string",
     options: {
     list: [
      { title: "Villa", value: "villa" },
      { title: "Vrijstaande woning", value: "vrijstaand" },
      { title: "Stadstuin", value: "stadstuin" },
      { title: "Twee-onder-een-kap", value: "tweekapper" },
      { title: "Nieuwbouw", value: "nieuwbouw" },
    ],
    layout: "radio", // of 'dropdown' als je rustiger wilt
  },
  description:
    "Helpt bij context, filtering en SEO/AEO. Kies het type woning.",
}),

    defineField({
      name: "featured",
      title: "Uitgelicht op homepage",
      type: "boolean",
      initialValue: false,
    }),

    /* ─────────────────────────────
       HOOFDFOTO (SEO + AEO KEY)
    ───────────────────────────── */
    defineField({
      name: "heroImage",
      title: "Hoofdafbeelding",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst (SEO)",
          type: "string",
          description:
            "Beschrijf wat te zien is + locatie + type tuin. Bijvoorbeeld: 'Moderne villatuin met zwembad in Bloemendaal'",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "caption",
          title: "Onderschrift (AEO)",
          type: "string",
          description:
            "Korte contextzin voor AI & screenreaders. Wordt soms gebruikt in snippets.",
        }),
      ],
    }),

    /* ─────────────────────────────
       INTRO (AEO ZEER BELANGRIJK)
    ───────────────────────────── */
    defineField({
      name: "intro",
      title: "Introductietekst",
      type: "text",
      rows: 4,
      description:
        "2–3 zinnen die het project samenvatten. Wordt gebruikt voor SEO descriptions & AI context.",
      validation: (Rule) => Rule.required().max(320),
    }),


    defineField({
      name: "reflectionText",
      title: "Project reflectie",
      type: "text",
      rows: 4,
      description: "Korte reflectie onderaan het project.",
    }),

    /* ─────────────────────────────
       GALERIJ (ONDERSTEUNEND)
    ───────────────────────────── */
    defineField({
      name: "gallery",
      title: "Galerij",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt-tekst",
              type: "string",
              description:
                "Beschrijf specifiek detail of sfeer (materiaal, verlichting, beplanting).",
            }),
          ],
        },
      ],
      description:
        "Detail- en sfeerbeelden. Gebruik max. 10–12 beelden.",
    }),

    /* ─────────────────────────────
       SEO / AEO METADATA
    ───────────────────────────── */
    defineField({
      name: "seoTitle",
      title: "SEO titel",
      type: "string",
      description:
        "Bijv. 'Moderne villatuin in Bloemendaal – Van der Veen'",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO beschrijving",
      type: "text",
      rows: 3,
      description:
        "Wordt gebruikt voor Google en AI samenvattingen.",
    }),

    /* ─────────────────────────────
       CONTEXT / FILTERS
    ───────────────────────────── */
    defineField({
      name: "tags",
      title: "Kenmerken",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Bijv. zwembad, stadstuin, villatuin, verlichting, maatwerk",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "heroImage",
    },
  },
});
