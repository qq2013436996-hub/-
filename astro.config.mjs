// @ts-check
import {defineConfig} from 'astro/config'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'kzl6pdyn'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'

// Public URL for sitemap, canonicals, and OG. Override per environment (e.g. Vercel: set in Project Settings).
const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://bike-nine-eta.vercel.app'

// https://astro.build/config
export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-05-02',
    }),
  ],
})