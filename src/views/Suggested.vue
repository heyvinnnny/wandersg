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
            <h1 class="title" style="color:white;">You may like these...</h1>
            <h4 class="title" style="color:white;">
              Fully customized day trip based on your interests
            </h4>
            <br />
            <!-- <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fa fa-play"></i> Generate</md-button
            > -->
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout" md-alignment="centered">
      <div class="md-layout-item md-size-100 md-small-size-100">
        <tabs
          :tab-name="['Food', 'Activities']"
          :tab-icon="['restaurant_menu', 'rowing']"
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
                v-for="item in this.foodItems"
                :key="item.key"
                :objectID="item.objectID"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
                :price="item.price"
                :openinghours="item.openinghours"
                :website="item.website"
                :isFood="item.isFood"
                :latitude="item.latitude"
                :longtitude="item.longtitude"
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
                v-for="item in this.activityItems"
                :key="item.key"
                :objectID="item.objectID"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
                :price="item.price"
                :openinghours="item.openinghours"
                :website="item.website"
                :isFood="item.isFood"
                :latitude="item.latitude"
                :longtitude="item.longtitude"
              ></SuggestedCard>
            </div>
          </template>
          <!-- <template slot="tab-pane-3">
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
          </template> -->
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  query,
  where,
  setDoc
} from "firebase/firestore";
import SuggestedCard from "@/views/components/SuggestedCard.vue";
import { Tabs } from "@/components";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      foodItems: [],
      activityItems: [],
      foodData: [],
      user: ""
      // email: getAuth().currentUser.email
      // food: [],
      // activities: []
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${"https://images.pexels.com/photos/8506357/pexels-photo-8506357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`
      };
    }
  },
  methods: {
    change() {
      window.location.reload();
    },
    insertData() {
      this.foodData.forEach(i => {
        setDoc(doc(db, "wander-food", i.restaurantname), {
          objectID: i.objectID,
          restaurantname: i.restaurantname,
          description: i.description,
          district: i.district,
          location: i.location,
          address: i.address,
          openinghours: i.openinghours,
          category: i.category,
          image: i.image,
          price: i.price,
          preferences: i.preferences,
          website: i.website,
          isFood: i.isFood,
          latitude: i.latitude,
          longtitude: i.longtitude
        });
      });
      this.activityData.forEach(x => {
        setDoc(doc(db, "wander-activity", x.activityname), {
          objectID: x.objectID,
          activityname: x.activityname,
          description: x.description,
          district: x.district,
          location: x.location,
          address: x.address,
          openinghours: x.openinghours,
          category: x.category,
          image: x.image,
          price: x.price,
          preferences: x.preferences,
          website: x.website,
          isFood: x.isFood,
          latitude: i.latitude,
          longtitude: i.longtitude
        });
      });
    },
    display: async function(user) {
      // const food = [];
      // const activities = [];
      const foodItems = [];
      const activityItems = [];
      console.log(user);

      //retrieve user's preferences
      const preferences = [];
      const prefRef = await getDocs(
        collection(db, "users", user, "preferences")
      );
      prefRef.forEach(doc => {
        preferences.push(doc.data().name);
      });
      this.preferences = preferences;

      console.log(this.preferences);

      //retrieve user's suggested food
      // const foodRef = await getDocs(collection(db, "wander-food"));
      const queryFood = query(
        collection(db, "wander-food"),
        where("preferences", "array-contains-any", this.preferences)
      );
      const foodSnap = await getDocs(queryFood);
      foodSnap.forEach(doc => {
        foodItems.push({
          key: doc.data().objectID,
          objectID: doc.data().objectID,
          name: doc.data().restaurantname,
          address: doc.data().address,
          postalCode: doc.data().postalcode,
          image: doc.data().image,
          category: doc.data().category,
          price: doc.data().price,
          openinghours: doc.data().openinghours,
          website: doc.data().website,
          isFood: doc.data().isFood,
          latitude: doc.data().latitude,
          longtitude: doc.data().longtitude
        });
        // console.log(doc.data());
      });
      this.foodItems = foodItems;

      //retrieve user's suggested activities
      // const activityRef = await getDocs(collection(db, "wander-activity"));
      const queryActivity = query(
        collection(db, "wander-activity"),
        where("preferences", "array-contains-any", this.preferences)
      );
      const activitySnap = await getDocs(queryActivity);
      activitySnap.forEach(doc => {
        activityItems.push({
          key: doc.data().objectID,
          objectID: doc.data().objectID,
          name: doc.data().activityname,
          address: doc.data().address,
          postalCode: doc.data().postalcode,
          image: doc.data().image,
          category: doc.data().category,
          price: doc.data().price,
          openinghours: doc.data().openinghours,
          website: doc.data().website,
          isFood: doc.data().isFood,
          latitude: doc.data().latitude,
          longtitude: doc.data().longtitude
        });
        // console.log(doc.data());
      });
      this.activityItems = activityItems;
      // console.log(this.items);
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, currUser => {
      if (currUser) {
        const userEmail = currUser.email;
        this.user = userEmail;
        console.log(this.user);
        this.display(this.user);
        // this.insertData();
      } else {
        console.log(currUser, "user not found....");
      }
    });
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
