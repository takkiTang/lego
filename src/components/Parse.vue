<template>
  <section>
    <prism :code="generateCode"></prism>
    <el-row type="flex" justify="center">
      <el-col :span="3">
        <el-button type="primary" @click="handleCopy">复制代码</el-button>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";

import codes from "./code";
export default {
  props: ["list"],
  components: { Prism },
  computed: {
    generateCode() {
      const tempalte = this.list
        .map(v => codes[v.type](v.props))
        .join("\n");
      const data = this.list
        .map(v => (v.props.key ? `'${v.props.key}':undefined` : "")).filter(v=>v)
        .join("\n");
      const code = `<template>
  <section>
    ${tempalte}
  </section>
</tempalte>
<script>
  data() {
    ${data}
  }
<\/script>
`;
      return code;
    }
  },
  methods: {
    handleCopy() {
      this.$copyText(this.code).then(e => {
        this.$message.success("复制成功");
      });
    }
  }
};
</script>