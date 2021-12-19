import { Header } from 'semantic-ui-react'
import { auth, googleAuthProvider } from '../../lib/firebase'
import { Message } from 'semantic-ui-react'
import { Button } from './'

const Welcome = () => (
  <>
    <Message floating>
      <Header as="h1">Welcome to shuff.app!</Header>
      <p></p>
    </Message>
    <SignInButton />
  </>
)

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }

  return <Button onClick={signInWithGoogle}>Sign In</Button>
}

export default Welcome
