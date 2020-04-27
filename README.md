# vue-free-table
> 基于 element ui table 二次封装，几乎支持原 table 所有的功能

### 文档使用
**[DEMO预览](https://dodov.github.io/vue-free-table/index.html#/)**

**特性**
- 以 element-ui table 为基础进行二次封装，减少代码量
- 继承 element-ui table 组件的参数及事件
- 支持render渲染
- 支持slot插槽
- 支持组件引入
- 支持树形数据
- 支持分页功能

**文档**

| 属性 | 说明 | 类型 | 默认 |
| ------------ |---------------|-------------|--------------|
| `data` | table 的 `data` 属性 | `Array` | `[]` |
| `column` | 用于控制表格列渲染 | `Array` | `[]` |
| `columns-props` | 用于定义所有 `column` 公共的属性 | `Object` | |
| `pagination` | 是否显示分页组件, 具体详细请看`pagination配置`栏目 | `Boolean` | `false` |

只是在 Element Table 封装了一层，原本设置在 Table 上的 props 与事件监听和设置都可以直接绑定到组件上，具体配置可参考[Element Tabel](https://element.eleme.io/#/zh-CN/component/table#table-attributes) 文档

**column 配置**
column 用于控制表格的列行为, 设置示例：

```jsx
const column = [
  { label: '日期', prop: 'date', width: 100 },
  { label: '姓名', prop: 'name' },
  { label: '邮编', prop: 'zip' },
  {
    label: '地址',
    prop: 'address',
    render: (h, scope) => {
      return (<el-tag>{scope.row.address}<el-tag>)
    }
  },
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
]
```

**columns-props配置**
columns-props用于配置 columns 各列默认的 props 属性，
```js
const columnsProps ={
  align: 'left',
  minWidth: 120
}
```

**pagination配置**
pagination用于控制显示分页组件, pagination分页组件是继承el-pagination的二次封装，来源开源项目中的[vue-element-admin
组件库中分页组件](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Pagination/index.vue)

| 参数 | 说明 |类型	| 默认值
| --- | --- | --- | --- |
| `total`	      | 总条目数  | `Number`	 | /  |
| `page`	      | 当前页数 支持 `.sync` 修饰符	| `Number`  | 1  |
| `limit`	      | 每页显示条目个数，支持 `.sync` 修饰符	 | `Number` | 20 |
| `page-sizes`  | 每页显示个数选择器的选项设置  | `Number[]`  | [10, 20, 30, 50] |
| `hidden`	    | 是否隐藏   | `Boolean`	| `false` |
| `auto-scroll`	| 分页之后是否自动滚动到顶部 | `Boolean` | `true`  |

其它 Element 的 el-pagination支持的属性，它也都支持。详情见[文档](https://element.eleme.io/#/zh-CN/component/pagination)

**示例**

```js
<template>
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

### 构建命令

```bash
# 安装依赖包
npm install

# 启动开发环境
npm run serve

# 构建生产环境
npm run build

# 启动unit测试
npm run test:unit

# 启动unit end-to-end 测试
npm run test:e2e

# 检查修复代码
npm run lint
```

