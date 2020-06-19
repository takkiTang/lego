// 组件对应

export default {
    'el-button': {
        render: (h, { label, ...props }) => {
            return (
                <el-button  {...{ props }}>{label}</el-button>
            )
        }
    },
    'el-select': {
        render: (h, { options, ...props }, listeners) => {
            return (
                <el-select  {...{ props }} {...{ on: listeners }}>
                    {options.map(option => {
                        return (
                            <el-option {...{ props: option }} ></el-option>
                        );
                    })}
                </el-select>
            );
        }
    },
    'el-input': {
        tag: 'el-input',
    },
    'el-radio-button': {
        render: (h, { options, ...props }, listeners) => {
            return (
                <el-radio-group {...{ props }} {...{ on: listeners }}>
                    {options.map(option => {
                        return (
                            <el-radio-button label={option.value}>{option.label}</el-radio-button>
                        );
                    })}
                </el-radio-group>
            )
        }
    },
    'el-switch': {
        tag: 'el-switch',
    },
    'el-input-number': {
        tag: 'el-input-number'
    },
    'el-radio-group': {
        render: (h, { options, border, ...props }, listeners) => {
            return (
                <el-radio-group {...{ props }} {...{ on: listeners }}>
                    {options.map(option => {
                        return (
                            <el-radio border={border} label={option.value}>{option.label}</el-radio>
                        );
                    })}
                </el-radio-group>
            )
        }
    },
    'el-checkbox-group': {
        value: [],
        render: (h, { options, border, ...props }, listeners) => {
            return (
                <el-checkbox-group {...{ props }} {...{ on: listeners }}>
                    {options.map(option => {
                        return (
                            <el-checkbox border={border} label={option.value}>{option.label}</el-checkbox>
                        );
                    })}
                </el-checkbox-group>
            )
        }
    },
    'el-date-picker': {
        tag: 'el-date-picker'
    },
    'el-table': {
        render: (h, { options, ...props }, listeners) => {
            return (<el-table {...{ props }} {...{ on: listeners }}>
                {options.map(option => {
                    return (
                        <el-table-column {...{ props: option }}></el-table-column>
                    )
                })}
            </el-table>
            )
        }
    },
    'el-row': {
        tag: 'el-row'
    },
    'el-col': {
        tag: 'el-col'
    },
    'optionConfig': {
        tag: 'optionConfig'
    },
}
