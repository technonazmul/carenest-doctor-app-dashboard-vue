<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper cardhead">
    <!-- Start Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Vector Map</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Map Section -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Basic Vector Map (Leaflet)</div>
            </div>
            <div class="card-body">
              <!-- Map Container -->
              <div id="map" style="height: 500px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "App",
  setup() {
    let map = null;

    // Map Data
    const mapData = {
      London: {
        lat: 51.505,
        lng: -0.09,
        popupText: "This is London",
      },
      NewYork: {
        lat: 40.7128,
        lng: -74.006,
        popupText: "This is New York",
      },
      Tokyo: {
        lat: 35.6762,
        lng: 139.6503,
        popupText: "This is Tokyo",
      },
    };

    onMounted(() => {
      // Initialize the map
      map = L.map("map").setView([51.505, -0.09], 2); // Default to London and zoom level 2

      // Add a tile layer (you can replace this with other providers like Mapbox, etc.)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

      // Add markers using the mapData
      for (const key in mapData) {
        const { lat, lng, popupText } = mapData[key];
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(popupText || key);
      }
    });

    onBeforeUnmount(() => {
      // Clean up map instance when component is destroyed
      if (map) {
        map.remove();
      }
    });

    return {
      title: "Home",
      text: "Vector Maps",
      text1: "Maps",
    };
  },
};
</script>
