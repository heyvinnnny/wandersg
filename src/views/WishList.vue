<template>
  <div id="border-wrapper">
    <h1>WishLists</h1>
    <div id="border"></div>
    <div class="flex-container">
      <ImageCard
        v-for="a in activities"
        :key="a.key"
        :image="a.image"
        :name="a.name"
        :address="a.address"
        :website="a.website"
        :category="a.category"
      >
      </ImageCard>
    </div>
    <!-- display map with markers for all activities -->
    <!-- <Map
        v-for="a in activities"
        :key="a.key"
        :latitude="a.latitude"
        :longtitude="a.longtitude"
      ></Map> -->
    <br />
    <br />
    <br />
    <br />
    <div style="width:1000px; margin:auto;">
      <gmap-map
        :zoom="11.75"
        :center="center"
        style="width:100%;  height: 600px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
        ></gmap-marker>
      </gmap-map>
    </div>

    <br />
    <br />
    <div class="elfsight-app-6b747fdd-7533-418d-bd8b-6bdbe1c1fae6"></div>
  </div>
</template>

<script>
import ImageCard from "@/views/components/ImageCard.vue";
// import Map from "@/views/components/Map.vue";
import firebaseApp from "../firebase.js";
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  components: {
    ImageCard
  },
  data() {
    return {
      activities: [],
      markers: [],
      center: {
        lat: 1.29027,
        lng: 103.851959
      }
    };
  },
  methods: {
    readData: async function(user) {
      // retrieve a list of saved activities from firebase to display
      const activities = [];
      const markers = [];
      const querySnapshot = await getDocs(
        collection(db, "users", user, "wishlist")
      );

      querySnapshot.forEach(doc => {
        activities.push({
          key: doc.data().objectID,
          name: doc.data().name,
          address: doc.data().address,
          image: doc.data().image,
          website: doc.data().website,
          category: doc.data().category
        });
      });
      this.activities = activities;
      const querySnapshot2 = await getDocs(
        collection(db, "users", user, "wishlist")
      );
      querySnapshot2.forEach(doc => {
        const marker = {
          lat: doc.data().latitude,
          lng: doc.data().longtitude
        };
        markers.push({ position: marker });
      });
      this.markers = markers;
    }
  },

  mounted() {
    const auth = getAuth();
    // user email
    onAuthStateChanged(auth, currUser => {
      if (currUser) {
        const userEmail = currUser.email;
        this.user = userEmail;
        console.log(this.user);
        this.readData(this.user);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

#border-wrapper {
  padding-top: 8%;
}

#border-wrapper h1 {
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
