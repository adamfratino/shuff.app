import { Loading, PostFeed } from '../../components/ranked'
import { firestore, fromMillis, postToJSON } from '../../lib/firebase'

import { useState } from 'react'

// Max post to query per page
const LIMIT = 1

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(postToJSON)

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts)
  const [loading, setLoading] = useState(false)

  const [postsEnd, setPostsEnd] = useState(false)

  const getMorePosts = async () => {
    setLoading(true)
    const last = posts[posts.length - 1]

    const cursor =
      typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT)

    const newPosts = (await query.get()).docs.map((doc) => doc.data())

    setPosts(posts.concat(newPosts))
    setLoading(false)

    if (newPosts.length < LIMIT) {
      setPostsEnd(true)
    }
  }

  return (
    <main>
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loading show={loading} />

      {postsEnd && 'You have reached the end!'}
    </main>
  )
}

// import { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { useUser } from '@auth0/nextjs-auth0'
// import { BGCOLOR_RANKED } from '../../tokens'

// const Ranked = () => {
//   const [results, setResults] = useState([])
//   const [isLoaded, setIsLoaded] = useState(false)
//   const { user } = useUser()

//   useEffect(() => {
//     // getting results
//     fetch('https://sheet.best/api/sheets/2e60faec-9701-4de5-92c9-ef31251553df')
//       .then((response) => response.json())
//       .then((data) => {
//         const reverseData = data.reverse()
//         setResults(reverseData)
//         setIsLoaded(true)
//       })
//   }, [])

//   return (
//     <Container>
//       <h1>Shuffleboard Ranked Results</h1>
//       <a href={user ? '/ranked/submit' : '/api/auth/login'} className="button">
//         {user ? 'Submit a Result' : 'Sign Up to Submit a Result'}
//       </a>
//       <div style={{ border: `1px solid #ccc` }}>
//         <ResultRow className="header">
//           <span>winner</span>
//           <span>loser</span>
//           <span>crt.</span>
//           <span>date</span>
//         </ResultRow>
//         {isLoaded ? (
//           results.map((result, i) => (
//             <ResultRow key={i}>
//               <span>{result.winner}</span>
//               <span>{result.loser}</span>
//               <span>{result.court}</span>
//               <span style={{ fontSize: '10px' }}>{result.date}</span>
//             </ResultRow>
//           ))
//         ) : (
//           <div style={{ backgroundColor: 'white', padding: '8px', textAlign: 'center' }}>
//             <img src="/loading.gif" alt="loading" style={{ height: '32px' }} />
//           </div>
//         )}
//       </div>
//     </Container>
//   )
// }

// export default Ranked

// const Container = styled.section`
//   padding: 16px;
//   position: relative;
//   background-color: ${BGCOLOR_RANKED};
//   min-height: 100vh;

//   h1 {
//     font-size: 22px;
//   }

//   .button {
//     appearance: none;
//     outline: 0;
//     border: 0;
//     color: white;
//     font-size: 14px;
//     font-weight: bold;
//     letter-spacing: 0.1px;
//     text-transform: uppercase;
//     border-radius: 4px;
//     display: block;
//     text-align: center;
//     transition: all 150ms ease;
//     padding: 16px 8px;
//     margin-top: 16px;
//     background-color: #222;
//     cursor: pointer;
//     margin-bottom: 16px;
//     margin-top: -8px;

//     &:hover {
//       background-color: #000;
//     }
//   }
// `

// const ResultRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 24px 56px;
//   gap: 16px;
//   background-color: #fff;
//   font-size: 12px;
//   padding: 8px;

//   span {
//     white-space: nowrap;
//     overflow: hidden;
//   }

//   &:nth-of-type(even) {
//     background-color: #eee;
//   }

//   &:not(:last-of-type) {
//     border-bottom: 1px solid #ccc;
//   }

//   &.header {
//     font-weight: bold;
//     text-transform: uppercase;
//     font-size: 10px;
//   }
// `
