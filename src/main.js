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
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faUserSecret)
// Vue.component("font-awesome-icon", FontAwesomeIcon);

import firebaseApp from "./firebase.js";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyDFQW4_kv4f7b5RqrK88pxEOSssfQsx-Lo",
		libraries: "activities",
	},
});
const NavbarStore = {
	showNavbar: false,
};

Vue.mixin({
	data() {
		return {
			NavbarStore,
		};
	},
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
