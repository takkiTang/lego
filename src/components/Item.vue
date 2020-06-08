<template>
  <render
    v-if="computedItem.render"
    :render="computedItem.render"
    v-on="$listeners"
    v-bind="computedItem.props"
    :value.sync="value"
  ></render>
  <component
    v-else
    :is="computedItem.tag"
    v-bind="computedItem.props"
    v-on="$listeners"
    :value.sync="value"
  ></component>
</template>

<script>
import render from "./render";
import ElementMapping from "@/type";

export default {
  components: { render },
  props: {
    item: {
      required: true,
      type: Object
    },
    value: {}
  },
  computed: {
    computedItem() {
      const item = this.item;
      // 表单控件的类型
      let type = item.type || "el-button";
      // 对应到组件映射表
      let def = ElementMapping[type] || {};
      // 优先渲染 render
      if (def.render) {
        item.render = def.render;
      } else {
        item.tag = def.tag;
      }
      item.props = Object.assign({}, def.props, item.props);
      return item;
    }
  }
};
</script>
