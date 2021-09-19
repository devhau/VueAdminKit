<template>
  <vh-select
    :source="source"
    v-model="dataJson"
    :isAll="true"
    textAll="Choose"
  ></vh-select>
</template>
<script>
export default {
  props: {
    modelValue: {
      default: '',
    },
  },
  data() {
    return {
      source: null,
      dataJson: null,
    };
  },
  created() {
    if (this.source === null) {
      this.source = Object.keys(this.$GridColumn);
    }
    this.dataJson = this.modelValue;
    if (this.dataJson === null && !this.source) {
      this.dataJson = this.source[0];
    }
  },
  mounted() {
    this.dataJson = this.modelValue;
  },
  watch: {
    dataJson: {
      handler(val) {
        this.$emit('update:modelValue', val);
      },
      deep: true
    }
  },
  setup() {
  },
}
</script>