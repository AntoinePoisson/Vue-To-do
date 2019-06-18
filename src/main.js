import Vue from 'vue'
import './plugins/vuetify'
import 'vue-use-vuex'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	render: h => h(App)
})
