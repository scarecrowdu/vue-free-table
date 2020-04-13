<template>
  <el-table ref="table" :data="data" v-bind="$attrs" v-on="$listeners">
    <template v-for="tp in typesColumns">
      <el-table-column
        v-if="tp.type === 'expand'"
        v-bind="tp"
        type="expand"
        :key="tp.type"
      >
        <template slot-scope="props">
          <slot name="expand" v-bind="props"></slot>
        </template>
      </el-table-column>
      <el-table-column v-else :key="tp.type" :type="tp.type" v-bind="tp">
      </el-table-column>
    </template>

    <template v-for="col in renderColumns">
      <el-table-column
        :key="col.prop"
        v-bind="getColBind(col)"
        :formatter="col.formatter"
      >
        <template slot-scope="scope">
          <!-- slot 插槽 -->
          <slot v-if="col.slotScope" :name="col.prop" v-bind="scope"></slot>

          <!-- component 组件 -->
          <component
            v-else-if="col.component"
            :is="col.component"
            v-bind="getCptBind(scope, col)"
            v-on="col.listeners"
          >
          </component>

          <!-- render or text -->
          <template v-else slot-scope="scope">
            <RenderSlot
              v-if="col.render"
              :render="col.render"
              :index="scope.$index"
              v-bind="scope"
            ></RenderSlot>

            <template v-else> {{ scope.row[col.prop] }}</template>
          </template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
// 自定义内容的组件
var RenderSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: Object
  },
  render: (h, { props }) => props.render(h, props)
}

export default {
  name: 'CustomTable',
  components: {
    RenderSlot
  },
  props: {
    // Array table 的 data 属性
    data: {
      type: Array,
      default: () => []
    },
    // Array 用于控制表格列渲染
    columns: {
      type: Array,
      default: () => []
    },
    // columnsProps 用于定义 columns 公共的属性
    columnsProps: Object
  },
  computed: {
    typesColumns() {
      const { columns } = this
      return columns.filter(col => col.type)
    },

    renderColumns() {
      const { columns, columnsProps: props } = this
      const renderColumns = columns
        .map(col => {
          const it = Object.assign({}, props, col)
          return it
        })
        .filter(col => !col.type)

      return renderColumns
    }
  },
  methods: {
    getCptBind({ row, column }, col) {
      const props = { row, col, column }
      const handler = col.propsHandler
      return (handler && handler(props)) || props
    },
    getColBind(col) {
      const bind = Object.assign({}, col)
      delete bind.component
      delete bind.listeners
      delete bind.propsHandler
      return bind
    }
  }
}
</script>
