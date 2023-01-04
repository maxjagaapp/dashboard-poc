import { useMemo, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

//assets

//*lodash
import countBy from 'lodash/countBy'
import keys from 'lodash/keys'
import map from 'lodash/map'
import filter from 'lodash/filter'

//*components

//material
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { green, blue, red, purple, orange, brown } from '@mui/material/colors'

//icons-material

//interfaces

//*hooks
import { usePropertyGetAll } from 'hooks/property'
import { startCase } from 'lodash'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

//consts

function PropertyTypePie() {
  //*define
  const { data: propertyData, isLoading } = usePropertyGetAll()

  //*states
  const [state, setState] = useState({
    available: true,
    terminated: true,
    removed: true,
  })

  //*const
  const { available, terminated, removed } = state

  //*useMemo
  const chartData = useMemo(() => {
    if (isLoading) return { labels: [], datasets: [] }
    const filteredPropertyData = filter(propertyData, ({ status }) => {
      switch (status) {
        case 'terminated':
          return terminated
        case 'removed':
          return removed
        case undefined:
          return available
        default:
          return true
      }
    })
    const propertyCountsByType = countBy(filteredPropertyData, 'property_type')

    return {
      labels: keys(propertyCountsByType).map((type) => startCase(type)),
      datasets: [
        {
          label: '# of Votes',
          data: map(propertyCountsByType),
          backgroundColor: [
            orange[700],
            red[700],
            green[700],
            purple[700],
            brown[700],
            blue[700],
          ],
          borderColor: [
            orange[200],
            red[200],
            green[200],
            purple[200],
            brown[200],
            blue[200],
          ],
          borderWidth: 1,
        },
      ],
    }
  }, [isLoading, propertyData, terminated, removed, available])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <Box component={Paper} sx={{ p: 2 }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Property Type</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={available}
                onChange={handleChange}
                name="available"
              />
            }
            label="Available"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={terminated}
                onChange={handleChange}
                name="terminated"
              />
            }
            label="Terminated"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={removed}
                onChange={handleChange}
                name="removed"
              />
            }
            label="Removed"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <Pie
        height={200}
        width={200}
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            datalabels: {
              color: 'white',
              font: {
                weight: 'bold',
              },
              formatter: Math.round,
            },
            title: {
              display: true,
              text: 'Property By Type',
            },
          },
        }}
      />
    </Box>
  )
}

export default PropertyTypePie
