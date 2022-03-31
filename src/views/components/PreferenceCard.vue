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
          <md-card-header>
            <span class="md-title" style="text-align:center;" id="adventure">
              {{ name }}
            </span>
          </md-card-header>
          <md-card-actions>
            <md-button class="category" @click="pressed1" v-if="!this.category"
              >Select</md-button
            >
            <md-button @click="unpressed1" v-else>Remove</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  data() {
    return {
      email: getAuth().currentUser.email,
      category: false
    };
  },
  props: {
    image: String,
    name: String
  },
  methods: {
    pressed1() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        this.category = true;
        console.log(this.email + "user adventure " + this.category);
      }
    },
    unpressed1() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        this.category = false;
        console.log(this.email + " adventure " + this.category);
      }
    }
  }
};
</script>

<style></style>
