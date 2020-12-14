import Vue from "vue";
import App from "./App";
import * as VueGoogleMaps from "vue2-google-maps";
import router from './index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBJxJv5T13_3wkr7FvGrTxvePRYxtQ94aY",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: "#app",
  router,
  components: { App },
  render(h) {
  return h('App')
}
});
