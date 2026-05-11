import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const siteUrl = (
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.SITE ||
    'http://localhost:4321'
  ).replace(/\/$/, '')
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
    },
  })
}
