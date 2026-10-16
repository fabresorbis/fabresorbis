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

    metaInfo: {
        title: "About Us",
        titleTemplate: "%s - FO Groups",
        htmlAttrs: {
            lang: "en"
        }
    }
};
</script>

<style scoped>
.about-page {
    width: 100%;
}

.about-banner {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #022c4b;
}

.about-banner-image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
}
</style>
