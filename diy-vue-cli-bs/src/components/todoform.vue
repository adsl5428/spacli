<template>
    <form v-on:submit.prevent="addtodo(newtodo)">
        <div class="form-group">
            <input type="text" class="form-control" v-model="newtodo.title">
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">add todo </button>
        </div>
    </form>
</template>
<style>

</style>
<script>
    export default {
        computed:{
            newtodo(){
                return this.$store.state.newtodo
            }
        },
        methods:{
            addtodo(newtodo) {
                this.$store.dispatch('addtodo',newtodo)
            }
        }
    }
</script>
