<template>
  <div class="common-table">
    <el-table
      :data="tableData"
      stripe
      header-cell-class-name="header-cell-class-name"
      style="width: 100%"
    >
      <!-- 
                    1、slot-scope="scope" 获取到el-table子组件的内容
                    2、<slot v-if="item.scopeStatus" :name="item.prop" :row="scope.row"></slot>将子组件的内容传给父组件
                 -->
      <template v-for="(item, index) in column">
        <el-table-column
          :key="index"
          :width="item.width ? item.width : 'auto'"
          :min-width="item.minWidth"
          :prop="item.prop"
          :align="item.align ? item.align : 'center'"
          :label="item.label"
        >
          <template slot-scope="scope">
            <slot v-if="item.scopeStatus" :name="item.prop" :row="scope.row">
            </slot>
            <template v-else>
              {{ scope.row[item.prop] }}
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="!!tableData.length"
      class="pagination"
      @current-change="handleCurrentChange"
      :current-page="pageVo.currentPage"
      :page-size="pageVo.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="pageVo.total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array
    },
    column: {
      type: Array
    },
    pageVo: {
      type: Object
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style></style>
