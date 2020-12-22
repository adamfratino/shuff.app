import styled from 'styled-components'

const Button = ({ backgroundColor, onClick, text, width }) => (
  <StyledButton width={width} onClick={onClick} backgroundColor={backgroundColor}>
    {text}
  </StyledButton>
)

export default Button

const StyledButton = styled.button`
  appearance: none;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 5px 5px 0 0 black;
  border: none;
  font-family: 'Lato', 'Roboto', sans-serif;
  letter-spacing: 0.2px;
  padding: 16px;
  text-transform: uppercase;
  font-weight: 900;
  width: ${(props) => props.width};
`
