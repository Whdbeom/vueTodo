export default {
    namespaced: true,
    state: {
        //데이터가 들어가는곳 data
        todoItems: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
        ],
        
    },
    mutations: {
        // 데이터(state)를 실질적으로 바꾸는건 뮤테이션 안에서만 할수잇음
        ADD_TODO(state, value){
            state.todoItems.push({
                id: Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, {id, checked}){
            console.log(id, checked);
            const index = state.todoItems.findIndex(todo => {
              return todo.id === id;
            })
            state.todoItems[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            if(confirm("삭제하시겠습니까?")){
              const index = state.todoItems.findIndex(todo => {
                return todo.id === todoId;
              });
              state.todoItems.splice(index, 1);
            }
        }
    },
    actions: {
        // 메서드가 들어가는곳, 비동기적인 일 처리 methods
        
        addTodo({ commit }, value){
            setTimeout(() => {
                commit('ADD_TODO', value);
            }, 500);
        },

        toggleTodo({ commit }, payload){
            setTimeout(()=>{
                commit('TOGGLE_TODO', payload);
            }, 500);
        },

        deleteTodo({ commit }, todoId){
            setTimeout(()=>{
                commit('DELETE_TODO', todoId);
            }, 500);
        },

        // getUserList({ commit }, userList){
        //     commit('')
        // }
    },
    getters: {
        // computed랑 비슷
        numberOfcompletedTodo: state => {
            return state.todoItems.filter(todo => todo.checked).length;
        }
    } 
}