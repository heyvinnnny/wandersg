<template>
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
  </div>
</template>

<script>
import ImageCard from "@/views/components/ImageCard.vue";
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
      activities: []
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
  }
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
