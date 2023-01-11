import { useMemo, useState } from 'react'
import moment from 'moment'

//*assets
import visitorCountUsing from 'assets/visitor_count_property_using.json'

//*lodash
import map from 'lodash/map'
import find from 'lodash/find'

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

//*interfaces

//*hooks

import {
  usePropertyGetAll,
  useGetAllPropertyLocationInArray,
} from 'hooks/property'
import { propertyStatusArray, propertyTagArray } from 'utils/constant'

const ISSERVER = typeof window === 'undefined'

//*const

function VisitorMonthlyReport2() {
  //*define
  const visitorUsingStateExportState = !ISSERVER
    ? JSON.parse(localStorage.getItem('visitorUsingStateExportState') as string)
    : {}

  const apiRef = useGridApiRef()
  const { data: propertyData, isLoading } = usePropertyGetAll()
  const { propertyCityArray, propertyStateArray } =
    useGetAllPropertyLocationInArray()

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: visitorUsingStateExportState,
  })

  //*states
  const [, setFilteredRow] = useState<
    { id: GridRowId; model: GridValidRowModel }[]
  >([])

  //*useMemo
  const visitorData = useMemo(() => {
    if (isLoading) return []
    const resultData = map(propertyData, (propertyData, index) => {
      const findData =
        find(visitorCountUsing, { property_id: propertyData.id }) || null

      const totalUnitUsingVisitor0822 = findData?.total_unit_using_visitor_08_22
        ? parseInt(findData?.total_unit_using_visitor_08_22)
        : 0
      const totalUnitUsingVisitor0922 = findData?.total_unit_using_visitor_09_22
        ? parseInt(findData?.total_unit_using_visitor_09_22)
        : 0
      const totalUnitUsingVisitor1022 = findData?.total_unit_using_visitor_10_22
        ? parseInt(findData?.total_unit_using_visitor_10_22)
        : 0
      const totalUnitUsingVisitor1122 = findData?.total_unit_using_visitor_11_22
        ? parseInt(findData?.total_unit_using_visitor_11_22)
        : 0

      const totalUnitUsingVisitor1222 = findData?.total_unit_using_visitor_12_22
        ? parseInt(findData?.total_unit_using_visitor_12_22)
        : 0

      const total: number =
        totalUnitUsingVisitor0822 +
        totalUnitUsingVisitor0922 +
        totalUnitUsingVisitor1022 +
        totalUnitUsingVisitor1122 +
        totalUnitUsingVisitor1222

      return {
        ...propertyData,
        ...findData,
        totalUnitUsingVisitor0822,
        differencePercentage0822:
          (totalUnitUsingVisitor0822 / propertyData.total_unit) * 100,
        totalUnitUsingVisitor0922,
        differencePercentage0922:
          (totalUnitUsingVisitor0922 / propertyData.total_unit) * 100,
        totalUnitUsingVisitor1022,
        differencePercentage1022:
          (totalUnitUsingVisitor1022 / propertyData.total_unit) * 100,
        totalUnitUsingVisitor1122,
        differencePercentage1122:
          (totalUnitUsingVisitor1122 / propertyData.total_unit) * 100,
        totalUnitUsingVisitor1222,
        differencePercentage1222:
          (totalUnitUsingVisitor1222 / propertyData.total_unit) * 100,
        averagePercentage: propertyData?.total_unit
          ? (total / 5 / propertyData?.total_unit) * 100
          : 0,
        index,
      }
    })
    return resultData
  }, [propertyData, isLoading])

  //*const

  //*functions

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: 'Name',
        minWidth: 150,
      },
      {
        field: 'total_unit',
        headerName: 'Total Unit',
        type: 'number',
      },
      {
        field: 'totalUnitUsingVisitor0822',
        headerName: 'Total Unit Using Aug',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'differencePercentage0822',
        headerName: 'Difference % Aug',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'totalUnitUsingVisitor0922',
        headerName: 'Total Unit Using Sep',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'differencePercentage0922',
        headerName: 'Difference % Sep',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'totalUnitUsingVisitor1022',
        headerName: 'Total Unit Using Oct',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'differencePercentage1022',
        headerName: 'Difference % Oct',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'totalUnitUsingVisitor1122',
        headerName: 'Total Unit Using Nov',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'differencePercentage1122',
        headerName: 'Difference % Nov',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'totalUnitUsingVisitor1222',
        headerName: 'Total Unit Using Dec',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'differencePercentage1222',
        headerName: 'Difference % Dec',
        type: 'number',
        minWidth: 150,
      },
      {
        field: 'averagePercentage',
        headerName: 'Average %',
        type: 'number',
        minWidth: 150,
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
    ]
  }, [propertyCityArray, propertyStateArray])

  return (
    <Card>
      <CardContent>
        <Box sx={{ height: 'calc(100vh - 48px)', overflow: 'hidden' }}>
          <Typography variant="h3" gutterBottom>
            Units - Visitor Engagement Report
          </Typography>
          <Box
            sx={{
              height: '100%',
              width: '100%',
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
              rows={visitorData}
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
        'visitorUsingStateExportState',
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
            localStorage.removeItem('visitorUsingStateExportState')
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

export default VisitorMonthlyReport2
