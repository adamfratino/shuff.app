import { auth, googleAuthProvider } from '../../lib/firebase'
import { Button } from './'

const Welcome = () => <SignInButton />

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }

  return <Button onClick={signInWithGoogle}>Join the Club</Button>
}

export default Welcome
