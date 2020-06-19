export default [{
    label: '栅格间隔',
    key: 'gutter',
    type: 'el-input-number'
  },
  {
    label: '布局模式',
    key: 'type',
    type: 'el-select',
    props: {
      options: [{
        label: 'flex',
        value: 'flex'
      }]
    }
  },
  {
    label: '水平排列',
    key: 'justify',
    type: 'el-select',
    props: {
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
    props: {
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
  {
    label: '自定义标签',
    key: 'tag',
    type: 'el-input'
  },
]