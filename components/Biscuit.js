import Draggable from 'react-draggable'
import styled from 'styled-components'
import { darken } from 'polished'
import { updateBiscuitCoordinates } from '../utils'
import { biscuitColor } from '../tokens'

const Biscuit = ({
  color,
  biscuitNumber,
  biscuits,
  setBiscuits,
  visibleNumbers,
  hoveringTrash,
}) => {
  const handleDrag = (e, el) => {
    // if hoveringTrash === false
    const updatedCoords = updateBiscuitCoordinates(e, el)
    const newBiscuitsArray = { ...biscuits }
    // else hoveringTrash === true
    // remove biscuit from array

    // update coordinates
    color === biscuitColor.light
      ? (newBiscuitsArray.yellow[biscuitNumber] = updatedCoords)
      : (newBiscuitsArray.black[biscuitNumber] = updatedCoords)

    setBiscuits(newBiscuitsArray)

    console.log('dropped on trash: ', hoveringTrash)
  }

  return (
    <Draggable axis="both" bounds="parent" onStop={handleDrag}>
      <BiscuitContainer
        className={color === biscuitColor.light ? 'is-yellow' : 'is-black'}
      >
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
  position: absolute;
  top: 0;
  z-index: 2;

  &.is-yellow {
    left: 0;
  }

  &.is-black {
    right: 0;
  }
`

const StyledBiscuit = styled.span`
  align-items: center;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === biscuitColor.light ? 'black' : 'white')};
  border: 2px solid black;
  border-radius: 50%;
  cursor: grab;
  display: inline-flex;
  font-size: 12px;
  font-weight: bold;
  height: var(--biscuitSize);
  justify-content: center;
  position: relative;
  width: var(--biscuitSize);

  @media (min-width: 900px) {
    font-size: 16px;
  }

  &:active {
    background-color: ${(props) => darken(0.05, props.color)};
    cursor: grabbing;
    opacity: 0.75;
    transform: scale(4);
    z-index: 10;

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
