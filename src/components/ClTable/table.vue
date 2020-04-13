<template>
  <div class="cl-table">
    <el-table ref="elTable" :data="data" v-bind="$attrs" v-on="$listeners">
      <template v-for="item in tbColumns">
        <el-table-column
          v-if="item.slotScope"
          v-bind="item"
          :key="item.prop"
          v-on="$listeners"
        >
          <template slot-scope="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>

        <cl-column v-else v-bind="$attrs" :key="item.prop" :column="item">
        </cl-column>
      </template>
    </el-table>

    <pagination v-if="pagination" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import ClColumn from './columu'
import Pagination from '../Pagination'

export default {
  name: 'ClTable',
  components: {
    Pagination,
    ClColumn
  },
  props: {
    data: Array,
    column: Array,
    columnsProps: Object,
    pagination: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tbColumns() {
      const { column, columnsProps: props } = this

      return column.map(col => {
        const it = Object.assign({}, props, col)
        return it
      })
    }
  }
}
</script>
