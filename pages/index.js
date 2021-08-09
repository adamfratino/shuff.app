import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Controls, Main, PageHead, PlayArea, Scoreboard } from '../components'
import { addBiscuit, updateUrlParams } from '../utils'
import { defaultTheme } from '../themes'

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
  const [score, setScore] = useState(initialScore)
  const [visibleNumbers, setVisibleNumbers] = useState(false)
  const [visibleScoreboard, setVisibleScoreboard] = useState(false)
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
          <PlayArea
            biscuits={biscuits}
            setBiscuits={setBiscuits}
            visibleNumbers={visibleNumbers}
          >
            {visibleScoreboard && (
              <Scoreboard
                yellowScore={score.yellow}
                blackScore={score.black}
                frame={score.frame}
              />
            )}
          </PlayArea>
          <Controls
            visibleNumbers={visibleNumbers}
            visibleScoreboard={visibleScoreboard}
            score={score}
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
