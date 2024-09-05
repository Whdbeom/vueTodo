<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
    {{  todoItems }}
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
import CompletedTodo from './components/CompletedTodo.vue';

export default {
  components: {
    AddTodo,
    TodoList,
    CompletedTodo
  },
  data(){
    return {
      todoText: '',
      // todoItems: [
      //   { id: 1, text: 'buy a car', checked: false},
      //   { id: 2, text: 'play game', checked: false},
      // ]
    }
  },

  methods: {
    // addTodo(text){
    //   this.todoItems.push({
    //     id: Math.random(),
    //     text: text,
    //     checked: false,
    //   })
    //   this.todoText = '';
    // },

    // toggleCheckBox({id, checked}){
    //   console.log(id, checked);
    //   const index = this.todoItems.findIndex(todo => {
    //     return todo.id === id;
    //   })
    //   this.todoItems[index].checked = checked;
    // },
    // onClickDelete(id){
    //   // if(confirm("삭제하시겠습니까?")){
    //   //   const index = this.todoItems.findIndex(todo => {
    //   //     return todo.id === id;
    //   //   });
    //   //   this.todoItems.splice(index, 1);
    //   // }
    //   this.todoItems = this.todoItems.filter(todo => todo.id !== id);
    // }
  }
}
</script>

