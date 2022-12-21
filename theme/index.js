import { createTheme } from '@mui/material/styles'
import components from './components'
import typography from './typography'
import palette from './palette'

// Create a theme instance.

const baseTheme = {
  palette,
  components,
  typography,
}

const theme = createTheme(baseTheme)

export default theme
