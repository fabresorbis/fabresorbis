<template>
    <div class="products_services">
        <NavigationMenu />
        <SmallBanner />
        <ContactForm />
        <Location />
        <Footer />
        <router-view />
    </div>
</template>

<script>

import NavigationMenu from "../components/NavigationMenu";
import SmallBanner from "../components/SmallBanner";
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';
import Footer from "../components/Footer";

export default {
    name: 'Contact',
    components: {
        NavigationMenu,
        SmallBanner,
        ContactForm,
        Location,
        Footer,
    },
    metaInfo: {
        title: 'Contact Us',
        titleTemplate: '%s - Fabres Orbis',
        htmlAttrs: {
            lang: 'en',
            amp: true
        }
    }
}
</script>