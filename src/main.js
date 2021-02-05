import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/app.css"
import "./assets/styles/styles.css"
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta';

require("dotenv").config();

import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: { key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY }
})

Vue.use(Vuelidate)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
