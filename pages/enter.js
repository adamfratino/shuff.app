import { useContext } from 'react'
import { auth } from '../lib/firebase'
import { UserContext } from '../lib/context'
import { UsernameForm, Welcome } from '../components/ranked'

const Enter = () => {
  const { user, username } = useContext(UserContext)

  return (
    <div style={{ padding: '16px' }}>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <Welcome />}
    </div>
  )
}

const SignOutButton = () => <button onClick={() => auth.signOut()}>Sign Out</button>

export default Enter
