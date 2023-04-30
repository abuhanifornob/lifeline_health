import { useRouter } from 'next/router'

const BlogSlug = () => {
  const router = useRouter()
  const {blogSlug} = router.query

  return <p>Post: {blogSlug}</p>
}

export default BlogSlug