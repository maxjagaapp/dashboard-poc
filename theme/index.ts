import { createTheme } from '@mui/material/styles'
import typography from './typography'
import palette from './palette'
import breakpoints from './breakpoints'

// Create a theme instance.

const baseTheme = {
  palette,
  typography,
  breakpoints,
}

const theme = createTheme(baseTheme)

export default theme
