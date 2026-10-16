<template>
    <section>
        <section
            class="opacity-100 h-sm relative text-black flex flex-col justify-center overflow-hidden text-lg home-banner"
        >
            <div
                class="relative z-10 pt-10 max-w-lg md:max-w-3xl lg:max-w-5xl w-full px-4 mx-auto"
            >
                <div class="flex flex-wrap" style="z-index:1">
                    <div class="hidden lg:block lg:w-1/2 relative">
                        <h1
                            class="opacity-100 transform translate-x-0 translate-y-0 text-4xl lg:text-6xl font-bold leading-none m-0"
                        >
                            Welcome to <br />FO GROUPS
                        </h1>

                        <h4
                            class="opacity-100 transform translate-x-0 translate-y-0 text-xl lg:text-xl font-bold leading-tight m-0 mt-2"
                        >
                            The Living Future
                        </h4>

                        <p
                            class="opacity-100 transform translate-x-0 translate-y-0 mt-2 mb-4 leading-relaxed"
                        >
                            Bringing engineering, technology, and innovation
                            together to build a better future—creating lasting
                            value for our clients, empowering communities, and
                            contributing to the nation’s progress.
                        </p>

                        <router-link
                            to="/about-us"
                            class="inline-block px-4 py-2 bg-yellow-400 text-blue-900 font-bold text-lg"
                        >
                            Know More
                        </router-link>
                    </div>

                    <div class="w-full lg:w-1/2 relative justify-items-center">
                        <img
                            src="../assets/images/home-fabres-orbis-01.svg"
                            alt="FO Groups engineering and technology"
                            class="mx-auto max-w-75 lg:max-w-none"
                        />
                    </div>
                </div>
            </div>

            <div
                class="transform scale-110 bg-cover bg-center bg-no-repeat absolute inset-0 back-image"
            ></div>
        </section>

        <section
            class="lg:hidden p-8 bg-yellow-400 -mt-5 mx-5 mr-5 mb-5 text-center relative z-10"
        >
            <h1 class="text-3xl font-bold mb-2">
                Welcome to FO GROUPS
            </h1>

            <h4 class="text-xl font-semibold mb-3">
                The Living Future
            </h4>

            <p class="text-sm leading-relaxed mb-4">
                Bringing engineering, technology, and innovation together
                to build a better future—creating lasting value for our clients,
                empowering communities, and contributing to the nation’s progress.
            </p>

            <router-link
                to="/about-us"
                class="inline-block px-4 py-2 bg-blue-900 text-white font-bold"
            >
                Know More
            </router-link>
        </section>
    </section>
</template>

<script>
export default {
    data: function() {
        return {};
    }
};
</script>
