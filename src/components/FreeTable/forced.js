// 这些选项不应该被覆盖
export default {
  selection: {
    renderHeader: function(h, { store }) {
      return (
        <el-checkbox
          disabled={store.states.data && store.states.data.length === 0}
          indeterminate={
            store.states.selection.length > 0 && !this.isAllSelected
          }
          nativeOn-click={this.toggleAllSelection}
          value={this.isAllSelected}
        />
      )
    },
    renderCell: function(h, { row, column, store, $index }) {
      return (
        <el-checkbox
          nativeOn-click={event => event.stopPropagation()}
          value={store.isSelected(row)}
          disabled={
            column.selectable
              ? !column.selectable.call(null, row, $index)
              : false
          }
          on-input={() => {
            store.commit('rowSelectedChanged', row)
          }}
        />
      )
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function(h, { column }) {
      return column.label || '#'
    },
    renderCell: function(h, { $index, column }) {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }

      return <div>{i}</div>
    },
    sortable: false
  },
  expand: {
    renderHeader: function(h, { column }) {
      return column.label || ''
    },
    renderCell: function(h, { row, store }) {
      const classes = ['el-table__expand-icon']
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('el-table__expand-icon--expanded')
      }
      const callback = function(e) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      return (
        <div class={classes} on-click={callback}>
          <i class="el-icon el-icon-arrow-right"></i>
        </div>
      )
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
}
