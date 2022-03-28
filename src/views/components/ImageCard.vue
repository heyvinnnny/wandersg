<template>
  <!-- diaplay saved attractions v-for to loop through all attractions saved-->
  <!-- <div class="flex-container">
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9"> -->
  <!-- retrieve image from firebase -->
  <!-- <img src="" />
        </md-card-media>

        <md-card-content> -->
  <!-- retrieve title from firebase -->
  <!-- <h2 class="md-title"></h2> -->
  <!-- retrieve address from firebase -->
  <!-- </md-card-content>
      </md-card-area>

      <md-card-actions> -->
  <!-- add url to attractions -->
  <!-- <md-button
          class="md-primary"
          onclick="location.href='https://www.Google.com'"
        >
          Reserve
        </md-button> -->
  <!-- v-on:click to remove from wishlist -->
  <!-- <md-button class="md-primary md-just-icon md-round md-rose">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div> -->

  <div class="wrapper">
    <img class="top" :src="image" />
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h2 class="txt_products">{{ name }}</h2>
          <p>{{ address }}</p>
        </div>
        <div class="reserve">
          <md-button class="md-primary" v-on:click="redirect(website)">
            Reserve
          </md-button>
        </div>
      </div>
      <div class="right">
        <div class="buy">
          <md-button class="md-primary md-just-icon md-round"
            ><md-icon>favorite</md-icon></md-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    image: String,
    name: String,
    address: String,
    website: String
  },
  methods: {
    redirect(url) {
      window.location = url;
    }
  }
};
</script>

<style lang="scss" scoped>
// .md-card {
//   width: 18%;
//   margin: 10px;
//   display: inline-block;
//   vertical-align: top;
// }

// .md-card-example {
//   .md-subhead {
//     .md-icon {
//       $size: 16%;
//       width: $size;
//       min-width: $size;
//       height: $size;
//       font-size: $size !important;
//     }

//     span {
//       vertical-align: middle;
//     }
//   }

//   .card-reservation {
//     margin-top: 8px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .md-icon {
//       margin: 10px;
//     }
//   }

//   .md-button-group {
//     display: flex;

//     .md-button {
//       min-width: 60px;
//       border-radius: 5px;
//       text-align: center;
//     }
//   }

//   .md-primary {
//     margin-left: 5%;
//   }
// }

// .flex-container {
//   display: flex;
//   flex-wrap: wrap;
//   margin-bottom: 20px;
// }

.wrapper {
  // float: left;
  // flex: 1 0 21%;
  flex-basis: 25%;
  margin: 6px;
  height: 450px;
  background: transparent;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  transform: scale(0.93);
  transition: box-shadow 0.5s, transform 0.5s;
  z-index: 1000;
  background: #f1f1f1;
}

.wrapper:hover {
  transform: scale(1);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.wrapper .top {
  height: 50%;
  width: 100%;
  background-size: 100%;
  position: relative;
}
.wrapper .bottom {
  width: 100%;
  height: 30%;
  transition: transform 0.5s;
  position: relative;
  background: #f1f1f1;
}

.wrapper .bottom .left {
  height: 100%;
  width: 70%;
  background: #f1f1f1;
  position: relative;
  float: left;
}

.wrapper .bottom .left .details {
  padding-left: 25px;
  padding-top: 8px;
  float: left;
  width: 75%;
  background: #f1f1f1;
}

.wrapper .bottom .left .details .txt_products {
  font-size: 20px;
  background: #f1f1f1;
}

.wrapper .bottom .left .reserve {
  background: #f1f1f1;
  position: fixed;
  bottom: 15px;
  left: 15px;
}

p {
  font-size: 15px;
  background: #f1f1f1;
}

.wrapper .bottom .right {
  height: 100%;
  width: 30%;
  background: #f1f1f1;
  position: relative;
  float: right;
}

.wrapper .bottom .right .buy {
  float: right;
  display: flex;
  height: 100%;
  width: 70%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.4);
}
.wrapper .bottom .right .buy {
  font-size: 20px;
  padding: 12px;
  color: black;
  transition: transform 0.5s;
  background: #f1f1f1;
}

.wrapper .bottom .right .buy:hover i {
  transform: scale(1.5);
}
</style>
