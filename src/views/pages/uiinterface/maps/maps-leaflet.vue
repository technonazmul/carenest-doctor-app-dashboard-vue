<template>
  <layouts-header :title="title" :text="text" :text1="text1" />
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Leaflet Maps</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Leaflet Map</div>
            </div>
            <div class="card-body">
              <div id="map" style="height: 400px"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Map With Markers, Circles, and Polygons</div>
            </div>
            <div class="card-body">
              <div id="map1" style="height: 400px"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Map With Popup</div>
            </div>
            <div class="card-body">
              <div id="map-popup" style="height: 400px"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Map With Custom Icon</div>
            </div>
            <div class="card-body">
              <div id="map-custom-icon" style="height: 400px"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Interactive Choropleth Map</div>
            </div>
            <div class="card-body">
              <div id="interactive-map" style="height: 400px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  data() {
    return {
      title: "Home",
      text: "Vector Maps",
      text1: "Maps",
    };
  },
  mounted() {
    this.initMaps();
  },
  methods: {
    initMaps() {
      // Initialize the first map
      const map1 = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map1);

      // Initialize the second map with markers, circles, and polygons
      const map2 = L.map("map1").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile .openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map2);
      L.marker([51.5, -0.09]).addTo(map2).bindPopup("A marker").openPopup();
      L.circle([51.508, -0.11], { radius: 200 }).addTo(map2);
      L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ]).addTo(map2);

      // Initialize the third map with popup
      const mapPopup = L.map("map-popup").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapPopup);
      L.marker([51.5, -0.09]).addTo(mapPopup).bindPopup("Popup Example").openPopup();

      // Initialize the fourth map with custom icon
      const mapCustomIcon = L.map("map-custom-icon").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapCustomIcon);
      const customIcon = L.icon({
        iconUrl: "https://example.com/custom-icon.png",
        iconSize: [38, 38],
        iconAnchor: [22, 38],
        popupAnchor: [-3, -76],
      });
      L.marker([51.5, -0.09], { icon: customIcon }).addTo(mapCustomIcon);

      // Initialize the fifth map with choropleth data (simplified)
      const mapChoropleth = L.map("interactive-map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapChoropleth);

      // Example of Choropleth
      // const geoJsonData = {
      //   /* your geoJSON data */
      // };
      L.geoJSON().addTo(mapChoropleth);
    },
  },
};
</script>

<style>
#map,
#map1,
#map-popup,
#map-custom-icon,
#interactive-map {
  height: 400px; /* Set a height for the maps */
}
</style>
