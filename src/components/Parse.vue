<template>
  <el-dialog title="生成代码" center :visible="visible" @open="handleOpen" @close="handleClose">
    <codemirror ref="jsonEditor" v-model="code" :options="options" />
    <el-row type="flex" justify="center">
      <el-col :span="3">
        <el-button type="primary" @click="handleCopy">复制代码</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/vue/vue.js";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import codes from "./code";
import beautify from "vue-beautify";

export default {
  props: ["list", "visible"],
  components: { codemirror },
  data() {
    return {
      options: {
        tabSize: 4,
        mode: "text/x-vue",
        theme: "monokai",
        lineNumbers: true,
        line: true
      },
      code: ""
    };
  },
  methods: {
    handleOpen() {
      this.generateCode()
    },
    handleClose(){
      this.$emit('update:visible',false)
    },
    generateCode() {
      const tempalte = this.list.map(v => codes[v.type](v.models)).join("\n");
      const data = this.list
        .map(v => (v.models.key ? `'${v.models.key}':undefined` : ""))
        .filter(v => v)
        .join("\n");
      const code = `<template><div>${tempalte}</div></template><script>export default {data() {${data}}}<\/script>`;
      this.code = beautify(code);
    },
    handleCopy() {
      this.$copyText(this.code).then(e => {
        this.$message.success("复制成功");
      });
    }
  }
};
</script>