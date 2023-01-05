export const propertyTypeArray = [
  'High Rise',
  'Landed',
  'Townhouse',
  'Commercial',
  'None',
]

export const propertyStatusArray = ['Available', 'Terminated', 'Removed']
export const monthInNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const monthInStringArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const monthArrayObjectPair: { [key: string]: string } = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

export const propertyTagArray = ['Client', 'Demo', 'Testing', 'Terminated']

export const defaultValue = {
  rowGrouping: {
    model: [],
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
    lookup: {
      '': {
        name: {
          position: 'footer',
          value: 0,
        },
        delivery_total: {
          position: 'footer',
          value: 0,
        },
        pick_up_total: {
          position: 'footer',
          value: 0,
        },
        drop_off_total: {
          position: 'footer',
          value: 0,
        },
        visitor_total: {
          position: 'footer',
          value: 0,
        },
        overnight_total: {
          position: 'footer',
          value: 0,
        },
        contractor_total: {
          position: 'footer',
          value: 0,
        },
        worker_total: {
          position: 'footer',
          value: 0,
        },
        others_total: {
          position: 'footer',
          value: 0,
        },
        wrong_visitor_total: {
          position: 'footer',
          value: 0,
        },
        check_in_total: {
          position: 'footer',
          value: 0,
        },
        total_unit: {
          position: 'footer',
          value: 0,
        },
      },
    },
  },
  selection: [],
  detailPanel: {
    heightCache: {},
    expandedRowIds: [],
  },
  pinnedColumns: {
    left: ['month', 'name'],
  },
  columns: {
    all: [
      'month',
      'name',
      'first_address',
      'second_address',
      'city',
      'state',
      'property_type',
      'property_tag',
      'status',
      'commencement_at',
      'total_unit',
      'delivery_total',
      'pick_up_total',
      'drop_off_total',
      'visitor_total',
      'overnight_total',
      'contractor_total',
      'worker_total',
      'others_total',
      'wrong_visitor_total',
      'check_in_total',
    ],
    lookup: {
      month: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'month',
        hasBeenResized: false,
        headerName: 'Month',
        valueOptions: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        computedWidth: 100,
      },
      name: {
        width: 100,
        minWidth: 200,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'string',
        align: 'left',
        filterOperators: [
          {
            value: 'contains',
          },
          {
            value: 'equals',
          },
          {
            value: 'startsWith',
          },
          {
            value: 'endsWith',
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'name',
        hasBeenResized: true,
        headerName: 'Name',
        aggregationWrappedProperties: {
          valueGetter: {},
          valueFormatter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                value: 'contains',
              },
              {
                value: 'equals',
              },
              {
                value: 'startsWith',
              },
              {
                value: 'endsWith',
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
              },
            ],
            wrapped: [
              {
                value: 'contains',
              },
              {
                value: 'equals',
              },
              {
                value: 'startsWith',
              },
              {
                value: 'endsWith',
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
              },
            ],
          },
        },
        computedWidth: 200,
      },
      first_address: {
        width: 100,
        minWidth: 200,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'string',
        align: 'left',
        filterOperators: [
          {
            value: 'contains',
          },
          {
            value: 'equals',
          },
          {
            value: 'startsWith',
          },
          {
            value: 'endsWith',
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'first_address',
        hasBeenResized: true,
        headerName: 'Address 1',
        computedWidth: 200,
      },
      second_address: {
        width: 100,
        minWidth: 200,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'string',
        align: 'left',
        filterOperators: [
          {
            value: 'contains',
          },
          {
            value: 'equals',
          },
          {
            value: 'startsWith',
          },
          {
            value: 'endsWith',
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'second_address',
        hasBeenResized: true,
        headerName: 'Address 2',
        computedWidth: 200,
      },
      city: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'city',
        hasBeenResized: false,
        headerName: 'City',
        valueOptions: [],
        computedWidth: 100,
      },
      state: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'state',
        hasBeenResized: false,
        headerName: 'State',
        valueOptions: [],
        computedWidth: 100,
      },
      property_type: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'property_type',
        hasBeenResized: false,
        headerName: 'Property Type',
        valueOptions: [
          'High Rise',
          'Landed',
          'Townhouse',
          'Commercial',
          'None',
        ],
        computedWidth: 100,
      },
      property_tag: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'property_tag',
        hasBeenResized: false,
        headerName: 'Property Tag',
        valueOptions: ['Client', 'Demo', 'Testing', 'Terminated'],
        computedWidth: 100,
      },
      status: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'singleSelect',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
          },
          {
            value: 'not',
          },
          {
            value: 'isAnyOf',
          },
        ],
        field: 'status',
        hasBeenResized: false,
        headerName: 'Status',
        valueOptions: ['Available', 'Terminated', 'Removed'],
        computedWidth: 100,
      },
      commencement_at: {
        width: 100,
        minWidth: 150,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'date',
        align: 'left',
        filterOperators: [
          {
            value: 'is',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'not',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'after',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'onOrAfter',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'before',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'onOrBefore',
            InputComponentProps: {
              type: 'date',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
        ],
        field: 'commencement_at',
        hasBeenResized: true,
        headerName: 'Commencement Date',
        computedWidth: 150,
      },
      total_unit: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'total_unit',
        hasBeenResized: false,
        headerName: 'Total Unit',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      delivery_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'delivery_total',
        hasBeenResized: false,
        headerName: 'Delivery',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      pick_up_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'pick_up_total',
        hasBeenResized: false,
        headerName: 'Pick Up',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      drop_off_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'drop_off_total',
        hasBeenResized: false,
        headerName: 'Drop Off',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      visitor_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'visitor_total',
        hasBeenResized: false,
        headerName: 'Visitor',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      overnight_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'overnight_total',
        hasBeenResized: false,
        headerName: 'Overnight',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      contractor_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'contractor_total',
        hasBeenResized: false,
        headerName: 'Contractor',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      worker_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'worker_total',
        hasBeenResized: false,
        headerName: 'Worker',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      others_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'others_total',
        hasBeenResized: false,
        headerName: 'Others',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      wrong_visitor_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'wrong_visitor_total',
        hasBeenResized: false,
        headerName: 'Wrong Visitor',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
      check_in_total: {
        width: 100,
        minWidth: 50,
        maxWidth: null,
        hide: false,
        hideable: true,
        sortable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        pinnable: true,
        aggregable: true,
        editable: false,
        type: 'number',
        align: 'right',
        filterOperators: [
          {
            label: '=',
            value: '=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '!=',
            value: '!=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>',
            value: '>',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '>=',
            value: '>=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<',
            value: '<',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            label: '<=',
            value: '<=',
            InputComponentProps: {
              type: 'number',
            },
          },
          {
            value: 'isEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isNotEmpty',
            requiresFilterValue: false,
          },
          {
            value: 'isAnyOf',
            InputComponentProps: {
              type: 'number',
            },
          },
        ],
        headerAlign: 'right',
        field: 'check_in_total',
        hasBeenResized: false,
        headerName: 'Check In Total',
        aggregationWrappedProperties: {
          valueGetter: {},
          renderCell: {},
          renderHeader: {},
          filterOperators: {
            original: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
            wrapped: [
              {
                label: '=',
                value: '=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '!=',
                value: '!=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>',
                value: '>',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '>=',
                value: '>=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<',
                value: '<',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                label: '<=',
                value: '<=',
                InputComponentProps: {
                  type: 'number',
                },
              },
              {
                value: 'isEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isNotEmpty',
                requiresFilterValue: false,
              },
              {
                value: 'isAnyOf',
                InputComponentProps: {
                  type: 'number',
                },
              },
            ],
          },
        },
        computedWidth: 100,
      },
    },
    columnVisibilityModel: {},
  },
  rows: {
    groupingName: 'none',
    tree: {
      'auto-generated-group-footer-root': {
        id: 'auto-generated-group-footer-root',
        isAutoGenerated: false,
        parent: null,
        depth: 0,
        groupingKey: null,
        groupingField: null,
        isPinned: true,
      },
    },
    treeDepth: 1,
    idRowsLookup: {
      'auto-generated-group-footer-root': {},
    },
    idToIdLookup: {
      'auto-generated-group-footer-root': 'auto-generated-group-footer-root',
    },
    ids: [],
    additionalRowGroups: {
      pinnedRows: {
        bottom: [
          {
            id: 'auto-generated-group-footer-root',
            model: {},
          },
        ],
      },
    },
    groupingResponseBeforeRowHydration: {
      groupingName: 'none',
      tree: {},
      treeDepth: 1,
      idRowsLookup: {
        'auto-generated-group-footer-root': {},
      },
      idToIdLookup: {
        'auto-generated-group-footer-root': 'auto-generated-group-footer-root',
      },
      ids: [],
    },
    totalRowCount: 0,
    totalTopLevelRowCount: 0,
  },
  editRows: {},
  focus: {
    cell: null,
    columnHeader: null,
  },
  tabIndex: {
    cell: null,
    columnHeader: null,
  },
  sorting: {
    sortModel: [],
    sortedRows: [],
  },
  preferencePanel: {
    open: false,
  },
  filter: {
    filterModel: {
      items: [],
      linkOperator: 'and',
      quickFilterValues: [],
      quickFilterLogicOperator: 'and',
    },
    visibleRowsLookup: {},
    filteredDescendantCountLookup: {},
    filteredRowsLookup: {},
  },
  density: {
    value: 'compact',
    headerHeight: 39,
    rowHeight: 36,
    headerGroupingMaxDepth: 0,
    factor: 0.7,
  },
  columnReorder: {
    dragCol: '',
  },
  columnResize: {
    resizingColumnField: '',
  },
  pagination: {
    pageSize: 100,
    page: 0,
    pageCount: 0,
    rowCount: 0,
  },
  rowsMeta: {
    currentPageTotalHeight: 0,
    positions: [],
  },
  columnMenu: {
    open: false,
  },
  columnGrouping: {
    lookup: {},
    groupCollapsedModel: {},
  },
  error: null,
}
