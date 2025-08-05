<template>
  <!-- Sidenav Menu Start -->
  <div class="sidebar" id="sidebar">
    <!-- Start Logo -->
    <div class="sidebar-logo">
      <div>
        <!-- Logo Normal -->
        <router-link to="/dashboard/" class="logo logo-normal">
          <img src="@/assets/img/logo.svg" alt="Logo" />
        </router-link>

        <!-- Logo Small -->
        <router-link to="/dashboard/" class="logo-small">
          <img src="@/assets/img/logo-small.svg" alt="Logo" />
        </router-link>

        <!-- Logo Dark -->
        <router-link to="/dashboard/" class="dark-logo">
          <img src="@/assets/img/logo-white.svg" alt="Logo" />
        </router-link>
      </div>
      <button
        class="sidenav-toggle-btn btn border-0 p-0 active"
        id="toggle_btn"
        @click="toggleSidebar"
      >
        <i class="ti ti-arrow-left"></i>
      </button>

      <!-- Sidebar Menu Close -->
      <button class="sidebar-close" @click="closeSidebar">
        <i class="ti ti-x align-middle"></i>
      </button>
    </div>
    <!-- End Logo -->

    <!-- Sidenav Menu -->
    <div class="sidebar-inner" data-simplebar>
      <simplebar id="scrollbar" class="h-100" ref="scrollbar">
        <div id="sidebar-menu" class="sidebar-menu">
          <sidebar-menu></sidebar-menu>
        </div>
        <div class="sidebar-footer border-top mt-3">
          <div class="trial-item mt-0 p-3 text-center">
            <div
              class="trial-item-icon rounded-4 mb-3 p-2 text-center shadow-sm d-inline-flex"
            >
              <img src="@/assets/img/icons/sidebar-icon.svg" alt="img" />
            </div>
            <div>
              <h6 class="fs-14 fw-semibold mb-1">Upgrade To Pro</h6>
              <p class="fs-13 mb-0">
                Check 1 min video and begin use Preclinic like a pro
              </p>
            </div>
            <a href="javascript:void(0);" class="close-icon shadow-sm"
              ><i class="ti ti-x"></i
            ></a>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
  <!-- Sidenav Menu End -->
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  data() {
    return {};
  },
  mounted() {
    this.initMouseoverListener();
  },
  methods: {
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    closeSidebar() {
      const body = document.body;
      body.classList.remove("slide-nav");
    },
    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar")) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
        } else if (body.classList.contains("expand-menu")) {
          body.classList.remove("expand-menu");
        }

        e.preventDefault();
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
};
</script>
