import styled from 'styled-components'
import { Button } from './'
import { amber } from '@material-ui/core/colors'

const Controls = () => {
  return (
    <StyledControls>
      <Button text="Add Biscuit" backgroundColor={amber[500]} width="100%" />
    </StyledControls>
  )
}

export default Controls

const StyledControls = styled.section`
  min-width: 220px;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
`
