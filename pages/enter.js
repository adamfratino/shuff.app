import { useContext } from 'react'
import { auth } from '../lib/firebase'
import { UserContext } from '../lib/context'
import { UsernameForm, Welcome } from '../components/ranked'
import { Header, Message } from 'semantic-ui-react'

const Enter = () => {
  const { user, username } = useContext(UserContext)

  console.log(user)

  return (
    <main style={{ padding: '32px 16px' }}>
      <Header as="h4" style={{ marginBottom: '24px' }}>
          {user ? !username ? `🥇 You're steps away from the leaderboard!` : 'youre signed in, woo' : `👋 Welcome to Big Money Ranked Mode!`}
        </Header>
        <Message warning style={{ marginBottom: '24px' }} size="tiny">
          {user ? !username ? <UsernameMessage /> : 'sign-out' : <WelcomeMessage /> }
        </Message>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <Welcome />}
    </main>
  )
}

const SignOutButton = () => <button onClick={() => auth.signOut()}>Sign Out</button>

export default Enter

const WelcomeMessage = () => (
  <>
    <p>It looks like this is your first time here! If you'd like to submit a result or browse the rankings, tap on the button below to sync your Google account with us.</p>
  </>
)

const UsernameMessage = () => (
  <>
    <p>
      The last thing you need to do to get started is register a unique username so
      we can create your profile page.
    </p>
    <p>
      Any combination of 3-15 numbers or letters (capital or lowercase) is allowed.
      If the username is already taken we'll let you know.
    </p>
    <p>
      <strong>
        You won't be able to change your username after you make your pick, so
        choose carefully!
      </strong>
    </p>
  </>
)