<template>
  <div>
    Completed Todo: {{ numberOfcompletedTodo }}
  </div>
</template>

<script>
export default {
    computed: {
        // todoItems(){
        //     return this.$store.state.todoItems;
        // },

        numberOfcompletedTodo(){
            // return this.todoItems.filter(todo => todo.checked).length;
            return this.$store.getters['todo/numberOfcompletedTodo'];
        }
    }
}
</script>

<style>

</style>