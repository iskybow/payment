import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'add' },
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
