<template>
  <el-button size="mini" @click="todo">编辑</el-button>
</template>

<script>
export default {
  props: ['row', 'column'],

  methods: {
    todo() {
      this.$emit('row-edit', this.row)
    }
  }
}
</script>
