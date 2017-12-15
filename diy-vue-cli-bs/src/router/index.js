import Vue from 'vue'
import Router from 'vue-router'
import todos from '@/components/todos'
import todo from '@/components/todo'

Vue.use(Router)
const routes = [
    { path: '/', component: todos },
    { path: '/todo/:id', component: todo,name:'todo' }
]

export default new Router({
    routes
})
