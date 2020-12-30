import styled from 'styled-components'
import { Button, Switch } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { amber, grey } from '@material-ui/core/colors'

const BiscuitSwitch = withStyles({
  switchBase: {
    color: amber[500],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
  track: {
    height: 18,
  },
  thumb: {
    width: 24,
    height: 24,
  },
})(Switch)

const Controls = ({ handleAddBiscuit, handleToggleActiveColor }) => (
  <StyledControls>
    <SwitchContainer>
      <span>Yellow</span>
      <BiscuitSwitch onChange={handleToggleActiveColor} />
      <span>Black</span>
    </SwitchContainer>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      fullWidth
      onClick={handleAddBiscuit}
    >
      Add Biscuit
    </Button>
  </StyledControls>
)

export default Controls

const StyledControls = styled.section`
  background-color: white;
  border-bottom-left-radius: 8px;
  min-width: 220px;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`
