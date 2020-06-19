export default [
    {
        label: '内容',
        key: 'label',
        type: 'el-input',
        props: {
            placeholder: '请输入内容'
        },
    },
    {
        label: '类型',
        key: 'type',
        type: 'el-select',
        props: {
            placeholder: '请选择类型',
            clearable:true,
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
                },
                {
                    label: '文字',
                    value: 'text'
                }
            ]
        }
    },
    {
        label: '朴素按钮',
        key: 'plain',
        type: 'el-switch',
    },
    // {
    //     label: '圆角按钮',
    //     key: 'round',
    //     type: 'el-switch',
    // },
    // {
    //     label: '圆形按钮',
    //     key: 'circle',
    //     type: 'el-switch',
    // },
    {
        label: '禁用',
        key: 'disabled',
        type: 'el-switch',
    },
    {
        label: '图标',
        key: 'icon',
        type: 'el-input',
        props: {
            placeholder: '请输入图标'
        },
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
]