/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Register from "./views/Register";
import Suggested from "./views/Suggested";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "index",
			components: { default: Index, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: "black" },
			},
		},
		{
			path: "/landing",
			name: "landing",
			components: { default: Landing, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: "black" },
			},
		},
		{
			path: "/login",
			name: "login",
			components: { default: Login, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
			},
		},
		{
			path: "/profile",
			name: "profile",
			components: { default: Profile, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: "black" },
			},
		},
		{
			path: "/register",
			name: "register",
			components: { default: Register, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: "black" },
			},
		},
		{
			path: "/suggested",
			name: "Suggested",
			components: { default: Suggested, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: "black" },
			},
		}
	],
	scrollBehavior: (to) => {
		if (to.hash) {
			return { selector: to.hash };
		} else {
			return { x: 0, y: 0 };
		}
	},
});
