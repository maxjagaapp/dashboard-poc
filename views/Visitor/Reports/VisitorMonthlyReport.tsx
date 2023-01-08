/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import moment from 'moment'

//*assets
import visitorPropertyMonth from 'assets/visitor_count_property_month.json'

//*lodash
import map from 'lodash/map'
import reduce from 'lodash/reduce'

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
        index: `${index}_${month}_${year}`,
        ...propertyDataByKey[data.property_id],
      }
    })
    return resultData
  }, [propertyData, isLoading])

  //*const

  //*functions
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
    {
      field: 'delivery_total',
      headerName: 'Delivery',
      type: 'number',
    },
    {
      field: 'pick_up_total',
      headerName: 'Pick Up',
      type: 'number',
    },
    {
      field: 'drop_off_total',
      headerName: 'Drop Off',
      type: 'number',
    },
    {
      field: 'visitor_total',
      headerName: 'Visitor',
      type: 'number',
    },
    {
      field: 'overnight_total',
      headerName: 'Overnight',
      type: 'number',
    },
    {
      field: 'contractor_total',
      headerName: 'Contractor',
      type: 'number',
    },
    {
      field: 'worker_total',
      headerName: 'Worker',
      type: 'number',
    },
    {
      field: 'others_total',
      headerName: 'Others',
      type: 'number',
    },
    {
      field: 'wrong_visitor_total',
      headerName: 'Wrong Visitor',
      type: 'number',
    },
    {
      field: 'check_in_total',
      headerName: 'Check In Total',
      type: 'number',
    },
  ]

  return (
    <Card>
      <CardContent>
        <Box sx={{ height: 'calc(100vh - 48px)', overflow: 'hidden' }}>
          <Typography variant="h3" gutterBottom>
            Visitor Report
          </Typography>
          <Box sx={{ height: '100%', width: '100%' }}>
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
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

function CustomToolbar({ apiRef }: { apiRef: GridApi }) {
  const handleSaveView = () => {
    localStorage.setItem(
      'visitorReportStateExportState',
      JSON.stringify(apiRef.exportState())
    )
  }

  return (
    <GridToolbarContainer>
      <Stack
        sx={{ display: 'flex', width: '100%', pt: 1, pb: 1 }}
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
