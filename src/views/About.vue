<template>
    <div class="about-page">
        <NavigationMenu />

        <section class="about-banner" aria-label="About FO Groups">
            <img
                src="../assets/images/about-cover.png"
                alt="Fabres Orbis office branding"
                class="about-banner-image"
                width="1739"
                height="1172"
            />
        </section>

        <AboutCompany />
        <OurAim />
        <AboutFabres />
        <Inspiration />
        <Footer />
        <router-view />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import AboutCompany from "../components/AboutCompany";
import OurAim from "../components/OurAim";
import AboutFabres from "../components/AboutFabres";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";
import createSeo from "../seo";

export default {
    name: "About",

    components: {
        NavigationMenu,
        AboutCompany,
        OurAim,
        AboutFabres,
        Inspiration,
        Footer
    },

    metaInfo: createSeo("about")
};
</script>

<style scoped>
.about-page {
    width: 100%;
}

.about-banner {
    width: 100%;
    height: 380px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #022c4b;
}

.about-banner-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 55%;
    margin: 0;
    padding: 0;
    border: none;
}

@media (max-width: 900px) {
    .about-banner {
        height: 300px;
    }
}

@media (max-width: 540px) {
    .about-banner {
        height: 220px;
    }
}
</style>
