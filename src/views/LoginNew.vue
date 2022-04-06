<template>
  <div>
    Login
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button>Login</button>
      <div class="error" v-if="error">{{ error.message }}</div>
      <span
        >Need an account? Register
        <router-link to="/registernew">Register</router-link></span
      >
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
