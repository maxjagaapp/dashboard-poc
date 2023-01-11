//*assets

//*lodash

//*components
import VisitorTypeLine from './Charts/VisitorTypeLine'
import VisitorMonthlyReport from './Reports/VisitorMonthlyReport'
import VisitorMonthlyReport2 from './Reports/VisitorMonthlyReport2'

//*material
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

//*icons-material

//*interfaces

//*consts

function Visitor() {
  //*define

  //*states

  //*const

  //*useMemo

  return (
    <Container maxWidth="x3l" disableGutters>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <VisitorTypeLine />
          </Grid>
          <Grid xs={12}>
            <VisitorMonthlyReport />
          </Grid>{' '}
          <Grid xs={12}>
            <VisitorMonthlyReport2 />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Visitor
