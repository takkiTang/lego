<template>
  <section>
    <el-main v-if="Object.keys(item).length">
      <el-tabs v-model="activeName">
        <el-tab-pane label="字段属性" name="prop">
          <el-form label-width="100px">
            <el-form-item label="配置项" v-if="item.list">
              <optionConfig
                v-model="item.list"
                @input="handleInput"
                :showCol2="false"
                col1Text="栅格值"
                :props="{col1:'span'}"
                :pushValue="pushValue"
              ></optionConfig>
            </el-form-item>
            <el-form-item
              v-show="ifRender(model.ifRender)"
              v-for="model in models"
              :key="model.label"
              :label="model.label"
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
import optionConfig from "@/components/optionConfig";

export default {
  components: {
    Item,
    optionConfig
  },
  data() {
    return {
      item: {},
      activeName: "prop",
      pushValue: {
        type: "el-col",
        canNested: true,
        list: [],
        models: {
          span: 12
        }
      }
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