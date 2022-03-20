<template>
  <div class="carousel-wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">You may like these...</h1>
            <h4>
              Fully customized day trip based on your interests
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Generate</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <VueSlickCarousel v-bind="settings">
      <div class="wrapper">
        <div class="container">
          <img class="top" src="@/assets/img/bg.jpg" alt="" />
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h2 class="txt_products">The Feather Blade</h2>
                <p>61 Tanjong Pagar Road, Singapore 088482</p>
                <br />
                <span class="text-span">Central</span>
                <span class="text-span">Steakhouse</span>
              </div>
              <div class="buy">
                <md-button class="md-primary md-just-icon md-round"
                  ><md-icon>favorite</md-icon></md-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <i class="fa fa-eye"></i>
          </div>
          <div class="contents">
            <h1>The Feather Blade</h1>
            <br />
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
      <div class="wrapper">
        <div class="container">
          <img class="top" src="@/assets/img/bg.jpg" alt="" />
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h2 class="txt_products">The Feather Blade</h2>
                <p>61 Tanjong Pagar Road, Singapore 088482</p>
                <br />
                <span class="text-span">Central</span>
                <span class="text-span">Steakhouse</span>
              </div>
              <div class="buy">
                <md-button class="md-primary md-just-icon md-round"
                  ><md-icon>favorite</md-icon></md-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <i class="fa fa-eye"></i>
          </div>
          <div class="contents">
            <h1>The Feather Blade</h1>
            <br />
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
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carousel",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
      }
    };
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

.products_body {
  background: transparent;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  height: 70vh;
}

.text {
  text-align: center;
  justify-content: center;
  font-size: 20px;
}
.text h1 {
  margin-top: 35px;
  color: black;
}

.text-span {
  padding-right: 10px;
  padding-left: 10px;
  line-height: 22px;
  display: inline-block;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: lightgrey;
}

.title h1 {
  margin-left: 20px;
  justify-content: center;
  color: black;
}

.container {
  width: 1024px;
  margin: 0 auto;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  width: 450px;
  height: 450px;
  background: transparent;
  margin: auto;
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

.wrapper .container {
  width: 100%;
  height: 100%;
}

.wrapper .container .top {
  height: 80%;
  width: 100%;
  background-size: 100%;
}
.wrapper .container .bottom {
  width: 100%;
  height: 20%;
  transition: transform 0.5s;
}

.wrapper .container .bottom .left {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: relative;
  float: left;
}

.wrapper .container .bottom .left .details {
  padding-left: 20px;
  padding-top: 8px;
  float: left;
  width: 70%;
}

.wrapper .container .bottom .left .details .txt_products {
  font-size: 16px;
}

p {
  font-size: 12px;
}

.wrapper .container .bottom .left .buy {
  float: right;
  height: 100%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
}
.wrapper .container .bottom .left .buy i {
  font-size: 30px;
  padding: 30px;
  color: black;
  transition: transform 0.5s;
}

.wrapper .container .bottom .left .buy:hover i {
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
  height: 80%;
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
</style>
