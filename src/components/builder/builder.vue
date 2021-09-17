<template>
  <div class="vh-builder row m-0">
    <div
      class="vh-builder-info col-md-6 col-sm-12"
      v-if="dataJson"
    >
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
        <vh-draggable
          v-model="dataJson.config.columns"
          tag="div"
          itemKey="id"
        >
          <template #item="{element}">
            <BuilderItem :modelValue="element" />
          </template>
        </vh-draggable>
      </div>
    </div>
  </div>
</template>
<script>
import BuilderItem from './builder-item.vue';
export default {
  name: 'vh-builder',
  components: { BuilderItem },
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
      dataJson.config.columns = [{ id: 1, name: 'Hello 1' }, { id: 2, name: 'Hello 2' }, { id: 3, name: 'Hello 3' }, { id: 4, name: 'Hello 4' }, { id: 5, name: 'Hello 5' }];
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