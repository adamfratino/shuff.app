import { darken } from 'polished'
import styled from 'styled-components'
import { lightBlue } from '@material-ui/core/colors'
import { BiscuitGroup, Court } from './'

const PlayArea = ({ backgroundColor }) => (
  <StyledPlayArea backgroundColor={backgroundColor}>
    <BiscuitGroup />
    <Court fill={lightBlue[50]} stroke="black" />
  </StyledPlayArea>
)

export default PlayArea

const StyledPlayArea = styled.section`
  border: 16px solid ${(props) => darken(0.1, props.backgroundColor)};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  position: absolute;
`
