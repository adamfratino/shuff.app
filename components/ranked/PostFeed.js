const PostFeed = ({ posts, admin }) => {
  return posts
    ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />)
    : null
}

const PostItem = ({ post, admin = false }) => {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length
  const minutesToRead = (wordCount / 100 + 1).toFixed(0)

  return <div className="card">test</div>
}

export default PostFeed
