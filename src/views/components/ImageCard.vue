<template>
  <!-- <div class="flex-container">
    diaplay saved attractions
    <div class="wrapper">
      <div class="container">
        retrieve image from firebase
        <img class="top">
        <div class="bottom">
          <div class="left">
            <div class="details">
              retrieve title from firebase
              <h2 class="txt_products">...</h2>
              retrieve address from firebase
              <p>...</p>
              <md-button :href="pageUrl">Reserve</md-button>
            </div>
            <div class="save">
              <md-button class="md-primary md-just-icon md-round md-rose">
                <md-icon>favorite</md-icon>
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- diaplay saved attractions v-for to loop through all attractions saved-->
  <div class="flex-container">
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <!-- retrieve image from firebase -->
          <img src="" />
        </md-card-media>

        <md-card-header>
          <!-- retrieve title from firebase -->
          <h2 class="md-title"></h2>
        </md-card-header>

        <md-card-content>
          <!-- retrieve address from firebase -->
        </md-card-content>
      </md-card-area>

      <md-card-actions>
        <!-- add url to attractions -->
        <md-button
          class="md-primary"
          onclick="location.href='https://www.Google.com'"
        >
          Reserve
        </md-button>
        <!-- v-on:click to remove from wishlist -->
        <md-button class="md-primary md-just-icon md-round md-rose">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.md-card {
  width: 18%;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;
      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .md-icon {
      margin: 8px;
    }
  }

  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 5px;
      text-align: center;
    }
  }

  .md-primary {
    margin-right: 50%;
  }
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

/* .wrapper {
  flex: 1 0 21%;
  margin: 6px;
  height: 400px;
  background: transparent;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  transform: scale(0.93);
  transition: box-shadow 0.5s, transform 0.5s;
  z-index: 1000;
}

.wrapper :hover{
  transform: scale(1);
  box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
}

.wrapper .container{
  width: 100%;
  height: 100%;
}

.wrapper .container .top{
  height: 70%;
  width: 100%;
  background-size: 100%;
}
.wrapper .container .bottom{
  width: 100%;
  height: 30%;
  transition: transform 0.5s;
}

.wrapper .container .bottom .left{
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: relative;
  float: left;
}

.wrapper .container .bottom .left .reserve{
  padding-left: 15px;
}


.wrapper .container .bottom .left .details{
  padding-left: 10px;
  padding-top: 3px;
  float: left;
}


.wrapper .container .bottom .left .details .txt_products{
  font-size: 16px;
}

p {
  font-size: 12px;
}

.wrapper .container .bottom .left .save{
  float: right;
  height: 90%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0,0,0,0.3);
}
.wrapper .container .bottom .left .save i{
  font-size: 30px;
  padding: 40px 20px 20px 20px;
  color: red;
  transition: transform 0.5s;
} */
</style>
