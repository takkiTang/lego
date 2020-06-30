<template>
  <div id="app">
    <el-container style="height:100vh;">
      <el-aside style="background-color: rgb(238, 241, 246)" width="300px">
        <components-list />
      </el-aside>
      <el-container class="preview">
        <el-header class="btn-bar">
          <!-- <el-button type="text" size="large" icon="el-icon-view">预览</el-button> -->
          <el-button
            type="text"
            size="large"
            icon="el-icon-document"
            @click="codeVisible = true"
          >生成代码</el-button>
          <el-button
            type="text"
            class="danger"
            size="large"
            icon="el-icon-delete"
            @click="handleEmpty"
          >清空</el-button>
        </el-header>
        <el-main class="widget-container">
          <componentItem v-model="list" :actived="actived" @active="handleActive" :canNested="true"></componentItem>
          <div v-if="!list.length" class="empty">从左侧拖拽来添加组件</div>
        </el-main>
      </el-container>
      <el-aside style="background-color: rgb(238, 241, 246)" class="models" width="350px">
        <componentModel v-model="actived" @input="handleInput" :models="computedModels"></componentModel>
      </el-aside>
    </el-container>
    <Parse :list="list" :visible.sync="codeVisible"></Parse>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import componentsList from "./views/componentsList";
import componentItem from "@/views/componentItem";
import componentModel from "@/views/componentModel";
import models from "@/elementModels";
import Parse from "@/components/Parse";

export default {
  name: "app",
  components: {
    componentsList,
    componentItem,
    componentModel,
    Parse
  },
  data() {
    return {
      list: [],
      actived: {},
      codeVisible: false
    };
  },
  computed: {
    computedModels() {
      return Object.keys(this.actived).length ? models[this.actived.type] : [];
    }
  },
  methods: {
    handleActive(data) {
      this.actived = data;
    },
    handleInput(val) {},
    handleEmpty() {
      this.$confirm("此操作将清空数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.list = [];
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  watch: {}
};
</script>
<style  lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.preview {
  border-right: 2px solid #e4e7ed;
  border-left: 2px solid #e4e7ed;
  .btn-bar {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #e4e7ed;
    text-align: right;
  }
  .widget-container {
    padding: 0;
  }
  .danger {
    color: #f56c6c;
  }
}
.models {
  position: relative;
}

.empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: rgb(211, 208, 208);
}
</style>