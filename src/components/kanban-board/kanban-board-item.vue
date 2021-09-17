<template>
  <div
    class="vh-kanban-board-column"
    v-if="item"
  >
    <div class="vh-kanban-board-content">
      <div class="vh-kanban-board-header bg-primary">
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
        >{{item.title}}</label>

      </div>
      <vh-draggable
        :modelValue="item.cards"
        tag="div"
        class="vh-kanban-board-body"
        group="vh-kanban-board-card"
        itemKey="id"
        :forceFallback="true"
      >
        <template #item="{element:elementSub}">
          <div class="vh-kanban-board-card">
            {{elementSub.name}}
          </div>
        </template>
        <template #footer>
          <div class="vh-kanban-board-card">
            <vh-input
              ref="inputs"
              v-if="showAddInput"
              v-click-outside="hideInput"
              v-model="ColumnTitleSub"
              @keydown.esc="hideInputSub"
              @keydown.enter="saveColumnsSub"
            />
            <label
              v-else
              @dblclick="showInputSub"
            ><i class="bi bi-plus-lg"></i> Add Sub</label>
          </div>
        </template>
      </vh-draggable>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: null,
  },
  data() {
    return {
      ColumnTitle: '',
      showAddInput: false,
    }
  },
  methods: {
    showInput() {
      this.ColumnTitle = this.item.title;
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
      let item = this.item;
      item.title = this.ColumnTitle;
      this.$emit('update:item', item);
      this.ColumnTitle = "";
      this.showAddInput = false;
    },
  },
  setup() {

  },
}
</script>