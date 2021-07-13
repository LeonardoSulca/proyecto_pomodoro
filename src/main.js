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
import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyB3PYG1EVOPAXKk2CCBAdNN1sk15f6y7oc",
  authDomain: "pomodoroapp-1934e.firebaseapp.com",
  projectId: "pomodoroapp-1934e",
  storageBucket: "pomodoroapp-1934e.appspot.com",
  messagingSenderId: "432603494347",
  appId: "1:432603494347:web:29bc6c4d470b843f88684e",
  measurementId: "G-EZK8S9CJSJ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


library.add(faSignOutAlt, faClock , faInfoCircle, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.use(VueSpeech);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
