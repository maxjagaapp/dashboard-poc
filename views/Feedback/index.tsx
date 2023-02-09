//*assets

//*lodash

//*components
import FeedbackMonthlyReport from './Reports/FeedbackMonthlyReport'

//*material
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

//*icons-material

//*interface

//*const

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
            <FeedbackMonthlyReport />
          </Grid>{' '}
        </Grid>
      </Box>
    </Container>
  )
}

export default Visitor
