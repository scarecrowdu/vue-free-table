# vue-free-table

> 基于element ui table二次封装，几乎支持原table所有的功能。

**特性**
- 以 element-ui table为基础进行二次封装，减少代码量
- 继承element-ui  table组件的参数及事件

**示例**
```js
<<template>
  <free-table border stripe :data="data" :column="column"></free-table>
</template>

<script>
import FreeTable from '@/components/FreeTable'

export default {
  components: {
    FreeTable
  },
  data() {
    return {
      column: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>


```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
