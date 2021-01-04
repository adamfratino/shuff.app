import { useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { amber, deepOrange, lightBlue } from '@material-ui/core/colors'
import { Controls, Main, PageHead, PlayArea } from '../components'
import { addBiscuit } from '../utils'

const initialBiscuits = {
  yellow: [],
  black: [],
}

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState(initialBiscuits)

  useEffect(() => {
    // Prevents elastic scroll on mobile devices
    document.ontouchmove = (e) => e.preventDefault()
  }, [])

  return (
    <>
      <PageHead title="Board State Visualizer" />

      <ThemeProvider theme={theme}>
        <Main>
          <PlayArea backgroundColor={lightBlue[200]} biscuits={biscuits} />
          <Controls
            isYellow={isYellow}
            handleAddBiscuit={() => addBiscuit(isYellow, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleActiveColor={() => setIsYellow(!isYellow)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[200],
    },
    secondary: {
      main: amber[500],
    },
  },
  tertiary: {
    main: deepOrange[700],
  },
})
