<template>
  <vh-draggable
    v-if="Element"
    v-model="Element.cards"
    tag="div"
    class="vh-kanban-board-body"
    group="vh-kanban-board-card"
    itemKey="id"
  >
    <template #item="{element}">
      <div class="vh-kanban-board-card">
        {{element.name}}
      </div>
    </template>
  </vh-draggable>
</template>
<script>
export default {

  props: {
    Element: null,
  },
  setup() {

  },
}
</script>