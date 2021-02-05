<template>
    <nav class="relative top-0 px-0 py-3 bg-blue-900 box-border h-16 leading-6 font-normal text-base">
        <div class="flex px-4 md:px-8 max-w-screen-xl w-full m-auto justify-between box-border">
            <ul class="p-0 m-0 list-none justify-start justify-self-start flex-none flex">
                <li class="">
                    <a href="/">
                        <img class="" :src="logo" alt="">
                    </a>
                </li>
            </ul>
            <ul class="flex text-white justify-end m-0 p-0 list-none leading-6 flex-none self-center">
                <li
                    v-for="(link, index) in nav_links"
                    :key="index"
                    class="pr-4 py-1 mb-0 hidden md:block desktop"
                >
                    <router-link
                        :to="link.path"
                        class="px-3 pb-1 pt-1 m-0 rounded-full font-bold hover:bg-yellow-400 hover:text-yellow-800"
                    >
                        {{ link.menu }}
                    </router-link>
                </li>
                <li class="pr-1 mb-0 block md:hidden text-white cursor-pointer">
                    <a
                        @click="isOpenMobileMenu = !isOpenMobileMenu"
                        :class="isOpenMobileMenu ? 'text-gray-900' : 'text-gray-500'"
                        class="px-1 py-1 text-xl"
                    >
                        <i class="bx bx-menu text-4xl text-white"></i>
                    </a>
                </li>
            </ul>

        </div>
        <div v-if="isOpenMobileMenu" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden zindex-1999 cursor-pointer">
            <div class="rounded-lg shadow-lg">
                <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                    <div class="pt-5 pb-6 px-5 space-y-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <img :src="logo_dark" alt="" class="h-11 w-auto">
                            </div>
                            <div class="-mr-2">
                                <button @click="isOpenMobileMenu = !isOpenMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <nav class="grid row-gap-8">
                                <router-link
                                    v-for="(link, index) in nav_links"
                                    :key="index"
                                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                    :to="link.path"
                                >
                                    <div class="text-base leading-6 font-medium text-gray-900">{{ link.menu }}</div>
                                </router-link>
                            </nav>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 row-gap-4 col-gap-8">
                            <a href="blogs" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">Blogs</a>
                            <a href="contact-us" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">Contact Us</a>
                            <a href="about-us" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">About Us</a>
                            <a href="our-services" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import logo from '../assets/images/fabres-orbis-logo.png'
import logo_dark from '../assets/images/fabres-orbis-logo-dark.png'

export default {
    data: function() {
        return {
            logo: logo,
            logo_dark: logo_dark,
            isOpenMobileMenu: false,
            nav_links: [
                {
                    title: 'Home - Fabres Orbis',
                    menu: 'Home',
                    path: '/'
                },
                {
                    title: 'Products & Services - Fabres Orbis',
                    menu: 'Products & Services',
                    path: '/products-services'
                },
                {
                    title: 'About Us - Fabres Orbis',
                    menu: 'About Us',
                    path: '/about-us'
                },
                {
                    title: 'Contact Us - Fabres Orbis',
                    menu: 'Contact Us',
                    path: '/contact-us'
                },
            ]
        }
    }
}
</script>
<style scoped>
.desktop .router-link-exact-active {
    background-color: #f6e05e;
    color: #975a16;
}
</style>