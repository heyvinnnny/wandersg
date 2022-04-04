<template>
  <div>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 450px;">
      <gmap-marker :key="index" , :position="m.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      center: { lat: 1.2789, lng: 103.8536 }
    };
  },
  props: {
    latitude: Number,
    longitude: Number
  },
  methods: {
    addMarker() {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
    }
  }
};
</script>
