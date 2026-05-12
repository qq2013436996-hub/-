import type { APIRoute } from 'astro'
import { sanityClient } from 'sanity:client'
import { assignCategoryPathSlugs } from '../lib/slugify'

type SlugRow = { slug: string | null }
type CategoryRow = { _id: string; title: string | null; slug: string | null }

const staticPaths = [
  '/',
  '/products/',
  '/applications/',
  '/case-studies/',
  '/blog/',
  '/contact/',
  '/introduction/',
  '/request-quote/',
  '/faqs/',
  '/video/',
]

export const GET: APIRoute = async () => {
  const base = (
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.SITE ||
    'http://localhost:4321'
  ).replace(/\/$/, '')

  const productRows = await sanityClient.fetch<SlugRow[]>(
    `*[_type == "product" && defined(slug.current)]{"slug": slug.current}`,
  )
  const applicationRows = await sanityClient.fetch<SlugRow[]>(
    `*[_type == "application" && defined(slug.current)]{"slug": slug.current}`,
  )
  const caseStudyRows = await sanityClient.fetch<SlugRow[]>(
    `*[_type == "caseStudy" && defined(slug.current)]{"slug": slug.current}`,
  )
  const blogRows = await sanityClient.fetch<SlugRow[]>(
    `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current}`,
  )
  const categoryRows = await sanityClient.fetch<CategoryRow[]>(
    `*[_type == "productCategory"]{_id, title, "slug": slug.current}`,
  )

  const productPaths = (productRows ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `/products/${slug}/`)

  const categoryPaths = assignCategoryPathSlugs(categoryRows ?? [])
    .map((row) => row.pathSlug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `/category/${slug}/`)

  const applicationPaths = (applicationRows ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `/applications/${slug}/`)

  const caseStudyPaths = (caseStudyRows ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `/case-studies/${slug}/`)

  const blogPaths = (blogRows ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `/blog/${slug}/`)

  const urls = [
    ...new Set([
      ...staticPaths,
      ...categoryPaths,
      ...productPaths,
      ...applicationPaths,
      ...caseStudyPaths,
      ...blogPaths,
    ]),
  ]

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n') +
    '\n</urlset>\n'

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
    },
  })
}
