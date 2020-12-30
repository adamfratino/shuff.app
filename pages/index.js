import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { lightBlue } from '@material-ui/core/colors'
import { Controls, PageHead, PlayArea } from '../components'

const Home = () => {
  const [activeColorIsYellow, setActiveColorIsYellow] = useState(true)
  const [yellowBiscuits, setYellowBiscuits] = useState([])
  const [blackBiscuits, setBlackBiscuits] = useState([])

  const addBiscuit = () => {
    activeColorIsYellow
      ? setYellowBiscuits([...yellowBiscuits, 'yellow biscuit'])
      : setBlackBiscuits([...blackBiscuits, 'black biscuit'])
  }

  useEffect(() => {
    console.log(yellowBiscuits, blackBiscuits)
  }, [yellowBiscuits, blackBiscuits])

  return (
    <>
      <PageHead title="Board State Visualizer" />

      <Main role="main">
        <PlayArea backgroundColor={lightBlue[200]} />
        <Controls
          activeColorIsYellow={activeColorIsYellow}
          handleAddBiscuit={addBiscuit}
          handleToggleActiveColor={() => setActiveColorIsYellow(!activeColorIsYellow)}
        />
      </Main>
    </>
  )
}

export default Home

const Main = styled.main`
  background-color: ${lightBlue[900]};
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`
