<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <!-- <h1 style="color:white;">Search</h1>
              <h3 style="color:white;">
                Search for your favourite activity and restaurant.
              </h3> -->
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic" style="">
        <ais-instant-search
          :search-client="searchClient"
          index-name="wander-restaurant"
        >
          <div
            class="left-panel"
            style="padding-left:20px; margin-left: 200px; font-family: monaco,Consolas,Lucida Console,monospace;"
          >
            <ais-clear-refinements style="color:palevioletred;" />
            <br />
            <h2>Restaurants</h2>
            <h3>Category</h3>
            <ais-refinement-list
              attribute="category"
              :transformItems="getStaticValues"
              style="color:palevioletred;"
            />

            <h3>District</h3>
            <ais-refinement-list
              attribute="district"
              :transformItems="getStaticValues1"
              style="color:palevioletred;"
            />

            <h3>Price</h3>
            <ais-refinement-list
              attribute="price"
              :transformItems="getStaticValues2"
              style="color:palevioletred;"
            />

            <!-- <ais-configure :hitsPerPage="8" /> -->
          </div>
          <div
            class="right-panel"
            style="color:palevioletred; padding-right:300px;"
          >
            <ais-search-box style="width:1000px; margin:auto;" />
            <div class="OutputResultsAndFilters">
              <div
                class="InterfaceDemoResultsZone withFiltersBlock editMode listDisplay"
              >
                <div class="ZoneHeader" style="width:1000px; margin:auto;">
                  <div class="HitsDetails">
                    <div class="NbHits">
                      <div class="ais-Stats">
                        <span
                          class="ais-Stats-text lined mb-4"
                          style="font-weight: bold; font-size: medium;"
                          >Results</span
                        >
                      </div>
                    </div>
                    <div class="DisplayConfiguration">
                      <!-- <div class="ToggleDisplay">
                  <span class="stl-tooltip-wrapper">
                    <button id="configure-grid-view-ui-builder" type="button" class="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle" aria-label="Grid view">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button></span>
                  <span class="stl-tooltip-wrapper">
                    <button id="configure-list-view-ui-builder" type="button" class="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle --active" aria-label="List view">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button></span></div></div> -->
                    </div>
                  </div>
                </div>
                <br />
                <ais-InfiniteHits style="width:1000px; margin:auto;">
                  <template
                    v-slot:item="{ item }"
                    class="InterfaceDemoHit"
                    style="height:300px;"
                  >
                    <!-- <h2>{{ item.activityname }}</h2> -->
                    <div class="Image" style="margin-right:20px">
                      <picture
                        class="stl-flex stl-items-center stl-justify-center"
                      >
                        <a :href="item.resID">
                          <img
                            :src="item.image"
                            align="left"
                            :alt="item.activityname"
                            style="height:110px;"
                          />
                        </a>
                      </picture>
                    </div>
                    <div class="Attributes">
                      <div class="FirstRow">
                        <div
                          class="PrimaryAttribute"
                          style="font-weight:bold; font-size:large;"
                        >
                          <ais-highlight
                            attribute="restaurantname"
                            :hit="item"
                            class="lined mb-4"
                            highlightedTagName="mark"
                          />
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="SecondaryAttribute">
                        <ais-snippet
                          attribute="description"
                          highlighted-tag-name="em"
                          :hit="item"
                        />
                      </div>
                      <br />
                      <div
                        class="ThirdAttribute"
                        style="font-family:verdana; color:purple"
                      >
                        <ais-highlight
                          attribute="category"
                          :hit="item"
                          highlightedTagName="mark"
                        />
                      </div>
                    </div>
                    <br />
                  </template>
                </ais-InfiniteHits>
              </div>
            </div>
            <ais-pagination />
          </div>
          <ais-configure
            :attributesToSnippet="'description'"
            snippetEllipsisText="..."
          />
        </ais-instant-search>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";

