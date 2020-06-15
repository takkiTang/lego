export default [{
        label: '字段标示',
        key: 'key',
        type: 'el-input',
        placeholder: '请输入字段标示'
    },
    {
        label: '占位内容',
        key: 'placeholder',
        type: 'el-input',
        placeholder: '请输入占位内容'
    },
    {
        label: '长度限制',
        key: 'maxlength',
        type: 'el-input',
        props:{
            type:'number'
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
        label: '字数统计',
        key: 'show-word-limit',
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
        label: '密码框',
        key: 'show-password',
        type: 'el-switch',
    },
    {
        label: '文本域',
        key: 'type',
        type: 'el-switch',
        activeValue: "textarea"
    }
]