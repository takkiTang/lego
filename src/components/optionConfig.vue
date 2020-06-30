<template>
  <el-row>
    <draggable :list="options" ghost-class="ghost" @update="handleChange">
      <el-row v-for="(item,index) in options" :key="item.id" :gutter="4" type="flex">
        <el-col :span="2">
          <i class="el-icon-s-operation drag" size="mini"></i>
        </el-col>
        <el-col :span="9">
          <el-input
            v-if="item.type === 'el-col'"
            v-model.number="item.models[props.col1]"
            size="mini"
            @change="handleChange"
            :placeholder="col1Text"
          ></el-input>
          <el-input
            v-else
            v-model="item[props.col1]"
            size="mini"
            @change="handleChange"
            :placeholder="col1Text"
          ></el-input>
        </el-col>
        <el-col :span="9" v-if="showCol2">
          <el-input
            v-model="item[props.col2]"
            size="mini"
            @change="handleChange"
            :placeholder="col2Text"
          ></el-input>
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
    <el-button type="text" @click="handelAdd">{{addText}}</el-button>
  </el-row>
</template>

<script>
import _ from "loadsh";
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
          col1: "label",
          col2: "value"
        };
      }
    },
    addText: {
      type: String,
      default: "添加选项"
    },
    col1Text: {
      type: String,
      default: "选项"
    },
    col2Text: {
      type: String,
      default: "值"
    },
    showCol2: {
      type: Boolean,
      default: true
    },
    pushValue: {
      type: Object
    },
    isNumber: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handelAdd() {
      const len = this.options.length + 1;
      if (this.pushValue) {
        this.options.push(this.pushValue);
      } else {
        this.options.push({
          [this.props.col1]: `${this.col1Text}${len}`,
          [this.props.col2]: `${this.col2Text}${len}`
        });
      }
      this.handleChange();
    },
    handelRemove(index) {
      this.options.splice(index, 1);
      this.handleChange();
    },
    handleChange() {
      console.log("11221");
      this.$emit("input", _.cloneDeep(this.options));
    }
  },
  watch: {
    value: {
      handler(val) {
        this.options = _.cloneDeep(val);
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