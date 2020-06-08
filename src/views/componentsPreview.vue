<template>
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
          <div class="modal" :class="{'active':actived.id === item.id}"></div>
          <Item :item="item"></Item>
        </div>
        <div v-if="!list.length" class="empty">从左侧拖拽来添加组件</div>
      </draggable>
    </el-main>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";
import Item from "@/components/Item";
import { v4 as uuid } from "uuid";
import defaultData from "../constant/default";
import models from "@/models";

export default {
  components: { draggable, Item },
  props: ["value"],
  data() {
    return {
      formModel:{},
      list: [],
      actived: {}
    };
  },
  methods: {
    handelClick(data) {
      this.actived = data;
    },
    handelAdd(evt) {
      this.$nextTick(() => {
        const newIndex = evt.newIndex;
        const type = this.list[newIndex].type;
        const props = defaultData[type];
        const id = uuid();
        const key = `${type}_${id}`
        this.$set(this.list, newIndex, {
          type,
          id,
          key,
          props
        });
        this.actived = this.list[newIndex];
        this.$emit("input", this.list);
      });
    }
  },
  watch: {
    value: {
      handler() {
        console.log("watch");
        // this.list = this.value;
      }
    },
    actived() {
      this.$store.dispatch("update", this.actived);
    }
  }
};
</script>

<style lang="scss">
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
    height: 100%;
    width: 100%;
    position: relative;
    .list-item {
      position: relative;
      .modal {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
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