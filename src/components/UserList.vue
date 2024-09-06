<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        created() {
            this.getUsers();
        },

        computed: {
            // ...mapState({
            //     users: state => state.user.users
            // })

            ...mapState('user', ['users'])
            // users() {
            //     return this.$store.state.users;
            // },

            // todoItems() {
            //     return this.$store.state.todoItems;
            // }
        },

        methods: {
            ...mapActions('user', ['getUsers'])
            // getUsers() {
            //     this.$store.dispatch('getUsers');
            // }
        }
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //     }
    }
</script>