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
            <div class="col-auto"><button class="btn btn-primary"><i class="bi bi-plus-square"></i> Add</button></div>
            <div class="col-auto"><button class="btn btn-success"><i class="bi bi-arrow-repeat"></i> Refresh</button></div>
            <slot name="body-button-extend" />
          </div>
        </div>
        <div class="col-lg-auto col-md-12"><input
            class="form-control"
            placeholder="Search [CTRL + F]"
          ></div>
        <div class="col-lg-auto col-md-12">
          <button class="btn btn-secondary">
            <i class="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      <slot name="body-extend" />
      <vh-table
        :columns="getCloumnView()"
        :source="source"
        @rowclick="doEdit"
      />
    </div>

    <div class="manager-footer">
      <vh-builder-view :columns="getColumnUpdate" />
    </div>
  </div>
</template>
<script>
import { h } from 'vue';
export default {
  name: 'vh-page-manager',
  computed: {
    getColumnUpdate() {
      return this.moduleConfig.columns;
    },
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
  watch: {
    module: {
      handler() {
        this.updateConfig();
      },
      deep: true,
    }
  },
  methods: {
    getCloumnView() {
      const { columns } = this.moduleConfig;
      let columnViews = [];
      let columnIndex = undefined;
      let columnAction = undefined;
      if (this.moduleConfig.isIndex === true) {
        columnIndex = {
          title: '#',
          size: 10,
          func: ({ rowIndex }) => {
            return rowIndex;
          }
        };
      }

      if (this.moduleConfig.isAction === true) {
        columnAction = {
          title: '',
          size: 250,
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
        };
      }

      let columnView = columns?.filter((item) => item.view);
      if (columnIndex !== undefined) {
        columnViews = [...columnViews, columnIndex];
      }
      if (columnView !== undefined) {
        columnViews = [...columnViews, ...columnView];
      }
      if (columnAction !== undefined) {
        columnViews = [...columnViews, columnAction];
      }
      return columnViews;
    },
    doEdit() {
      alert('Edit');
    },
    updateConfig() {
      let module = this.module;
      if (module === undefined) {
        module = {};
      }
      this.moduleConfig = { ...this.$configManager, ...module.config };
    }
  },
  mounted() {
    this.updateConfig();
  },
  data() {
    return {
      moduleConfig: {},
      source: [{}, { name: 'Nguyễn Văn Hậu' }, {}, {}]
    }
  },
  setup() {

  },
};
</script>