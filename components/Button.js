import styled from 'styled-components'

const Button = ({ backgroundColor, onClick, text, width }) => (
  <StyledButton
    role="button"
    width={width}
    onClick={onClick}
    backgroundColor={backgroundColor}
  >
    {text}
  </StyledButton>
)

export default Button

const StyledButton = styled.button`
  appearance: none;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 6px 6px 0 0 black;
  border: none;
  cursor: pointer;
  font-family: 'Lato', 'Roboto', sans-serif;
  letter-spacing: 0.2px;
  padding: 16px;
  text-transform: uppercase;
  font-weight: 900;
  width: ${(props) => props.width};

  &:hover {
    box-shadow: 8px 8px 0 0 black;
  }

  &:active {
    box-shadow: 6px 6px 0 0 black;
  }
`
