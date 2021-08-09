import styled from 'styled-components'
import { biscuitColor } from '../tokens'

const BOX_WIDTH = `48px`

const Scoreboard = ({ yellowScore, blackScore, frame }) => (
  <Container>
    <Framebox>
      <h2>Frame</h2>
      <Box>{frame}</Box>
    </Framebox>
    <StyledScoreboard>
      <Scorebox>
        <Box>{yellowScore}</Box>
      </Scorebox>
      <Scorebox inverted>
        <Box>{blackScore}</Box>
      </Scorebox>
    </StyledScoreboard>
  </Container>
)

export default Scoreboard

const Container = styled.div`
  bottom: 0;
  display: grid;
  gap: 8px;
  left: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  user-select: none;

  @media (min-width: 900px) {
    padding: 8px;
  }
`

const StyledScoreboard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`

const Scorebox = styled.div`
  align-items: center;
  color: ${(props) => (props.inverted ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:first-child > * {
    background-color: ${biscuitColor.light};
  }

  &:last-child > * {
    background-color: ${biscuitColor.dark};
  }
`

const Box = styled.span`
  align-items: center;
  border: 2px solid black;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  width: ${BOX_WIDTH};
  height: ${BOX_WIDTH};
  padding: 8px;
`

const Framebox = styled.span`
  h2 {
    background-color: black;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 4px 4px 2px;
    width: ${BOX_WIDTH};
    letter-spacing: 0.1px;
    text-align: center;
    text-transform: uppercase;
  }

  & > *:last-child {
    background-color: white;
  }
`
