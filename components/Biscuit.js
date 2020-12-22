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
  width: var(--biscuitSize);

  &:active {
    cursor: grabbing;
  }
`
