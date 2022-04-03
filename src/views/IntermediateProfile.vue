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
              <PreferenceCard
                :name="Adventure"
                :image="tabPane1[0].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Animals"
                :image="tabPane1[1].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Children"
                :image="tabPane1[2].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Family"
                :image="tabPane1[3].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Fantasy"
                :image="tabPane1[4].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Food"
                :image="tabPane1[5].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Heritage"
                :image="tabPane1[6].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Lifestyle"
                :image="tabPane1[7].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Nature"
                :image="tabPane1[8].image"
              ></PreferenceCard>
            </div>
          </div>
          <md-button class="register md-success" @click="register">
            Register
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import PreferenceCard from "@/views/components/PreferenceCard.vue";
import { firebaseApp } from "../firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getFirestore
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "profile2",
  components: {
    PreferenceCard
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/preferences/Adventure\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Animals\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Children\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Family\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Fantasy\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Food\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Heritage\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Lifestyle\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Nature\ unclicked.jpg") }
      ],
      email: getAuth().currentUser.email,
      adventure: false,
      Adventure: "Adventure",
      animals: false,
      Animals: "Animals",
      children: false,
      Children: "Children",
      family: false,
      Family: "Family",
      fantasy: false,
      Fantasy: "Fantasy",
      food: false,
      Food: "Food",
      heritage: false,
      Heritage: "Heritage",
      lifestyle: false,
      Lifestyle: "Lifestyle",
      nature: false,
      Nature: "Nature",
      romantic: false,
      scifi: false,
      staycation: false
    };
  },
  methods: {
    register() {
      let z = setDoc(
        doc(db, "users", String(this.email), "preference", "preferences"),
        {
          Adventure: this.adventure,
          Animals: this.animals,
          Children: this.children,
          Family: this.family
        }
      );
      this.$router.push({ name: "landing" });
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
