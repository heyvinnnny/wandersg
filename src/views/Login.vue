<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <!-- <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button> -->
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>

              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field> -->
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                style="margin:0px"
                @click="pressed()"
              >
                Login
              </md-button>
              <p class="error text-danger" v-if="error">
                Wrong username or password!
              </p>
              <p
                slot="description"
                class="description"
                style="border-bottom:10px;"
              >
                New user? Register
                <router-link to="/register">here</router-link>!
              </p>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components/";
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      //firstname: null,
      email: null,
      password: null,
      error: ""
    };
  },
  // mounted() {
  //   //Calling the ui instance
  //   var ui = firebaseui.auth.AuthUI.getInstance();
  //   if (!ui) {
  //       //Need to create the instance only one at a time
  //       //Initialise the FirebaseUI Widget using firebase
  //       ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   }

  //   var uiConfig = {
  //       signInSuccessUrl: '/home',
  //       signInOptions:[
  //           //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //           firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       ]
  //   };

  //   ui.start('#firebaseui-auth-container', uiConfig)
  // },
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "landing" });
      } catch (err) {
        console.log(err);
        this.error = err;
        alert("Wrong username or password!");
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/sg3.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
