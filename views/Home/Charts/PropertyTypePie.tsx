import { useMemo, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

//*assets

//*lodash
import countBy from 'lodash/countBy'
import keys from 'lodash/keys'
import map from 'lodash/map'
import filter from 'lodash/filter'

//*components

//*material
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { green, blue, red, purple, orange, brown } from '@mui/material/colors'

//*lodash
import startCase from 'lodash/startCase'

//*icons-material

//*interface

//*hooks
import { usePropertyGetAll } from 'hooks/property'

//*utils
import { propertyStatusArray } from 'utils/constant'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

function PropertyTypePie() {
  //*define
  const { propertyData, isPropertyLoading } = usePropertyGetAll()

  //*states
  const [state, setState] = useState<Record<string, boolean>>({
    Available: true,
    Terminated: false,
    Removed: false,
  })

  //*const
  const { Available, Terminated, Removed } = state

  //*useMemo
  const chartData = useMemo(() => {
    if (isPropertyLoading) return { labels: [], datasets: [] }
    const filteredPropertyData = filter(
      propertyData,
      ({ status, property_tag }) => {
        if (property_tag !== 'Client') return false
        switch (status) {
          case 'Terminated':
            return Terminated
          case 'Removed':
            return Removed
          case 'Available':
            return Available
          default:
            return true
        }
      }
    )
    const propertyCountsByType = countBy(filteredPropertyData, 'property_type')

    return {
      labels: keys(propertyCountsByType).map((type) => startCase(type)),
      datasets: [
        {
          label: 'Property Count',
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
  }, [isPropertyLoading, propertyData, Terminated, Removed, Available])

  //*functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Property Type Pie Chart
        </Typography>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Property Status</FormLabel>
          <FormGroup row>
            {propertyStatusArray.map((status) => {
              return (
                <FormControlLabel
                  key={status}
                  control={
                    <Checkbox
                      checked={state[status]}
                      onChange={handleChange}
                      name={status}
                    />
                  }
                  label={status}
                />
              )
            })}
          </FormGroup>
        </FormControl>
        <Pie
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
              legend: {
                position: 'bottom',
              },
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

export default PropertyTypePie
