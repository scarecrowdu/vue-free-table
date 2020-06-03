import EditBtn from '@/components/EditBtn'

export default {
  data() {
    return {
      basicColumn: [
        { label: '日期', prop: 'date', sortable: true },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address', width: 300 },
        { label: '邮编', prop: 'zip' },
        {
          label: 'v-model',
          render: (h, scope) => {
            return h('input', {
              on: {
                input(event) {
                  scope.row.name = event.target.value
                }
              },
              domProps: {
                value: scope.row.name
              },
              style: {
                width: '100%',
                minHeight: '30px',
                color: 'red',
                border: '1px solid #ddd'
              }
            })
          }
        }
      ],

      renderColumn: [
        { label: '日期', prop: 'date' },
        {
          label: '姓名',
          prop: 'name',
          render: (h, scope) => {
            return (
              <el-popover trigger="hover" content="这是一段内容,这是一段内容">
                <el-tag slot="reference">{scope.row.name}</el-tag>
              </el-popover>
            )
          }
        },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' }
      ],

      slotColumn: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip', slotScope: true }
      ],

      componentColumn: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' },
        {
          label: '组件',
          prop: 'cmp',
          component: EditBtn,
          listeners: {
            'row-edit'(row) {
              console.log('row-edit', row)
            }
          }
        }
      ],

      typesColumn: [
        {
          label: '更多',
          prop: 'expand',
          type: 'expand',
          render: (h, scope) => {
            const { row } = scope
            return (
              <div>
                <p>姓名：{row.name}</p>
                <p>日期：{row.date}</p>
                <p>
                  地址：{row.province} {row.address} {row.address}
                </p>
                <p>邮编：{row.zip}</p>
              </div>
            )
          }
        },
        { label: '序号', prop: 'index', type: 'index' },
        { label: '选择', prop: 'selection', type: 'selection' },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' }
      ],

      complexColumn: [
        {
          label: '更多',
          prop: 'expand',
          type: 'expand',
          render: (h, scope) => {
            return <span>--{scope.row.name}--</span>
          }
        },
        { label: '选择', prop: 'selection', type: 'selection' },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        {
          label: '省份',
          prop: 'province',
          formatter(row, col) {
            return '中国 -' + row[col.property]
          }
        },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' },
        {
          label: '操作',
          prop: 'cation',
          align: 'center',
          width: 200,
          render: (h, scope) => {
            return (
              <div>
                <el-button
                  icon="el-icon-edit-outline"
                  type="primary"
                  size="small"
                  onClick={() => {
                    this.openDialog(scope)
                  }}
                >
                  编辑
                </el-button>
                <el-button
                  icon="el-icon-delete"
                  type="danger"
                  size="small"
                  onClick={() => {
                    alert('del')
                  }}
                >
                  删除
                </el-button>
              </div>
            )
          }
        }
      ],

      data: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '赵四',
          province: '东北',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          children: [
            {
              id: 11,
              date: '2000-05-02',
              name: '我是嵌套',
              province: '南极',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            },
            {
              id: 12,
              date: '1999-05-02',
              name: '我是嵌套000',
              province: '美国',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }
          ]
        },
        {
          id: 3,
          date: '2016-05-04',
          name: '张三疯',
          province: '武当山',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 4,
          date: '2016-05-044',
          name: '李连杰',
          province: '新加坡',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 T',
          zip: 200333
        }
      ]
    }
  }
}
