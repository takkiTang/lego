<template>
  <section>
    <el-main v-if="Object.keys(item).length">
      <el-tabs v-model="activeName">
        <el-tab-pane label="字段属性" name="first">
          <el-form>
            <el-form-item
              v-show="ifRender(model.ifRender)"
              v-for="model in models"
              :key="model.label"
              :label="model.label"
              label-width="100px"
            >
              <Item v-model="item.models[model.key]" :item="model" @input="handleInput"></Item>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <div v-else class="empty">从左侧拖拽来添加组件</div>
  </section>
</template>

<script>
import _ from "loadsh";
import Item from "@/components/Item";

export default {
  components: {
    Item
  },
  data() {
    return {
      item: {},
      activeName:'first'
    };
  },
  props: {
    models: {
      default: () => []
    },
    value: {}
  },
  watch: {
    value: {
      handler(val) {
        this.item = val ? _.cloneDeep(val) : {};
      },
      immediate: true
    }
  },
  methods: {
    handleInput() {
      this.$emit("input", _.cloneDeep(this.item));
    },
    // 是否渲染
    ifRender(ifRender) {
      return typeof ifRender === "function"
        ? ifRender(_.cloneDeep(this.item.models))
        : true;
    }
  }
};
</script>

<style>
</style>