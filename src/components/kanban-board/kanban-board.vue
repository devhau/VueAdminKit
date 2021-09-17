<template>
  <vh-draggable
    v-model="dataJson"
    tag="div"
    class="vh-kanban-board"
    group="vh-kanban-board-column"
    itemKey="id"
  >
    <template #item="{element}">
      <div class="vh-kanban-board-column">
        <div class="vh-kanban-board-header bg-primary">
          {{element.title}}
        </div>
        <vh-draggable
          v-if="element"
          v-model="element.cards"
          tag="div"
          class="vh-kanban-board-body"
          group="vh-kanban-board-card"
          itemKey="id"
        >
          <template #item="{element:elementSub}">
            <div class="vh-kanban-board-card">
              {{elementSub.name}}
            </div>
          </template>
        </vh-draggable>

      </div>
    </template>
  </vh-draggable>
</template>
<script>
export default {
  name: 'vh-kanban-board',
  data() {
    return {
      dataJson: [
        {
          id: 1,
          title: 'Doing',
          cards: [
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
          ]
        },
        {
          id: 2,
          title: 'Process',
          cards: [
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
          ]
        },
        {
          id: 3,
          title: 'Done',
          cards: [
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
          ]
        }
      ]
    }
  },
  setup() {

  },
}
</script>