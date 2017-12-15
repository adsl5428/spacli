<template>
    <div id="todos">
    <ul class="list-group">
        <li class="list-group-item"
            v-bind:class ="{completed : todo.completed}"
            v-for="(todo,index) in todos">
            <router-link :to="{ name: 'todo', params: { id: todo.id }}">{{todo.title}}</router-link>
            <button class="btn btn-danger btn-xs pull-right"
                    v-on:click="deletetodo(todo,index)"
            >
                delete
            </button>
            <button class="btn btn-success btn-xs pull-right"
                    v-bind:class="[todo.completed ? 'btn-warning' : 'btn-success'] "
                    v-on:click="complete(todo)"
            >
                {{todo.completed ? 'undo' : 'complete'}}
            </button>
        </li>
    </ul>
    <todo-form></todo-form>
    </div>
</template>
<style>
    .completed{
        color: #4cae4c;
        text-decoration: line-through;
    }
</style>
<script>
    import TodoForm from './todoform'

    export default {
        computed: {
            todos () {
                return this.$store.state.todos
            }
        },
        methods:{
            deletetodo(todo,index){
                this.$store.dispatch('deletetodo',todo,index)
            },
            complete(todo){
                this.$store.dispatch('completetodo',todo)
            }
        },
        components: {
            TodoForm
        },
    }
</script>
