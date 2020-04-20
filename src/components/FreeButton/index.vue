<template>
  <div class="free-button">
    <slot></slot>
    <el-button type="primary" icon="el-icon-search" @click="search"
      >查询</el-button
    >
    <el-button type="primary" icon="el-icon-edit">编辑</el-button>
    <el-button type="success" icon="el-icon-plus">新增</el-button>
    <el-button type="info" icon="el-icon-download">导出</el-button>
    <el-button type="warning" icon="el-icon-upload2">导入</el-button>
    <el-button type="danger" icon="el-icon-delete">删除</el-button>
  </div>
</template>

<script>
const EVENT_NAMES = ['search', 'add', 'edit', 'delete', 'import', 'exprot']

const methods = {}
// const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

EVENT_NAMES.forEach(name => {
  methods[name] = function() {
    this.$emit(name)
  }
})

export default {
  name: 'FreeButton',
  props: {
    btnsCol: {
      type: Array,
      default: () => {
        return [
          { type: 'search', label: '查询', event: 'onSearch' },
          { type: 'delete', label: '删除', event: 'onDelete' }
        ]
      }
    },
    btnsProps: Object
  },
  methods: {
    bindEvents(name) {
      this.$emit(name)
    }
  }
}
</script>
<style>
.free-button {
  margin: 10px 0;
}
</style>
