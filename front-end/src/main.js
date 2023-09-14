import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import './main.css'

import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(process.env.BASE_URL),
    routes:[
        {
            path: '/cart',
            component: ShoppingCartPage,
        }, {
            path: '/Products',
            component: ProductsPage,
        }, {
            path: '/Products/:productId',
            component: ProductDetailPage,
        }
    ]
}))
.mount('#app')
