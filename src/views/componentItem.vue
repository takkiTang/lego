<template>
  <section class="widget-item-container">
    <template v-if="canNested">
      <draggable
        v-if="canNested"
        v-model="list"
        @add="handleAdd"
        @remove="handleInput"
        class="widget-list"
        v-bind="draggableOptions"
      >
        <div
          v-for="(item,index) in list"
          :key="item.id"
          :class="[{'active':actived.id === item.id},item.list ? 'widget-group' :'widget-item']"
          @click.stop="handleActive(item)"
        >
          <Item :item="item" :value="item.value">
            <componentItem
              v-model="item.list"
              :canNested="item.canNested"
              :actived="actived"
              @active="handleActive"
              @input="handleInput"
            ></componentItem>
          </Item>
          <div class="widget-item_action" v-show="actived.id === item.id">
            <el-button
              circle
              round
              plain
              type="primary"
              size="mini"
              icon="el-icon-copy-document"
              @click.stop="handleClone(index)"
            ></el-button>
            <el-button
              circle
              round
              plain
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click.stop="handleRemove(index)"
            ></el-button>
          </div>
        </div>
      </draggable>
    </template>
    <template v-else>
      <template v-for="(item,index) in list">
        <Item :item="item" :value="item.value" :key="item.id" class="widget-group-item">
          <componentItem
            v-model="item.list"
            :canNested="item.canNested"
            :actived="actived"
            @active="handleActive"
            @input="handleInput"
          ></componentItem>
        </Item>
      </template>
    </template>
  </section>
</template>

<script>
import _ from "loadsh";
import { v4 as uuid } from "uuid";
import draggable from "vuedraggable";
import Item from "@/components/Item";

export default {
  name: "componentItem",
  components: { draggable, Item },
  props: {
    value: {
      default: () => []
    },
    actived: {
      default: () => {}
    },
    canNested: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btnOptions: {
        circle: true,
        round: true,
        plain: true,
        size: "mini"
      },
      draggableOptions: {
        group: {
          name: "component"
        },
        ghostClass: "ghost"
      },
      list: []
    };
  },
  methods: {
    test(val) {
      console.log(121212, val);
    },
    handleAdd({ newIndex }) {
      const id = uuid();
      this.$set(this.list, newIndex, {
        ...this.list[newIndex],
        id
      });
      this.handleInput();
      this.$nextTick(() => {
        this.handleActive(_.cloneDeep(this.list[newIndex]));
      });
    },
    handleRemove(index) {
      if (this.list.length === index + 1) {
        if (index === 0) {
          this.$emit("active", {});
        } else {
          this.$emit("active", _.cloneDeep(this.list[index - 1]));
        }
      } else {
        this.$emit("active", _.cloneDeep(this.list[index + 1]));
      }
      this.$nextTick(() => {
        this.list.splice(index, 1);
        this.handleInput();
      });
    },
    handleClone(index) {
      let data = _.cloneDeep(this.list[index]);
      data = this.updateDataId(data);
      this.list.splice(index + 1, 0, data);
      this.handleInput();
      this.$nextTick(() => {
        this.handleActive(data);
      });
    },
    updateDataId(data) {
      data.id = uuid();
      if (data.list) {
        data.list.forEach(v => this.updateDataId(v));
      }
      return data;
    },
    handleActive(data) {
      this.$emit("active", _.cloneDeep(data));
    },
    handleInput() {
      console.log(222);
      console.log(_.cloneDeep(this.list));
      this.$emit("input", _.cloneDeep(this.list));
    }
  },
  watch: {
    value: {
      handler() {
        const data = _.cloneDeep(this.value);
        this.list = data;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.widget-item-container {
  width: 100%;
  height: 100%;
  .widget-list {
    height: 100%;
    min-height: 50px;
    .ghost {
      width: 100%;
      background: #1989fa;
      border: 2px solid #1989fa;
      outline-width: 0;
      height: 4px !important;
      font-size: 0;
      content: "";
      overflow: hidden;
      padding: 0 !important;
      position: relative;
      z-index: 10;
    }
    .widget-group {
      padding: 2px;
      border: 1px solid transparent;
      position: relative;
      &:hover {
        background: #ecf8ff;
        cursor: move;
      }
      &.active {
        background: #ecf5ff;
        border-color: #1989fa;
      }
      .widget-group-item {
        padding: 5px;
        .ghost {
          background: #e6a23c;
          border: 2px solid #e6a23c;
        }
        &.el-col {
          & > .widget-item-container {
            border: 1px dashed #ccc;
          }
        }
      }
    }

    .widget-item {
      position: relative;
      padding: 5px 10px 18px;
      border-left: 3px solid transparent;
      &:hover {
        background: #ecf8ff;
        cursor: move;
      }
      &.active {
        border-left: 3px solid #1989fa;
        background: #ecf5ff;
      }
    }
    .widget-item_action {
      position: absolute;
      right: 10px;
      bottom: -12px;
      z-index: 999;
    }
  }
}
</style>