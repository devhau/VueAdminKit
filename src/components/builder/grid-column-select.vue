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
    console.log(this.$GridColumn);
    if (this.source === null) {
      this.source = Object.keys(this.$GridColumn);
    }
    this.dataJson = this.modelValue;
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