import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //데이터가 들어가는곳 data
        todoItems: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
        ]
    },
    mutations: {
        // 데이터를 실질적으로 바꾸는건 뮤테이션 안에서만 할수잇음
    },
    actions: {
        // 메서드가 들어가는곳, 비동기적인 일 처리 methods
    },
    getters: {
        // computed랑 비슷
    }
})