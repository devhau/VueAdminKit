<template>
  <div class="vh-builder row m-0">
    <div class="vh-builder-info col-md-6 col-sm-12">
      <div class="mb-3">
        <label
          for="data_input_name"
          class="form-label"
        >Name</label>
        <vh-input
          id="data_input_name"
          v-model="dataJson.name"
        />
      </div>
      <div class="mb-3">
        <label
          for="data_input_title"
          class="form-label"
        >Title</label>
        <vh-input
          id="data_input_title"
          v-model="dataJson.title"
        />
      </div>
      <div class="mb-3">
        <label
          for="data_input_title"
          class="form-label"
        >icon <span v-if="dataJson.icon&&dataJson.icon!=''">(<i :class="dataJson.icon" />)</span></label>
        <vh-input
          id="data_input_icon"
          v-model="dataJson.icon"
        />
      </div>
      <div>
      </div>
    </div>
    <div class="vh-builder-column col-md-6 col-sm-12">
      <div>
      </div>
      <div v-if="dataJson.config?.columns">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vh-builder',
  props: {
    modelValue: {
      type: Object,
    },
  },
  data() {
    return {
      dataJson: {}
    }
  },
  watch: {
    dataJson: {
      handler(val) {
        this.$emit('update:modelValue', val);
      },
      deep: true
    }
  },
  mounted() {
    let dataJson = {};
    if (this.modelValue !== undefined) {
      dataJson = this.modelValue;
    }
    if (dataJson.name === undefined) {
      dataJson.name = "";
    }
    if (dataJson.title === undefined) {
      dataJson.title = "";
    }
    if (dataJson.icon === undefined) {
      dataJson.icon = "";
    }
    if (dataJson.config === undefined) {
      dataJson.config = {};
    }
    if (dataJson.config.columns === undefined) {
      dataJson.config.columns = [];
    }
    if (dataJson.config.permission === undefined) {
      dataJson.config.permission = {};
    }
    this.dataJson = dataJson;
  },
  setup() {
  },
}
</script>