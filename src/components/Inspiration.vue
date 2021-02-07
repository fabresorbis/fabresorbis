<template>
    <section class="py-20 bg-yellow-300">
        <div class="container mx-auto justify-center">
            <splide :options="options">
                <splide-slide>
                    <div class="mx-auto w-3/5 text-center align-middle">
                        <blockquote class="hidden lg:block"></blockquote>
                        <h4 class="text-2xl lg:text-4xl pb-8 font-bold">
                            Our Inspirations
                        </h4>
                        <img
                            src="../assets/images/abdul-kalam-sir.png"
                            class="mx-auto pb-8"
                            alt="Abdul Kalam"
                        />
                        <p
                            class="text-xl lg:text-3xl text-center leading-snug pb-4 font-medium"
                        >
                            "Dream is not that which you see while in sleeping,
                            it's something that does not let you sleep."
                        </p>
                        <p class="md:text-right leading-none text-lg font-bold">
                            Dr. A.P.J. Abdul Kalam <br /><span
                                class="text-sm font-normal"
                                >Fromer Prsident of India</span
                            >
                        </p>
                    </div>
                </splide-slide>
                <splide-slide>
                    <div class="mx-auto w-3/5 text-center align-middle">
                        <blockquote class="hidden lg:block"></blockquote>
                        <h4 class="text-2xl lg:text-4xl pb-8 font-bold">
                            Our Inspirations
                        </h4>
                        <img
                            src="../assets/images/ratan-tata-sir.png"
                            class="mx-auto pb-8"
                            alt="Ratan Tata"
                        />
                        <p
                            class="text-xl lg:text-3xl text-center leading-snug pb-4 font-medium"
                        >
                            "Deal with crisis such a way that you can hold your
                            head high and sleep well at night."
                        </p>
                        <p class="md:text-right leading-none text-lg font-bold">
                            Ratan N. Tata <br /><span
                                class="text-sm font-normal"
                                >Indian Industrialist</span
                            >
                        </p>
                    </div>
                </splide-slide>
            </splide>
        </div>
    </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
    components: {
        Splide,
        SplideSlide
    },
    data() {
        return {
            options: {
                rewind: true,
                perPage: 1,
                gap: "1rem",
                pagination: false,
                autoplay: true
            }
        };
    }
};
</script>
