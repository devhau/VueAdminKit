<template>
  <div class="vh-sidebar">
    <component :is="sidebarApp"></component>
    <vh-menu
      v-if="menuSidebar&&menuSidebar.length>0"
      :source="menuSidebar"
      class="vh-menu-sidebar"
    />
  </div>
</template>
<script>
export default {
  computed: {
    sidebarApp() {
      if (this.$system?.components?.sidebarApp)
        return this.$system.components.sidebarApp(this);
      return false;
    }
  },
  created() {
    const { sidebar } = this.$menu;
    this.menuSidebar = sidebar;
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