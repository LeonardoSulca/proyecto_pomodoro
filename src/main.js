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

library.add(faSignOutAlt, faClock , faInfoCircle, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueSpeech);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
