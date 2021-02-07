<template>
    <div class="products_services">
        <NavigationMenu />
        <SmallBanner>
            <img
                src="../assets/images/fabresorbis.png"
                class="w-full"
                style="max-width:300px;"
                alt=""
            />
            <h1
                class="pt-8 text-3xl md:text-3xl lg:text-5xl font-bold leading-tight my-auto"
            >
                FO Groups <br />
                The Living Future
            </h1>
        </SmallBanner>
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
import SmallBanner from "../components/SmallBanner";
import AboutCompany from "../components/AboutCompany";
import OurAim from "../components/OurAim";
import AboutFabres from "../components/AboutFabres";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";

export default {
    name: "About",
    components: {
        NavigationMenu,
        SmallBanner,
        AboutCompany,
        OurAim,
        AboutFabres,
        Inspiration,
        Footer
    },
    metaInfo: {
        title: "About Us",
        titleTemplate: "%s - Fabres Orbis",
        htmlAttrs: {
            lang: "en",
            amp: true
        }
    }
};
</script>
