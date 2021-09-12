<template>
  <nav class="vh-header">
    <span
      class="vh-app-sidebar"
      @click="touchLayout"
    >
      <i class="bi bi-list"></i>
    </span>
    <vh-menu
      :source="menu"
      class="vh-menu-top vh-menu-left"
    />
    <vh-flex-auto />
    <vh-menu
      :source="menu"
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
    this.menu = top;
  },
  data() {
    return {
      menu: null,
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