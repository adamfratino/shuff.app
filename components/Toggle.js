import { darken } from 'polished'
import styled, { css } from 'styled-components'

const Toggle = ({ firstButtonIsActive, handleToggle, buttonColor, width }) => {
  return (
    <ToggleContainer width={width}>
      <ToggleButton
        buttonColor={buttonColor}
        text="Yellow"
        isActive={firstButtonIsActive}
        onClick={handleToggle}
      />
      <ToggleButton
        buttonColor={buttonColor}
        text="Black"
        isActive={!firstButtonIsActive}
        onClick={handleToggle}
      />
    </ToggleContainer>
  )
}

export default Toggle

const ToggleButton = ({ buttonColor, onClick, isActive, text }) => (
  <StyledToggle buttonColor={buttonColor} onClick={onClick} isActive={isActive}>
    {text}
  </StyledToggle>
)

const isActive = css`
  background-color: ${(props) => props.buttonColor};
  box-shadow: 4px 4px 0 0 black;
  color: black;
  pointer-events: none;
  transform: translate3d(-4px, -4px, 0);
`

const ToggleContainer = styled.div`
  display: flex;
  flex: 1;
  font-weight: 900;
  margin-bottom: 16px;
  width: ${(props) => props.width};
`

const StyledToggle = styled.button`
  appearance: none;
  background-color: ${(props) => darken(0.2, props.buttonColor)};
  box-shadow: 2px 2px 0 0 black inset;
  border: none;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  padding: 16px 8px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  ${(props) => props.isActive && isActive};
`
