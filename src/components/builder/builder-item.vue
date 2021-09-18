<template>
  <div class="vh-builder-item vh-draggable-item">
    <button class="btn btn-danger btn-sm">
      <i class="bi bi-dash-circle"></i>
    </button>
    <div class="row">
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-text">Title</span>
          <vh-input v-model="item.title" />
        </div>
      </div>
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-text">Field</span>
          <vh-input v-model="item.field" />
        </div>
      </div>
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-text">Type</span>
          <ColumnTypeSelect v-model="item.type" />
        </div>
      </div>
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-text">Size</span>
          <GridColumnSelect v-model="item.solumn" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <vh-checkbox
          v-model="item.view"
          label="View"
        />
        <vh-checkbox
          v-model="item.add"
          label="Add"
        />
        <vh-checkbox
          v-model="item.edit"
          label="Edit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import GridColumnSelect from './grid-column-select.vue';
import ColumnTypeSelect from './column-type-select.vue';

export default {
  components: { GridColumnSelect, ColumnTypeSelect },
  props: {
    modelValue: {
      type: Object,
    }
  },
  data() {
    return {
      item: {},
      Disabled: false,
    }
  },
  methods: {
  },
  mounted() {
    let item = this.modelValue;
    if (item === undefined) {
      item = {};
    }
    this.item = item;
  },
  watch: {
    item: {
      handler(val) {
        this.$emit('update:modelValue', val);
      },
      deep: true
    },
  },
  setup() {

  },
}
</script>