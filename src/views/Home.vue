<template>
  <div class="free-table">
    <div class="example-table-box">
      <p>基础表格</p>
      <free-table border stripe :data="data" :column="basicColumn"></free-table>
    </div>

    <div class="example-table-box">
      <p>支持render渲染</p>
      <free-table border :data="data" :column="renderColumn"></free-table>
    </div>

    <div class="example-table-box">
      <p>支持slot插槽</p>
      <free-table border :data="data" :column="slotColumn">
        <template v-slot:zip="{ row }">
          <el-tag class="el-icon-message-solid" type="success">
            {{ row.zip }}
          </el-tag>
        </template>
      </free-table>
    </div>

    <div class="example-table-box">
      <p>支持组件引入</p>
      <free-table border :data="data" :column="componentColumn"></free-table>
    </div>

    <div class="example-table-box">
      <p>支持树形数据</p>
      <free-table
        border
        :data="data"
        :column="componentColumn"
        default-expand-all
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      ></free-table>
    </div>

    <div class="example-table-box">
      <p>支持selection/index/expand</p>
      <free-table border :data="data" :column="typesColumn"></free-table>
    </div>

    <div class="example-table-box">
      <p>带分页功能</p>
      <free-table
        border
        :data="data"
        :column="complexColumn"
        :columnsProps="columnsProps"
        @selection-change="selectionChange"
        pagination
        :auto-scroll="false"
        :total="100"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      >
      </free-table>

      <el-dialog title="收货地址" :visible.sync="dialogVisible">
        <el-form :model="editForm" label-width="100px">
          <el-form-item label="名称">
            <el-input v-model="editForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="区域">
            <el-select
              v-model="editForm.province"
              placeholder="请选择区域"
              style="width: 100%"
            >
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="市区">
            <el-input v-model="editForm.city"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="editForm.address"></el-input>
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
  </div>
</template>

<script>
import FreeTable from '@/components/FreeTable'
import TableData from '@/table'

export default {
  components: {
    FreeTable
  },
  mixins: [TableData],
  data() {
    return {
      columnsProps: {
        width: 'auto'
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      },
      editForm: {},
      dialogVisible: false
    }
  },
  methods: {
    selectionChange(rows) {
      console.log('selected', rows)
    },
    getList() {},
    openDialog({ row }) {
      this.editForm = Object.assign({}, row)
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.example-table-box {
  margin: 25px 50px;

  p {
    text-align: left;
    font-weight: 700;
  }
}
</style>
