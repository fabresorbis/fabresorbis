<template>
    <section class="small-banner relative w-full overflow-hidden negative-z-1">
        <div class="small-banner-img bg-center bg-cover small-banner">
        </div>
        <div class="absolute top50 w-full px-4">
            <div class="container w-full px-4 mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="w-full sm:w-4/6 md:w-1/2 lg:w-1/2 relative">
                        <h1 class="text-5xl font-bold leading-tight">
                            <slot />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>