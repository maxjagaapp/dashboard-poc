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

//assets
import visitorDataHour from 'assets/visitor_count_hour.json'

//*lodash
import groupBy from 'lodash/groupBy'
import sumBy from 'lodash/sumBy'
import forOwn from 'lodash/forOwn'
import find from 'lodash/find'
import map from 'lodash/map'

//*components

//material
import Stack from '@mui/material/Stack'
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
  Legend
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
  const [hourDate, setHourDate] = useState<Date>(new Date())
  const [chartDateFormat, setChartDateFormat] = useState<string>('day')

  //*const

  //*useMemo
  const dateFormatSelection: ChartDateFormat[] = useMemo(
    () => [
      {
        format: 'HH:00',
        key: 'time',
        label: 'Time',
        unit: 'hour',
        tooltipFormat: 'hh:00 a',
        title: `Visitor Check-In Aug 2022 - Dec/2022`,
      },
      {
        format: 'DD/MMM/YYYY HH:00',
        key: 'hour',
        label: 'Hour',
        unit: 'hour',
        tooltipFormat: 'hh:00 a',
        title: `Visitor Check-In (${moment(hourDate).format(
          'ddd DD/MMM/YYYY'
        )})`,
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
    [hourDate]
  )

  const findSelectedChartFormat = useMemo(
    () =>
      find(dateFormatSelection, {
        key: chartDateFormat,
      }),
    [chartDateFormat, dateFormatSelection]
  )

  const data: ChartData<'line', number[], Date> = useMemo(() => {
    const format = findSelectedChartFormat?.format
    const groupData = groupBy(visitorData, (visit) =>
      moment(visit.check_in_date).format(format)
    )
    const resultData: VisitorData[] = []
    forOwn(groupData, (value, key) => {
      if (
        chartDateFormat === 'hour' &&
        moment(key, format).format('MM/DD/YY') !==
          moment(new Date(hourDate)).format('MM/DD/YY')
      ) {
        return
      }

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
  }, [findSelectedChartFormat?.format, chartDateFormat, hourDate])

  return (
    <Box component={Paper} sx={{ p: 2 }}>
      <Stack spacing={2} direction="row">
        <ButtonGroup>
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
        {chartDateFormat === 'hour' && (
          <Box>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Basic example"
                value={hourDate}
                onChange={(newValue) => {
                  if (newValue) setHourDate(newValue)
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth={false} size="small" />
                )}
              />
            </LocalizationProvider>
          </Box>
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
            },
            onClick: (event, elements) => {
              if (elements.length > 0) {
                if (chartDateFormat === 'day') {
                  if (data.labels?.[elements[0]?.index]) {
                    setHourDate(data.labels?.[elements[0]?.index])
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
