import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import ProductsServices from '../views/ProductsServices.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: About
    },
    {
        path: '/products-services',
        name: 'Products & Sevices',
        component: ProductsServices
    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: Contact
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
