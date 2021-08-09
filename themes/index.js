import { green, lightBlue } from '@material-ui/core/colors'
import { darken } from 'polished'

export const blueTheme = {
  pageBg: lightBlue[800],
  courtBg: lightBlue[200],
  borderColor: darken(0.1, lightBlue[200]),
  scoringArea: lightBlue[50],
  courtLines: 'black',
}

export const greenTheme = {
  pageBg: green[200],
  courtBg: green[800],
  borderColor: darken(0.2, green[700]),
  scoringArea: green[500],
  courtLines: 'white',
}

export const defaultTheme = greenTheme
