import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  GlobalStyle,
  Navigation,
  Main,
  PageHead,
  PlayArea,
  Scoreboard,
} from '../components'
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
  shot: 1,
}

const initialScoreDetails = {
  frame: false,
  shot: false,
  score: false,
}

const Home = () => {
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [yellowHammer, setYellowHammer] = useState(true)
  const [score, setScore] = useState(initialScore)
  const [visibleNumbers, setVisibleNumbers] = useState(false)
  const [visibleScoreDetails, setVisibleScoreDetails] = useState(initialScoreDetails)
  const [theme, setTheme] = useState(defaultTheme)
  const [hoveringTrash, setHoveringTrash] = useState(false)
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
            hoveringTrash={hoveringTrash}
          >
            <Scoreboard
              yellowHammer={yellowHammer}
              yellowScore={score.yellow}
              blackScore={score.black}
              frame={score.frame}
              shot={score.shot}
              visibleScoreDetails={visibleScoreDetails}
              setHoveringTrash={setHoveringTrash}
            />
          </PlayArea>
          <Navigation
            biscuits={biscuits}
            yellowHammer={yellowHammer}
            visibleNumbers={visibleNumbers}
            score={score}
            visibleScoreDetails={visibleScoreDetails}
            handleVisibleFrame={() =>
              setVisibleScoreDetails({
                ...visibleScoreDetails,
                frame: !visibleScoreDetails.frame,
              })
            }
            handleVisibleShot={() =>
              setVisibleScoreDetails({
                ...visibleScoreDetails,
                shot: !visibleScoreDetails.shot,
              })
            }
            handleVisibleScore={() =>
              setVisibleScoreDetails({
                ...visibleScoreDetails,
                score: !visibleScoreDetails.score,
              })
            }
            handleYellowHammer={() => setYellowHammer(!yellowHammer)}
            handleAddYellowBiscuit={() => addBiscuit(true, biscuits, setBiscuits)}
            handleAddBlackBiscuit={() => addBiscuit(false, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleNumbers={() => setVisibleNumbers(!visibleNumbers)}
            handleSetScore={(score) => setScore(score)}
            handleClearScore={() => setScore(initialScore)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home
