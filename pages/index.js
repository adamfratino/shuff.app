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

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [score, setScore] = useState({
    yellow: 0,
    black: 0,
    frame: 1,
  })
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
            isYellow={isYellow}
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
            isYellow={isYellow}
            visibleNumbers={visibleNumbers}
            visibleScoreboard={visibleScoreboard}
            score={score}
            handleAddBiscuit={() => addBiscuit(isYellow, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleNumbers={() => setVisibleNumbers(!visibleNumbers)}
            handleToggleActiveColor={() => setIsYellow(!isYellow)}
            handleSetScore={(score) => setScore(score)}
            handleToggleScoreboard={() => setVisibleScoreboard(!visibleScoreboard)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home
