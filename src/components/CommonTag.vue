<template>
  <div class="tags">
    <el-tag
    v-for="(tag,index) in tags"
    :key="tag.name"
    :closable="tag.name !=='home'"
    :effect="$route.name === tag.name ? 'dark' : 'plain'"
    @click="changeMenu(tag)"
    @close="handleClose(tag,index)"
    size="small"
    >
    {{ tag.label }}

    </el-tag>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name })
    },
    handleClose(tag, index) {
      const length = this.tags.length -1
      this.close(tag)
      //如果当前点击删除的tag不是当前页面 直接返回
      if (tag.name !== this.$route.name) {
        return
      }
      //如果当前点击删除的tag是最后一个 路由向左进一位
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }

}
</script>

<style lang="less" scoped>
  .tags{
    padding: 20px;
    .el-tag {
      margin-right: 15px;
      cursor: pointer;

    }
  }

</style>