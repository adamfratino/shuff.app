import styled from 'styled-components'
import { lightBlue } from '@material-ui/core/colors'
import { Controls, PageHead, PlayArea } from '../components'

const Home = () => (
  <>
    <PageHead title="Board State Visualizer" />

    <Main role="main">
      <PlayArea backgroundColor={lightBlue[200]} />
      <Controls />
    </Main>
  </>
)

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
