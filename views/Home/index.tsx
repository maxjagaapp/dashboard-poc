//*assets

//*lodash

//*components
import PropertyTypePie from './Charts/PropertyTypePie'
import PropertyUnitPie from './Charts/PropertyUnitPie'

//*material
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

//*icons-material

//*interface

//*const

function Home() {
  //*define

  //*states

  //*const

  //*useMemo

  return (
    <Container maxWidth="x3l" disableGutters>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid xs={6} sm={12} md={6} lg={4} xl={3} x2l={2.4}>
            <PropertyTypePie />
          </Grid>
          <Grid xs={6} sm={12} md={6} lg={4} xl={3} x2l={2.4}>
            <PropertyUnitPie />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
