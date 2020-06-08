<template>
  <div id="app">
    <el-container style="height:100vh;">
      <el-aside style="background-color: rgb(238, 241, 246)">
        <components-list />
      </el-aside>
      <el-container class="preview">
        <el-header class="btn-bar">
          <el-button type="text" size="large" icon="el-icon-view">预览</el-button>
          <el-button type="text" size="large" icon="el-icon-document">生成代码</el-button>
        </el-header>
        <el-main>
          <draggable
            :list="list"
            ghost-class="ghost"
            group="component"
            @add="handelAdd"
            class="edit-main"
          >
            <div class="list-item" v-for="item in list" :key="item.id" @click="handelClick(item)">
              <div class="modal" :class="{'active':actived.id === item.id}">
                <Item :item="item"></Item>
              </div>
            </div>
            <div v-if="!list.length" class="empty">从左侧拖拽来添加组件</div>
          </draggable>
        </el-main>
      </el-container>
      <el-aside style="background-color: rgb(238, 241, 246)">
        <el-header>字段属性</el-header>
        <el-form>
          <el-form-item
            v-for="item in model"
            :key="item.label"
            :label="item.label"
            label-width="80px"
          >
            <Item :item="item" v-model="list[activeIndex].props[item.key]"></Item>
          </el-form-item>
        </el-form>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import componentsList from "./views/componentsList";
import Item from "@/components/Item";
import defaultData from "./constant/default";
import draggable from "vuedraggable";
import models from "@/models";

export default {
  name: "app",
  components: { componentsList, draggable, Item },
  data() {
    return {
      list: [],
      actived: {}
    };
  },
  computed: {
    model() {
      return this.actived ? models[this.actived.type] : [];
    },
    activeIndex() {
      return this.list.findIndex(v => v.id == this.actived.id);
    }
  },
  methods: {
    handelAdd(evt) {
      this.$nextTick(() => {
        const newIndex = evt.newIndex;
        const type = this.list[newIndex].type;
        const props = defaultData[type] || {};
        const id = uuid();
        const key = `${type}_${id}`;
        this.$set(this.list, newIndex, {
          type,
          id,
          key,
          props
        });
        this.actived = this.list[newIndex];
      });
    },
    handelClick(data) {
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
  .edit-main {
    border: 1px dashed #ccc;
    min-height: 100%;
    position: relative;
    .list-item {
      position: relative;
      .modal {
        pointer-events: none;
        outline: 2px solid transparent;
        border: 1px solid transparent;
        &.active {
          outline: 2px solid #1989fa;
          border: 1px solid #1989fa;
        }
      }
    }
    .ghost {
      width: 100%;
      background: #f56c6c;
      border: 2px solid #f56c6c;
      outline-width: 0;
      height: 4px;
      font-size: 0;
      content: "";
      overflow: hidden;
      padding: 0;
    }
    .empty {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: rgb(211, 208, 208);
    }
  }
}
</style>