import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { amber, deepOrange, lightBlue } from '@material-ui/core/colors'
import { Controls, PageHead, PlayArea } from '../components'

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

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState({
    yellow: [],
    black: [],
  })

  const addBiscuit = () => {
    if (isYellow && biscuits.yellow.length < 4) {
      setBiscuits((prevBiscuits) => ({
        ...prevBiscuits,
        yellow: [...prevBiscuits.yellow, 'yellowBiscuit'],
      }))
    } else if (!isYellow && biscuits.black.length < 4) {
      setBiscuits((prevBiscuits) => ({
        ...prevBiscuits,
        black: [...prevBiscuits.black, 'blackBiscuit'],
      }))
    }
  }

  useEffect(() => {
    document.ontouchmove = (e) => e.preventDefault()
    console.log(biscuits)
  }, [biscuits])

  return (
    <>
      <PageHead title="Board State Visualizer" />

      <ThemeProvider theme={theme}>
        <Main role="main">
          <PlayArea backgroundColor={lightBlue[200]} biscuits={biscuits} />
          <Controls
            isYellow={isYellow}
            handleAddBiscuit={addBiscuit}
            handleToggleActiveColor={() => setIsYellow(!isYellow)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home

const Main = styled.main`
  -webkit-overflow-scrolling: touch;
  background-color: ${lightBlue[900]};
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100vw;
`
