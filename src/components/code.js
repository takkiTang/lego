export default {
  'el-button'({
    key,
    label,
    ...props
  }) {
    return `<el-button ${prop2Code(props)}>${label}</el-button>`
  },
  'el-input'({
    key,
    ...props
  }) {
    return `<el-input v-model="${key}" ${prop2Code(props)}></el-input>`
  },
  'el-select'({
    key,
    options,
    ...props
  }) {
    return `<el-select v-model="${key}" ${prop2Code(props)}>
      ${options.map(option => `<el-option ${prop2Code(option)}></el-option>`).join('\n')}
    </el-select>`
  },
  'el-radio-group'({
    key,
    border,
    options,
    ...props
  }) {
    return `<el-radio-group v-model="${key}" ${prop2Code(props)}>
    ${options.map(({ label, value }) => `<el-radio  label="${value}" ${border ? border : ''}>${label}</el-radio>`).join('\n')}
  </el-radio-group>`
  },
  'el-checkbox-group'({    key,
    border,
    options,
    ...props}){
      return `<el-checkbox-group v-model="${key}" ${prop2Code(props)}>
      ${options.map(({ label, value }) => `<el-checkbox  label="${value}" ${border ? border : ''}>${label}</el-checkbox>`).join('\n')}
    </el-checkbox-group>`
    },
    'el-table'({    key,
      options,
      ...props}){
        return `<el-table ${prop2Code(props)}>
        ${options.map(( option) => `<el-table-colmun  ${prop2Code(option)} ></el-table-colmun>`).join('\n')}
      </el-table>`
      }
}

function prop2Code(obj) {
  let code = []
  for (let key in obj) {
    obj[key] && code.push(`${key}="${obj[key]}"`)
  }
  return code.join(' ')
}