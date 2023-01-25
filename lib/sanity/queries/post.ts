import { groq } from 'next-sanity'

export const queryAllPosts = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ...,
  }
`
