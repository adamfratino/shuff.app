import Draggable from 'react-draggable'
import { darken } from 'polished'
import styled from 'styled-components'
import { amber } from '@material-ui/core/colors'
import { Biscuit, Court } from './'

const PlayArea = ({ backgroundColor }) => (
  <StyledPlayArea backgroundColor={backgroundColor}>
    <Draggable axis="both" bounds="parent">
      <BiscuitContainer>
        <Biscuit color={amber[500]} />
      </BiscuitContainer>
    </Draggable>
    <Court fill={amber[50]} stroke="black" />
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

const BiscuitContainer = styled.div`
  position: absolute;
`