export default {
  components: {},
  name: "search",
  bodyClass: "search-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/fg5.jpg")
    },

    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      searchClient: algoliasearch(
        "5WRGX5KFTI",
        "a277e4b3c6038c981029fb3f8c0841f3"
      )
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    getStaticValues: items => {
      const staticValues = [
        "French",
        "Japanese",
        "Chinese",
        "International",
        "Western",
        "American",
        "Italian",
        "Peranakan",
        "European",
        "Bar",
        "Mediterranean",
        "Korean",
        "Asian"
      ];
      return staticValues.map(value => {
        const item = items.find(item => item.label === value);
        return (
          item || {
            label: value,
            value,
            count: 0,
            isRefined: false,
            highlighted: value
          }
        );
      });
    },
    getStaticValues1: items => {
      const staticValues = ["North", "South", "East", "West", "Central"];
      return staticValues.map(value => {
        const item = items.find(item => item.label === value);
        return (
          item || {
            label: value,
            value,
            count: 0,
            isRefined: false,
            highlighted: value
          }
        );
      });
    },
    getStaticValues2: items => {
      const staticValues = ["$$", "$$$", "$$$$", "$$$$$"];
      return staticValues.map(value => {
        const item = items.find(item => item.label === value);
        return (
          item || {
            label: value,
            value,
            count: 0,
            isRefined: false,
            highlighted: value
          }
        );
      });
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>

<style scoped>
h1,
.h1,
h2,
.h2,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

body {
  font-family: sans-serif;
  padding: 1em;
}

.InterfaceDemoHit .Attributes {
  padding: 16px 0;
  width: 100%;
}

.InterfaceDemoHit .Attributes .FirstRow {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.InterfaceDemoHit .ThirdAttribute {
  color: #5a5e9a;
}

.InterfaceDemoHit .PrimaryAttribute {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  max-height: 48px;
}

.InterfaceDemoHit .SecondaryAttribute {
  max-height: 40px;
}

.InterfaceDemoHit .LabelAttribute,
.InterfaceDemoHit .SecondaryAttribute,
.InterfaceDemoHit .ThirdAttribute {
  font-size: 14px;
  line-height: 20px;
}

.InterfaceDemoHit .SecondaryAttribute,
.InterfaceDemoHit .ThirdAttribute {
  margin-bottom: 12px;
}

.InterfaceDemoHit .PrimaryAttribute,
.InterfaceDemoHit .SecondaryAttribute,
.InterfaceDemoHit .ThirdAttribute {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
}

.ais-InfiniteHits {
  display: flex;
  flex-direction: column;
}

.ais-InfiniteHits-list {
  grid-template-columns: repeat(var(--gridNumColumns), var(--hitWidth));
  display: grid;
  gap: 16px;
}

.InterfaceDemoResultsZone.listDisplay .ais-InfiniteHits-list .InterfaceDemoHit {
  align-items: center;
  display: flex;
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  .InterfaceDemoResultsZone.listDisplay
    .ais-InfiniteHits-list
    .InterfaceDemoHit
    .Image {
    height: 152px;
    margin-right: 24px;
    width: 152px;
  }
}

.InterfaceDemoResultsZone.listDisplay
  .ais-InfiniteHits-list
  .InterfaceDemoHit
  .Image {
  height: 100%;
  margin-right: 16px;
  width: 89px;
}

.InterfaceDemoHit .Image {
  align-items: center;
  display: flex;
  height: 208px;
  justify-content: center;
  overflow: hidden;
}

@media (min-width: 768px) {
  .InterfaceDemoResultsZone.listDisplay .ais-InfiniteHits-list {
    --allColumnsWidth: calc(var(--gridNumColumns) * var(--hitWidth));
    --allGapsWidth: calc((var(--gridNumColumns) - 1) * var(--gapWidth));
    width: calc(var(--allColumnsWidth) + var(--allGapsWidth));
  }
}

.InterfaceDemoResultsZone .ais-InfiniteHits .ais-InfiniteHits-list {
  display: grid;
  gap: 16px;
}

.ais-InfiniteHits-item {
  overflow: hidden;
}

.InterfaceDemoResultsZone
  .ais-InfiniteHits
  .ais-InfiniteHits-list
  .ais-InfiniteHits-item {
  overflow: hidden;
}

@media (min-width: 1215px) {
  .InterfaceDemoResultsZone {
    --gridNumColumns: 3;
  }
}

.InterfaceDemoResultsZone {
  --hitWidth: 450px;
  --gapWidth: 16px;
  --oneColumnWidth: calc(var(--hitWidth) + var(--gapWidth));
  --twoColumnsWidth: calc(var(--oneColumnWidth) * 2);
  --gridNumColumns: 3;
  padding: 32px 24px;
}

.InterfaceDemoOutput .OutputResultsAndFilters .ZoneHeader {
  align-items: center;
  border-bottom: 1px solid #f5f5fa;
  display: flex;
  height: 60px;
  margin-bottom: 32px;
  padding-bottom: 24px;
}

.InterfaceDemoResultsZone .ZoneHeader {
  align-items: center;
  color: #5a5e9a;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 24px;
}

.InterfaceDemoResultsZone.editMode .ZoneHeader .HitsDetails {
  flex-grow: 1;
}

.InterfaceDemoResultsZone .HitsDetails {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.InterfaceDemoResultsZone .ZoneHeader .DisplayConfiguration {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
}

@media (min-width: 768px) {
  .InterfaceDemoResultsZone .ZoneHeader .DisplayConfiguration .ToggleDisplay {
    display: block;
  }
}

#configure-grid-view-ui-builder,
#configure-list-view-ui-builder {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 3px;
  color: #5a5e9a;
  cursor: pointer;
  display: flex;
  display: inline-flex;
  font-size: 1rem;
  height: 2rem;
  justify-content: center;
  position: relative;
  width: 2rem;
}

button,
select {
  text-transform: none;
}

button {
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
}

.ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
}

.ais-Hits-item {
  margin-right: 1em;
  height: 250px;
  width: 150px;
}

.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
}

.ais-Hits-item img {
  margin-right: 1em;
}

.hit-name {
  margin-bottom: 0.5em;
  color: palevioletred;
}

.hit-description {
  color: #888;
  font-size: 0.8em;
  margin-bottom: 0.5em;
}

.lined {
  position: relative;
  padding-bottom: 0.7rem;
}

.lined::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6.25rem;
  height: 2px;
  background: #4fbfa8;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}
</style>
