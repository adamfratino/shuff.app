import { useState } from 'react'
import styled from 'styled-components'
import { makeStyles, Drawer } from '@material-ui/core'
import { Colophon } from '.'
import { TopBar, BoardControls, ScoreControls } from './controls'
import { biscuitColor } from '../tokens'

const useStyles = makeStyles({
  paper: {
    width: 360,
    maxWidth: '100%',
    backgroundColor: `rgba(255, 255, 255, 0.75)`,
  },
})

const Controls = ({
  biscuits,
  yellowHammer,
  visibleFrame,
  handleVisibleFrame,
  handleYellowHammer,
  handleAddYellowBiscuit,
  handleAddBlackBiscuit,
  handleClearBoard,
  handleToggleNumbers,
  handleSetScore,
  handleVisibleScore,
  handleClearScore,
  visibleNumbers,
  score,
  visibleScore,
  visibleShot,
  handleVisibleShot,
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
        <TopBar onClick={() => setMenuIsExpanded(false)} />
        <ControlsContainer>
          <ControlsGroup>
            <BoardControls
              biscuits={biscuits}
              visibleNumbers={visibleNumbers}
              handleToggleNumbers={handleToggleNumbers}
              handleAddYellowBiscuit={handleAddYellowBiscuit}
              handleAddBlackBiscuit={handleAddBlackBiscuit}
              handleClearBoard={handleClearBoard}
            />
          </ControlsGroup>
          <ControlsGroup>
            <ScoreControls
              score={score}
              visibleFrame={visibleFrame}
              visibleShot={visibleShot}
              visibleScore={visibleScore}
              yellowHammer={yellowHammer}
              handleSetScore={handleSetScore}
              handleClearScore={handleClearScore}
              handleVisibleFrame={handleVisibleFrame}
              handleVisibleShot={handleVisibleShot}
              handleVisibleScore={handleVisibleScore}
              handleYellowHammer={handleYellowHammer}
            />
          </ControlsGroup>
          <Colophon />
        </ControlsContainer>
      </Drawer>
    </>
  )
}

export default Controls

const ControlsGroup = styled.div`
  background-color: white;
  box-shadow: 2px 2px 16px #bebebe, -2px -2px 16px #ffffff;
  border-radius: 5px;
  padding: 32px;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 8px;
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

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 320px;
  padding: 16px;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`
