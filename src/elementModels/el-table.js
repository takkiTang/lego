export default [{
    label: '字段标示',
    key: 'key',
    type: 'el-input',
    placeholder: '请输入字段标示'
  },
  {
    label: '表格选项',
    key: 'options',
    type: 'optionConfig',
    models: {
      addText: '添加列',
      col1Text: '列',
      col2Text: '值',
      props: {
        col1: 'label',
        col2: 'prop'
      },
    }
  },
  {
    label: '边框',
    key: 'border',
    type: 'el-switch',
  },
  {
    label: '斑马纹',
    key: 'stripe',
    type: 'el-switch',
  },
  {
    label: '高度',
    key: 'height',
    type: 'el-input',
    placeholder: '请输入高度'
  },
  {
    label: '最大高度',
    key: 'max-height',
    type: 'el-input',
    placeholder: '请输入最大高度'
  },
  {
    label: '尺寸',
    key: 'size',
    type: 'el-select',
    models: {
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
]