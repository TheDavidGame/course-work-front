import UserForm from './components/user/user-form'
import ItemList from './components/items/item-list'
import ItemInfo from './components/items/item-info'
import CartInfo from './components/cart/cart-info'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  { path: '/', component: ItemList },
  { path: '/categories/:id', component: ItemList },
  { path: '/user', component: UserForm },
  { path: '/items/:id', component: ItemInfo },
  { path: '/cart', component: CartInfo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
