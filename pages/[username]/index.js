import { getUserWithUsername, postToJSON } from '../../lib/firebase'
import { PostFeed, UserProfile } from '../../components/ranked'

export async function getServerSideProps({ query }) {
  const { username } = query

  const userDoc = await getUserWithUsername(username)

  // JSON serializable data
  let user = null
  let posts = null

  if (userDoc) {
    user = userDoc.data()
    const matchesQuery = userDoc.ref
      .collection('matches')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5)
    posts = (await matchesQuery.get()).docs.map(postToJSON)
  }

  return {
    props: { user, matches }, // will be passed to the page component as props
  }
}

const UserProfilePage = ({ user, posts }) => {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  )
}

export default UserProfilePage
