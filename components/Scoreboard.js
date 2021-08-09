import styled from 'styled-components'
import { biscuitColor } from '../tokens'

const Scoreboard = ({ yellowScore, blackScore, frame }) => (
  <Container>
    <StyledScoreboard>
      <Scorebox>
        <Box>{yellowScore}</Box>
      </Scorebox>
      <Scorebox inverted>
        <Box>{blackScore}</Box>
      </Scorebox>
    </StyledScoreboard>
    <Framebox>
      <h2>Frame</h2>
      <Box>{frame}</Box>
    </Framebox>
  </Container>
)

export default Scoreboard

const Container = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 16px;
  pointer-events: none;
  position: absolute;
  right: 0;
  user-select: none;
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
  min-width: 50px;
  min-height: 50px;
  padding: 8px;
`

const Framebox = styled.span`
  h2 {
    background-color: black;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    letter-spacing: 0.1px;
    text-align: center;
    text-transform: uppercase;
  }

  & > *:last-child {
    background-color: white;
  }
`
