<template>
  <div
    class="row"
    v-if="columns"
  >
    <div
      v-for="(item,index) in columns"
      :key="index"
      :class="$GridColumn[item.column]"
      class="mb-3"
    >
      <label class="form-label">
        {{item.title}}
      </label>
      <vh-field-input
        v-if="item.type"
        v-model="dataJson[item.field]"
        :fieldType="item.type"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'vh-builder-view',
  props: {
    modelValue: {
      type: Object,
    },
    columns: {
      type: Array,
    },
  },
  data() {
    return {
      dataJson: {}
    }
  },
  setup() {

  },
}
</script>