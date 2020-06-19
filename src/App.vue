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
        </el-header>
        <el-main>
          <draggable
            :list="list"
            ghost-class="ghost"
            group="component"
            @add="handelAdd"
            class="edit-main"
            handle=".handle"
          >
            <div
              v-for="(item,index) in list"
              :key="item.id"
              @click="handelClick(item)"
              class="list-item"
              :class="{'active':actived.id === item.id}"
            >
              <div class="box">
                <div class="handle">
                  <i class="el-icon-rank"></i>
                </div>
                <div class="modal">
                  <Item :item="item" :value="item.value"></Item>
                </div>
                <div class="action" @click.stop="handelRemove(index)">
                  <i class="el-icon-delete"></i>
                </div>
              </div>
            </div>
            <div v-if="!list.length" class="empty">从左侧拖拽来添加组件</div>
          </draggable>
        </el-main>
      </el-container>
      <el-aside style="background-color: rgb(238, 241, 246)" class="props" width="350px">
        <el-main v-if="Object.keys(actived).length">
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
        <div v-else class="empty">从左侧拖拽来添加组件</div>
      </el-aside>
    </el-container>
    <el-dialog title="生成代码" :visible.sync="codeVisible">
      <Parse :list="list"></Parse>
    </el-dialog>
    <el-dialog title="生成JSON" :visible.sync="josnVisible">
      1111
    </el-dialog>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import componentsList from "./views/componentsList";
import Item from "@/components/Item";
import Parse from "@/components/Parse";
import models from "@/elementModels";
import draggable from "vuedraggable";

export default {
  name: "app",
  components: { componentsList, draggable, Item, Parse },
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
    handelAdd({ newIndex }) {
      const id = uuid();
      const { props = {}, ...item } = this._.cloneDeep(this.list[newIndex]);
      this.$set(this.list, newIndex, {
        props,
        ...item,
        id
      });
      this.actived = this._.cloneDeep(this.list[newIndex]);
    },
    handelClick(data) {
      this.actived = data;
    },
    handelRemove(index) {
      if (this.list.length === index + 1) {
        if (index === 0) {
          this.actived = {};
        } else {
          this.actived = this._.cloneDeep(this.list[index - 1]);
        }
      } else {
        this.actived = this._.cloneDeep(this.list[index + 1]);
      }
      this.$nextTick(() => {
        this.list.splice(index, 1);
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
  .edit-main {
    border: 1px dashed #ccc;
    min-height: 100%;
    position: relative;
    .list-item {
      position: relative;
      .box {
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
        min-height: 30px;
        &:hover {
          border-color: #1989fa;
        }
        .handle {
          display: none;
        }
        .action {
          display: none;
        }
        .modal {
          pointer-events: none;
        }
      }
      &.active {
        .box {
          outline: 2px solid #1989fa;
          border-color: #1989fa;
          font-size: 14px;
          .handle {
            display: inline-block;
            position: absolute;
            left: -2px;
            top: -2px;
            bottom: -18px;
            height: 24px;
            line-height: 24px;
            background: #1989fa;
            color: #fff;
            width: 20px;
            text-align: center;
            z-index: 8;
            cursor: move;
          }
          .action {
            display: inline-block;
            position: absolute;
            right: -2px;
            bottom: -2px;
            width: 20px;
            height: 24px;
            line-height: 24px;
            background: #1989fa;
            color: #fff;
            text-align: center;
            z-index: 8;
            cursor: pointer;
          }
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
      position: relative;
      z-index: 10;
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
.props {
  position: relative;
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
</style>