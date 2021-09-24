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
          <vh-input v-model="dataJson.name" />
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <span
            class="input-group-text"
            style="width:70px"
          >Title</span>
          <vh-input v-model="dataJson.title" />
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
          <vh-input v-model="dataJson.icon" />
        </div>
      </div>
      <div v-if="dataJson.config?.columns&&dataJson.config?.columns.length>0">
        <div class="mb-3">
          <div class="input-group">
            <span
              class="input-group-text"
              style="width:70px"
            >API</span>
            <vh-input
              v-if="dataJson?.config"
              v-model="dataJson.config.api"
            />
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-6">
            <div class="input-group">
              <span
                class="input-group-text"
                style="width:112px"
              >Show Index
              </span>
              <div class="form-control">
                <vh-checkbox
                  v-model="dataJson.config.isIndex"
                  :falseValue="false"
                />
              </div>
            </div>
          </div>
          <div class="mb-3 col-6">
            <div class="input-group">
              <span
                class="input-group-text"
                style="width:112px"
              >Show Action
              </span>
              <div class="form-control">
                <vh-checkbox
                  v-model="dataJson.config.isAction"
                  :falseValue="false"
                />
              </div>
            </div>
          </div>

          <div class="mb-3 col-12">
            <div class="input-group">
              <span
                class="input-group-text"
                style="width:112px"
              >FieldValue</span>
              <vh-input
                v-if="dataJson?.config"
                v-model="dataJson.config.fieldValue"
              />
            </div>
          </div>
          <div class="mb-3 col-12">
            <div class="input-group">
              <span
                class="input-group-text"
                style="width:112px"
              >FieldDisplay</span>
              <vh-select
                :source="dataJson?.config?.columns"
                :isAll="true"
                textAll="Choose Column"
                fieldValue="field"
                fieldDisplay="title"
                v-model="dataJson.config.fieldDisplay"
              />
            </div>
          </div>
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
        class="vh-height-400 p-2 border"
      >
        <vh-draggable
          v-model="dataJson.config.columns"
          tag="div"
          itemKey="id"
          :forceFallback="true"
        >
          <template #item="{element,index}">
            <BuilderItem
              :modelValue="element"
              @remove="removeColumn(index)"
            />
          </template>
        </vh-draggable>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

import BuilderItem from './builder-item.vue';
export default defineComponent({
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
      this.dataJson.config.columns.push({ id: new Date().getTime() });
      this.$emit('update:modelValue', this.dataJson);
    },
    removeColumn(element) {
      this.dataJson.config.columns.splice(element, 1);
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
    if (dataJson.config.isIndex === undefined) {
      dataJson.config.isIndex = true;
    }
    if (dataJson.config.isAction === undefined) {
      dataJson.config.isAction = true;
    }
    if (dataJson.config.api === undefined) {
      dataJson.config.api = '';
    }
    if (dataJson.config.fieldValue === undefined) {
      dataJson.config.fieldValue = 'id';
    }
    if (dataJson.config.fieldDisplay === undefined) {
      dataJson.config.fieldDisplay = '';
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
});
</script>