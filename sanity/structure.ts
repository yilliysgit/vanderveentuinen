import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projecten')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Projecten')
        ),
    ])
