<template>
  <div>
    Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div>
    <button class="but" @click="signOut">Sign out</button>
  </div>
</template>

<script>
// import * as firebase from "firebase/app";
// import "firebase/auth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      // firebase
      //   .auth()
      //   .signOut()
      //   .then(() => {
      //     this.$router.replace({ name: "login" });
      //   });
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("signed out");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>
