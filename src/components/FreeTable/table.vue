<template>
  <div class="free-table">
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

        <free-column v-else v-bind="$attrs" :key="item.prop" :column="item" />
      </template>
    </el-table>

    <template v-if="pagination">
      <pagination v-if="data.length > 0" v-bind="$attrs" v-on="$listeners" />
    </template>
  </div>
</template>

<script>
import FreeColumn from './columu'
import Pagination from '../Pagination'

export default {
  name: 'FreeTable',
  components: {
    Pagination,
    FreeColumn
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
