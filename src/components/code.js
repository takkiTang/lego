export const codes = {
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
  'el-checkbox-group'({ key,
    border,
    options,
    ...props }) {
    return `<el-checkbox-group v-model="${key}" ${prop2Code(props)}>
      ${options.map(({ label, value }) => `<el-checkbox  label="${value}" ${border ? border : ''}>${label}</el-checkbox>`).join('\n')}
    </el-checkbox-group>`
  },
  'el-table'({ key,
    options,
    ...props }) {
    return `<el-table ${prop2Code(props)} :data="${key}">
        ${options.map((option) => `<el-table-colmun  ${prop2Code(option)} ></el-table-colmun>`).join('\n')}
      </el-table>`
  },
  'el-date-picker'({
    key,
    ...props
  }) {
    return `<el-date-picker ${prop2Code(props)} v-model="${key}"></el-date-picker>`
  },
  'el-row'(props, list = []) {
    return `
      <el-row  ${prop2Code(props)}>
        ${list.map(col => `<el-col ${prop2Code(col.models)}>${col.list.map(v => codes[v.type](v.models)).join('\n')}</el-col>`).join('\n')}
      </el-row>`
  }
}

export default codes


function prop2Code(obj) {
  let code = []
  for (let key in obj) {
    obj[key] && code.push(`${['number', 'boolean'].find(v => v === typeof obj[key]) ? ':' :''}${key}="${obj[key]}"`)
  }
  return code.join(' ')
}