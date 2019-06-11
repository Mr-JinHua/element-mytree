<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="tree-container">
      <Tree :data="data"/>
    </div>
    <div class="tree-container">
      <My-Tree :data="data" />
    </div>
  </div>
</template>

<script>
import MyTree from "@/components/Tree"
import Tree from "@/ele/tree/tree.vue"

export default {
  name: "App",
  data() {
    return {
      data0: [],
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                  children: [
                    {
                      label: "四级 1-1-1-1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    fyn() {}
  },
  components: {
    Tree,
    MyTree
  }
};
</script>
<style scoped>
.tree-container {
  display: inline-block;
  vertical-align: top;
}
</style>
