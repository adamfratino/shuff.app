import Draggable from 'react-draggable'
import styled from 'styled-components'
import { darken } from 'polished'
import { updateBiscuitCoordinates } from '../utils'
import { biscuitColor } from '../tokens'

const Biscuit = ({ color, biscuitNumber, biscuits, setBiscuits, visibleNumbers }) => {
  const handleDrag = (e, el) => {
    const updatedCoords = updateBiscuitCoordinates(e, el)
    const newBiscuitsArray = { ...biscuits }

    color === biscuitColor.light
      ? (newBiscuitsArray.yellow[biscuitNumber] = updatedCoords)
      : (newBiscuitsArray.black[biscuitNumber] = updatedCoords)

    setBiscuits(newBiscuitsArray)
  }

  return (
    <Draggable axis="both" bounds="parent" onStop={handleDrag}>
      <BiscuitContainer>
        <StyledBiscuit color={color}>
          <span className={`biscuit-number ${visibleNumbers ? 'is-visible' : ''}`}>
            {biscuitNumber + 1}
          </span>
        </StyledBiscuit>
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
  align-items: center;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === biscuitColor.light ? 'black' : 'white')};
  border: 2px solid black;
  border-radius: 50%;
  cursor: grab;
  display: inline-flex;
  font-weight: bold;
  height: var(--biscuitSize);
  justify-content: center;
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

    .biscuit-number {
      display: none !important;
    }
  }

  .biscuit-number {
    display: none;

    &.is-visible {
      display: inline-block;
    }
  }
`
