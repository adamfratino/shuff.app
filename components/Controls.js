import { useState } from 'react'
import styled from 'styled-components'
import { Button, Drawer, Switch } from '@material-ui/core'
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

const Controls = ({ handleAddBiscuit, handleToggleActiveColor }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false)

  const toggleDrawer = (isOpen) => setMenuIsExpanded(isOpen)

  return (
    <>
      <ControlsToggle onClick={() => toggleDrawer(true)}>
        <span>&#9776;</span>
      </ControlsToggle>
      <Drawer anchor="right" open={menuIsExpanded} onClose={() => toggleDrawer(false)}>
        <ControlsContainer>
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
        </ControlsContainer>
      </Drawer>
    </>
  )
}

export default Controls

const ControlsToggle = styled.span`
  align-items: center;
  background-color: ${amber[500]};
  bottom: 0;
  box-shadow: -5px -5px 30px -10px;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  padding: 16px;
  position: absolute;
  right: 0;

  @media (min-width: 900px) {
    bottom: auto;
    top: 0;
  }
`

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  padding: 0 16px;
`

const ControlsContainer = styled.div`
  padding: 16px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`
