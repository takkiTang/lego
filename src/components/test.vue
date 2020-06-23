<template>
  <section>
    <draggable v-model="myArray" :group="{ name: 'row'}" tag="el-row">
      <div class="item" v-for="element in myArray" :key="element.id">
        <div>{{element.name}}</div>
        <draggable v-model="element.child" :group="{ name: 'row'}" style="min-height:10px" tag="el-col">
          <div v-for="item in element.child" :key="item.id">{{item.name}}</div>
        </draggable>
      </div>
    </draggable>
    {{myArray}}
  </section>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      myArray: [
        {
          id: 1,
          name: 1,
          child: [
            {
              id: "1-1",
              name: "1-1"
            },
            {
              id: "1-2",
              name: "1-2"
            }
          ]
        },
        {
          id: 2,
          name: 2,
          child: []
        },
        {
          id: 3,
          name: 3,
          child: []
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>