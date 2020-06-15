// 组件对应

export default {
    'el-button': {
        props: {
            label: '按钮',
            size: "medium"
        },
        render: (h, { label ,...props}) => {
            return (
                <el-button  { ...{props} }>{label}</el-button>
            )
        }
    },
    'el-input':{
        tag: 'el-input',
    },
    'el-select': {
        props: {
            options: [
                {
                    label:'选项1',
                    value:'值1'
                }
            ]
        },
        render: (h, { options ,... props }, listeners) => {
            return (
                <el-select  { ...{props} } { ...{on:listeners} }>
                    {options.map(option => {
                        return (
                            <el-option { ...{props: option} } ></el-option>
                        );
                    })}
                </el-select>
            );
        }
    },
    'el-radio-button':{
        props: {
            options: []
        },
        render: (h, { options , ... props }, listeners) => {
            return (
                <el-radio-group { ...{props} } { ...{on:listeners} }>
                {options.map(option => {
                    return (
                    <el-radio-button label={option.value}>{option.label}</el-radio-button>
                    );
                })}
            </el-radio-group> 
            )
        }
    },
    'el-switch':{
        tag: 'el-switch',
    },
    'el-input-number':{
        tag:'el-input-number'
    },
    'optionConfig':{
        tag:'optionConfig'
    }
}
