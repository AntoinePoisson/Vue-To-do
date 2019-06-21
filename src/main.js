import Vue from 'vue'
import './plugins/vuetify'
import 'vue-use-vuex'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})
