export interface SeoMetaInput {
  title?: string | null
  fallbackTitle: string
  description?: string | null
  fallbackDescription: string
  canonicalPath?: string | null
  robots?: string | null
}

export const resolveSeoMeta = (input: SeoMetaInput) => {
  const title = input.title?.trim() || input.fallbackTitle
  const description = input.description?.trim() || input.fallbackDescription
  const canonicalPath = input.canonicalPath?.trim() || undefined
  const robots = input.robots?.trim() || 'index, follow'
  return {title, description, canonicalPath, robots}
}
