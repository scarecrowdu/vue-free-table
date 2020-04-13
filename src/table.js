import CellBtn from '@/components/CellBtn'

export default {
  column: [
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
    { label: 'slot', prop: 'action', slotScope: true },
    {
      label: '组件',
      prop: 'cmp',
      component: CellBtn,
      listeners: {
        'row-edit'(row) {
          console.log('row-edit', row)
        }
      }
    }
  ],
  data: [
    {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }
  ]
}
