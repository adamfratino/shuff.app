import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Controls, Main, PageHead, PlayArea, Scoreboard } from '../components'
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
}

const Home = () => {
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [yellowHammer, setYellowHammer] = useState(true)
  const [score, setScore] = useState(initialScore)
  const [visibleNumbers, setVisibleNumbers] = useState(false)
  const [visibleScoreboard, setVisibleScoreboard] = useState(false)
  const [visibleFrameboard, setVisibleFrameboard] = useState(false)
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
              visibleFrameboard={visibleFrameboard}
              visibleScoreboard={visibleScoreboard}
            />
          </PlayArea>
          <Controls
            biscuits={biscuits}
            yellowHammer={yellowHammer}
            visibleNumbers={visibleNumbers}
            visibleScoreboard={visibleScoreboard}
            score={score}
            visibleFrameboard={visibleFrameboard}
            handleVisibleFrameboard={() => setVisibleFrameboard(!visibleFrameboard)}
            handleYellowHammer={() => setYellowHammer(!yellowHammer)}
            handleAddYellowBiscuit={() => addBiscuit(true, biscuits, setBiscuits)}
            handleAddBlackBiscuit={() => addBiscuit(false, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleNumbers={() => setVisibleNumbers(!visibleNumbers)}
            handleSetScore={(score) => setScore(score)}
            handleToggleScoreboard={() => setVisibleScoreboard(!visibleScoreboard)}
            handleClearScore={() => setScore(initialScore)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home
