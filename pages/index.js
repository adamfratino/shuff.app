import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Navigation, Main, PageHead, PlayArea, Scoreboard } from '../components'
import { addBiscuit, updateUrlParams } from '../utils'
import { defaultTheme } from '../themes'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${defaultTheme.borderColor};
  }
`

const initialBiscuits = {
  yellow: [],
  black: [],
}

const initialScore = {
  yellow: 0,
  black: 0,
  frame: 1,
  shot: 1,
}

const Home = () => {
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [yellowHammer, setYellowHammer] = useState(true)
  const [score, setScore] = useState(initialScore)
  const [visibleNumbers, setVisibleNumbers] = useState(false)
  const [visibleScore, setVisibleScore] = useState(false)
  const [visibleFrame, setVisibleFrame] = useState(false)
  const [visibleShot, setVisibleShot] = useState(false)
  const [theme, setTheme] = useState(defaultTheme)
  const router = useRouter()

  useEffect(() => {
    updateUrlParams(biscuits, router)
  }, [biscuits])

  return (
    <>
      <PageHead title="Shuffleboard Visualizer" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <PlayArea
            biscuits={biscuits}
            setBiscuits={setBiscuits}
            visibleNumbers={visibleNumbers}
          >
            <Scoreboard
              yellowHammer={yellowHammer}
              yellowScore={score.yellow}
              blackScore={score.black}
              frame={score.frame}
              visibleFrame={visibleFrame}
              visibleScore={visibleScore}
              visibleShot={visibleShot}
            />
          </PlayArea>
          <Navigation
            biscuits={biscuits}
            yellowHammer={yellowHammer}
            visibleNumbers={visibleNumbers}
            visibleScore={visibleScore}
            score={score}
            visibleFrame={visibleFrame}
            visibleShot={visibleShot}
            handleVisibleShot={() => setVisibleShot(!visibleShot)}
            handleVisibleFrame={() => setVisibleFrame(!visibleFrame)}
            handleYellowHammer={() => setYellowHammer(!yellowHammer)}
            handleAddYellowBiscuit={() => addBiscuit(true, biscuits, setBiscuits)}
            handleAddBlackBiscuit={() => addBiscuit(false, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleNumbers={() => setVisibleNumbers(!visibleNumbers)}
            handleSetScore={(score) => setScore(score)}
            handleVisibleScore={() => setVisibleScore(!visibleScore)}
            handleClearScore={() => setScore(initialScore)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home
