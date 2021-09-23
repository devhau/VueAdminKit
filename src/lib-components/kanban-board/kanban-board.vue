<template>
  <vh-draggable
    v-model="dataJson"
    tag="div"
    class="vh-kanban-board"
    group="vh-kanban-board-column"
    itemKey="id"
    :forceFallback="true"
  >
    <template #item="{element}">
      <div class="vh-kanban-board-column">
        <div class="vh-kanban-board-content">
          <div class="vh-kanban-board-header bg-primary">
            <LabelInput
              :modelValue="element.title"
              @edit="(value)=>editTitle(element,value)"
            />
          </div>
          <vh-draggable
            v-model="element.cards"
            tag="div"
            class="vh-kanban-board-body"
            group="vh-kanban-board-card"
            itemKey="id"
            :forceFallback="true"
          >
            <template #item="{element:elementSub}">
              <div class="vh-kanban-board-card">
                <LabelInput
                  :modelValue="elementSub.name"
                  @edit="(value)=>elementSub.name=value"
                />
              </div>
            </template>
            <template #footer>
              <div class="vh-kanban-board-card bg-danger text-white">
                <LabelInput
                  label="<i class='bi bi-plus-lg'></i> Add Sub"
                  @edit="(value)=>addSub(element,value)"
                />
              </div>
            </template>
          </vh-draggable>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="vh-kanban-board-column vh-kanban-action-add-column">
        <LabelInput
          label="<i class='bi bi-plus-lg'></i> Add Card"
          @edit="addTitle"
        />
      </div>
    </template>
  </vh-draggable>
</template>
<script>
import LabelInput from './label-input.vue';

export default {
  name: 'vh-kanban-board',
  components: { LabelInput },
  data() {
    return {
      dataJson: []
    }
  },
  methods: {
    addTitle(value) {
      if (value) {
        this.dataJson.push({ title: value, cards: [] });
      }
    },
    editTitle(item, value) {
      if (value) {
        item.title = value;
      }
    },
    addSub(item, value) {
      if (item.cards === undefined) {
        item.cards = [];
      }
      if (value) {
        item.cards.push({ name: value });
      }
    }
  },
  setup() {

  },
}
</script>