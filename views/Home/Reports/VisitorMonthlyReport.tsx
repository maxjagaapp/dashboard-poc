/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

//assets
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
  GridToolbar,
} from '@mui/x-data-grid-premium'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

//*icons-material

//*interfaces

//*hooks

import { PropertyData, usePropertyGetAll } from 'hooks/property'

function VisitorMonthlyReport() {
  //*define
  const apiRef = useGridApiRef()
  const { data: propertyData, isLoading } = usePropertyGetAll()

  //*states
  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      pinnedColumns: { left: ['name'] },
      rowGrouping: {
        model: ['month'],
      },
      aggregation: {
        model: {
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
        index: `${index}_${month}`,
        ...propertyDataByKey[data.property_id],
      }
    })
    console.log(1, resultData)
    return resultData
  }, [propertyData, isLoading])

  //*const

  //*functions
  const columns: GridColDef[] = [
    {
      field: 'month',
      headerName: 'Month',
    },
    { field: 'name', headerName: 'Name', minWidth: 200 },
    { field: 'first_address', headerName: 'Address 1', minWidth: 200 },
    { field: 'second_address', headerName: 'Address 2', minWidth: 200 },
    { field: 'city', headerName: 'City' },
    { field: 'state', headerName: 'State' },
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
    <Paper sx={{ height: '100%', overflow: 'hidden', p: 1 }}>
      <Box sx={{ height: '850px', width: '100%' }}>
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
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Paper>
  )
}

export default VisitorMonthlyReport