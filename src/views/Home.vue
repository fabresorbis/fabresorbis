<template>
    <div class="home">
        <NavigationMenu />
        <HeroBanner />
        <Services />
        <ServiceBanners />
        <Footer />
        <router-view />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import ServiceBanners from "../components/ServiceBanner";
import Footer from "../components/Footer";

export default {
    name: 'Home',
    components: {
        NavigationMenu,
        HeroBanner,
        Services,
        ServiceBanners,
        Footer
    },
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Fabres Orbis',
        htmlAttrs: {
            lang: 'en',
            amp: true
        }
    }
}
</script>
