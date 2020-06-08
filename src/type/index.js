// 组件对应

export default {
    'el-button': {
        props: {
            label: '按钮'
        },
        render: (h, { label ,...props}) => {
            return (
                <el-button  { ...{props: props} }>{label}</el-button>
            )
        }
    },
    'el-input':{
        tag: 'el-input',
        props: {

        }
    },
    'el-select': {
        props: {
            options: []
        },
        render: (h, { options , value ,... props }, listeners) => {
            return (
                <el-select  {...{props:props}}  value={value} onInput={ val => { listeners.input(val) }}>
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
        render: (h, { options , value, ... props },listeners) => {
            return (
                <el-radio-group { ...{props:props} } value={value} onInput={ val => { listeners.input(val) }}>
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
        props: {

        }
    },
    'el-input-number':{
        tag:'el-input-number'
    }
}
