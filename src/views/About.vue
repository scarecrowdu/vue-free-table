<template>
  <div class="table-section">
    <cl-table
      border
      :data="data"
      :column="column"
      :columnsProps="columnsProps"
      @selection-change="selectionChange"
      pagination
      :total="100"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    >
      <template v-slot:action="{ row }">
        <el-tag type="success">标签二{{ row.name }}</el-tag>
      </template>
    </cl-table>
  </div>
</template>

<script>
import ClTable from '@/components/ClTable'
import TableData from '@/table'
export default {
  components: {
    ClTable
  },
  data() {
    return {
      columnsProps: {
        width: 'auto'
      },
      data: TableData.data,
      column: TableData.column,
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      }
    }
  },
  methods: {
    selectionChange(rows) {
      console.log('selected', rows)
    },
    getList() {
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
