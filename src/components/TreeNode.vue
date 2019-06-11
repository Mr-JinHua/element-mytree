<template>
  <div class="tree">
    <div class="el-tree-node__content">
      <span
        :class="[
          {'expanded': node.expanded},
          'el-tree-node__expand-icon'
        ]"
        class="el-icon-caret-right"
        @click.stop="handleExpandIconClick"
      ></span>
      <span class="el-tree-node__label">{{node.label}}</span>
    </div>
    <el-collapse-transition>
      <div
        v-show="node.expanded"
        class="el-tree-node__children"
        style="padding-left: 18px;"
      >
        <tree-node
          v-for="(item, index) in node.childNodes"
          :key="index"
          :node="item"
        />
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    node: Object
  },
  data() {
    return {
      data: Array,
      isExpande: true
    };
  },
  methods: {
    handleExpandIconClick() {
      this.node.setExpanded();
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.node_child {
  padding-left: 15px;
}
</style>
