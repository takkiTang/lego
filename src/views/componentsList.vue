<template>
  <el-container direction="vertical" class="com-list">
    <el-main>
      <template v-for="item in componentsList">
        <nav>{{item.title}}</nav>
        <el-row :gutter="20">
          <draggable
            :list="item.list"
            :group="{ name: 'component', pull: 'clone', put: false }"
            :sort="false"
          >
            <el-col v-for="(subItem,i) in item.list" :key="i" :span="12">
              <div class="item">
                <i
                  v-if="subItem.icon"
                  :class="subItem.icon"
                  class="iconfont"
                  style="margin-right:5px"
                ></i>
                <span>{{subItem.name}}</span>
              </div>
            </el-col>
          </draggable>
        </el-row>
      </template>
    </el-main>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      componentsList: [
        {
          title: "布局",
          list: [
            {
              name: "row",
              type: "el-row"
            },
            {
              name: "col",
              type: "el-col"
            }
          ]
        },
        {
          title: "基础组件",
          list: [
            {
              name: "按钮",
              type: "el-button",
              props: {
                label: "按钮",
                type: "primary"
              }
            },
            {
              name: "选择器",
              type: "el-select",
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "值1"
                  }
                ]
              }
            },
            {
              name: "输入框",
              type: "el-input",
              props: {
                placeholder: "请输入"
              }
            },
            {
              name: "单选框组",
              type: "el-radio-group",
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "值1"
                  },
                  {
                    label: "选项2",
                    value: "值2"
                  }
                ]
              }
            },
            {
              name: "多选框组",
              type: "el-checkbox-group",
              value: [],
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "值1"
                  },
                  {
                    label: "选项2",
                    value: "值2"
                  }
                ]
              }
            },
            {
              name: "日期选择器",
              type: "el-date-picker",
              props: {
                placeholder: "请选择日期"
              }
            },
            {
              name: "表格",
              type: "el-table",
              props: {
                options: [
                  {
                    label: "选项1",
                    prop: "值1"
                  },
                  {
                    label: "选项2",
                    prop: "值2"
                  }
                ]
              }
            }
          ]
        }
      ]
    };
  },
  methods: {
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