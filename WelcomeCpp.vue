<template>
  <div class="container">
    <div class="wrapper">
      <img class="top" :src="image" alt="" />
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h2 class="txt_products">{{ name }}</h2>
            <p>{{ address }}</p>
            <span class="text-span">{{ category }}</span>
          </div>
          <div class="buy">
            <md-button class="md-primary md-just-icon md-round"
              ><md-icon>favorite</md-icon></md-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="contents">
        <!-- <h1>The Feather Blade</h1><br> -->
        <p>Price: ⭐️⭐️⭐️⭐️</p>
        <br />
        <p>Ambience: ⭐️⭐️⭐️</p>
        <br />
        <p>Food: ⭐️⭐️⭐️⭐️</p>
        <br />
        <p>Service: ⭐️⭐️⭐️</p>
        <br /><br />

        <p>Opening hours: 5:30 PM - 02:00 AM</p>
        <br />
        <p>Reservations: Recommended</p>
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
    category: String
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

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.container {
  width: 100%;
  height: 100%;
}

.info {
  display: inline-block;
  margin-left: 20px;
  /* margin: 0; */
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
  width: 400px;
  height: 400px;
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
  height: 80%;
  width: 100%;
  background-size: 100%;
  position: relative;
}
.wrapper .bottom {
  width: 100%;
  height: 20%;
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
</style>

<style lang="scss" scoped>
.flex-container {
  display:flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>