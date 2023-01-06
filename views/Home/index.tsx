//*assets

//*lodash

//*components
import PropertyTypePie from './Charts/PropertyTypePie'
import VisitorTypeLine from './Charts/VisitorTypeLine'
import VisitorMonthlyReport from './Reports/VisitorMonthlyReport'

//*material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

//*icons-material

//*interfaces

//*consts

function Home() {
  //*define

  //*states

  //*const

  //*useMemo

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12} lg xl>
          <VisitorTypeLine />
        </Grid>
        <Grid xs={12} md={6} lg={3} xl={2}>
          <PropertyTypePie />
        </Grid>
        <Grid xs={12}>
          <VisitorMonthlyReport />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
