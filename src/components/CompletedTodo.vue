<template>
  <div>
    Completed Todo: {{ numberOfcompletedTodo }}
    {{  todoItems }}
  </div>
</template>

<script>
export default {
    computed: {
        todoItems(){
            return this.$store.state.todoItems;
        },

        numberOfcompletedTodo(){
            return this.todoItems.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style>

</style>