<template>
  <nav class="vh-header">
    <span
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
    <profile />
  </nav>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import profile from './profile.vue';

export default {
  components: {
    profile
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
  },
  methods: {
    ...mapActions(['touchLayout']),
  },
  setup() {

  },
}
</script>