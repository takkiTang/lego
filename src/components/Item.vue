<template>
  <render
    v-if="computedItem.render"
    :render="computedItem.render"
    v-bind="computedItem.props"
    :value="value"
    v-on="$listeners"
  ></render>
  <component
    v-else
    :is="computedItem.tag"
    v-bind="computedItem.props"
    v-on="$listeners"
    :value="value"
  ></component>
</template>

<script>
import optionConfig from "@/components/optionConfig";
import render from "./render";
import ElementMapping from "@/elementMapping";

export default {
  components: { render, optionConfig },
  props: {
    item: {
      required: true,
      type: Object
    },
    value: {}
  },
  computed: {
    computedItem() {
      const item = this._.cloneDeep(this.item);
      // 表单控件的类型
      let type = item.type || "el-button";
      // 对应到组件映射表
      let def = ElementMapping[type] || {};
      // 优先渲染 render
      if (def.render) {
        item.render = def.render;
      } else if (def.tag) {
        item.tag = def.tag;
      }
      item.props = Object.assign({}, def.props, item.props);
      return item;
    }
  }
};
</script>
