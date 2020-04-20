<template>
  <div class="free-table-container">
    <free-button @search="search"></free-button>

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

    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <el-form :model="editForm" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="editForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" v-if="editForm.author">
          <el-input v-model="editForm.author.loginname"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import FreeButton from '@/components/FreeButton'
import FreeTable from '@/components/FreeTable'
import axios from 'axios'

export default {
  components: {
    FreeButton,
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
            return (
              <div>
                <el-button
                  type="text"
                  size="small"
                  class="el-icon-edit"
                  onClick={() => this.openDialog(scope)}
                >
                  编辑
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  class="el-icon-delete"
                  onClick={() => this.delHandle(scope)}
                >
                  删除
                </el-button>
              </div>
            )
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
      },
      editForm: {},
      dialogVisible: false
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
    },

    async delHandle({ row }) {
      console.log(row)
      await this.$message.success('这是一条删除成功提示')
    },

    openDialog({ row }) {
      this.editForm = Object.assign({}, row)
      this.dialogVisible = true
    },
    search() {
      alert(12)
    }
  }
}
</script>

<style>
.free-table-container {
  margin: 20px 50px;
}
</style>
