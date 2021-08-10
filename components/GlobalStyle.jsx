import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from '../themes'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${defaultTheme.borderColor};
  }
`
export default GlobalStyle
