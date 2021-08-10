import { withStyles } from '@material-ui/core/styles'
import { Switch } from '@material-ui/core'
import { darken } from 'polished'
import styled from 'styled-components'
import { biscuitColor } from '../../tokens'

const Toggle = ({ label, checked, onChange }) => (
  <SwitchContainer>
    <span>{label}</span>
    <BiscuitSwitch checked={checked} onChange={onChange} />
  </SwitchContainer>
)

export default Toggle

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 8px !important;
  }
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
