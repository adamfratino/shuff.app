import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks'

const MyApp = ({ Component, pageProps }) => {
  const userData = useUserData()

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
