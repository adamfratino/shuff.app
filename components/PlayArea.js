import styled from 'styled-components'
import { amber, grey, lightBlue } from '@material-ui/core/colors'
import { Biscuit, Court } from './'

const PlayArea = ({ backgroundColor, biscuits, isYellow, setBiscuits }) => {
  return (
    <StyledPlayArea backgroundColor={backgroundColor} className="play-area">
      {biscuits.yellow.map((biscuit, i) => (
        <Biscuit
          key={i}
          color={amber[500]}
          biscuitNumber={i}
          biscuits={biscuits}
          isYellow={isYellow}
          setBiscuits={setBiscuits}
        />
      ))}
      {biscuits.black.map((biscuit, i) => (
        <Biscuit
          key={i}
          color={grey[900]}
          biscuitNumber={i}
          biscuits={biscuits}
          isYellow={isYellow}
          setBiscuits={setBiscuits}
        />
      ))}
      <Court fill={lightBlue[50]} stroke="black" />
    </StyledPlayArea>
  )
}

export default PlayArea

const StyledPlayArea = styled.section`
  background-color: var(--board-color);
  border: 16px solid transparent;
  box-shadow: 0 0 60px -30px black;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  position: relative;
`
