<template>
  <vh-page class="bg-white p-1">
    <vh-builder v-model="dataJson" ></vh-builder>
    <pre style="margin: 10px;background: #ccc;padding: 5px;">
    {{dataJson}}
    </pre>
  </vh-page>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'vh-page-builder',
  data() {
    return {
      dataJson: {}
    }
  },
  setup() {
  },
});
</script>