<template>
  <el-container direction="vertical" class="list-container">
    <el-main>
      <template v-for="(item,index) in componentsList">
        <el-row :key="index">
          <nav>{{item.title}}</nav>
          <el-row :gutter="20">
            <draggable :list="item.list" v-bind="draggableOptions">
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
      draggableOptions: {
        group: { name: "component", pull: "clone", put: false },
        sort: false
      },
      componentsList: [
        {
          title: "布局组件",
          list: [
            {
              name: "栅格布局",
              type: "el-row",
              models: {
                gutter: 0
              },
              list: [
                {
                  type: "el-col",
                  canNested: true,
                  list: [],
                  models: {
                    span: 12
                  }
                },
                {
                  type: "el-col",
                  canNested: true,
                  list: [],
                  models: {
                    span: 12
                  }
                }
              ]
            }
          ]
        },
        {
          title: "基础组件",
          list: [
            {
              name: "按钮",
              type: "el-button",
              models: {
                label: "按钮",
                type: "primary"
              }
            },
            {
              name: "选择器",
              type: "el-select",
              hasKey: true,
              getKeyValue(models) {
                return models.multiple ? [] : undefined;
              },
              models: {
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
              hasKey: true,
              models: {
                placeholder: "请输入"
              }
            },
            {
              name: "单选框组",
              type: "el-radio-group",
              hasKey: true,
              models: {
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
              hasKey: true,
              keyValue: [],
              models: {
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
              hasKey: true,
              keyValue: [],
              models: {
                placeholder: "请选择日期"
              }
            },
            {
              name: "表格",
              type: "el-table",
              hasKey: true,
              keyValue: [],
              models: {
                options: [
                  {
                    label: "列1",
                    prop: "值1"
                  },
                  {
                    label: "列2",
                    prop: "值2"
                  }
                ]
              }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import url("https://at.alicdn.com/t/font_1813932_qt6tdjdi0zm.css");
.list-container {
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