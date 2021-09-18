<template>
  <div class="builder-item vh-draggable-item">
    <div class="row">
      <div class="col-lg-4">
        <vh-input v-model="item.name" />
      </div>
      <div class="col-lg-4">
        <vh-input v-model="item.name" />
      </div>
      <div class="col-lg-4">
        <GridColumnSelect v-model="item.solumn" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <vh-checkbox
          v-model="item.view"
          value="300"
        />
      </div>
      <div class="col-lg-4">
        <vh-checkbox v-model="item.add" />
      </div>
      <div class="col-lg-4">
        <vh-checkbox v-model="item.edit" />
      </div>
    </div>

  </div>
</template>
<script>
import GridColumnSelect from './grid-column-select.vue';
export default {
  components: { GridColumnSelect, },
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