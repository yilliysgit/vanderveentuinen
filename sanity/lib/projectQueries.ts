export const featuredProjectsQuery = `
*[_type == "project" && featured == true]
| order(year desc)[0...3] {
  title,
  "slug": slug.current,
  location,
  year,
  propertyType,
  heroImage {
    asset->{
      _id,
      url
    },
    alt,
    caption
  }
}
`;


export const allProjectsQuery = `
*[_type == "project"]
| order(year desc) {
  title,
  "slug": slug.current,
  location,
  year,
  propertyType,
  heroImage {
    asset->{
      _id,
      url
    },
    alt
  }
}
`;


export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  title,
  location,
  year,
  propertyType,
  intro,
  tags,

  heroImage {
    asset->{
      _id,
      url
    },
    alt,
    caption
  },

  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },

  seoTitle,
  seoDescription
}
`;


export const projectsOverviewQuery = `
*[_type == "project" && defined(slug.current)]
| order(year desc) {
  title,
  "slug": slug.current,
  location,
  year,
  heroImage {
    asset->{
      url
    },
    alt
  }
}
`;


export const projectDetailQuery = `
*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  location,
  year,
  propertyType,
  intro,
  tags,
  reflectionText,
  heroImage {
    asset->{
      _id,
      url
    },
    alt,
    caption
  },
  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },
  seoTitle,
  seoDescription
}
`;