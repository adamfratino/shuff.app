import Draggable from 'react-draggable'
import styled from 'styled-components'
import { darken } from 'polished'

const Biscuit = ({ color, isVisible }) => {
  const handleStop = (e, el) => {
    console.log('stop dragging', el)
  }

  return (
    <Draggable
      axis="both"
      bounds="parent"
      onStop={handleStop}
      defaultPosition={{ x: 0, y: 0 }}
    >
      <BiscuitContainer>
        <StyledBiscuit color={color} isVisible={isVisible} />
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
  display: ${(props) => (props.isVisible ? 'inline-block' : 'none')};
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
