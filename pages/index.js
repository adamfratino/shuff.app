import { useRouter } from 'next/router'
import { darken } from 'polished'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { green, lightBlue } from '@material-ui/core/colors'
import { Controls, Main, PageHead, PlayArea } from '../components'
import { addBiscuit, updateUrlParams } from '../utils'

const initialBiscuits = {
  yellow: [],
  black: [],
}

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [theme, setTheme] = useState(defaultTheme)
  const router = useRouter()

  useEffect(() => {
    updateUrlParams(biscuits, router)
  }, [biscuits])

  return (
    <>
      <PageHead title="Shuffleboard Visualizer" />
      <ThemeProvider theme={theme}>
        <Main>
          <PlayArea biscuits={biscuits} isYellow={isYellow} setBiscuits={setBiscuits} />
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

const blueTheme = {
  pageBg: lightBlue[800],
  courtBg: lightBlue[200],
  borderColor: darken(0.1, lightBlue[200]),
  scoringArea: lightBlue[50],
  courtLines: 'black',
}

const greenTheme = {
  pageBg: green[200],
  courtBg: green[800],
  borderColor: darken(0.2, green[700]),
  scoringArea: green[500],
  courtLines: 'white',
}

const defaultTheme = greenTheme
