import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { Toggle } from './'
import { biscuitColor } from '../../tokens'

const BoardControls = ({
  biscuits,
  visibleNumbers,
  handleToggleNumbers,
  handleAddYellowBiscuit,
  handleAddBlackBiscuit,
  handleClearBoard,
}) => (
  <>
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={handleAddYellowBiscuit}
      style={{
        backgroundColor: biscuitColor.light,
        color: 'black',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: `8px`,
      }}
    >
      Add Yellow Biscuit
    </Button>
    <BiscuitCount>{biscuits.yellow.length}</BiscuitCount>
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
    <BiscuitCount>{biscuits.black.length}</BiscuitCount>
    <Toggle
      label="Show Numbers"
      checked={visibleNumbers}
      onChange={handleToggleNumbers}
    />
    <Button variant="contained" size="large" fullWidth onClick={handleClearBoard}>
      Clear Court
    </Button>
  </>
)

export default BoardControls

const BiscuitCount = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  text-align: right;
  font-variant-numeric: tabular-nums;

  &::before {
    content: 'Count:';
    margin-right: 4px;
  }
`
