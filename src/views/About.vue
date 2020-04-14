<template>
  <div class="free-table-container">
    <free-table
      v-loading="loading"
      style="min-height: 50vh"
      border
      pagination
      :data="data"
      :column="column"
      :total="total"
      :page.sync="params.page"
      :limit.sync="params.limit"
      @pagination="getList"
    ></free-table>
  </div>
</template>

<script>
import FreeTable from '@/components/FreeTable'
import axios from 'axios'

export default {
  components: {
    FreeTable
  },
  data() {
    return {
      column: [
        { prop: 'title', label: '名称', minWidth: 200 },
        {
          prop: 'author',
          label: '作者',
          render: (h, scope) => {
            return <span>{scope.row.author.loginname}</span>
          }
        },
        { prop: 'tab', label: '类目' },
        { prop: 'reply_count', label: '回复数', width: 100 },
        { prop: 'visit_count', label: '预览量', width: 100 },
        {
          prop: 'action',
          label: '操作',
          render: (h, scope) => {
            return <span>{scope.row.author.loginname}</span>
          }
        }
      ],
      loading: false,
      data: [],
      total: 0,
      params: {
        tab: 'share',
        page: 1,
        limit: 10
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      this.loading = true
      const { params } = this
      const url = 'https://cnodejs.org/api/v1/topics'
      const { data } = await axios({ method: 'get', url, params })
      this.data = data.data || []
      this.total = 500
      this.loading = false
    }
  }
}
</script>

<style>
.free-table-container {
  margin: 20px 50px;
}
</style>
