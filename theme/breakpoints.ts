declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true // removes the `xs` breakpoint
    sm: true
    md: true
    lg: true
    xl: true
    x2l: true
    x3l: true
  }
}
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    x2l: 1920,
    x3l: 2560,
  },
}

export default breakpoints
