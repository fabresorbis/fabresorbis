<template>
    <div class="products_services">
        <NavigationMenu />
        <SmallBanner>
            FO Groups <br />
            Products & Services
        </SmallBanner>
        <Features />
        <Products />
        <Footer />
        <router-view />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import SmallBanner from "../components/SmallBanner";
import Features from "../components/Features";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default {
    name: "ProductsServices",
    components: {
        NavigationMenu,
        SmallBanner,
        Features,
        Products,
        Footer
    },
    metaInfo: {
        title: "Products & Services",
        titleTemplate: "%s - Fabres Orbis",
        htmlAttrs: {
            lang: "en",
            amp: true
        }
    }
};
</script>
