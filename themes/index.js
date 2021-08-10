import { green, lightBlue } from '@material-ui/core/colors'
import { darken } from 'polished'

export const blueTheme = {
  pageBg: lightBlue[800],
  courtBg: lightBlue[200],
  borderColor: darken(0.2, lightBlue[200]),
  scoringArea: lightBlue[50],
  courtLines: 'black',
}

export const greenTheme = {
  pageBg: green[200],
  courtBg: green[600],
  borderColor: darken(0.2, green[700]),
  scoringArea: green[100],
  courtLines: 'black',
}

export const defaultTheme = greenTheme
