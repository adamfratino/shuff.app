import { useState } from 'react'
import styled from 'styled-components'
import { makeStyles, Button, Drawer, Switch, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Colophon } from './'
import { biscuitColor } from '../tokens'

const useStyles = makeStyles({
  paper: {
    width: 360,
    maxWidth: '100%',
  },
})

const Controls = ({
  handleAddYellowBiscuit,
  handleAddBlackBiscuit,
  handleClearBoard,
  handleToggleNumbers,
  handleSetScore,
  handleToggleScoreboard,
  handleClearScore,
  visibleNumbers,
  score,
  visibleScoreboard,
}) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false)
  const classes = useStyles()
  const toggleDrawer = (isOpen) => setMenuIsExpanded(isOpen)

  return (
    <>
      <ControlsToggle onClick={() => toggleDrawer(true)}>
        <span>&#9776;</span>
      </ControlsToggle>
      <Drawer
        anchor="right"
        open={menuIsExpanded}
        onClose={() => toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <ControlsContainer>
          <CloseButton onClick={() => setMenuIsExpanded(false)}>
            &times; <span>Close</span>
          </CloseButton>
          <ControlsGroup>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleAddYellowBiscuit}
              style={{
                backgroundColor: biscuitColor.light,
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Add Yellow Biscuit
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleAddBlackBiscuit}
              style={{
                backgroundColor: biscuitColor.dark,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Add Black Biscuit
            </Button>
            <Button variant="outlined" size="large" fullWidth onClick={handleClearBoard}>
              Clear Court
            </Button>
            <SwitchContainer>
              <span>Toggle Numbers</span>
              <BiscuitSwitch checked={visibleNumbers} onChange={handleToggleNumbers} />
            </SwitchContainer>
          </ControlsGroup>
          <ControlsGroup>
            <Form noValidate autoComplete="off">
              <label htmlFor="yellow">
                <span>Yellow</span>
                <input
                  name="yellow"
                  type="number"
                  placeholder={score.yellow}
                  onChange={(e) =>
                    handleSetScore({
                      ...score,
                      yellow: e.target.value,
                    })
                  }
                />
              </label>
              <label htmlFor="black">
                <span>Black</span>
                <input
                  name="black"
                  type="number"
                  placeholder={score.black}
                  onChange={(e) =>
                    handleSetScore({
                      ...score,
                      black: e.target.value,
                    })
                  }
                />
              </label>
              <label htmlFor="frame">
                <span>Frame</span>
                <input
                  name="frame"
                  type="number"
                  placeholder={score.frame}
                  onChange={(e) =>
                    handleSetScore({
                      ...score,
                      frame: e.target.value,
                    })
                  }
                />
              </label>
            </Form>
            <Button variant="outlined" size="large" fullWidth onClick={handleClearScore}>
              Clear Score
            </Button>
            <SwitchContainer>
              <span>Toggle Scoreboard</span>
              <BiscuitSwitch
                checked={visibleScoreboard}
                onChange={handleToggleScoreboard}
              />
            </SwitchContainer>
          </ControlsGroup>
          <Colophon />
        </ControlsContainer>
      </Drawer>
    </>
  )
}

export default Controls

const BiscuitSwitch = withStyles({
  switchBase: {
    color: biscuitColor.light,
    '&$checked': {
      color: biscuitColor.dark,
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

const CloseButton = styled.button`
  align-self: flex-end;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  text-transform: uppercase;

  span {
    display: inline-block;
    font-size: 12px;
    margin-left: 4px;
  }
`

const ControlsGroup = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 16px;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Form = styled.form`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);

  label {
    align-items: center;
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
  }

  input {
    font-size: 24px;
    font-weight: bold;
    max-width: 60px;
    min-height: 40px;
    padding: 8px;
  }
`

const ControlsToggle = styled.span`
  align-items: center;
  background-color: ${biscuitColor.light};
  bottom: 16px;
  box-shadow: -5px -5px 30px -10px;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  padding: 16px;
  position: absolute;
  right: 16px;

  @media (min-width: 900px) {
    bottom: auto;
    right: 0;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 320px;
  padding: 16px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`
