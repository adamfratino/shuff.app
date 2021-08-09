import styled from 'styled-components'
import { Biscuit, Court } from './'
import { biscuitColor } from '../tokens'

const PlayArea = ({ biscuits, isYellow, setBiscuits, visibleNumbers, children }) => {
  return (
    <StyledPlayArea className="play-area">
      {biscuits.yellow.map((biscuit, i) => (
        <Biscuit
          key={i}
          color={biscuitColor.light}
          biscuitNumber={i}
          biscuits={biscuits}
          isYellow={isYellow}
          setBiscuits={setBiscuits}
          visibleNumbers={visibleNumbers}
        />
      ))}
      {biscuits.black.map((biscuit, i) => (
        <Biscuit
          key={i}
          color={biscuitColor.dark}
          biscuitNumber={i}
          biscuits={biscuits}
          isYellow={isYellow}
          setBiscuits={setBiscuits}
          visibleNumbers={visibleNumbers}
        />
      ))}
      <Court stroke="black" />
      {children}
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
