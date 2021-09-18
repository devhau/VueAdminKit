<template>
  <div class="vh-builder row m-0">
    <div
      class="vh-builder-info col-md-4 col-sm-12"
      v-if="dataJson"
    >
      <div class="p-2">
        <h3>Builder Module</h3>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <span
            class="input-group-text"
            style="width:70px"
          >Name</span>
          <vh-input
            id="data_input_name"
            v-model="dataJson.name"
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <span
            class="input-group-text"
            style="width:70px"
          >Title</span>
          <vh-input
            id="data_input_title"
            v-model="dataJson.title"
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <span
            class="input-group-text"
            style="width:70px"
          >icon<i
              class="m-1"
              v-if="dataJson.icon&&dataJson.icon!=''"
              :class="dataJson.icon"
            />
          </span>
          <vh-input
            id="data_input_title"
            v-model="dataJson.icon"
          />
        </div>
      </div>
    </div>
    <div class="vh-builder-column col-md-8 col-sm-12">
      <div class="p-2">
        <button
          class="btn btn-primary btn-sm"
          @click="addColumn"
        >Add Colum</button>
      </div>
      <div
        v-if="dataJson.config?.columns&&dataJson.config?.columns.length>0"
        class="vh-height-500 p-2 border"
      >
        <vh-draggable
          v-model="dataJson.config.columns"
          tag="div"
          itemKey="id"
          :forceFallback="true"
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
      dataJson: {},
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
  methods: {
    addColumn() {
      this.dataJson.config.columns.push({});
    },
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
    if (dataJson.config.permission === undefined) {
      dataJson.config.permission = {};
    }
    if (dataJson.config.columns === undefined) {
      dataJson.config.columns = [];
    }
    this.dataJson = dataJson;
  },
  setup() {
  },
}
</script>