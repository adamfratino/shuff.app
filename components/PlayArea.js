import { darken } from 'polished'
import styled from 'styled-components'
import { amber, lightBlue, grey } from '@material-ui/core/colors'
import { Biscuit, Court } from './'

const PlayArea = ({ backgroundColor, biscuits }) => (
  <StyledPlayArea backgroundColor={backgroundColor}>
    {biscuits.yellow.map((biscuit, i) => (
      <Biscuit key={i} color={amber[500]} isVisible />
    ))}
    {biscuits.black.map((biscuit, i) => (
      <Biscuit key={i} color={grey[900]} isVisible />
    ))}
    <Court fill={lightBlue[50]} stroke="black" />
  </StyledPlayArea>
)

export default PlayArea

const StyledPlayArea = styled.section`
  background-color: ${(props) => props.backgroundColor};
  border: 16px solid ${(props) => darken(0.1, props.backgroundColor)};
  box-shadow: 0 0 60px -30px black;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  position: relative;
`
