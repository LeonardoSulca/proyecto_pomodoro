import Vue from "vue";
import App from "./App.vue";
import VueSpeech from "vue-speech";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignOutAlt,
  faClock,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faSignOutAlt, faClock , faInfoCircle, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.use(VueSpeech);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
