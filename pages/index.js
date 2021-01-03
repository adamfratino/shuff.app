import { useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { amber, deepOrange, lightBlue } from '@material-ui/core/colors'
import { Controls, Main, PageHead, PlayArea } from '../components'
import { addBiscuit } from '../utils'

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState({
    yellow: [],
    black: [],
  })

  useEffect(() => {
    console.log(biscuits)
  }, [biscuits])

  useEffect(() => {
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
