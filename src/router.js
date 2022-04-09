/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";

import IntermediateProfile from "./views/IntermediateProfile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Register from "./views/Register";
import Suggested from "./views/Suggested";
import ChangePassword from "./views/ChangePassword.vue";
import WishList from "./views/WishList";
import PageNotFound from "./views/components/PageNotFound.vue";
import UpdateInfo from "./views/UpdateInfo.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Import for Search page (Restaurant)
import Search from "./views/Search.vue";

//Import for Search page (Activities)
import SearchAct from "./views/SearchAct.vue";

//Restaurants Import
import RS0030 from "./views/restaurants/RS0030.vue";
import RS0029 from "./views/restaurants/RS0029.vue";
import RS0028 from "./views/restaurants/RS0028.vue";
import RS0027 from "./views/restaurants/RS0027.vue";
import RS0026 from "./views/restaurants/RS0026.vue";
import RS0025 from "./views/restaurants/RS0025.vue";
import RS0024 from "./views/restaurants/RS0024.vue";
import RS0023 from "./views/restaurants/RS0023.vue";
import RS0022 from "./views/restaurants/RS0022.vue";
import RS0021 from "./views/restaurants/RS0021.vue";
import RS0020 from "./views/restaurants/RS0020.vue";
import RS0019 from "./views/restaurants/RS0019.vue";
import RS0018 from "./views/restaurants/RS0018.vue";
import RS0017 from "./views/restaurants/RS0017.vue";
import RS0016 from "./views/restaurants/RS0016.vue";
import RS0015 from "./views/restaurants/RS0015.vue";
import RS0014 from "./views/restaurants/RS0014.vue";
import RS0013 from "./views/restaurants/RS0013.vue";
import RS0012 from "./views/restaurants/RS0012.vue";
import RS0011 from "./views/restaurants/RS0011.vue";
import RS0010 from "./views/restaurants/RS0010.vue";
import RS0009 from "./views/restaurants/RS0009.vue";
import RS0008 from "./views/restaurants/RS0008.vue";
import RS0007 from "./views/restaurants/RS0007.vue";
import RS0006 from "./views/restaurants/RS0006.vue";
import RS0005 from "./views/restaurants/RS0005.vue";
import RS0004 from "./views/restaurants/RS0004.vue";
import RS0003 from "./views/restaurants/RS0003.vue";
import RS0002 from "./views/restaurants/RS0002.vue";
import RS0001 from "./views/restaurants/RS0001.vue";

//Activities Import
import T0005 from "./views/activities/T0005.vue";
import T0004 from "./views/activities/T0004.vue";
import T0003 from "./views/activities/T0003.vue";
import T0002 from "./views/activities/T0002.vue";
import T0001 from "./views/activities/T0001.vue";
import P0001 from "./views/activities/P0001.vue";
import P0002 from "./views/activities/P0002.vue";
import M0001 from "./views/activities/M0001.vue";
import M0002 from "./views/activities/M0002.vue";
import M0003 from "./views/activities/M0003.vue";
import M0004 from "./views/activities/M0004.vue";
import M0005 from "./views/activities/M0005.vue";
import M0006 from "./views/activities/M0006.vue";
import C0001 from "./views/activities/C0001.vue";
import C0002 from "./views/activities/C0002.vue";
import L0001 from "./views/activities/L0001.vue";
import A0001 from "./views/activities/A0001.vue";
import A0002 from "./views/activities/A0002.vue";
import A0003 from "./views/activities/A0003.vue";
import A0004 from "./views/activities/A0004.vue";

Vue.use(Router);

