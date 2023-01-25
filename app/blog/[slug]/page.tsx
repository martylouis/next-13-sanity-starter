import { sanityClientFetch } from '@/lib/sanity/client'

type PostRouteProps = {
  params: { slug: string }
}

const fetchPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    "slug": slug.current,
  }`
  const post = await sanityClientFetch(query, { slug })
  return post
}

const PostRoute = async (props: PostRouteProps) => {
  const { slug } = props.params
  const post = await fetchPost(slug)

  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}

export default PostRoute
