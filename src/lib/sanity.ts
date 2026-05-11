import {createClient} from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'kz1Lpdyn'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-05-02'

export const sanityReadClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const getSanityWriteClient = (token: string) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  })
