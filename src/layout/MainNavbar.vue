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
              <a href="#/suggested">
                <md-list-item @click="scrollToElement()" v-if="loggedIn">
                  <i class="material-icons">explore</i>
                  <a href="#/suggested">Suggested</a>
                </md-list-item>
              </a>

              <!-- end of suggested item -->

              <!-- Download item (going to be replaced with saved) -->
              <a href="#/wishlist">
                <md-list-item @click="scrollToElement()" v-if="loggedIn">
                  <i class="material-icons">bookmark</i>
                  <a href="#/wishlist">WishList</a>
                </md-list-item>
              </a>

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
                        <img :src="tabPane1[0].image" id="myimg" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">
                          Welcome, {{ fetchUserEmail }}
                        </li>
                        <!-- <li class="dropdown-header">My Information</li> -->
                        <li>
                          <a href="#/updateinfo" class="dropdown-item"
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
    }
    // img: {
    //   type: String,
    //   default: require("@/assets/img/blankprofile.webp")
    // }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      loggedIn: false,
      tabPane1: [{ image: require("@/assets/img/blankprofile.webp") }]
    };
  },
  computed: {
    fetchUserEmail() {
      const auth = getAuth();
      const user = auth.currentUser;
      return user.email;
    }
  },
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
          getDownloadURL(storageRef)
            .then(url => {
              const img = document.getElementById("myimg");
              // console.log(url);
              // img.setAttribute("src", url);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    getProfileImageURL() {
      const auth = getAuth();
      const user = auth.currentUser;
      const storage = getStorage();
      onAuthStateChanged(auth, user => {
        if (user) {
          this.loggedIn = true;
          const storageRef = ref(storage, "users/" + user.uid + "/profile.jpg");
          getDownloadURL(storageRef)
            .then(url => {
              const img = document.getElementById("myimg");
              console.log(url);
              this.tabPane1[0].image = url;
              console.log("changed in profile function");
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.loggedIn = false;
        }
      });
    },
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("signed out");
          this.$router.push({ name: "landing" });
          this.$router.go();
        })
        .catch(error => {
          console.log(error);
        });
      // after signout, remember to push to landing page
    }
  },
  created() {
    this.getProfileImageURL();
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
