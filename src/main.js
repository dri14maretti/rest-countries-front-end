import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
import vuetify from './plugins/vuetify'

Vue.use(VueMaterial)
Vue.use(vuetify);

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')
