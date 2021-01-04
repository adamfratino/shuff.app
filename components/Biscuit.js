import Draggable from 'react-draggable'
import styled from 'styled-components'
import { amber } from '@material-ui/core/colors'
import { darken } from 'polished'
import { stopDraggingBiscuit } from '../utils'

const Biscuit = ({ color, biscuitNumber, biscuits, isYellow, setBiscuits }) => {
  const handleDrag = (e, el) => {
    const updatedCoords = stopDraggingBiscuit(e, el)
    const newBiscuitsArray = { ...biscuits }

    if (color === amber[500]) {
      newBiscuitsArray.yellow[biscuitNumber] = updatedCoords
    } else {
      newBiscuitsArray.black[biscuitNumber] = updatedCoords
    }

    setBiscuits(newBiscuitsArray)
  }

  return (
    <Draggable axis="both" bounds="parent" onStop={handleDrag}>
      <BiscuitContainer>
        <StyledBiscuit color={color} />
      </BiscuitContainer>
    </Draggable>
  )
}

export default Biscuit

const BiscuitContainer = styled.div`
  left: 0;
  position: absolute;
  top: 0;
`

const StyledBiscuit = styled.span`
  background-color: ${(props) => props.color};
  border: 2px solid black;
  border-radius: 50%;
  cursor: grab;
  display: inline-block;
  height: var(--biscuitSize);
  position: relative;
  width: var(--biscuitSize);

  &:active {
    background-color: ${(props) => darken(0.05, props.color)};
    cursor: grabbing;
    opacity: 0.75;
    transform: scale(4);

    @media (min-width: 900px) {
      transform: scale(2);
    }

    &::before,
    &::after {
      position: absolute;
      background-color: black;
      bottom: 0;
      content: '';
      height: 25%;
      margin: auto;
      left: 0;
      width: 2px;
      right: 0;
      top: 0;
    }

    &::after {
      transform: rotate(90deg);
    }
  }
`
