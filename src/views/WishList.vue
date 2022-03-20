<template>
  <!-- <ImageCard v-for="activity in activities"
  :key=""></ImageCard> -->
  
</template>

<script>
import ImageCard from './components/ImageCard.vue';
// import firebaseApp from '../firebase.js';
// import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
// import { getAuth } from 'firebase/auth';
// const db = getFirestore(firebaseApp)
export default {
  components: {
    ImageCard
  },

  data() {
    return {
      activities: []
    }
  }
  //mounted(){
  // const auth = getAuth();
  // either user email or id
  // this.fbuser = auth.currentUser.email;
  //}
};
</script>

<style lang="scss" scoped>

</style>