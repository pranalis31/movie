import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faShieldAlt,
  faQuoteLeft,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faChevronRight,
  faBars,
  faSquare,
  faCalendar,
  faCircle,
  faPencilAlt,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelope,
  faGift,
  faFilm,
  faTags,
  faTicketAlt,
  faPhone,
  faMapMarker,
  faUser
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faFacebookF,
  faGooglePlusG,
  faPinterest
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt } from "@fortawesome/free-regular-svg-icons"; //far

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircle,
  faPencilAlt,
  faBars,
  faCalendar,
  faSquare,
  faQuoteLeft,
  faChevronRight,
  faLaptop,
  faCoffee,
  faShieldAlt,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelope,
  faGift,
  faFilm,
  faTags,
  faTicketAlt,
  faPhone,
  faMapMarker,
  faUser
); //fas

library.add(faCommentAlt); //far

library.add(
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faFacebookF,
  faGooglePlusG,
  faPinterest
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueAwesomeSwiper);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.filter("serveimg", function(value) {
  //console.log("Image", value);
  if (!value) return "";
  return "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + value;
});
//var cors = require('cors'); app.use(cors());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
