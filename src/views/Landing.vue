<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Your Adventure Begins With Us.</h1>
            <h4>
              An all-in-one Singapore Itinerary Planner, designed to meet your
              every need.
            </h4>
            <br />
            <md-button
              href="#/register"
              class="md-success md-lg"
              v-if="!loggedIn"
              ><i class="fas fa-play"></i>Register now</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" id="about">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">About Us</h2>
              <h5 class="description">
                Wander@SG is a one-stop Singapore itinerary planner that aims to
                provide greater convenience to Singaporeans eager to spend a fun
                day out in Singapore. Here at Wander@SG, our team has prepared
                everything you would possibly need to plan a fun day out in
                Singapore. If you still miss something, let us know and we will
                try to include it in future updates.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-primary">
                    <md-icon>fact_check</md-icon>
                  </div>
                  <h4 class="info-title">Tell Us More</h4>
                  <p>
                    Complete our quick onboarding quiz when you first create
                    your account to let us know what types of attractions and
                    activities you are interested in.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>android</md-icon>
                  </div>
                  <h4 class="info-title">Customized Suggestions</h4>
                  <p>
                    Our proprietary algorithm will recommend a personalized
                    collection of attractions and activities tailored to your
                    indicated interests.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>book_online</md-icon>
                  </div>
                  <h4 class="info-title">Save and Book</h4>
                  <p>
                    Bookmark attractions and activities, find out additional
                    information, and make bookings all from our one-stop
                    web-app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
              <h2 class="title text-center">Trending Activities</h2>
              <md-card>
                <carousel
                  :per-page="1"
                  loop
                  :speed="700"
                  autoplay
                  :autoplay-timeout="5000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                >
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Gardens By The Bay
                      </h4>
                    </div>
                    <img :src="carousel1" alt="carousel1" />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Newton Food Centre
                      </h4>
                    </div>
                    <img
                      :src="carousel2"
                      alt="carousel2"
                      class="img-raised img-fluid"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Universal Studios Singapore
                      </h4>
                    </div>
                    <img :src="carousel3" alt="carousel3" />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="container">
          <h2 class="title">Trending Tiktok Videos</h2>
          <div
            class="parent"
            style="
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;"
          >
            <div
              class="child"
              style="display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;"
            >
              <video
                src="https://v16-webapp.tiktok.com/b66b3b570d24bebe9e79c143f4e92cab/624f3ba9/video/tos/alisg/tos-alisg-pve-0037/16944323e63e49069e6e4be98604faf8/?a=1988&amp;br=3058&amp;bt=1529&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=eXd.6Hy2Myq8ZyNqGwe2NKkhml7Gb&amp;l=2022040713291501024406903501287B0C&amp;lr=tiktok&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ajhteTw6Znh3NzMzODgzNEApPGZpNjQ1Zzw6N2llPGU2OWcwcjAycjQwamBgLS1kLy1zczExM2IzMGMwNl42XzIuMl46Yw%3D%3D&amp;vl=&amp;vr="
                playsinline=""
                controls=""
                class="tiktok-1sm3sg-VideoBasic e1yey0rl4"
                style="height: 500px; border: 0px none; width: 450px; margin-top: -55px; margin-left: 5px; margin-right: 0px; "
              ></video>
            </div>
            <div
              class="child"
              style="display: inline-block;
              padding: 1rem 1rem;
              vertical-align: middle;"
            >
              <video
                src="https://v16-webapp.tiktok.com/1c55982e46ee5efde8cf906ad7480112/624f3c68/video/tos/alisg/tos-alisg-pve-0037/0bed5082626a40c19bd3cf822592fd90/?a=1988&amp;br=3006&amp;bt=1503&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=eXd.6Hy2Myq8ZBMqGwe2N5ZQml7Gb&amp;l=202204071332150102450041490A28513C&amp;lr=tiktok&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anlvOTo6Zjo5OTMzODgzNEApZjdkNzw3NTxlNztlPDg8aWdkMGRicjQwcHBgLS1kLy1zc14vYTMwL19gYS80YC9jNjI6Yw%3D%3D&amp;vl=&amp;vr="
                playsinline=""
                controls=""
                class="tiktok-1sm3sg-VideoBasic e1yey0rl4"
                style="height: 500px; border: 0px none; width: 450px; margin-top: -55px; margin-left: 5px; margin-right: 0px; "
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="container">
          <h2 class="title">Our Team</h2>
          <div class="team">
            <div class="md-layout">
              <!-- start of team member 1 -->
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Chua Wee Hng
                      <br />
                      <small class="card-description text-muted">Founder</small>
                    </h4>
                    <!-- <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content> -->

                    <md-card-actions class="text-center">
                      <!-- <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button> -->
                      <md-button
                        onclick="window.open('https://www.linkedin.com/in/wee-hng-chua-495616221/', '_blank');"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <!-- end of team member 1 -->

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Isaac Hay
                      <br />
                      <small class="card-description text-muted">CTO</small>
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        onclick="window.open('https://www.linkedin.com/in/isaac-hay-81a7261a7/', '_blank');"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Kevin Yew
                      <br />
                      <small class="card-description text-muted"
                        >Team Leader</small
                      >
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg4"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Elton Ng
                      <br />
                      <small class="card-description text-muted"
                        >Lead Developer</small
                      >
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        onclick="window.open('https://www.linkedin.com/in/elton-ng-aa81091b7/', '_blank');"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg5"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Oliver Gui
                      <br />
                      <small class="card-description text-muted"
                        >Solutions Architect</small
                      >
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        onclick="window.open('https://www.linkedin.com/in/oliver-gui/', '_blank');"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will responde get back to you in a
                couple of hours.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">From the Blog</h2>
              <h5 class="description">
                Wander@SG curates and recommends a collection of blog articles
                on the hottest places to go to in Singapore at the moment! These
                cover a variety of interests, from scenic attractions to the
                tastiest food in town!
              </h5>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <!-- <test-register />
    <top-header />
    <test-login /> -->
  </div>
</template>

<script>
// import TestRegister from "./components/TestRegister.vue";
// import TopHeader from "./components/TopHeader.vue";
// import TestLogin from "./components/TestLogin.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  bodyClass: "landing-page",
  // components: {
  //   "test-register": TestRegister,
  //   "top-header": TopHeader,
  //   "test-login": TestLogin
  // },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/sg3.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/weehng.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/isaac.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kevin.png")
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/faces/elton.jpg")
    },
    teamImg5: {
      type: String,
      default: require("@/assets/img/faces/oliver.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      carousel1: require("@/assets/img/gbtb.jpg"),
      carousel2: require("@/assets/img/newton.jpg"),
      carousel3: require("@/assets/img/uss.jpg"),
      loggedIn: false
    };
  },
  methods: {
    setupFirebase() {
      const auth = getAuth();
      const user = auth.currentUser;
      onAuthStateChanged(auth, user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
          console.log(this.loggedIn);
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
          console.log(this.loggedIn);
        }
      });
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    this.setupFirebase();
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
