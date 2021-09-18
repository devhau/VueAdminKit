<template>
  <vh-select
    :source="source"
    v-model="dataJson"
  ></vh-select>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Object,
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
      this.source = Object.keys(this.$FieldType);
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