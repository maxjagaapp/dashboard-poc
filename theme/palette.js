/* eslint-disable import/no-anonymous-default-export */
import { red, blue, grey } from '@mui/material/colors'

const white = '#FFFFFF'

export default {
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
    link: blue[600],
  },
  link: blue[800],
  icon: '#ad2425',
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: grey[200],
}
