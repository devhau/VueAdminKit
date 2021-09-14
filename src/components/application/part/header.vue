<template>
  <nav class="vh-header">
    <span
      v-if="showApp"
      class="vh-app-sidebar"
      @click="touchLayout"
    >
      <i class="bi bi-list"></i>
    </span>
    <vh-menu
      v-if="menuLeft&&menuLeft.length>0"
      :source="menuLeft"
      class="vh-menu-top vh-menu-left"
    />
    <vh-flex-auto />
    <vh-menu
      v-if="menuRight&&menuRight.length>0"
      :source="menuRight"
      class="vh-menu-top vh-menu-right"
    />
    <component :is="profile"></component>
  </nav>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: {
    showApp: {
      type: Boolean,
      default: true
    }
  },
  created() {
    const { top } = this.$menu;
    this.menuLeft = top?.left;
    this.menuRight = top?.right;
  },
  data() {
    return {
      menuLeft: null,
      menuRight: null,
    };
  },
  computed: {
    ...mapState(['layout']),
    profile() {
      if (this.$system?.components?.profile)
        return this.$system.components.profile(this);
      return false;
    }
  },
  methods: {
    ...mapActions(['touchLayout']),
  },
  setup() {

  },
}
</script>