import styled from 'styled-components'

const Biscuit = ({ color }) => <StyledBiscuit color={color} />

export default Biscuit

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
    cursor: grabbing;
    opacity: 0.75;
    transform: scale(2);

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
