<template>
  <section>
    <prism :code="code"></prism>
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
  data() {
    return {};
  },
  components: { Prism },
  created() {},
  computed: {
    code() {
      return this.list
        .map(item => {
          return codes[item.type](item.props);
        })
        .join("\n");
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
