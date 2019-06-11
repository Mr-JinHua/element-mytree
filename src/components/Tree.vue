<template>
  <div class="el-tree" role="tree">
    <tree-node
      v-for="(child, index) in root.childNodes"
      :key="index"
      :node="child"
     />
  </div>
</template>

<script>
import TreeStore from "./modal/tree-store.js";
import TreeNode from "./TreeNode.vue";

export default {
  name: "Tree",
  data() {
    return {
      store: null,
      root: null
    };
  },
  props: {
    data: {
      type: Array
    }
  },
  created() {
    this.store = new TreeStore({
      data: this.data
    })
    console.log(this.store)
    this.root = this.store.root;
  },
  computed: {
    isEmpty() {
      let data = this.data;
      return !data || data.length !== 0 || '数据为空';
    }
  },
  components: {
    TreeNode
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
