import styled from 'styled-components'
import { Button, Toggle } from './'
import { amber } from '@material-ui/core/colors'

const Controls = ({ activeColorIsYellow, handleAddBiscuit, handleToggleActiveColor }) => (
  <StyledControls>
    <Toggle
      buttonColor={amber[500]}
      width="100%"
      firstButtonIsActive={activeColorIsYellow}
      handleToggle={handleToggleActiveColor}
    />
    <Button
      text="Add Biscuit"
      backgroundColor={amber[500]}
      width="100%"
      onClick={handleAddBiscuit}
    />
  </StyledControls>
)

export default Controls

const StyledControls = styled.section`
  min-width: 220px;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
`
