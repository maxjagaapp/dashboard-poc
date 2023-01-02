/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Column,
  Table,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState, useEffect } from 'react'

//assets
import visitorPropertyMonth from 'assets/visitor_count_property_month.json'

//*lodash
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import sumBy from 'lodash/sumBy'

//*components

//*material
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Tooltip from '@mui/material/Tooltip'

//*icons-material
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

//*interfaces

//*hooks

import { PropertyData, usePropertyGetAll } from 'hooks/property'
function VisitorMonthlyReport() {
  //*define
  const { data: propertyData, isLoading } = usePropertyGetAll()

  //*states

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

    const resultData = map(visitorPropertyMonth, (data) => {
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
      } = data
      return {
        ...data,
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
        ...propertyDataByKey[data.property_id],
      }
    })

    return resultData
  }, [propertyData, isLoading])

  //*const
  const columns = useMemo<ColumnDef<PropertyData>[]>(
    () => [
      {
        accessorKey: 'month_year',
        header: 'Month/Year',
        minSize: 80,
        enableGrouping: false,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        minSize: 100,
        enableGrouping: false,
      },
      {
        accessorKey: 'propertyType',
        header: 'Type',
        minSize: 100,
        enableGrouping: false,
      },
      {
        accessorKey: 'first_address',
        header: 'First Address',
        size: 200,
        enableGrouping: false,
        cell: (info) => {
          const value = info.getValue() as string
          return (
            <Tooltip title={value}>
              <Box
                sx={{
                  width: '200px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {value}
              </Box>
            </Tooltip>
          )
        },
      },
      {
        accessorKey: 'second_address',
        header: 'First Address',
        minSize: 200,
        enableGrouping: false,
        cell: (info) => {
          const value = info.getValue() as string
          return (
            <Tooltip title={value}>
              <Box
                sx={{
                  width: '200px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {value}
              </Box>
            </Tooltip>
          )
        },
      },
      {
        accessorKey: 'city',
        header: 'City',
        minSize: 50,
        enableGrouping: true,
        noWrap: true,
        cell: (info) => {
          const value = info.getValue() as string
          return (
            <Box
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              {value}
            </Box>
          )
        },
      },
      {
        accessorKey: 'state',
        header: 'State',
        minSize: 50,
        enableGrouping: true,
        noWrap: true,
        cell: (info) => {
          const value = info.getValue() as string
          return (
            <Box
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              {value}
            </Box>
          )
        },
      },
      {
        accessorKey: 'delivery_total',
        header: 'Delivery',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'visitor_total',
        header: 'Visitor',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'worker_total',
        header: 'Worker',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'contractor_total',
        header: 'Contractor',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'pick_up_total',
        header: 'Pick Up',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'overnight_total',
        header: 'Overnight',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'drop_off_total',
        header: 'Drop Off',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'others_total',
        header: 'Others',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'wrong_visitor_total',
        header: 'Wrong Visitor',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
      {
        accessorKey: 'check_in_total',
        header: 'Check In Visitor',
        cell: (info) => info.getValue(),
        minSize: 50,
        enableGrouping: false,
        aggregationFn: 'sum',
        align: 'right',
      },
    ],
    []
  )

  const table = useReactTable({
    data: visitorData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  const filterRow = table.getFilteredRowModel().flatRows
  const visitorDataSummary: {
    contractor_total_all: number
    delivery_total_all: number
    pick_up_total_all: number
    drop_off_total_all: number
    visitor_total_all: number
    overnight_total_all: number
    worker_total_all: number
    others_total_all: number
    wrong_visitor_total_all: number
    check_in_total_all: number
  } = useMemo(() => {
    return {
      contractor_total_all: sumBy(filterRow, 'original.contractor_total'),
      delivery_total_all: sumBy(filterRow, 'original.delivery_total'),
      pick_up_total_all: sumBy(filterRow, 'original.pick_up_total'),
      drop_off_total_all: sumBy(filterRow, 'original.drop_off_total'),
      visitor_total_all: sumBy(filterRow, 'original.visitor_total'),
      overnight_total_all: sumBy(filterRow, 'original.overnight_total'),
      worker_total_all: sumBy(filterRow, 'original.worker_total'),
      others_total_all: sumBy(filterRow, 'original.others_total'),
      wrong_visitor_total_all: sumBy(filterRow, 'original.wrong_visitor_total'),
      check_in_total_all: sumBy(filterRow, 'original.check_in_total'),
    }
  }, [filterRow])

  //*functions

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', p: 1 }}>
      <TableContainer sx={{ height: 800 }}>
        <MuiTable size="small" stickyHeader>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    sx={{
                      minWidth: header.column.columnDef.minSize,
                      width: header.getSize(),
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        '.MuiSvgIcon-root': {
                          display: 'block',
                        },
                      },
                    }}
                  >
                    <Box>
                      {header.column.getCanGroup() ? (
                        // If the header can be grouped, let's add a toggle
                        <IconButton
                          {...{
                            onClick: header.column.getToggleGroupingHandler(),
                            sx: {
                              cursor: 'pointer',
                              width: '24px',
                              height: '24px',
                            },
                          }}
                          size="small"
                          disableFocusRipple
                          disableRipple
                        >
                          {header.column.getIsGrouped() ? (
                            <UnfoldMoreIcon
                              sx={{
                                width: '20px',
                                height: '20px',
                              }}
                            />
                          ) : (
                            <UnfoldLessIcon
                              sx={{
                                width: '20px',
                                height: '20px',
                                display: 'none',
                              }}
                            />
                          )}
                        </IconButton>
                      ) : null}
                      <TableSortLabel
                        key={header.id}
                        disabled={!header.column.getCanSort()}
                        active={
                          header.column.getIsSorted() === 'asc' ||
                          header.column.getIsSorted() === 'desc'
                        }
                        direction={header.column?.getIsSorted() || 'asc'}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.isPlaceholder ? null : (
                          <>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </>
                        )}
                      </TableSortLabel>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : header.column.getCanFilter() ? (
                        <Box>
                          <Filter column={header.column} table={table} />
                        </Box>
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      align={cell.column.columnDef?.align}
                    >
                      {cell.getIsGrouped() ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <Button
                            {...{
                              onClick: row.getToggleExpandedHandler(),
                            }}
                            size="small"
                            color="inherit"
                            startIcon={
                              row.getCanExpand() ? (
                                <KeyboardArrowRightIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )
                            }
                            sx={{ whiteSpace: 'noWrap' }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                            &nbsp;({row.subRows.length})
                          </Button>
                        </>
                      ) : cell.getIsAggregated() ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        flexRender(
                          cell.column.columnDef.aggregatedCell ??
                            cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter
            sx={{ position: 'sticky', bottom: 0, background: 'white' }}
          >
            <TableRow>
              <TableCell colSpan={6}></TableCell>
              <TableCell align="right">Sumary</TableCell>
              <TableCell align="right">
                {visitorDataSummary.delivery_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.visitor_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.worker_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.contractor_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.pick_up_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.overnight_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.drop_off_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.others_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.wrong_visitor_total_all}
              </TableCell>
              <TableCell align="right">
                {visitorDataSummary.check_in_total_all}
              </TableCell>
            </TableRow>
          </TableFooter>
        </MuiTable>
      </TableContainer>
    </Paper>
  )
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === 'number' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default VisitorMonthlyReport
