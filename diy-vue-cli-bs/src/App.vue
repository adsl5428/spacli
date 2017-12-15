<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import todos from './components/todos'


    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        mounted(){
            this.$store.dispatch('gettodos')
        },
        computed:{
            //todocount(){
            //return this.todos.length;
            //}
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
