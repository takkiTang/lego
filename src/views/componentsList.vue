<template>
  <el-container direction="vertical" class="com-list">
    <el-main>
      <nav>基础组件</nav>
      <el-row :gutter="20">
        <draggable
          :list="list"
          :group="{ name: 'component', pull: 'clone', put: false }"
          :sort="false"
        >
          <el-col v-for="(item,i) in list" :key="i" :span="12">
            <div class="item" @click="handelClick">
              <i v-if="item.icon" :class="item.icon" class="iconfont" style="margin-right:5px"></i>
              <span>{{item.name}}</span>
            </div>
          </el-col>
        </draggable>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      list: [
        {
          name: "按钮",
          icon: "icon-btn",
          type: "el-button"
        },
        {
          name: "选择器",
          icon: "icon-btn",
          type: "el-select"
        },
        {
          name: "输入框",
          icon: "icon-btn",
          type: "el-input"
        }
      ]
    };
  },
  methods: {
    handelClick() {}
  }
};
</script>

<style lang="scss">
@import url("http://at.alicdn.com/t/font_1813932_qt6tdjdi0zm.css");
.com-list {
  .item {
    margin: 10px 0;
    border: 1px solid #f4f6fc;
    background: #fff;
    cursor: move;
    padding: 5px 10px;
    border-radius: 4px;
  }
  .item:hover {
    border-color: #1989fa;
    border-style: dashed;
  }
}
</style>