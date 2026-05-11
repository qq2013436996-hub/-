import {sanityReadClient} from './sanity'

export const getSiteSettings = () =>
  sanityReadClient.fetch(`*[_type == "siteSettings"][0]`)

export const getHomePage = () =>
  sanityReadClient.fetch(`*[_type == "homePage"][0]`)

export const getProducts = () =>
  sanityReadClient.fetch(`*[_type == "product" && defined(slug.current)] | order(_updatedAt desc)`)

export const getProductBySlug = (slug: string) =>
  sanityReadClient.fetch(`*[_type == "product" && slug.current == $slug][0]`, {slug})

export const getProductSlugs = async (): Promise<string[]> => {
  const rows = await sanityReadClient.fetch<Array<{slug: string | null}>>(
    `*[_type == "product" && defined(slug.current)]{"slug": slug.current}`,
  )
  return (rows ?? []).map((r) => r.slug).filter((v): v is string => typeof v === 'string' && v.length > 0)
}

export const getApplications = () =>
  sanityReadClient.fetch(`*[_type == "application" && defined(slug.current)] | order(_updatedAt desc)`)

export const getApplicationBySlug = (slug: string) =>
  sanityReadClient.fetch(`*[_type == "application" && slug.current == $slug][0]`, {slug})

export const getApplicationSlugs = async (): Promise<string[]> => {
  const rows = await sanityReadClient.fetch<Array<{slug: string | null}>>(
    `*[_type == "application" && defined(slug.current)]{"slug": slug.current}`,
  )
  return (rows ?? []).map((r) => r.slug).filter((v): v is string => typeof v === 'string' && v.length > 0)
}

export const getCaseStudies = () =>
  sanityReadClient.fetch(`*[_type == "caseStudy" && defined(slug.current)] | order(_updatedAt desc)`)

export const getCaseStudyBySlug = (slug: string) =>
  sanityReadClient.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]`, {slug})

export const getCaseStudySlugs = async (): Promise<string[]> => {
  const rows = await sanityReadClient.fetch<Array<{slug: string | null}>>(
    `*[_type == "caseStudy" && defined(slug.current)]{"slug": slug.current}`,
  )
  return (rows ?? []).map((r) => r.slug).filter((v): v is string => typeof v === 'string' && v.length > 0)
}

export const getBlogPosts = () =>
  sanityReadClient.fetch(
    `*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)`,
  )

export const getBlogPostBySlug = (slug: string) =>
  sanityReadClient.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, {slug})

export const getBlogPostSlugs = async (): Promise<string[]> => {
  const rows = await sanityReadClient.fetch<Array<{slug: string | null}>>(
    `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current}`,
  )
  return (rows ?? []).map((r) => r.slug).filter((v): v is string => typeof v === 'string' && v.length > 0)
}

export const getFaqs = () =>
  sanityReadClient.fetch(`*[_type == "faq"] | order(coalesce(displayOrder, sortOrder, 100) asc)`)
