export default [{
        label: '字段标示',
        key: 'key',
        type: 'el-input',
        props: {
            placeholder: '请输入字段标示'
        },
    },
    {
        label: '内容',
        key: 'label',
        type: 'el-input',
        props: {
            placeholder: '请输入内容'
        },
    },
    {
        label: '尺寸',
        key: 'size',
        type: 'el-radio-button',
        props: {
            size: 'mini',
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
        label: '类型',
        key: 'type',
        type: 'el-select',
        props: {
            placeholder: '请选择类型',
            options: [{
                    label: '主要',
                    value: 'primary'
                },
                {
                    label: '成功',
                    value: 'success'
                },
                {
                    label: '信息',
                    value: 'info'
                },
                {
                    label: '警告',
                    value: 'warning'
                },
                {
                    label: '危险',
                    value: 'danger'
                }
            ]
        }
    }
]