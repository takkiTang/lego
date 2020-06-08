<template>
  <el-main>
    <el-header>字段属性</el-header>
    {{formModel}}
    <el-form>
      <el-form-item v-for="item in model" :key="item.label" :label="item.label" label-width="80px">
        <Item :item="item" v-model="formModel[item.key]"></Item>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import models from "../models";
import Item from "@/components/Item";
import { mapGetters } from "vuex";

export default {
  components: { Item },
  data() {
    return {
      formModel: {}
    };
  },
  computed: {
    model() {
      return this.$store.state.actived
        ? models[this.$store.state.actived.type]
        : [];
    },
    ...mapGetters(["actived"])
  },
  watch: {
    actived(val) {
      this.formModel = val.props;
    }
  }
};
</script>

<style>
</style>