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
      <Map
        v-for="a in activities"
        :key="a.key"
        :latitude="a.latitude"
        :longitude="a.longitude"
      ></Map>
    </div>
  </div>
</template>

<script>
import ImageCard from "@/views/components/ImageCard.vue";
import Map from "@/views/components/Map.vue";
import firebaseApp from "../firebase.js";
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  components: {
    ImageCard,
    Map
  },
  data() {
    return {
      activities: [],
      map: null
    };
  },
  methods: {
    readData: async function() {
      // retrieve a list of saved activities from firebase to display
      const activities = [];
      const querySnapshot = await getDocs(collection(db, "test-food"));
      querySnapshot.forEach(doc => {
        activities.push({
          key: doc.data().objectId,
          name: doc.data().restaurantName,
          address: doc.data().address,
          image: doc.data().image,
          website: doc.data().website
        });
      });
      this.activities = activities;
    }
  },
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
