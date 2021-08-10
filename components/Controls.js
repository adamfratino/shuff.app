import { useState } from 'react'
import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { makeStyles, Button, Drawer, Switch } from '@material-ui/core'
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
  biscuits,
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
  const toggleDrawer = (isOpen) => setMenuIsExpanded(isOpen)
  const classes = useStyles()

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
                marginBottom: `8px`,
              }}
            >
              Add Yellow Biscuit
            </Button>
            <ButtonCount>{biscuits.yellow.length}</ButtonCount>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleAddBlackBiscuit}
              style={{
                backgroundColor: biscuitColor.dark,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: `8px`,
              }}
            >
              Add Black Biscuit
            </Button>
            <ButtonCount>{biscuits.black.length}</ButtonCount>
            <Button variant="contained" size="large" fullWidth onClick={handleClearBoard}>
              Clear Court
            </Button>
            <SwitchContainer>
              <span>Toggle Numbers</span>
              <BiscuitSwitch checked={visibleNumbers} onChange={handleToggleNumbers} />
            </SwitchContainer>
          </ControlsGroup>
          <ControlsGroup>
            <Form noValidate autoComplete="off">
              <Input name="yellow" score={score} handleSetScore={handleSetScore} />
              <Input name="black" score={score} handleSetScore={handleSetScore} />
              <Input name="frame" score={score} handleSetScore={handleSetScore} />
            </Form>
            <Button variant="contained" size="large" fullWidth onClick={handleClearScore}>
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

const Input = ({ name, score, handleSetScore }) => (
  <label htmlFor={name}>
    <span>{name}</span>
    <input
      name={name}
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder={score[name]}
      onChange={(e) =>
        handleSetScore({
          ...score,
          [name]: e.target.value,
        })
      }
    />
  </label>
)

export default Controls

const labelStyles = css`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

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
    '$checked$checked + &': {
      opacity: 1.0,
      backgroundColor: darken(0.1, biscuitColor.light),
    },
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
  border-radius: 4px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: inline-flex;
  padding: 8px;
  z-index: 1;

  span {
    ${labelStyles};
    display: inline-block;
    margin-left: 4px;
  }
`

const ButtonCount = styled.span`
  ${labelStyles};
  display: block;
  text-align: right;
  font-variant-numeric: tabular-nums;

  &::before {
    content: 'Count:';
    margin-right: 4px;
  }
`

const ControlsGroup = styled.div`
  box-shadow: 2px 2px 16px #bebebe, -2px -2px 16px #ffffff;
  border-radius: 5px;
  padding: 32px;
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

    &:first-child input {
      background-color: ${biscuitColor.light};
    }

    &:nth-child(2) input {
      background-color: ${biscuitColor.dark};
      color: white;
      ::placeholder {
        color: white;
      }
    }

    span {
      ${labelStyles};
      background-color: black;
      color: white;
      padding: 4px 4px 2px;
      width: 100%;
    }

    input {
      border: 1px solid black;
      border-radius: 0;
      color: black;
      font-size: 24px;
      font-weight: bold;
      min-height: 40px;
      padding: 8px;
      text-align: center;
      width: 100%;
      ::placeholder {
        color: black;
      }
    }
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
