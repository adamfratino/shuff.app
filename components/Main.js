import styled from 'styled-components'
import { lightBlue } from '@material-ui/core/colors'

const Main = ({ children }) => <StyledMain role="main">{children}</StyledMain>

export default Main

const StyledMain = styled.main`
  -webkit-overflow-scrolling: touch;
  background-color: ${(props) => props.theme.pageBg};
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: auto;
  position: relative;
  width: 100vw;
`
