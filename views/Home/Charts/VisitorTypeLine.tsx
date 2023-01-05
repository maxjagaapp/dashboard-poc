import { useState, useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  TimeUnit,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import moment from 'moment'
import ChartDataLabels from 'chartjs-plugin-datalabels'

//assets
import visitorDataHour from 'assets/visitor_count_hour.json'

//*lodash
import groupBy from 'lodash/groupBy'
import filter from 'lodash/filter'
import sumBy from 'lodash/sumBy'
import forOwn from 'lodash/forOwn'
import find from 'lodash/find'
import map from 'lodash/map'

//*components

//material
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import {
  pink,
  green,
  blue,
  red,
  purple,
  orange,
  yellow,
  brown,
} from '@mui/material/colors'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

//icons-material

//interfaces
interface VisitorData {
  check_in_date: Date
  delivery_total: number
  pick_up_total: number
  drop_off_total: number
  visitor_total: number
  overnight_total: number
  contractor_total: number
  worker_total: number
  others_total: number
  property_total: number
}

interface ChartDateFormat {
  format: string
  key: string
  label: string
  unit: false | TimeUnit
  tooltipFormat: string
  title: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

//consts
const generateVisitorDatasets = (data: VisitorData[]) => {
  return [
    {
      label: 'Worker',
      borderColor: orange[700],
      backgroundColor: orange[200],
      fill: false,
      data: map(data, 'worker_total'),
    },
    {
      label: 'Contractor',
      borderColor: yellow[700],
      backgroundColor: yellow[200],
      fill: false,
      data: map(data, 'contractor_total'),
    },
    {
      label: 'Visitor',
      borderColor: purple[700],
      backgroundColor: purple[200],
      fill: false,
      data: map(data, 'visitor_total'),
    },
    {
      label: 'Drop Off',
      borderColor: brown[700],
      backgroundColor: brown[200],
      fill: false,
      data: map(data, 'drop_off_total'),
    },
    {
      label: 'Pick Up',
      borderColor: blue[700],
      backgroundColor: blue[200],
      fill: false,
      data: map(data, 'pick_up_total'),
    },
    {
      label: 'Delivery',
      borderColor: red[700],
      backgroundColor: red[200],
      fill: false,
      data: map(data, 'delivery_total'),
    },
    {
      label: 'Overnight',
      borderColor: green[700],
      backgroundColor: green[200],
      fill: false,
      data: map(data, 'overnight_total'),
    },
    {
      label: 'Others',
      borderColor: pink[700],
      backgroundColor: pink[200],
      fill: false,
      data: map(data, 'others_total'),
    },
  ]
}

const visitorData = map(visitorDataHour, (visit) => {
  return {
    check_in_date: new Date(visit.check_in_date),
    contractor_total: Number(visit.contractor_total),
    delivery_total: Number(visit.delivery_total),
    drop_off_total: Number(visit.drop_off_total),
    others_total: Number(visit.others_total),
    overnight_total: Number(visit.overnight_total),
    pick_up_total: Number(visit.pick_up_total),
    visitor_total: Number(visit.visitor_total),
    worker_total: Number(visit.worker_total),
    property_total: Number(visit.property_total),
  }
})

function VisitorTypeLine() {
  //*define

  //*states
  const [toHourDate, setToHourDate] = useState<Date>(new Date())
  const [fromHourDate, setFromHourDate] = useState<Date>(new Date())
  const [chartDateFormat, setChartDateFormat] = useState<string>('day')
  const [hourType, setHourType] = useState<string>('sum')

  //*const

  //*useMemo
  const dateFormatSelection: ChartDateFormat[] = useMemo(
    () => [
      {
        format: hourType === 'sum' ? 'HH:00' : 'DD/MMM/YYYY HH:00',
        key: 'hour',
        label: 'Hour',
        unit: hourType === 'sum' ? 'hour' : 'day',
        tooltipFormat: hourType === 'sum' ? 'hh:00 a' : 'DD/MMM/YYYY hh:00 a',
        title: `Visitor Check-In (${moment(toHourDate).format(
          'ddd DD/MMM/YYYY'
        )}) to (${moment(fromHourDate).format('ddd DD/MMM/YYYY')})`,
      },
      {
        format: 'MM/DD/YYYY',
        key: 'day',
        label: 'Day',
        unit: 'day',
        tooltipFormat: 'dd DD/MMM/YYYY',
        title: 'Visitor Check-In (Day)',
      },
      {
        format: 'MM/YYYY',
        key: 'month',
        label: 'Month',
        unit: 'month',
        tooltipFormat: 'MMM/YYYY',
        title: 'Visitor Check-In (Month)',
      },
    ],
    [toHourDate, fromHourDate, hourType]
  )

  const findSelectedChartFormat = useMemo(
    () =>
      find(dateFormatSelection, {
        key: chartDateFormat,
      }),
    [chartDateFormat, dateFormatSelection]
  )

  const data: ChartData<'line', number[], Date> = useMemo(() => {
    const filteredVisitorData = filter(visitorData, (visitor) => {
      switch (chartDateFormat) {
        case 'hour':
          return moment(new Date(visitor.check_in_date)).isBetween(
            moment(new Date(toHourDate)),
            moment(new Date(fromHourDate)),
            'days',
            '[]'
          )

        default:
          return true
      }
    })

    const format = findSelectedChartFormat?.format
    const groupData = groupBy(filteredVisitorData, (visit) =>
      moment(visit.check_in_date).format(format)
    )
    const resultData: VisitorData[] = []
    forOwn(groupData, (value, key) => {
      resultData.push({
        check_in_date: moment(key, format).toDate(),
        delivery_total: sumBy(value, 'delivery_total'),
        contractor_total: sumBy(value, 'contractor_total'),
        drop_off_total: sumBy(value, 'drop_off_total'),
        others_total: sumBy(value, 'others_total'),
        overnight_total: sumBy(value, 'overnight_total'),
        pick_up_total: sumBy(value, 'pick_up_total'),
        visitor_total: sumBy(value, 'visitor_total'),
        worker_total: sumBy(value, 'worker_total'),
        property_total: sumBy(value, 'property_total'),
      })
    })
    return {
      labels: map(resultData, 'check_in_date'),
      datasets: generateVisitorDatasets(resultData),
    }
  }, [
    findSelectedChartFormat?.format,
    chartDateFormat,
    toHourDate,
    fromHourDate,
  ])

  return (
    <Box component={Paper} sx={{ p: 2 }}>
      <Typography variant="h3" gutterBottom>
        Total Visitor Report Line Chart
      </Typography>
      <Stack spacing={2} direction="row">
        <ButtonGroup size="small">
          {dateFormatSelection.map((date) => (
            <Button
              variant={chartDateFormat === date.key ? 'contained' : 'outlined'}
              key={date.key}
              onClick={() => {
                setChartDateFormat(date.key)
              }}
            >
              {date.label}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup size="small">
          <Button
            variant={hourType === 'sum' ? 'contained' : 'outlined'}
            key={'sum'}
            onClick={() => {
              setHourType('sum')
            }}
          >
            Sum
          </Button>
          <Button
            variant={hourType === 'spread' ? 'contained' : 'outlined'}
            key={'spread'}
            onClick={() => {
              setHourType('spread')
            }}
          >
            Spread
          </Button>
        </ButtonGroup>
        {chartDateFormat === 'hour' && (
          <Stack direction="row" spacing={2}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="From"
                value={toHourDate}
                onChange={(newValue) => {
                  if (newValue) setToHourDate(newValue)
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth={false} size="small" />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="To"
                value={fromHourDate}
                onChange={(newValue) => {
                  if (newValue) setFromHourDate(newValue)
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth={false} size="small" />
                )}
              />
            </LocalizationProvider>
          </Stack>
        )}
      </Stack>
      <Box>
        <Line
          height={450}
          data={data}
          options={{
            elements: { line: { tension: 0.4 } },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              title: {
                display: true,
                text: findSelectedChartFormat?.title,
              },
              datalabels: {
                display: false,
              },
            },
            onClick: (event, elements) => {
              if (elements.length > 0) {
                if (chartDateFormat === 'day') {
                  if (data.labels?.[elements[0]?.index]) {
                    setToHourDate(data.labels?.[elements[0]?.index])
                    setChartDateFormat('hour')
                  }
                }
              }
            },
            scales: {
              x: {
                type: 'time',
                display: true,
                time: {
                  unit: findSelectedChartFormat?.unit,
                  tooltipFormat: findSelectedChartFormat?.tooltipFormat,
                },
              },
              y: {
                type: 'linear',
                display: true,
                position: 'left',
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default VisitorTypeLine
