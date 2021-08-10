import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { Input, Toggle } from './'
import { biscuitColor } from '../../tokens'

const ScoreControls = ({
  score,
  visibleFrame,
  visibleShot,
  visibleScore,
  yellowHammer,
  handleSetScore,
  handleClearScore,
  handleVisibleFrame,
  handleVisibleShot,
  handleVisibleScore,
  handleYellowHammer,
}) => (
  <>
    <Form noValidate autoComplete="off">
      <Input name="frame" score={score} handleSetScore={handleSetScore} />
      <Input name="shot" score={score} handleSetScore={handleSetScore} />
      <Input name="yellow" score={score} handleSetScore={handleSetScore} />
      <Input name="black" score={score} handleSetScore={handleSetScore} />
    </Form>
    <Toggle label="Show Frame" checked={visibleFrame} onChange={handleVisibleFrame} />
    <Toggle label="Show Shot" checked={visibleShot} onChange={handleVisibleShot} />
    <Toggle label="Show Score" checked={visibleScore} onChange={handleVisibleScore} />
    <Toggle label="Hammer Color" checked={!yellowHammer} onChange={handleYellowHammer} />
    <Button variant="contained" size="large" fullWidth onClick={handleClearScore}>
      Clear Score
    </Button>
  </>
)

export default ScoreControls

const Form = styled.form`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);

  label {
    align-items: center;
    display: flex;
    flex-direction: column;

    &.is-yellow input {
      background-color: ${biscuitColor.light};
    }

    &.is-black input {
      background-color: ${biscuitColor.dark};
      color: white;
      ::placeholder {
        color: white;
      }
    }

    span {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
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
