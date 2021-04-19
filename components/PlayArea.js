import styled from 'styled-components'
import { amber, grey } from '@material-ui/core/colors'
import { Biscuit, Court } from './'

const PlayArea = ({ biscuits, isYellow, setBiscuits }) => {
  return (
    <StyledPlayArea className="play-area">
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
      <Court stroke="black" />
    </StyledPlayArea>
  )
}

export default PlayArea

const StyledPlayArea = styled.section`
  background-color: ${(props) => props.theme.courtBg};
  border: 16px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 0 60px -10px black;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  position: relative;
`
