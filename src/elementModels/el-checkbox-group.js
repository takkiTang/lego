
export default [{
  label: '字段标示',
  key: 'key',
  type: 'el-input',
  models: {
      placeholder: '请输入字段标示'
  }
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
{
  label: '数据选项',
  key: 'options',
  type: 'optionConfig'
},
{
  label: '显示边框',
  key: 'border',
  type: 'el-switch',
},
{
  label: '禁用状态',
  key: 'disabled',
  type: 'el-switch',
}
]