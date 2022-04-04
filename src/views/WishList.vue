<template>
  <div id="border-wrapper">
    <h1>WishList</h1>
    <div id="border"></div>
    <div class="flex-container">
      <ImageCard
        v-for="a in activities"
        :key="a.key"
        :image="a.image"
        :name="a.name"
        :address="a.address"
        :website="a.website"
      >
      </ImageCard>
      <!-- display map with markers for all activities -->
      <!-- <Map
        v-for="a in activities"
        :key="a.key"
        :latitude="a.latitude"
        :longitude="a.longitude"
      ></Map> -->
      <GMapMap :center="center" :zoom="12" style="width:100%;  height: 450px;">
        <GMapCluster :zoomOnClick="true">
          <GMapMarker
            :key="index"
            v-for="(m, index) in activities"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GMapCluster>
      </GMapMap>
    </div>
  </div>
</template>

<script>
import ImageCard from "@/views/components/ImageCard.vue";
// import Map from "@/views/components/Map.vue";
import firebaseApp from "../firebase.js";
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  components: {
    ImageCard
  },
  data() {
    return {
      activities: [],
      center: { lat: 1.2789, lng: 103.8536 },
      markers: []
    };
  },
  methods: {
    readData: async function() {
      // retrieve a list of saved activities from firebase to display
      const activities = [];
      // const marker = {
      //     lat: doc.geometry.location.lat(),
      //     lng: doc.geometry.location.lng()
      //   };
      const querySnapshot = await getDocs(
        collection(db, "users", "eltonng123@gmail.com", "wishlist")
      );

      querySnapshot.forEach(doc => {
        activities.push({
          key: doc.data().objectId,
          name: doc.data().name,
          address: doc.data().address,
          image: doc.data().image,
          website: doc.data().website
          // marker: { position: marker }
        });
      });
      this.activities = activities;
    }
  },

  // const querySnapshot2 = await getDocs(
  //   collection(db, "users", "eltonng123@gmail.com", "wishlist")
  // );
  //     querySnapshot2.forEach(doc => {
  //       const marker = {
  //         lat: doc.geometry.location.lat(),
  //         lng: doc.geometry.location.lng()
  //       };
  //       markers.push({ position: marker });
  //     });
  //     this.markers = markers;
  //   }
  // },
  mounted() {
    // const auth = getAuth();
    // either user email or id
    // this.fbuser = auth.currentUser.email;
    this.readData();
    // this.remove(key);
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
