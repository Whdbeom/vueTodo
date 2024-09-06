import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: []
    },

    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
    },

    actions: {
        getUsers({ commit }){
            axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
                console.log(resp.data);
                commit('SET_USERS', resp.data);
            })
        },
    }
}