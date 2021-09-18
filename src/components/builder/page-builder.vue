<template>
  <vh-page class="bg-white p-1">
    <vh-builder v-model="dataJson" />
    <div class="border mt-4">
      <vh-page-manager :module="dataJson" />
    </div>
    <pre style="margin: 10px;background: #ccc;padding: 5px;">
    {{dataJson}}
    </pre>
  </vh-page>
</template>
<script>
export default {
  name: 'vh-page-builder',
  data() {
    return {
      dataJson: {}
    }
  },
  setup() {
  },
}
</script>