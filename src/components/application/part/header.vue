<template>
  <nav class="vh-header">
    <ul class="vh-menu">
      <li class="vh-menu-item">
        <a
          class="vh-menu-link"
          data-widget="pushmenu"
          href="#"
          role="button"
          @click.prevent="touchLayout"
        ><i class="bi bi-grid-3x3-gap"></i></a>
      </li>
      <li class="vh-menu-item">
        <a
          href="../index3.html"
          class="vh-menu-link"
        >Home</a>
      </li>
      <li class="vh-menu-item">
        <a
          href="#"
          class="vh-menu-link"
        >Contact{{layout}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
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