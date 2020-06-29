export default [{
    label: '栅格间隔',
    key: 'gutter',
    type: 'el-input-number',
  },
  {
    label: 'Flex布局',
    key: 'type',
    type: 'el-switch',
    models: {
      'active-value': 'flex',
      'inactive-value': ' '
    }
  },
  {
    label: '水平排列',
    key: 'justify',
    type: 'el-select',
    ifRender(models){
      return  models.type === 'flex'
    },
    models: {
      options: [{
          label: 'start',
          value: 'start'
        },
        {
          label: 'end',
          value: 'end'
        },
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'space-around',
          value: 'space-around'
        },
        {
          label: 'space-between',
          value: 'space-between'
        }
      ]
    }
  },
  {
    label: '垂直排列',
    key: 'align',
    type: 'el-select',
    ifRender(models){
      return  models.type === 'flex'
    },
    models: {
      options: [{
          label: 'top',
          value: 'top'
        },
        {
          label: 'middle',
          value: 'middle'
        },
        {
          label: 'bottom',
          value: 'bottom'
        }
      ]
    }
  },
]