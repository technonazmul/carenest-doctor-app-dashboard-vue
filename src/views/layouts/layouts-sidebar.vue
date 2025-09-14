<template>
  <!-- Sidenav Menu Start -->
  <div class="sidebar" id="sidebar">
    <!-- Start Logo -->
    <div class="sidebar-logo">
      <div>
        <!-- Logo Normal -->
        <router-link to="/dashboard/" class="logo logo-normal">
          <img
            :src="logoUrl"
            alt="Logo"
            @error="handleImageError"
            v-if="!loading"
          />
        </router-link>

        <!-- Logo Small -->
        <router-link to="/dashboard/" class="logo-small">
          <img
            :src="logoUrl"
            alt="Logo"
            @error="handleImageError"
            v-if="!loading"
          />
        </router-link>

        <!-- Logo Dark -->
        <router-link to="/dashboard/" class="dark-logo">
          <img
            :src="logoUrl"
            alt="Logo"
            @error="handleImageError"
            v-if="!loading"
          />
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
      <simplebar id="scrollbar" class="h-100 pb-5" ref="scrollbar">
        <div id="sidebar-menu" class="sidebar-menu">
          <sidebar-menu></sidebar-menu>
        </div>
      </simplebar>
    </div>
  </div>
  <!-- Sidenav Menu End -->
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { useSettings } from "@/composables/useSettings";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
  components: {
    simplebar,
  },
  setup() {
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;
    const { getCurrencySymbol, formatCurrency } = useSettings();

    return {
      apiBase,
      adminToken,
      apiBaseUrl,
      getCurrencySymbol,
      formatCurrency,
    };
  },
  data() {
    return {
      logoUrl: null,
      settings: null,
      loading: true,
    };
  },
  async mounted() {
    this.initMouseoverListener();
    await this.fetchSettings();
  },
  methods: {
    async fetchSettings() {
      try {
        this.loading = true;
        const response = await axios.get(`${this.apiBaseUrl}/settings`, {
          headers: {
            Authorization: `Bearer ${this.adminToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data.success && response.data.data) {
          this.settings = response.data.data;

          // Set logo URL from API response
          if (this.settings.general?.logo?.filename) {
            // Construct the logo URL - you may need to adjust this based on your server setup
            this.logoUrl = `${this.apiBase}/uploads/settings/${this.settings.general.logo.filename}`;
          }
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
        // Keep logoUrl as null to fallback to default images
      } finally {
        this.loading = false;
      }
    },

    handleImageError(event) {
      // Fallback to default logo if API logo fails to load
      console.warn("Failed to load logo from API, falling back to default");
      event.target.src = "@/assets/img/logo.svg";
    },

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

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px; /* Adjust based on your logo height */
}

.logo-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.2rem;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.logo-container img {
  max-width: 100%;
  height: auto;
}
</style>
