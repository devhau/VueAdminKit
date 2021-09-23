<template>
  <div
    class="vh-application"
    :class="layout?'vh-layout-mini':''"
  >
    <div class="vh-main">
      <Header />
      <Sidebar />
      <div class="vh-body">
        <div class="vh-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Header from '../part/header.vue';
import Sidebar from '../part/sidebar.vue';
export default {
  name: 'vh-sidebar-layout',
  components: { Header, Sidebar },
  computed: {
    ...mapState(['layout']),
  },
  props: {

  },
  setup() {
    console.log('vh-sidebar-layout');
  }
};
</script>