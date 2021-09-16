<template>
  <div class="vh-page vh-page-manager">
    <div class="manager-header">
      <div class="header-title">
        <i :class="module.icon" />
        <label>{{module.title}}</label>
      </div>
      <div class="header-extend">
        <slot name="header-extend" />
      </div>
    </div>
    <div class="manager-body">
      <div class="row m-0 pb-2">
        <div class="col-lg col-md-12">
          <div class="row">
            <div class="col-auto"><button class="btn btn-success"><i class="bi bi-plus-square"></i> Add</button></div>
            <div class="col-auto"><button class="btn btn-info"><i class="bi bi-arrow-repeat"></i> Refresh</button></div>
            <slot name="body-button-extend" />
          </div>
        </div>
        <div class="col-lg-auto col-md-12"><input
            class="form-control"
            placeholder="Search [CTRL + F]"
          ></div>
        <div class="col-lg-auto col-md-12">
          <button class="btn btn-primary">
            <i class="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      <slot name="body-extend" />
      <vh-table
        :columns="getCloumnView"
        :source="source"
        @rowclick="doEdit"
      />
    </div>

    <div class="manager-footer">
    </div>
  </div>
</template>
<script>
import { h } from 'vue';
import pageManagerDefault from './configs';
export default {
  name: 'vh-page-manager',
  computed: {
    getConfig() {
      return Object.assign(pageManagerDefault, this.module.config);
    },
    getCloumnView() {
      const { columns, isIndex, isAction } = this.getConfig;
      let columnViews = [];
      if (isIndex) {
        columnViews = [{
          title: '#',
          size: 10,
          func: ({ rowIndex }) => {
            return rowIndex;
          }
        }];
      }

      columnViews = [...columnViews, ...columns?.filter((item) => item.view)];

      if (isAction) {
        columnViews = [...columnViews, {
          title: '',
          func: () => {
            return [
              h('button', {
                class: 'btn btn-success m-1 btn-sm',
                onclick: this.doEdit
              }, [
                h('i', { class: 'bi bi-trash' }),
                h('label', {}, 'Edit')

              ]),
              h('button', {
                class: 'btn btn-danger m-1 btn-sm',
                onclick: this.doEdit
              }, [
                h('i', { class: 'bi bi-trash' }),
                h('label', {}, 'Remove')
              ])
            ];
          }
        }];
      }

      return columnViews;
    }
  },
  props: {
    class: {
      type: String,
      default: '',
    },
    module: {
      default: null,
    },
  },
  methods: {
    doEdit(e) {
      console.log(e);
      alert('helo');
    },
  },
  data() {
    return {
      source: [{}, { name: 'Nguyễn Văn Hậu' }, {}, {}]
    }
  },
  setup() {

  },
};
</script>