<template>
  <div>
    <TodoItem 
      v-for="todo in todoItems" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckBox"
      @click-delete="onClickDelete"
    />
    <!-- {{ todoItems }} -->
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    components: {
        TodoItem
    },
    computed: {
        todoItems() {
            // return this.$store.state.todoItems;
            return this.$store.state.todo.todoItems;
        }
    },

    methods: {
        toggleCheckBox(value){
            this.$emit('toggle-checkbox', value);
        },
        onClickDelete(todoId){
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style>

</style>