/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useCallback, useState } from 'react'
import moment from 'moment'

//*assets
import feedbackPropertyMonth from 'assets/feedbacks_property_id_month.json'

//*lodash
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import includes from 'lodash/includes'
import replace from 'lodash/replace'
import startCase from 'lodash/startCase'
import maxBy from 'lodash/maxBy'

//*components

//*material
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
  GridColDef,
  GridValueGetterParams,
  GridValueFormatterParams,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
  gridFilteredSortedRowEntriesSelector,
  useGridApiContext,
  GridCellParams,
  GridRowId,
  GridValidRowModel,
} from '@mui/x-data-grid-premium'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

//*icons-material

//*interface

//*hooks

import {
  PropertyData,
  usePropertyGetAll,
  useGetAllPropertyLocationInArray,
} from 'hooks/property'
import {
  propertyTypeArray,
  propertyStatusArray,
  monthInNumberArray,
  monthArrayObjectPair,
  propertyTagArray,
  yearInNumberArray,
} from 'utils/constant'

const ISSERVER = typeof window === 'undefined'

//*const

function FeedbackMonthlyReport() {
  //*define
  const feedbackReportStateExportState = !ISSERVER
    ? JSON.parse(
        localStorage.getItem('feedbackReportStateExportState') as string
      )
    : null
  const remarksKeyIndex = !ISSERVER
    ? JSON.parse(localStorage?.getItem('remarks_key_index') as string)
    : {}
  const apiRef = useGridApiRef()
  const { propertyData, isPropertyLoading } = usePropertyGetAll()
  const { propertyCityArray, propertyStateArray } =
    useGetAllPropertyLocationInArray()

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: feedbackReportStateExportState
      ? feedbackReportStateExportState
      : {
          pinnedColumns: {
            left: ['year', 'month', 'name'],
          },
          aggregation: {
            model: {
              name: 'size',
              total_unit: 'sum',
              total: 'sum',
              total_new: 'sum',
              total_in_progress: 'sum',
              total_resolved: 'sum',
              total_unit_submit: 'sum',
              average_resolution_time: 'avg',
            },
          },
          sorting: {
            sortModel: [
              { field: 'year', sort: 'asc' },
              { field: 'month', sort: 'asc' },
              { field: 'total', sort: 'asc' },
            ],
          },
        },
  })

  //*states
  const [filteredRow, setFilteredRow] = useState<
    { id: GridRowId; model: GridValidRowModel }[]
  >([])

  //*useMemo
  const feedbackData = useMemo(() => {
    if (isPropertyLoading) return []
    const propertyDataByKey = reduce(
      propertyData,
      (
        temp: {
          [key: string]: PropertyData
        },
        value: PropertyData
      ) => {
        temp[value.id] = value
        return temp
      },
      {}
    )
    const resultData = map(feedbackPropertyMonth, (data, index) => {
      const propertyData = propertyDataByKey[data.property_id]
      const { month, year } = data

      return {
        ...data,
        month: parseInt(month),
        year: year,
        total: parseInt(data.total),
        total_new: parseInt(data.total_new),
        total_in_progress: parseInt(data.total_in_progress),
        total_resolved: parseInt(data.total_resolved),
        total_unit_submit: parseInt(data.total_unit_submit),
        average_resolution_time: parseFloat(data.average_resolution_time),
        index: `${index}_${month}_${year}`,
        remark: remarksKeyIndex?.[`${index}_${month}_${year}`] || '',
        ...propertyData,
      }
    })
    return resultData
  }, [feedbackPropertyMonth, isPropertyLoading])

  //*const

  //*functions
  const generateTotalValueWithField = (array: string[]) => {
    const newArray: GridColDef[] = array.map((name) => {
      return {
        field: name,
        headerName: startCase(replace(name, '_total', '')),
        type: 'number',
      }
    })
    return newArray
  }
  const fieldPerUnit: string[] = []
  const maxValueByeEachField: Record<string, number> = useMemo(() => {
    return reduce(
      fieldPerUnit,
      (temp: Record<string, number>, value) => {
        temp[value] = maxBy(filteredRow, `model.${value}`)?.model[value]
        return temp
      },
      {}
    )
  }, [filteredRow])

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'year',
        headerName: 'Year',
        type: 'singleSelect',
        valueOptions: yearInNumberArray,
      },
      {
        field: 'month',
        headerName: 'Month',
        type: 'singleSelect',
        valueOptions: monthInNumberArray,
        valueFormatter: (params) => {
          return monthArrayObjectPair[params.value]
        },
      },
      {
        field: 'name',
        headerName: 'Name',
        minWidth: 200,
      },
      {
        field: 'first_address',
        headerName: 'Address 1',
        minWidth: 200,
      },
      {
        field: 'second_address',
        headerName: 'Address 2',
        minWidth: 200,
      },
      {
        field: 'city',
        headerName: 'City',
        type: 'singleSelect',
        valueOptions: propertyCityArray,
      },
      {
        field: 'state',
        headerName: 'State',
        type: 'singleSelect',
        valueOptions: propertyStateArray,
      },
      {
        field: 'property_type',
        headerName: 'Property Type',
        type: 'singleSelect',
        valueOptions: propertyTypeArray,
      },
      {
        field: 'property_tag',
        headerName: 'Property Tag',
        type: 'singleSelect',
        valueOptions: propertyTagArray,
      },
      {
        field: 'status',
        headerName: 'Status',
        type: 'singleSelect',
        valueOptions: propertyStatusArray,
      },
      {
        field: 'commencement_at',
        headerName: 'Commencement Date',
        minWidth: 150,
        type: 'date',
        valueFormatter: (params: GridValueFormatterParams) => {
          if (params?.value) return moment(params?.value).format('DD/MM/YYYY')
          return null
        },
        valueGetter: (params: GridValueGetterParams) => {
          return params?.value?.toDate()
        },
      },
      {
        field: 'total_unit',
        headerName: 'Total Unit',
        type: 'number',
      },
      ...generateTotalValueWithField([
        'total',
        'total_new',
        'total_in_progress',
        'total_resolved',
        'total_unit_submit',
        'average_resolution_time',
      ]),
      {
        field: 'remark',
        headerName: 'Remark',
        type: 'string',
        editable: true,
        minWidth: 200,
      },
    ]
  }, [propertyCityArray, propertyStateArray])

  const getColorNumberRange = useCallback(
    (params: GridCellParams) => {
      const { value, field } = params

      if (includes(fieldPerUnit, field)) {
        if (value < maxValueByeEachField[field] * 0.2) return 'red'
        if (value < maxValueByeEachField[field] * 0.4) return 'lightorange'
        if (value < maxValueByeEachField[field] * 0.6) return 'orange'
        if (value < maxValueByeEachField[field] * 0.7) return 'green'
        if (value <= maxValueByeEachField[field] * 1) return 'darkgreen'
      }
      return ''
    },
    [maxValueByeEachField]
  )

  return (
    <Card>
      <CardContent>
        <Box sx={{ height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
          <Typography variant="h3" gutterBottom>
            Feedback Report
          </Typography>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              '& .red': {
                color: 'white',
                backgroundColor: '#D3212C',
              },
              '& .lightorange': {
                color: 'white',
                backgroundColor: '#FF681E',
              },
              '& .orange': {
                color: 'white',
                backgroundColor: '#FF980E',
              },
              '& .green': {
                color: 'white',
                backgroundColor: '#069C56',
              },
              '& .darkgreen': {
                color: 'white',
                backgroundColor: '#006B3D',
              },
            }}
          >
            <DataGridPremium
              onStateChange={(state) => {
                if (state.rows.ids.length > 0) {
                  setFilteredRow(
                    gridFilteredSortedRowEntriesSelector(
                      state,
                      apiRef.current.instanceId
                    )
                  )
                }
              }}
              apiRef={apiRef}
              density="compact"
              rowGroupingColumnMode="multiple"
              getRowId={(data) => {
                return data.index
              }}
              processRowUpdate={(data) => {
                const remarks = localStorage?.getItem('remarks_key_index')
                  ? JSON.parse(
                      localStorage?.getItem('remarks_key_index') as string
                    )
                  : {}
                remarks[data.index] = data['remark']
                localStorage.setItem(
                  'remarks_key_index',
                  JSON.stringify(remarks)
                )
                return data
              }}
              rows={feedbackData}
              columns={columns}
              disableSelectionOnClick
              initialState={initialState}
              experimentalFeatures={{ aggregation: true, newEditingApi: true }}
              components={{
                Toolbar: CustomToolbar,
              }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getCellClassName={getColorNumberRange}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

function CustomToolbar() {
  const apiRef = useGridApiContext()
  //*useState

  //*functions
  const handleSaveView = () => {
    if (apiRef.current.exportState())
      localStorage.setItem(
        'feedbackReportStateExportState',
        JSON.stringify(apiRef.current.exportState())
      )
  }

  return (
    <GridToolbarContainer>
      <Stack
        sx={{
          display: 'flex',
          width: '100%',
          pt: 1,
          pb: 1,
          alignItems: 'center',
        }}
        direction="row"
        spacing={1.5}
      >
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
        <Button size="small" onClick={handleSaveView}>
          Save View
        </Button>
        <Button
          size="small"
          onClick={() => {
            localStorage.removeItem('feedbackReportStateExportState')
            window.location.reload()
          }}
        >
          Reset
        </Button>
        <Box sx={{ flex: '1 1 0%;' }} />
        <Box>
          <GridToolbarQuickFilter />
        </Box>
      </Stack>
    </GridToolbarContainer>
  )
}

export default FeedbackMonthlyReport
