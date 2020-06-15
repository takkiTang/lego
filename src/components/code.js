export default {
  'el-button'({
    label,
    ...props
  }) {
    return `<el-button ${prop2Code(props)}>${label}</el-button>`
  },
  'el-input'(props) {
    return `<el-input ${prop2Code(props)}></el-input>`
  },
  'el-select'({
    options,
    ...props
  }) {
    return `<el-select ${prop2Code(props)}>
  ${options.map(option => `<el-option ${prop2Code(option)}></el-option>`).join('\n  ')}
</el-select>`
  }
}

function prop2Code(obj) {
  let code = []
  for (let key in obj) {
    code.push(`${key}="${obj[key]}"`)
  }
  return code.join(' ')
}