<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-white md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          <a href="#/"
            ><img src="@/assets/img/navbarimg_nobg.png" style="height:70px;"
          /></a>
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <!-- this part is so that the navbar will appear differently on other pages -->
              <!-- adding the "md-list-item" for every item on the navbar -->

              <!-- components item -->
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">search</i>
                        <p>Search</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/search">
                            <i class="material-icons">dinner_dining</i>
                            <p>Search Restaurants</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/searchact">
                            <i class="material-icons">attractions</i>
                            <p>Search Activities</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <!-- end of components item -->

              <!-- Documentation item (going to be replaced with suggested) -->
              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="loggedIn"
              >
                <i class="material-icons">explore</i>
                <a href="#/suggested">Suggested</a>
              </md-list-item>

              <!-- end of suggested item -->

              <!-- Download item (going to be replaced with saved) -->
              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="loggedIn"
              >
                <i class="material-icons">bookmark</i>
                <a href="#/wishlist">WishList</a>
              </md-list-item>
              <!-- end of saved item -->

              <!-- Examples item -->
              <!-- <li class="md-list-item" v-else>
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Examples</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/landing">
                            <i class="material-icons">view_day</i>
                            <p>Landing Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/login">
                            <i class="material-icons">fingerprint</i>
                            <p>Login Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/profile">
                            <i class="material-icons">account_circle</i>
                            <p>Profile Page</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li> -->
              <!-- end of examples item -->

              <!-- register button -->
              <li class="md-list-item" v-if="!loggedIn">
                <a
                  href="#/login"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-rose md-round">Login</md-button>
                  </div>
                </a>
              </li>
              <!-- end of register button -->

              <!-- account bubble item -->
              <li class="md-list-item" v-if="loggedIn">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img :src="img" alt="Circle Image" id="myimg" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <!-- <li class="dropdown-header">My Information</li> -->
                        <li>
                          <a href="#pablo" class="dropdown-item"
                            >Update Profile Information</a
                          >
                        </li>
                        <li>
                          <a href="#/changepassword" class="dropdown-item"
                            >Change Password</a
                          >
                        </li>
                        <li>
                          <a @click="signOut" class="dropdown-item">Sign Out</a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/isaac.jpg")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      loggedIn: false
    };
  },
  // computed: {
  //   showDownload() {
  //     const excludedRoutes = ["login", "profile"];
  //     return excludedRoutes.every(r => r !== this.$route.name);
  //   }
  // },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    setupFirebase() {
      const auth = getAuth();
      const user = auth.currentUser;
      const storage = getStorage();
      onAuthStateChanged(auth, user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
          const storageRef = ref(storage, "users/" + user.uid + "/profile.jpg");
          getDownloadURL(storageRef).then(url => {
            const img = document.getElementById("myimg");
            img.setAttribute("src", url);
          });
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("signed out");
        })
        .catch(error => {
          console.log(error);
        });
      // after signout, remember to push to landing page
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    this.setupFirebase();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
