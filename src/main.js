// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

import MaterialKit from "./plugins/material-kit";
import InstantSearch from "vue-instantsearch";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faUserSecret)
// Vue.component("font-awesome-icon", FontAwesomeIcon);

import firebaseApp from "./firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(InstantSearch);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC3rSWaQKBooTC3fnEyB_ZsFjUWJJk6RCU",
    libraries: "places"
  }
});
const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});
let app;
const auth = getAuth();
const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
