<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Change Password</h4>
              <template slot="inputs">
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>unsubscribe</md-icon>
                  <label>Current Password</label>
                  <md-input v-model="oldPassword" type="password"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>password</md-icon>
                  <label>New Password</label>
                  <md-input v-model="newPassword1" type="password"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>password</md-icon>
                  <label>Re-enter New Password</label>
                  <md-input v-model="newPassword2" type="password"></md-input>
                </md-field>
              </template>

              <p
                slot="description"
                class="description text-danger"
                v-if="!checkSame"
              >
                Passwords don't match
              </p>
              <md-button
                @click="pressed()"
                slot="footer"
                class="md-simple md-success md-lg"
                style="margin:0px;"
                :disabled="!checkSame"
              >
                Save Changes
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components/";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";

export default {
  name: "change-password",
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      oldPassword: "",
      newPassword1: "",
      newPassword2: ""
    };
  },
  methods: {
    pressed() {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.email);
      console.log(this.oldPassword);
      const credential = EmailAuthProvider.credential(
        user.email,
        this.oldPassword
      );
      // console.log(credential);
      const newPassword = this.newPassword1;
      console.log(newPassword);
      reauthenticateWithCredential(user, credential)
        .then(() => {
          updatePassword(user, newPassword)
            .then(() => {
              console.log("password changed");
              window.alert(
                "Password successfully changed!\nYou will now be redirected to the home page :D"
              );
              this.$router.push({ name: "landing" });
            })
            .catch(error => {
              console.log("error occurred");
              window.alert(error);
            });
        })
        .catch(error => {
          console.log("error");
          window.alert(error);
        });
      this.newPassword1 = "";
      this.newPassword2 = "";
      this.oldPassword = "";
    }
    // after pressed, redirect user back to landing page
    // have alert box that pops up saying password has been successfully changed
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/sg4.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    checkSame() {
      return this.newPassword1 === this.newPassword2;
    }
  }
};
</script>

<style lang="css"></style>
