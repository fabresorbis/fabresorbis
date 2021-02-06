<template>
    <footer class="pt-20 lg:pt-20 lg:pb-8 lg:px-0 bg-yellow-400">
        <div class="container mx-auto">
            <div
                class="items-center lg:flex lg:flex-row lg:justify-between lg:items-end lg:mb-8"
            >
                <nav
                    class="flex flex-col lg:flex-row mb-12 lg:mb-0 items-center"
                >
                    <a
                        href=""
                        class="mb-4 font-bold text-blue-900 lg:mr-20 lg:mb-0 no-underline hidden lg:block"
                    >
                        <img
                            src="../assets/images/fabres-orbis-logo-dark.png"
                            class="w-24"
                            alt=""
                        />
                    </a>
                    <router-link
                        v-for="(link, index) in nav_links"
                        :key="index"
                        class="mb-4 text-lg font-bold lg:mr-16 text-blue-900 lg:mb-0 no-underline"
                        :to="link.path"
                    >
                        {{ link.menu }}
                    </router-link>
                </nav>
                <div
                    class="flex flex-row justify-center lg:justify-end lg:items-center leading-loose"
                >
                    <a
                        class="text-lg font-bold mr-6 text-blue-900 no-underline"
                        href="https://www.facebook.com/fabresorbispvt.ltd"
                        target="_blank"
                    >
                        <i class="bx bxl-facebook-circle text-3xl"></i>
                    </a>
                    <a
                        class="text-lg font-bold mr-6 text-blue-900 no-underline"
                        href="https://twitter.com/fo_groups"
                        target="_blank"
                    >
                        <i class="bx bxl-twitter text-3xl"></i>
                    </a>
                    <a
                        class="text-lg font-bold mr-6 text-blue-900 no-underline"
                        href="https://www.linkedin.com/company/fo-groups"
                        target="_blank"
                    >
                        <i class="bx bxl-linkedin-square text-3xl"></i>
                    </a>
                    <a
                        class="text-lg font-bold text-blue-900 no-underline"
                        href="https://www.instagram.com/fo_groups"
                        target="_blank"
                    >
                        <i class="bx bxl-instagram text-3xl"></i>
                    </a>
                </div>
            </div>
            <div
                class="lg:flex lg:flex-row-reverse lg:justify-between lg:border-t lg:border-yellow-400 pb-8 lg:pb-0 lg:pt-4"
            >
                <div
                    class="pb-10 mb-10 lg:mb-0 lg:p-0 flex justify-center border-b border-yellow-400 lg:border-0 text-sm"
                >
                    <a class="mr-4" href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
                <div class="flex flex-col items-center text-center">
                    <img
                        src="../assets/images/fabres-orbis-logo-dark.png"
                        class="w-32 lg:hidden"
                        alt=""
                    />
                    <p class="text-sm">
                        All rights reserved. Fabres Orbis &copy; 2020
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            nav_links: [
                {
                    title: "Home - Fabres Orbis",
                    menu: "Home",
                    path: "/"
                },
                {
                    title: "About Us - Fabres Orbis",
                    menu: "About Us",
                    path: "/about-us"
                },
                {
                    title: "Products & Services - Fabres Orbis",
                    menu: "Products & Services",
                    path: "/products-services"
                },
                {
                    title: "Contact Us - Fabres Orbis",
                    menu: "Contact Us",
                    path: "/contact-us"
                }
            ]
        };
    }
};
</script>

<style></style>
