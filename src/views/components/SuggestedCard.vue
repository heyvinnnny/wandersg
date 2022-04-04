<template>
  <div class="wrapper">
    <img class="top" :src="image" alt="" />
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h2 class="txt_products">{{ name }}</h2>
          <p class="address">{{ address }}</p>
          <span class="text-span">{{ category }}</span>
        </div>
        <div class="buy">
          <md-button v-bind:class="getClass()" v-on:click="checkIfFav()"
            ><md-icon class="heartIcon">favorite</md-icon></md-button
          >
        </div>
      </div>
    </div>

    <div class="inside">
      <div class="icon">
        <i class="fa fa-eye"></i>
      </div>
      <div class="contents">
        <!-- <h1>The Feather Blade</h1>
        <br /> -->
        <p>Price: {{ price }}</p>
        <br v-if="isFood" />
        <p v-if="isFood">Ambience: ⭐️⭐️⭐️</p>
        <br v-if="isFood" />
        <p v-if="isFood">Food: ⭐️⭐️⭐️⭐️</p>
        <br v-if="isFood" />
        <p v-if="isFood">Service: ⭐️⭐️⭐️</p>
        <br /><br />

        <p>Opening hours: {{ openinghours }}</p>
        <br />
        <p v-if="isFood">Reservations: Recommended</p>
        <p v-else>Bookings: Recommended</p>
      </div>
    </div>
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
      liked: false
      // email: getAuth().currentUser.email
    };
  },
  // components: {
  //   VueStar
  // },
  props: {
    image: String,
    name: String,
    address: String,
    category: String,
    price: String,
    openinghours: String,
    objectID: String,
    user: String,
    website: String,
    isFood: Boolean
  },
  methods: {
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
      const auth = getAuth();
      const user = auth.currentUser.email;
      // alert("Saving Item: " + this.name);
      try {
        // const colRef = collection(db, "users", "eltonng123@gmail.com");
        await setDoc(doc(db, "users", user, "wishlist", this.name), {
          objectID: this.objectID,
          name: this.name,
          category: this.category,
          image: this.image,
          address: this.address,
          website: this.website
        });
        // console.log(colRef);
        // console.log(name1);
        // document.getElementById('myform').reset();
        // this.$emit("added")
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    async removeFromFav() {
      // const auth = getAuth();
      // this.fbuser = auth.currentUser.email;
      const auth = getAuth();
      const user = auth.currentUser.email;
      this.liked = false;
      // alert("Removing Item: " + this.name);
      try {
        // const colRef = collection(db, "users", "eltonng123@gmail.com");
        await deleteDoc(doc(db, "users", user, "wishlist", this.name), {
          objectID: this.objectID,
          name: this.name,
          category: this.category,
          image: this.image,
          address: this.address,
          website: this.website
        });
        console.log(colRef);
        console.log(name1);
        // document.getElementById('myform').reset();
        // this.$emit("added")
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
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

.container {
  width: 100%;
  height: 100%;
}

.text-span {
  padding-right: 10px;
  padding-left: 10px;
  line-height: 22px;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: lightgrey;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background-color: black;
}

.wrapper {
  flex-basis: 25%;
  width: 400px;
  height: 450px;
  background: transparent;
  margin: auto;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  transform: scale(0.93);
  transition: box-shadow 0.5s, transform 0.5s;
  z-index: 1000;
}
.wrapper:hover {
  transform: scale(1);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.wrapper .top {
  height: 72%;
  width: 100%;
  background-size: 100%;
  position: relative;
}
.wrapper .bottom {
  width: 100%;
  height: 28%;
  transition: transform 0.5s;
  position: relative;
}

.wrapper .bottom .left {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: relative;
  float: left;
}

.wrapper .bottom .left .details {
  padding-left: 20px;
  padding-top: 0px;
  float: left;
  width: 70%;
}

.wrapper .bottom .left .details .txt_products {
  font-size: 16px;
}

p {
  font-size: 12px;
}

.wrapper .bottom .left .buy {
  float: right;
  display: flex;
  height: 100%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
}
.wrapper .bottom .left .buy {
  font-size: 20px;
  padding: 20px;
  color: black;
  transition: transform 0.5s;
}

.wrapper .bottom .left .buy:hover i {
  transform: scale(1.5);
}

.wrapper .inside {
  z-index: 9;
  background: #4fbfa8;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
}

.wrapper .inside .icon {
  position: absolute;
  right: 85px;
  top: 85px;
  color: white;
  opacity: 1;
}

.wrapper .inside:hover {
  width: 100%;
  right: 0;
  top: 0;
  border-radius: 0;
  height: 100%;
}
.wrapper .inside:hover .icon {
  opacity: 0;
  right: 15px;
  top: 15px;
}
.wrapper .inside:hover .contents {
  opacity: 1;
  transform: scale(1);
  transform: translateY(0);
}

.wrapper .inside .contents {
  padding: 5%;
  opacity: 0;
  transform: scale(0.5);
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;
}
.wrapper .inside .contents h1,
.wrapper .inside .contents p {
  color: white;
}

.wrapper .inside .contents p {
  font-size: 15px;
}

.tiktok-embed {
  display: flex;
  height: 80%;
  width: 80%;
}

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

.heartIcon {
  color: red;
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
