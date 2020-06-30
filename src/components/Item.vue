<template>
  <render
    v-if="computedItem.render"
    :render="computedItem.render"
    v-bind="computedItem.models"
    :value="value"
    v-on="$listeners"
  >
    <slot></slot>
  </render>
  <component
    v-else
    :is="computedItem.tag"
    v-bind="computedItem.models"
    v-on="$listeners"
    :value="value"
  >
    <slot></slot>
  </component>
</template>

<script>
import _ from "loadsh";
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
      const item = _.cloneDeep(this.item);
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
      item.models = Object.assign({}, def.models, item.models);
      return item;
    }
  }
};
</script>
