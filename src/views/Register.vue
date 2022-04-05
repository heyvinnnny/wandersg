<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Register</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Enter Email</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Enter Password</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Re-enter Password</label>
                <md-input v-model="password2" type="password"></md-input>
              </md-field>

              <!-- <div id="preference">
                <h2 class="card-title">Please select your preferences</h2>
                <button type="button" id="pref_Button1"> <img id="pref_Image" src="https://imageio.forbes.com/specials-images/imageserve/610c352d8091b398825ab21f/Anaheim-Exteriors-And-Landmarks---2021/960x0.jpg?fit=bounds&format=jpg&width=960" height="100%" width="100%"></button> -->
              <!-- <button type="button" id="pref_Adventure"></button>
                <button type="button" id="pref_Animals"></button>
                <button type="button" id="pref_Children"></button>
                <button type="button" id="pref_Family"></button>
                <button type="button" id="pref_Fantasy"></button>
                <button type="button" id="pref_Food"></button>
                <button type="button" id="pref_Nature"></button>
                <button type="button" id="pref_Romantic"></button>
                <button type="button" id="pref_Scifi"></button>
                <button type="button" id="pref_Lifestyle"></button>
                <button type="button" id="pref_Staycation"></button>
                <button type="button" id="pref_Heritage"></button>
              </div> -->

              <md-button
                @click="pressed"
                slot="footer"
                class="md-simple md-success md-lg"
                style="margin:0px;"
              >
                Next
              </md-button>
              <!-- <p slot="description" class="description" style="margin:0px;">
                New user? Register here!
              </p>
              <md-button
                slot="end"
                class="md-simple md-success md-lg"
                style="left:32%;"
              >
                Register
              </md-button> -->
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components/";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      adventure: false,
      animals: false,
      children: false,
      family: false,
      fantasy: false,
      food: false,
      heritage: false,
      lifestyle: false,
      nature: false,
      romantic: false,
      scifi: false,
      staycation: false
    };
  },
  methods: {
    pressed() {
      const auth = getAuth();
      if (this.password == this.password2) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            this.$router.replace({ name: "profile2" });
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        alert("Passwords do not match!");
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
