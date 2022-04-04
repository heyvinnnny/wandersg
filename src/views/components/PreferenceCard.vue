<template>
  <div class="md-layout-item ml-auto">
    <md-card
      md-with-hover
      style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
    >
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="4:3">
          <img :src="image" class="rounded" style="height:100%;" />
        </md-card-media>

        <md-card-area>
          <md-card-header
            style="background-color:rgba(0,0,0,0); border:0%; margin:0%; padding:0%; outline:none;"
          >
            <span
              class="md-title"
              style="text-align:center; color:whiter;"
              id="title"
            >
              <strong>{{ name }}</strong>
            </span>
          </md-card-header>
          <md-card-actions>
            <md-button
              class="category md-raised md-success"
              @click="pressed1"
              v-if="!this.category"
              >Select</md-button
            >
            <md-button class="md-raised md-danger" @click="unpressed1" v-else
              >Remove</md-button
            >
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      email: "",
      category: false
    };
  },
  props: {
    image: String,
    name: String
  },
  methods: {
    async pressed1() {
      const auth = getAuth();
      const user = auth.currentUser.email;
      if (user) {
        this.category = true;
        console.log(this.email + " " + this.name + " " + this.category);
        // alert("Added Preference: " + this.name);
        try {
          // const colRef = collection(db, "users", "eltonng123@gmail.com");
          await setDoc(doc(db, "users", user, "preferences", this.name), {
            name: this.name
          });
          // console.log(colRef);
          // console.log(name1);
          // document.getElementById('myform').reset();
          // this.$emit("added")
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    },
    async unpressed1() {
      const auth = getAuth();
      const user = auth.currentUser.email;
      if (user) {
        this.category = false;
        console.log(this.email + " " + this.name + " " + this.category);
        // alert("Removing Preference: " + this.name);
        try {
          // const colRef = collection(db, "users", "eltonng123@gmail.com");
          await deleteDoc(doc(db, "users", user, "preferences", this.name), {
            name: this.name
          });
          // console.log(colRef);
          // console.log(name1);
          // document.getElementById('myform').reset();
          // this.$emit("added")
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    }
  }
};
</script>

<style></style>
