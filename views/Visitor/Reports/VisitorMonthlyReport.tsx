/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useCallback } from 'react'
import moment from 'moment'

//*assets
import visitorPropertyMonth from 'assets/visitor_count_property_month.json'

//*lodash
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import maxBy from 'lodash/maxBy'
import includes from 'lodash/includes'
import replace from 'lodash/replace'
import startCase from 'lodash/startCase'

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
  GridApi,
  gridFilteredSortedRowEntriesSelector,
} from '@mui/x-data-grid-premium'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

//*icons-material

//*interfaces

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
} from 'utils/constant'

const ISSERVER = typeof window === 'undefined'
function VisitorMonthlyReport() {
  //*define
  const visitorReportStateExportState = !ISSERVER
    ? JSON.parse(
        localStorage.getItem('visitorReportStateExportState') as string
      )
    : null
  const apiRef = useGridApiRef()
  const { data: propertyData, isLoading } = usePropertyGetAll()
  const { propertyCityArray, propertyStateArray } =
    useGetAllPropertyLocationInArray()

  //*states
  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: visitorReportStateExportState
      ? visitorReportStateExportState
      : {
          pinnedColumns: {
            left: ['month', 'name'],
          },
          aggregation: {
            model: {
              name: 'size',
              delivery_total: 'sum',
              pick_up_total: 'sum',
              drop_off_total: 'sum',
              visitor_total: 'sum',
              overnight_total: 'sum',
              contractor_total: 'sum',
              worker_total: 'sum',
              others_total: 'sum',
              wrong_visitor_total: 'sum',
              check_in_total: 'sum',
              total_unit: 'sum',
            },
          },
        },
  })

  //*useMemo
  const visitorData = useMemo(() => {
    if (isLoading) return []
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
    const resultData = map(visitorPropertyMonth, (data, index) => {
      const propertyData = propertyDataByKey[data.property_id]
      const {
        delivery_total,
        pick_up_total,
        drop_off_total,
        visitor_total,
        overnight_total,
        contractor_total,
        worker_total,
        others_total,
        wrong_visitor_total,
        check_in_total,
        month,
        year,
      } = data

      return {
        ...data,
        month: parseInt(month),
        delivery_total: parseInt(delivery_total),
        pick_up_total: parseInt(pick_up_total),
        drop_off_total: parseInt(drop_off_total),
        visitor_total: parseInt(visitor_total),
        overnight_total: parseInt(overnight_total),
        contractor_total: parseInt(contractor_total),
        worker_total: parseInt(worker_total),
        others_total: parseInt(others_total),
        wrong_visitor_total: parseInt(wrong_visitor_total),
        check_in_total: parseInt(check_in_total),

        delivery_total_per_unit:
          parseInt(delivery_total) / propertyData.total_unit,
        pick_up_total_per_unit:
          parseInt(pick_up_total) / propertyData.total_unit,
        drop_off_total_per_unit:
          parseInt(drop_off_total) / propertyData.total_unit,
        visitor_total_per_unit:
          parseInt(visitor_total) / propertyData.total_unit,
        overnight_total_per_unit:
          parseInt(overnight_total) / propertyData.total_unit,
        contractor_total_per_unit:
          parseInt(contractor_total) / propertyData.total_unit,
        worker_total_per_unit: parseInt(worker_total) / propertyData.total_unit,
        others_total_per_unit: parseInt(others_total) / propertyData.total_unit,
        wrong_visitor_total_per_unit:
          parseInt(wrong_visitor_total) / propertyData.total_unit,
        check_in_total_per_unit:
          parseInt(check_in_total) / propertyData.total_unit,

        index: `${index}_${month}_${year}`,
        ...propertyData,
      }
    })
    return resultData
  }, [propertyData, isLoading])

  //*const

  //*functions
  const generateTotalValueWithField = (array: string[]) => {
    const newArray = array.map((name) => {
      return {
        field: name,
        headerName: startCase(replace(name, '_total', '')),
        type: 'number',
        hide: true,
      }
    })
    return newArray
  }

  const columns: GridColDef[] = [
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
      'delivery_total',
      'delivery_total_per_unit',
      'pick_up_total',
      'pick_up_total_per_unit',
      'drop_off_total',
      'drop_off_total_per_unit',
      'visitor_total',
      'visitor_total_per_unit',
      'overnight_total',
      'overnight_total_per_unit',
      'contractor_total',
      'contractor_total_per_unit',
      'worker_total',
      'worker_total_per_unit',
      'others_total',
      'others_total_per_unit',
      'wrong_visitor_total',
      'wrong_visitor_total_per_unit',
      'check_in_total',
      'check_in_total_per_unit',
    ]),
  ]

  const getColorNumberRange = useCallback(
    (value: number, field: string, fieldIncluded: string[]) => {
      if (includes(fieldIncluded, field)) {
        const total = maxBy(
          gridFilteredSortedRowEntriesSelector(apiRef),
          `model.${field}`
        )?.model[`${field}`]

        if (value < total * 0.2) return 'bluered1'
        if (value < total * 0.4) return 'bluered2'
        if (value < total * 0.6) return 'bluered3'
        if (value < total * 0.7) return 'bluered4'
        if (value <= total * 1) return 'bluered5'
      }
      return ''
    },
    [apiRef]
  )

  return (
    <Card>
      <CardContent>
        <Box sx={{ height: 'calc(100vh - 48px)', overflow: 'hidden' }}>
          <Typography variant="h3" gutterBottom>
            Visitor Report
          </Typography>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              '& .bluered1': {
                color: 'white',
                backgroundColor: '#D3212C',
              },
              '& .bluered2': {
                color: 'white',
                backgroundColor: '#FF681E',
              },
              '& .bluered3': {
                color: 'white',
                backgroundColor: '#FF980E',
              },
              '& .bluered4': {
                color: 'white',
                backgroundColor: '#069C56',
              },
              '& .bluered5': {
                color: 'white',
                backgroundColor: '#006B3D',
              },
            }}
          >
            <DataGridPremium
              apiRef={apiRef}
              density="compact"
              rowGroupingColumnMode="multiple"
              getRowId={(data) => {
                return data.index
              }}
              rows={visitorData}
              columns={columns}
              disableSelectionOnClick
              initialState={initialState}
              experimentalFeatures={{ aggregation: true }}
              components={{
                Toolbar: CustomToolbar,
              }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                  apiRef: apiRef.current,
                },
              }}
              getCellClassName={(param) => {
                return getColorNumberRange(param.value, param.field, [
                  'delivery_total_per_unit',
                  'pick_up_total_per_unit',
                  'drop_off_total_per_unit',
                  'visitor_total_per_unit',
                  'overnight_total_per_unit',
                  'contractor_total_per_unit',
                  'worker_total_per_unit',
                  'others_total_per_unit',
                  'wrong_visitor_total_per_unit',
                  'check_in_total_per_unit',
                  'total_unit_per_unit',
                ])
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

function CustomToolbar({ apiRef }: { apiRef: GridApi }) {
  //*useState

  //*functions
  const handleSaveView = () => {
    if (apiRef.exportState())
      localStorage.setItem(
        'visitorReportStateExportState',
        JSON.stringify(apiRef.exportState())
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
            localStorage.removeItem('visitorReportStateExportState')
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

export default VisitorMonthlyReport
