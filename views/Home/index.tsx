//assets

//*lodash

//*components
import VisitorTypeLine from './Charts/VisitorTypeLine'
import VisitorMonthlyReport from './Reports/VisitorMonthlyReport'

//material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

//icons-material

//interfaces

//consts

function Home() {
  //*define

  //*states

  //*const

  //*useMemo

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <VisitorTypeLine />
        </Grid>
        <Grid xs={12}>
          <VisitorMonthlyReport />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home