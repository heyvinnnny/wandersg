<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="color:white;">Description</h1>
              <h3 style="color:white;">
                Information of your favourite activity and restaurant.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic">
        <!-- RESTAURANT CAROUSEL SECTION-->

        <div class="md-layout">
          <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
            <h1 class="text-uppercase lined mb-4" style="color:palevioletred">
              Feng Shui Inn
              <md-button
                v-if="loggedIn"
                v-bind:class="getClass()"
                v-on:click="checkIfFav()"
                style="margin-left:10px; margin-top:10px"
                ><md-icon>favorite</md-icon></md-button
              >
            </h1>

            <md-card>
              <carousel
                :per-page="1"
                loop
                :speed="700"
                autoplay
                :autoplay-timeout="5000"
                :mouse-drag="false"
                navigationEnabled
                navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
              >
                <slide>
                  <div class="carousel-caption">
                    <h4></h4>
                  </div>
                  <img src="@/assets/res-img/rs0023-1.jpg" alt="carousel1" />
                </slide>
                <slide>
                  <div class="carousel-caption">
                    <h4></h4>
                  </div>
                  <img src="@/assets/res-img/rs0023-2.jpg" alt="carousel2" />
                </slide>
                <slide>
                  <div class="carousel-caption">
                    <h4></h4>
                  </div>
                  <img src="@/assets/res-img/rs0023-3.jpg" alt="carousel2" />
                </slide>
              </carousel>
            </md-card>
          </div>
        </div>

        <br />

        <!-- DESCRIPTION SECTION        -->
        <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h3 class="text-uppercase lined mb-4" style="color:#ff286c">
                  Restaurant Information
                </h3>
                <p class="text-muted">
                  Helmed by Hong Kong veteran chef Li Kwok Kwong, this elegant
                  restaurant decorated with gold leaf ceilings serves up
                  Cantonese masterpieces that are exquisite in presentation and
                  taste. The extensive menu features perennial favourites like
                  Chinese barbecued meats and dim sum, as well as nourishing
                  double-boiled soups that are a staple in Cantonese cuisine.
                  The Double-Boiled Black Chicken Soup with Fish Maw and
                  Cordyceps Flower is lovingly prepared from a stock of Chinese
                  Jin Hua ham, pork shoulder, and old fowl that is simmered over
                  low heat for six hours to coax out deep, rich flavours.
                </p>
                <p class="text-muted">
                  For mains, the signature dishes at Feng Shui Inn are a
                  must-try. Chilled Prawn with Lemon Sauce is given a modern
                  twist with a side of fluffy lobster pancakes, drizzled with
                  salted egg yolk and buttercream sauce. Order also the
                  Pan-Fried Wagyu Beef in Teriyaki Sauce, where cubes of tender
                  and juicy medium-rare steak are tossed in a sweet sauce. Other
                  must-tries include Pan-Seared Japanese Kurobuta Pork Loin, as
                  well as Roast Quail Drumstick in Black Truffle Sauce. For
                  carb-loves, ‘Kampong Uncle’ Fried Rice in Hot Pot is a
                  sizzling dish with delicious crispy bits at the bottom of the
                  claypot. End the meal on a sweet note with traditional
                  desserts like Double-Boiled Hashima with Red Dates and
                  Double-Boiled Almond Cream with Glutinous Rice Balls.
                </p>
              </div>
              <br />
              <div class="col-lg-4">
                <h3 class="text-uppercase lined mb-4" style="color:#ff286c">
                  Information
                </h3>
                <h4 class="h5 text-uppercase">Cuisine</h4>
                <p class="text-muted text-sm">Chinese, Dim Sum</p>
                <h4 class="h5 text-uppercase">Hours</h4>
                <p class="text-muted text-sm">
                  Mon-Sun: <br />
                  11am-12:30pm (1st Seating), 1-2:30pm (2nd Seating)<br />
                  6pm (1st Seating), 8:30pm (2nd Seating)<br />
                </p>
                <h4 class="h5 text-uppercase">Good for:</h4>
                <p class="text-muted text-sm">
                  Business Meetings, Fine Dining, Kid Friendly, Private
                  Functions, Large Parties (16+)
                </p>
                <h4 class="h5 text-uppercase">Location</h4>
                <p class="text-muted text-sm">Sentosa</p>
                <h4 class="h5 text-uppercase">Address</h4>
                <p class="text-muted text-sm">
                  8 Sentosa Gateway<br />
                  #01-521/522<br />
                  Equarius Hotel Lobby<br />
                  Singapore (098269)
                </p>

                <br />
                <h3 class="text-uppercase lined mb-4" style="color:#ff286c">
                  Favourite
                </h3>
                <md-button
                  v-if="loggedIn"
                  v-bind:class="getClass()"
                  v-on:click="checkIfFav()"
                  style="margin:auto;"
                  ><md-icon>favorite</md-icon></md-button
                >
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <!-- Google API -->

        <div style="width:1000px; margin:auto;">
          <div>
            <label>
              <gmap-autocomplete
                @place_changed="initMarker"
                value="Feng Shui Inn"
                readonly
              ></gmap-autocomplete>

              <button @click="addLocationMarker">Add</button>
            </label>
            <br />
          </div>
          <br />
          <gmap-map
            :zoom="14"
            :center="center"
            style="width:100%;  height: 600px;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in locationMarkers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  getDoc
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  components: {
    //JavascriptComponents
  },
  name: "RS0023",
  bodyClass: "RS0023-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    // leaf4: {
    //   type: String,
    //   default: require("@/assets/img/leaf4.png")
    // },
    // leaf3: {
    //   type: String,
    //   default: require("@/assets/img/leaf3.png")
    // },
    // leaf2: {
    //   type: String,
    //   default: require("@/assets/img/leaf2.png")
    // },
    // leaf1: {
    //   type: String,
    //   default: require("@/assets/img/leaf1.png")
    // },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      loggedIn: false,
      liked: false,
      objectID: "",
      name: "",
      category: "",
      img: "",
      address: "",
      website: "",
      latitude: 1,
      longtitude: 1,
      center: {
        lat: 1.29027,
        lng: 103.851959
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  },
  async created() {
    const db = getFirestore(firebaseApp);
    const auth = getAuth();
    const user = auth.currentUser.email;
    const item = doc(db, "wander-food", "Feng Shui Inn");
    const querySnapshot = await getDoc(item);
    this.objectID = querySnapshot.data().objectID;
    this.name = querySnapshot.data().restaurantname;
    this.category = querySnapshot.data().category;
    this.img = querySnapshot.data().image;
    this.address = querySnapshot.data().address;
    this.website = querySnapshot.data().website;
    this.latitude = querySnapshot.data().latitude;
    this.longtitude = querySnapshot.data().longtitude;

    if (user) {
      this.loggedIn = true;
      const docRef = doc(db, "users", user, "wishlist", this.name);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.exists());
      if (docSnap.exists()) {
        this.liked = true;
      } else {
        this.liked = false;
      }
    }
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },

    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
    getClass() {
      return {
        "md-primary md-just-icon md-round": this.liked,
        "md-just-icon md-round": !this.liked
      };
    },
    checkIfFav() {
      if (this.liked) {
        this.removeFromFav();
      } else {
        this.addToFav();
      }
    },
    async addToFav() {
      this.liked = true;
      try {
        const auth = getAuth();
        const user = auth.currentUser.email;
        await setDoc(doc(db, "users", user, "wishlist", this.name), {
          objectID: this.objectID,
          name: this.name,
          category: this.category,
          image: this.img,
          address: this.address,
          website: this.website,
          latitude: this.latitude,
          longtitude: this.longtitude
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    async removeFromFav() {
      this.liked = false;
      try {
        const auth = getAuth();
        const user = auth.currentUser.email;
        await deleteDoc(doc(db, "users", user, "wishlist", this.name));
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
    this.locateGeolocation;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>

<style scoped>
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

/*Description*/
.text-uppercase {
  text-transform: uppercase !important;
}

.lined {
  position: relative;
  padding-bottom: 0.7rem;
}

.lined::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6.25rem;
  height: 2px;
  background: #4fbfa8;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.text-muted {
  color: #464545 !important;
}

.text-sm-start {
  text-align: left !important;
}
.text-sm-end {
  text-align: right !important;
}
.text-sm-center {
  text-align: center !important;
}

.text-sm {
  font-size: 0.9rem !important;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.2;
}

/* Slider */

/*
*
* ==========================================
* SWIPER SLIDER
* ==========================================
*
*/
.swiper-pagination-bars .swiper-pagination-bullet {
  width: 3.5rem;
  height: 4px;
  border-radius: 0;
  margin: 0 !important;
  background: #ccc;
}

.swiper-pagination-bars .swiper-pagination-bullet-active {
  background: #4fbfa8;
}

.swiper-pagination-light .swiper-pagination-bullet {
  background: #dadada;
  opacity: 1;
}

.swiper-pagination-light .swiper-pagination-bullet-active {
  background: #ffffff;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background: #4fbfa8;
}

.swiper-button-next,
.swiper-button-prev {
  top: 0;
  width: 3rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.7rem;
  font-weight: bold;
  color: #4fbfa8;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 1;
}

.swiper-button-next.swiper-button-disabled::after,
.swiper-button-prev.swiper-button-disabled::after {
  color: #ccc;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}

.swiper-slide-thumb {
  cursor: pointer;
  border: 5px solid transparent;
  transition: all 0.3s;
  opacity: 0.7;
}

.swiper-slide-thumb-active {
  border-color: rgba(79, 191, 168, 0.5);
  opacity: 1;
}

.w-100 {
  width: 100% !important;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(79, 191, 168, 0.25);
}

.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(79, 191, 168, 0.25);
}

.form-range::-moz-focus-outer {
  border: 0;
}

.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #4fbfa8;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}

.form-range::-webkit-slider-thumb:active {
  background-color: #caece5;
}

.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e7e7e7;
  border-color: transparent;
  border-radius: 1rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
