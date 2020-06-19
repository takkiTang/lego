<template>
  <el-row>
    <draggable :list="options" ghost-class="ghost" @update="handleChange">
      <el-row v-for="(item,index) in options" :key="item.id" :gutter="4" type="flex">
        <el-col :span="2">
          <i class="el-icon-s-operation drag" size="mini"></i>
        </el-col>
        <el-col :span="9">
          <el-input v-model="item[props.label]" size="mini" @change="handleChange"></el-input>
        </el-col>
        <el-col :span="9">
          <el-input v-model="item[props.value]" size="mini" @change="handleChange"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button
            type="danger"
            icon="el-icon-minus"
            circle
            plain
            size="mini"
            @click="handelRemove(index)"
          ></el-button>
        </el-col>
      </el-row>
    </draggable>
    <el-button type="text" @click="handelAdd">添加选项</el-button>
  </el-row>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      options: []
    };
  },
  props: {
    value: {
      type: Array
    },
    props: {
      type: Object,
      default: () => {
        return {
          label: "label",
          value: "value"
        };
      }
    }
  },
  methods: {
    handelAdd() {
      const len = this.options.length + 1;
      this.options.push({
        [this.props.label]: `选项${len}`,
        [this.props.value]: `值${len}`
      });
      this.handleChange();
    },
    handelRemove(index) {
      this.options.splice(index, 1);
      this.handleChange();
    },
    handleChange() {
      this.$emit("input", this.options);
    }
  },
  watch: {
    value: {
      handler(val) {
        this.options = this._.cloneDeep(val);
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.ghost {
  border: 1px dashed #1989fa;
}
.drag {
  cursor: move;
}
</style>