<template>
  <div class="home">
    <CustomTable
      border
      :data="data"
      :columns="columns"
      :columnsProps="columnsProps"
      @selection-change="selectionChange"
    >
      >
      <template v-slot:expand="{ row }">
        <section class="expand-detail">
          {{ row }}
        </section>
      </template>

      <template v-slot:slot>
        <el-tag type="success">标签二</el-tag>
      </template>
    </CustomTable>
  </div>
</template>

<script>
// @ is an alias to /src
import Data from '@/data'
import CustomTable from '@/components/CustomTable'

export default {
  name: 'Home',
  components: {
    CustomTable
  },
  data() {
    return {
      data: Data.data,
      columns: Data.columns,
      columnsProps: {
        width: 'auto'
      }
    }
  },
  methods: {
    selectionChange(rows) {
      console.log('selected', rows)
    }
  }
}
</script>
