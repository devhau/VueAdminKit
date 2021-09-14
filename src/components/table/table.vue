<template>
  <div class="table-responsive">
    <table class="table table-hover vh-table">
      <thead class="table-light">
        <tr>
          <td
            class="vh-column-150"
            v-for="item in 10"
            :key="item"
          >
            <Header />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="d in 10"
          :key="d"
        >
          <td
            v-for="item in 10"
            :key="item"
          >{{item}}</td>
        </tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>
<script>
import Header from './header.vue';
export default {
  name: 'vh-table',
  components: {
    Header,
  },
  props: {
    class: {
      type: String,
      default: '',
    },
  },
  setup() {

  },
}
</script>