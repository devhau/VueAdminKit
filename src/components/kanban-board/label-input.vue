<template>
  <div class="label-input">

    <input
      class="form-control"
      v-if="showAddInput"
      v-click-outside="hideInput"
      v-model="ColumnTitle"
      @keydown.esc="hideInput"
      @keydown.enter="saveColumns"
    />
    <label
      v-else
      @click="showInput"
      v-html="labelText"
    ></label>
  </div>
</template>
<script>
import { nextTick } from 'vue'
export default {
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    }
  },
  computed: {
    labelText() {
      if (this.modelValue != undefined) {
        return this.modelValue;
      }
      return this.label;
    }
  },
  data() {
    return {
      ColumnTitle: '',
      showAddInput: false,
    }
  },
  methods: {
    async showInput() {
      if (this.modelValue != undefined) {
        this.ColumnTitle = this.modelValue;
      }
      this.showAddInput = true;
      await nextTick();
    },
    hideInput() {
      if (this.showAddInput) {
        this.ColumnTitle = "";
        this.showAddInput = false;
      }
    },
    saveColumns() {
      this.$emit('edit', this.ColumnTitle);
      this.ColumnTitle = "";
      this.showAddInput = false;
    },
  },
  setup() {

  },
}
</script>