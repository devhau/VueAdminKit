<template>
  <vh-draggable
    v-model="dataJson"
    tag="div"
    class="vh-kanban-board"
    group="vh-kanban-board-column"
    itemKey="id"
    :forceFallback="true"
    :move="moveColumn"
    filter="static"
  >
    <template #item="{element}">
      <KanbanBoardItem :item="element" />
    </template>
    <template #footer>
      <div class="vh-kanban-board-column vh-kanban-action-add-column">
        <vh-input
          ref="inputs"
          v-if="showAddInput"
          v-click-outside="hideInput"
          v-model="ColumnTitle"
          @keydown.esc="hideInput"
          @keydown.enter="saveColumns"
        />
        <label
          v-else
          @dblclick="showInput"
        ><i class="bi bi-plus-lg"></i> Add Card</label>
      </div>
    </template>
  </vh-draggable>
</template>
<script>
import KanbanBoardItem from './kanban-board-item.vue'
export default {
  name: 'vh-kanban-board',
  components: { KanbanBoardItem },
  data() {
    return {
      ColumnTitle: '',
      showAddInput: false,
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
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
            { id: 3, name: 'Task 3' },
            { id: 4, name: 'Task 4' },
            { id: 5, name: 'Task 5' },
            { id: 6, name: 'Task 6' },
            { id: 7, name: 'Task 7' },
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
  methods: {
    showInput() {
      this.ColumnTitle = '';
      this.showAddInput = true;
      this.$refs.inputs.focus();
    },
    hideInput() {
      if (this.showAddInput) {

        this.ColumnTitle = "";
        this.showAddInput = false;
      }
    },
    saveColumns() {
      const value = this.ColumnTitle;
      this.dataJson.push({ title: value });
      this.ColumnTitle = "";
      this.showAddInput = false;
    },
    moveColumn(evt) {
      if (parseInt(evt.draggedContext.futureIndex) > (this.dataJson.length - 3)) {
        return true;
      }
      return evt.related.className.indexOf('static') === -1;
    }
  },
  setup() {

  },
}
</script>