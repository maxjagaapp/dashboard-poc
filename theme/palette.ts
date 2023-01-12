/* eslint-disable import/no-anonymous-default-export */
import { red, grey } from '@mui/material/colors'
import { PaletteOptions } from '@mui/material/styles/createPalette'

const white = '#FFFFFF'
const palette: PaletteOptions = {
  primary: {
    contrastText: white,
    dark: '#af1a18',
    main: '#ad2425',
    light: '#e52627',
  },
  secondary: {
    contrastText: white,
    dark: '#afafaf',
    main: '#ad2425',
    light: '#626262',
  },
  error: {
    contrastText: white,
    dark: red[400],
    main: '#ED3232',
    light: red[400],
  },
  text: {
    primary: '#333333',
    secondary: '#333333',
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: grey[200],
}

export default palette
