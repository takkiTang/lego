
export default [{
        label: '字段标示',
        key: 'key',
        type: 'el-input',
        props: {
            placeholder: '请输入字段标示'
        }
    },
    {
        label: '占位内容',
        key: 'placeholder',
        type: 'el-input',
        props: {
            placeholder: '请输入占位内容'
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
        label: '数据选项',
        key: 'options',
        type: 'optionConfig'
    },
    {
        label: '多选',
        key: 'multiple',
        type: 'el-switch',
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
        label: '可搜索',
        key: 'filterable',
        type: 'el-switch',
    },

]