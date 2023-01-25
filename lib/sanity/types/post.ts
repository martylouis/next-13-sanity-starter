import { SanityDocument, Slug } from 'sanity'

export interface Post extends SanityDocument {
  title: string
  slug: Slug
  body: string
  categories?: string[]
  publishedAt: string
}
