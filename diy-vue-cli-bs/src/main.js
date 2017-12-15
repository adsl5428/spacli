// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
    state: {            //全局变量
        todos: [],
        newtodo:{id:null,title:'',completed:false}
    },
    mutations: {        //修改全局变量的
        get_todos_list (state,todos) {
            state.todos = todos
        },
        complete_todo(state,todo){
            todo.completed = !todo.completed
        },
        delete_todo(state,index){
            state.todos.splice(index,1)
        },
        add_todo(state,todo){
            state.todos.push(todo)
        }
    },
    actions:{
        gettodos(store){
            Vue.axios.get('http://api.cc/api/todos').then(response=>{
                store.commit('get_todos_list',response.data)
            })
        },
        completetodo(store,todo){
            Vue.axios.patch('http://api.cc/api/todo/'+todo.id+'/completed').then(response=>{
                store.commit('complete_todo',todo)
            })
        },
        deletetodo(store,todo,index){
            Vue.axios.delete('http://api.cc/api/todo/'+todo.id+'/delete').then(response=>{
                store.commit('delete_todo',index)
            })
        },
        addtodo(store,todo) {
            Vue.axios.post('http://api.cc/api/todo/create', {title: todo.title}).then(response => {
                store.commit('add_todo', response.data)
            })
            store.state.newtodo = {id: null, title: '', completed: false}
        }
    }


})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
