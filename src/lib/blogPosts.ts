import {sanityClient} from 'sanity:client'

export type BlogRow = {
  title: string | null
  slug: string | null
  excerpt: string | null
  publishedAt: string | null
  imageUrl: string | null
  imageAlt: string | null
}

export async function fetchBlogPosts(): Promise<(BlogRow & {slug: string})[]> {
  const rows = await sanityClient.fetch<BlogRow[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc){
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "imageUrl": coalesce(featuredImage.image.asset->url, coverImage.asset->url),
      "imageAlt": coalesce(featuredImage.alt, coverImage.alt)
    }`,
  )
  return (rows ?? []).filter((row): row is BlogRow & {slug: string} => Boolean(row.slug))
}

export const BLOG_PAGE_SIZE = 4
