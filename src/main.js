import Vue from 'vue'
import App from './App.vue'
// import VueMapbox from 'vue-mapbox'
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
// import Mapbox from 'mapbox-gl'
import router from './router'


// Vue.use(VueMapbox, {
//   mapboxgl: Mapbox,
//   plugins: [
//     { mapboxGeocoder: MapboxGeocoder }
//   ]
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
