import { dataset, projectId } from '@/lib/sanity/env'
import { SanityImageSource } from '@sanity/asset-utils'
import createImageUrlBuilder from '@sanity/image-url'
import { createClient as sanityCreateClient, SanityClient } from 'next-sanity'
import { cache } from 'react'

export const config = {
  dataset,
  projectId,
  useCdn: false,
  // useCdn: process.env.NODE_ENV === 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
}

export const sanityClient = (): SanityClient => sanityCreateClient(config)

const client = sanityClient()
export const sanityClientFetch = cache(client.fetch.bind(client))

export const urlForImage = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source)
