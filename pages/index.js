import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Controls, Main, PageHead, PlayArea } from '../components'
import { addBiscuit, updateUrlParams } from '../utils'
import { defaultTheme } from '../themes'

const initialBiscuits = {
  yellow: [],
  black: [],
}

const Home = () => {
  const [isYellow, setIsYellow] = useState(true)
  const [biscuits, setBiscuits] = useState(initialBiscuits)
  const [visibileNumbers, setVisibleNumbers] = useState(false)
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
            visibleNumbers={visibileNumbers}
          />
          <Controls
            isYellow={isYellow}
            handleAddBiscuit={() => addBiscuit(isYellow, biscuits, setBiscuits)}
            handleClearBoard={() => setBiscuits(initialBiscuits)}
            handleToggleNumbers={() => setVisibleNumbers(!visibileNumbers)}
            handleToggleActiveColor={() => setIsYellow(!isYellow)}
          />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default Home
