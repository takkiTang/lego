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
            @click="josnVisible = true"
          >生成JSON</el-button>
          <el-button
            type="text"
            size="large"
            icon="el-icon-document"
            @click="codeVisible = true"
          >生成代码</el-button>
          <!-- <el-button
            type="text"
            class="danger"
            size="large"
            icon="el-icon-delete"
          >清空</el-button>-->
        </el-header>
        <el-main class="widget-container">
          <componentItem v-model="list" :actived="actived" @active="handleActive" :canNested="true"></componentItem>
          <div v-if="!list.length" class="empty">从左侧拖拽来添加组件</div>
        </el-main>
      </el-container>
      <el-aside style="background-color: rgb(238, 241, 246)" class="props" width="350px">
        <!-- <el-main v-if="Object.keys(actived).length">
          <el-form>
            <nav>字段属性</nav>
            <el-form-item
              v-for="model in computedModels"
              :key="model.label"
              :label="model.label"
              label-width="100px"
            >
              <Item :item="model" v-model="list[activeIndex].props[model.key]"></Item>
            </el-form-item>
          </el-form>
        </el-main>
        <div v-else class="empty">从左侧拖拽来添加组件</div>-->
      </el-aside>
    </el-container>
    <!-- <el-dialog title="生成代码" :visible.sync="codeVisible">
      <Parse :list="list"></Parse>
    </el-dialog>
    <el-dialog title="生成JSON" :visible.sync="josnVisible"></el-dialog>-->
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import componentsList from "./views/componentsList";
import componentItem from "@/views/componentItem";
import Item from "@/components/Item";
import Parse from "@/components/Parse";
import models from "@/elementModels";
import draggable from "vuedraggable";
import test from "@/components/test";

export default {
  name: "app",
  components: { componentsList, componentItem, draggable, Item, Parse, test },
  data() {
    return {
      list: [],
      actived: {},
      codeVisible: false,
      josnVisible: false
    };
  },
  computed: {
    computedModels() {
      return Object.keys(this.actived).length ? models[this.actived.type] : [];
    },
    activeIndex() {
      return this.list.findIndex(v => v.id == this.actived.id);
    }
  },
  methods: {
    test(v){
      console.log(this._.cloneDeep(v))
    },
    handleActive(data) {
      this.actived = data;
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

.empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: rgb(211, 208, 208);
}
</style>