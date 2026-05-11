type ImageWithAltLike =
  | {
      image?: {asset?: {url?: string | null} | null} | null
      alt?: string | null
      caption?: string | null
    }
  | null
  | undefined

export const getImageWithAlt = (value: ImageWithAltLike) => {
  return {
    url: value?.image?.asset?.url || null,
    alt: value?.alt || null,
    caption: value?.caption || null,
  }
}
