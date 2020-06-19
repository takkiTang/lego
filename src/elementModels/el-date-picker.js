export default [{
    label: '字段标示',
    key: 'key',
    type: 'el-input',
  },
  {
    label: '占位内容',
    key: 'placeholder',
    type: 'el-input',
  },
  {
    label: '显示类型',
    key: 'type',
    type: 'el-select',
    props: {
      options: [{
          label: '日',
          value: 'date'
        }, {
          label: '日期时间',
          value: 'datetime'
        },
        {
          label: '日期时间范围',
          value: 'datetimerange'
        },
        {
          label: '日期范围',
          value: 'daterange'
        },
        {
          label: '月份范围',
          value: 'monthrange'
        },
        {
          label: '年',
          value: 'year'
        },
        {
          label: '月',
          value: 'month'
        },
        {
          label: '周',
          value: 'week'
        },
        {
          label: '多个日期',
          value: 'dates'
        },
      ]
    }
  },
  {
    label: '尺寸',
    key: 'size',
    type: 'el-select',
    props: {
      options: [{
          label: '中等',
          value: 'medium'
        },
        {
          label: '小型',
          value: 'small'
        },
        {
          label: '超小',
          value: 'mini'
        }
      ]
    }
  },
  {
    label: '显示格式',
    key: 'format',
    type: 'el-input',
    props: {
      placeholder: 'yyyy-MM-dd'
    }
  },
  {
    label: '绑定格式',
    key: 'value-format',
    type: 'el-input',
    props: {
      placeholder: 'yyyy-MM-dd'
    }
  },

  {
    label: '禁用状态',
    key: 'disabled',
    type: 'el-switch',
  },
  {
    label: '可清空',
    key: 'clearable',
    type: 'el-switch',
  },
  {
    label: '日期联动',
    key: 'unlink-panels',
    type: 'el-switch',
  },
  {
    label: '分隔符',
    key: 'range-separator',
    type: 'el-input',
    props: {
      placeholder: '-'
    }
  }
]