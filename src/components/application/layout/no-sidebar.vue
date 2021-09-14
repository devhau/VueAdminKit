<template>
  <div
    class="vh-application vh-no-sidebar-layout"
  >
    <div class="vh-main">
      <Header :showApp="false" />
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
export default {
  name: 'vh-no-sidebar-layout',
  components: { Header },
  computed: {
    ...mapState(['layout']),
  },
  props: {

  },
  setup() {

  },
}
</script>