<template>
    <div class="d-flex mb-2">
        <div>
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox">
        </div>
        <span 
            class="ms-2 flex-grow-1"
            :class="todo.checked ? 'text-muted': ''"
            :style="todo.checked ? 'text-decoration: line-through' : ''"    
        >
            {{ todo.text }}
        </span>
        <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete"
        >Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    // computed: {
    //     numberOfcompletedTodo(){
    //         return this.$store.getters['todo/numberOfcompletedTodo'];
    //     }
    // },
    methods: {
        toggleCheckBox(e){
            // this.$store.commit('TOGGLE_TODO', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })

            this.$store.dispatch('todo/toggleTodo', {
                id: this.todo.id,
                checked: e.target.checked
            })

            // this.$emit('toggle-checkbox',{
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
        },
        clickDelete(){
            // this.$store.commit('DELETE_TODO', this.todo.id);
            this.$store.dispatch('todo/deleteTodo', this.todo.id);
            // this.$emit('click-delete', this.todo.id)
        }
    }
}
</script>

<style>

</style>