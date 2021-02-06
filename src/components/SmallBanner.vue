<template>
    <section class="small-banner relative w-full overflow-hidden negative-z-1">
        <div class="small-banner-img bg-center bg-cover small-banner"></div>
        <div class="absolute top-10 lg:top-20 w-full px-4">
            <div class="container w-full px-4 mx-auto">
                <div class="flex flex-wrap items-center">
                    <div
                        class="w-full relative flex flex-col lg:flex-row-reverse justify-around"
                    >
                        <img
                            src="../assets/images/fabresorbis.png"
                            class="w-full"
                            style="max-width:300px;"
                            alt=""
                        />
                        <h1
                            class="pt-8 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight my-auto"
                        >
                            <slot />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>
