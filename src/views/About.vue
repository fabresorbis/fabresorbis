<template>
    <div class="products_services">
        <NavigationMenu />
        <SmallBanner>
            Fabres Orbis <br />
            A Home of Solutions
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