const routerr = new Router({
  routes: [
    {
      path: "/",
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
      path: "/updateinfo",
      name: "updateinfo",
      components: {
        default: UpdateInfo,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      meta: { requiresAuth: true },
    },
    {
      path: "/profile2",
      name: "profile2",
      components: {
        default: IntermediateProfile,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      meta: { requiresAuth: true },
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
      path: "/changepassword",
      name: "changepassword",
      components: {
        default: ChangePassword,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      meta: { requiresAuth: true },
    },
    {
      path: "/suggested",
      name: "Suggested",
      components: {
        default: Suggested,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      meta: { requiresAuth: true },
    },
    {
      path: "/wishlist",
      name: "WishList",
      components: {
        default: WishList,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      meta: { requiresAuth: true },
    },

    //Import for all the relevant search pages
    {
      path: "/search",
      name: "search",
      components: { default: Search, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/searchact",
      name: "searchact",
      components: {
        default: SearchAct,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0030",
      name: "RS0030",
      components: { default: RS0030, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0029",
      name: "RS0029",
      components: { default: RS0029, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0028",
      name: "RS0028",
      components: { default: RS0028, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0027",
      name: "RS0027",
      components: { default: RS0027, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0026",
      name: "RS0026",
      components: { default: RS0026, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0025",
      name: "RS0025",
      components: { default: RS0025, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0024",
      name: "RS0024",
      components: { default: RS0024, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0023",
      name: "RS0023",
      components: { default: RS0023, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0022",
      name: "RS0022",
      components: { default: RS0022, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0021",
      name: "RS0021",
      components: { default: RS0021, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0020",
      name: "RS0020",
      components: { default: RS0020, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0019",
      name: "RS0019",
      components: { default: RS0019, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0018",
      name: "RS0018",
      components: { default: RS0018, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0017",
      name: "RS0017",
      components: { default: RS0017, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0016",
      name: "RS0016",
      components: { default: RS0016, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0015",
      name: "RS0015",
      components: { default: RS0015, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0014",
      name: "RS0014",
      components: { default: RS0014, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0013",
      name: "RS0013",
      components: { default: RS0013, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0012",
      name: "RS0012",
      components: { default: RS0012, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0011",
      name: "RS0011",
      components: { default: RS0011, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0010",
      name: "RS0010",
      components: { default: RS0010, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0009",
      name: "RS0009",
      components: { default: RS0009, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0008",
      name: "RS0008",
      components: { default: RS0008, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0007",
      name: "RS0007",
      components: { default: RS0007, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0006",
      name: "RS0006",
      components: { default: RS0006, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0005",
      name: "RS0005",
      components: { default: RS0005, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0004",
      name: "RS0004",
      components: { default: RS0004, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0003",
      name: "RS0003",
      components: { default: RS0003, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0002",
      name: "RS0002",
      components: { default: RS0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/RS0001",
      name: "RS0001",
      components: { default: RS0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0003",
      name: "T0003",
      components: { default: T0003, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0004",
      name: "T0004",
      components: { default: T0004, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0005",
      name: "T0005",
      components: { default: T0005, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0002",
      name: "T0002",
      components: { default: T0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0001",
      name: "T0001",
      components: { default: T0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/P0001",
      name: "P0001",
      components: { default: P0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/T0003",
      name: "T0003",
      components: { default: T0003, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0002",
      name: "M0002",
      components: { default: M0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0001",
      name: "M0001",
      components: { default: M0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/L0001",
      name: "L0001",
      components: { default: L0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/C0001",
      name: "C0001",
      components: { default: C0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/A0002",
      name: "A0002",
      components: { default: A0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/A0001",
      name: "A0001",
      components: { default: A0001, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/A0003",
      name: "A0003",
      components: { default: A0003, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/A0004",
      name: "A0004",
      components: { default: A0004, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/C0002",
      name: "C0002",
      components: { default: C0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0003",
      name: "M0003",
      components: { default: M0003, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0004",
      name: "M0004",
      components: { default: M0004, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0005",
      name: "M0005",
      components: { default: M0005, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/M0006",
      name: "M0006",
      components: { default: M0006, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/P0002",
      name: "P0002",
      components: { default: P0002, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },

    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PageNotFound,
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

routerr.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default routerr;
