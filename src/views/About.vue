<template>
  <free-table border stripe :data="data" :column="column"></free-table>
</template>

<script>
import FreeTable from '@/components/FreeTable'

export default {
  column: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '省份', prop: 'province' },
    { label: '市区', prop: 'city' },
    { label: '地址', prop: 'address' },
  ],
  data: [
    {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
    },
  ],
}
</script>
