<template>
  <div class="vh-page vh-page-manager">
    <div class="manager-header">
      <div class="header-title">
        <i :class="config.icon" />
        <label>{{config.title}}</label>
      </div>
      <div class="header-extend">
        <slot name="header-extend" />
      </div>
    </div>
    <div class="manager-body">
      <div class="row m-0 pb-2">
        <div class="col-lg col-md-12">
          <div class="row">
            <div class="col-auto"><button class="btn btn-success"><i class="bi bi-plus-square"></i> Thêm mới</button></div>
            <div class="col-auto"><button class="btn btn-info"><i class="bi bi-arrow-repeat"></i> Làm mới</button></div>
            <slot name="body-button-extend" />
          </div>
        </div>
        <div class="col-lg-auto col-md-12"><input
            class="form-control"
            placeholder="Tìm kiếm thông tin"
          ></div>
        <div class="col-lg-auto col-md-12">
          <button class="btn btn-primary">
            <i class="bi bi-search"></i> Tìm kiếm
          </button>
        </div>
      </div>
      <slot name="body-extend" />
      <vh-table :columns="columns" />
    </div>

    <div class="manager-footer">
    </div>
  </div>
</template>
<script>
export default {
  name: 'vh-page-manager',
  props: {
    class: {
      type: String,
      default: '',
    },
    config: {
      default: null,
    },
    module: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      columns: [{
        title: 'index',
        field: '',
        format: '',
        func: (row) => {
          console.log(row);
        }
      },
      {
        title: 'Action',
        field: '',
        format: '',
        func: (row) => {
          console.log(row);
        }
      },
      {
        title: 'Action',
        field: '',
        format: '',
        func: (row) => {
          console.log(row);
        }
      },
      {
        title: 'Action',
        field: '',
        format: '',
        func: (row) => {
          console.log(row);
        }
      },
      {
        title: 'Action',
        field: '',
        format: '',
        func: (row) => {
          console.log(row);
        }
      }]
    }
  },
  setup() {

  },
};
</script>