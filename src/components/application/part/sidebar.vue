<template>
  <div class="vh-sidebar">
    <vh-menu
      v-if="menuSidebar&&menuSidebar.length>0"
      :source="menuSidebar"
      class="vh-menu-sidebar"
    />
  </div>
</template>
<script>
export default {
  created() {
    const { sidebar } = this.$menu;
    this.menuSidebar = sidebar;
    console.log(sidebar)
  },
  data() {
    return {
      menuSidebar: null,
    };
  },
  setup() {

  },
}
</script>