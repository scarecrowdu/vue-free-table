import CellBtn from '@/components/CellBtn'

export default {
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
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-08',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-06',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-07',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }
  ],
  columns: [
    { label: '更多', prop: 'expand', type: 'expand' },
    { label: '序号', prop: 'no', type: 'index' },
    { label: '选择', prop: 'selection', type: 'selection' },
    { label: '日期', prop: 'date', sortable: true },
    {
      label: '姓名',
      prop: 'name',
      render: (h, { row }) => {
        return <span>{row.name} 11</span>
        // return h("span", params.row.name + "111");
      }
    },
    {
      label: '省份',
      prop: 'province',
      formatter(row, column) {
        console.log(row, column)
        return row[column.prop] + '...'
      }
    },
    { label: '市区', prop: 'city' },
    { label: '地址', prop: 'address' },
    { label: '邮编', prop: 'zip' },
    { label: 'slot操作', prop: 'slot', slotScope: true },
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
  ]
}
