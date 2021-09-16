<template>
  <div
    class="vh-column-header"
    v-click-outside="doOutside"
  >
    <span>
      {{column?.title}}
    </span>
    <div class="vh-column-button">
      <button
        v-if="isSort"
        @click="sort=!sort"
        class="btn btn-sm btn-outline-primary"
      >
        <i
          v-if="sort"
          class="bi bi-sort-alpha-down"
        ></i>
        <i
          v-else
          class="bi bi-sort-alpha-up"
        ></i>
      </button>
      <button
        v-if="isFilter"
        @click="action=!action"
        class="btn btn-sm btn-outline-primary"
      >
        <i class="bi bi-funnel"></i>
      </button>
    </div>
    <div
      v-if="action"
      class="vh-column-action"
    >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      default: undefined,
    },
  },
  computed: {
    isSort() {
      return (this.column?.sort === true);
    },
    isFilter() {
      return (this.column?.filter === true);
    },
  },
  data() {
    return {
      sort: false,
      action: false
    }
  },
  methods: {
    doOutside() {
      if (this.action) {
        this.action = false;
      }
    },
  },
  setup() {

  },
}
</script>