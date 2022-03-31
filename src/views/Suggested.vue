<template>
  <div class="carousel-wrapper">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="color:black;">You may like these...</h1>
            <h4 class="title" style="color:black;">
              Fully customized day trip based on your interests
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fa fa-play"></i> Generate</md-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout" md-alignment="centered">
      <div class="md-layout-item md-size-100 md-small-size-100">
        <tabs
          :tab-name="['Food', 'Activities', 'Events']"
          :tab-icon="['restaurant_menu', 'rowing', 'theater_comedy']"
          plain
          nav-pills-icons
          color-button="primary"
          md-alignment="centered"
        >
          <!-- here you can add your content for tab-content -->
          <template slot="tab-pane-1">
            <div id="border-wrapper">
              <h1>Food</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.items"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
              ></SuggestedCard>
            </div>
          </template>
          <template slot="tab-pane-2">
            <div id="border-wrapper">
              <h1>Activities</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.items"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
              ></SuggestedCard>
            </div>
          </template>
          <template slot="tab-pane-3">
            <div id="border-wrapper">
              <h1>Events</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.items"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
              ></SuggestedCard>
            </div>
          </template>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc } from "firebase/firestore";
import SuggestedCard from "@/views/components/SuggestedCard.vue";
import { Tabs } from "@/components";
// import { tabs, tab } from "vue-material-tabs";
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import { VueAgile } from "vue-agile";
// import Flickity from "vue-flickity";
// import { Glide, GlideSlide } from 'vue-glide-js'

const db = getFirestore(firebaseApp);

export default {
  name: "Carousel",
  components: {
    SuggestedCard,
    Tabs
    // tabs,
    // tabItem
  },
  data() {
    return {
      items: []
      // food: [],
      // activities: []
    };
  },
  // this.fbuser = auth.currentUser.email;
  methods: {
    change() {
      window.location.reload();
    },
    display: async function() {
      // const food = [];
      // const activities = [];
      const items = [];
      const querySnapshot = await getDocs(collection(db, "test-food"));
      querySnapshot.forEach(doc => {
        items.push({
          key: doc.data().objectId,
          name: doc.data().restaurantName,
          address: doc.data().address,
          postalCode: doc.data().postalcode,
          image: doc.data().image,
          category: doc.data().category
        });
        // console.log(doc.data());
      });
      this.items = items;
      console.log(this.items);
    }
  },
  mounted() {
    this.display();
    console.log("Component mounted");
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.text-span {
  padding-right: 10px;
  padding-left: 10px;
  line-height: 22px;
  display: inline-block;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: lightgrey;
}

/* .carousel {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
} */

#border-wrapper {
  text-align: center;
}

#border {
  position: relative;
  width: 5%;
  height: 3px;
  background-color: #4fbfa8;
  margin: 0px auto 15px auto;
}
</style>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
