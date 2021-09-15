<template>
  <div class="table-responsive">
    <table class="table table-hover vh-table">
      <thead class="table-light">
        <tr>
          <td
            class="vh-column-150"
            v-for="(column,index) in columns"
            :key="index"
          >
            <Header
              :column="column"
              @filter="doFilter"
              @sort="doSort"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,rowIndex) in source"
          :key="rowIndex"
          :style="doRowStyle(row)"
        >
          <td
            v-for="(column,colIndex) in columns"
            :key="colIndex"
            :style="doCellStyle(row,column)"
          >
            <span
              v-if="column.func"
              v-html="column.func(row,column)"
            >
            </span>
            <span
              v-else
              v-html="doFormat(row[column.field],column.format)"
            >
            </span>

          </td>
        </tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>
<script>
import { isFunction } from './../../utils/class.util';
import Header from './header.vue';
/**
 * Column:{
 *  title:'index',
 *  field:'',
 *  format:'',
 *  func:(row)=>{
 *    return h('button',{
 *      class:'btn btn-primpty',
 *      onClick:(e)=>{
 *      }
 *    },'Delete')
 *  }
 * }
 */

export default {
  name: 'vh-table',
  components: {
    Header,
  },
  props: {
    class: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
    },
    source: {
      type: Array,
    },
    rowStyle: {
      default: ''
    }
  },
  methods: {
    doFilter(e) {
      this.$emit('filter', e);
    },
    doSort(e) {
      this.$emit('sort', e);
    },
    doFormat(value, format) {
      console.log(format);
      return value;
    },
    doCellStyle(row, column) {
      if (isFunction(column?.style)) {
        return column?.style(row, column)
      } else if (column?.style != undefined && column?.style != '') {
        return column?.style;
      }
    },
    doRowStyle(row) {
      if (isFunction(this.rowStyle)) {
        return this.rowStyle(row);
      }
      if (this.rowStyle != undefined && this.rowStyle != '') {
        return this.rowStyle;
      }
    }

  },
  setup() {

  },
}
</script>