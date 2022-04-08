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
                    id="myImg"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <form>
                    <div>
                      <label for="image_uploads" class="title">
                        Change Profile Picture:
                      </label>
                      <br />
                      <input
                        type="file"
                        @change="chooseFile"
                        accept="image/*"
                        id="image_uploads"
                        name="image_uploads"
                      />
                    </div>
                  </form>
                  <md-button
                    @click="uploadImage()"
                    class="md-simple md-success md-lg"
                    style="margin:0px;"
                    :disabled="checkFile"
                  >
                    Save Changes
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="description text-center">
              <h3 class="title">
                Change your preferences for attractions:
              </h3>
            </div>
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
                :name="Arts"
                :image="tabPane1[2].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Asian"
                :image="tabPane1[3].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Cafe"
                :image="tabPane1[4].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Family"
                :image="tabPane1[5].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Lifestyle"
                :image="tabPane1[6].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Mediterranean"
                :image="tabPane1[7].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Nature"
                :image="tabPane1[8].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Romantic"
                :image="tabPane1[9].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Social"
                :image="tabPane1[10].image"
              ></PreferenceCard>
              <PreferenceCard
                :name="Western"
                :image="tabPane1[11].image"
              ></PreferenceCard>
            </div>
            <div class="container">
              <md-button
                @click="register()"
                class="md-simple md-success md-lg"
                style="margin:0px;"
              >
                <h3>Save Changes</h3>
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Tabs } from "@/components";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getFirestore
} from "firebase/firestore";
import { firebaseApp } from "../firebase.js";
import PreferenceCard from "@/views/components/PreferenceCard.vue";

const db = getFirestore(firebaseApp);

export default {
  components: {
    PreferenceCard
  },
  bodyClass: "profile-page",
  data() {
    return {
      file: undefined,
      tabPane1: [
        { image: require("@/assets/img/preferences/Adventure\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Animals\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Arts\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Asian\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Cafe\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Family\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Lifestyle\ unclicked.jpg") },
        {
          image: require("@/assets/img/preferences/Mediterranean\ unclicked.jpg")
        },
        { image: require("@/assets/img/preferences/Nature\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Romantic\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Social\ unclicked.jpg") },
        { image: require("@/assets/img/preferences/Western\ unclicked.jpg") }
      ],
      email: getAuth().currentUser.email,
      adventure: false,
      Adventure: "Adventure",
      animals: false,
      Animals: "Animals",
      arts: false,
      Arts: "Arts",
      asian: false,
      Asian: "Asian",
      cafe: false,
      Cafe: "Cafe",
      family: false,
      Family: "Family",
      lifestyle: false,
      Lifestyle: "Lifestyle",
      mediterranean: false,
      Mediterranean: "Mediterranean",
      nature: false,
      Nature: "Nature",
      romantic: false,
      Romantic: "Romantic",
      social: false,
      Social: "Social",
      western: false,
      Western: "Western"
    };
  },
  methods: {
    chooseFile(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    uploadImage() {
      const auth = getAuth();
      const storage = getStorage();
      const storageRef = ref(
        storage,
        "users/" + auth.currentUser.uid + "/profile.jpg"
      );
      uploadBytes(storageRef, this.file).then(snapshot => {
        console.log("Uploaded a blob or file!");
        window.alert(
          "You have successfully changed your profile picture!\nReloading this page..."
        );
        this.$router.go();
      });
      console.log("uploadImage");
    },
    register() {
      let z = setDoc(
        doc(db, "users", String(this.email), "preference", "preferences"),
        {
          Adventure: this.adventure,
          Animals: this.animals,
          Arts: this.arts,
          Asian: this.asian,
          Cafe: this.cafe,
          Family: this.family,
          Lifestyle: this.lifestyle,
          Mediterranean: this.mediterranean,
          Nature: this.nature,
          Romantic: this.romantic,
          Social: this.social,
          Western: this.western
        }
      );
      console.log("user with email:" + this.email + " created");
      this.$router.push({ name: "landing" });
    },
    setupFirebase() {
      const auth = getAuth();
      const user = auth.currentUser;
      const storage = getStorage();
      const storageRef = ref(storage, "users/" + user.uid + "/profile.jpg");
      getDownloadURL(storageRef)
        .then(url => {
          const img = document.getElementById("myImg");
          console.log(url);
          img.setAttribute("src", url);
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    checkFile() {
      return this.file == undefined;
    }
  },
  mounted() {
    this.setupFirebase();
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

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
