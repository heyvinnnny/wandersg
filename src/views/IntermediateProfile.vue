<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Continue creating your profile</h3>
                  <base-alert type="success">You're almost done!</base-alert>
                  <!-- <h6>Designer</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button> -->
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <h3 class="title">
              Please select your preferences for attractions:
            </h3>
          </div>
          <div>
            <div class="md-layout md-gutter md-alignment-top-center">
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[0].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title" style="text-align:center;" id="adventure">
                          Adventure
                        </span>
                      </md-card-header>
                      <md-card-actions>
                        <md-button class="adventure" @click="pressed1" v-if="!this.adventure">Select</md-button>
                        <md-button @click="unpressed1" v-else>Remove</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[1].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title" style="text-align:center;">
                          Animals
                        </span>
                      </md-card-header>
                      <md-card-actions>
                        <md-button>Select</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                  @
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[2].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <!-- <md-card-header style="background-color:rgba(255,255,255,0);"> -->
                      <span class="md-title" style="text-align:center;">
                        Children
                      </span>
                      <!-- </md-card-header> -->
                      <md-card-actions>
                        <md-button md-with-hover>Select</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                  @
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[3].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <!-- <md-card-header style="background-color:rgba(255,255,255,0);"> -->
                      <span class="md-title" style="text-align:center;">
                        Family
                      </span>
                      <!-- </md-card-header> -->
                      <md-card-actions>
                        <md-button md-with-hover>Select</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                  @
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[4].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <!-- <md-card-header style="background-color:rgba(255,255,255,0);"> -->
                      <span class="md-title" style="text-align:center;">
                        Fantasy
                      </span>
                      <!-- </md-card-header> -->
                      <md-card-actions>
                        <md-button md-with-hover>Select</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
              <div class="md-layout-item ml-auto">
                <md-card
                  md-with-hover
                  style="width: 320px; margin: 4px; display: inline-block; vertical-align: top;"
                  @
                >
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                      <img
                        :src="tabPane1[5].image"
                        class="rounded"
                        style="height:100%;"
                      />
                    </md-card-media>

                    <md-card-area>
                      <!-- <md-card-header style="background-color:rgba(255,255,255,0);"> -->
                      <span class="md-title" style="text-align:center;">
                        Food
                      </span>
                      <!-- </md-card-header> -->
                      <md-card-actions>
                        <md-button md-with-hover>Select</md-button>
                      </md-card-actions>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
  name: "profile2",
  components: {},
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/preferences/Adventure\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Animals\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Children\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Family\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Fantasy\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Food\ unclicked.jpg") }
      ],
      email: getAuth().currentUser.email,
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
    pressed1() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        this.adventure = true;
        console.log(this.email + "user adventure " + this.adventure);
      }
    },
    unpressed1() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        this.adventure = false;
        console.log(this.email + " adventure " + this.adventure)
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/blankprofile.webp")
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

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;
  }
}
</style>
