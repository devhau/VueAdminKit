<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
export default {
  name: 'vh-application',
  computed: {
    layout() {
      return `vh-${this.$route.meta.layout ?? this.$system.layout}-layout`;
    },
  },
}
</script>