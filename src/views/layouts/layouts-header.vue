<template>
  <!-- Topbar Start -->
  <header class="navbar-header">
    <div class="page-container topbar-menu">
      <div class="d-flex align-items-center gap-2">
        <!-- Logo -->
        <router-link to="/dashboard/" class="logo">
          <!-- Logo Normal -->
          <span class="logo-light">
            <span class="logo-lg"
              ><img src="@/assets/img/logo.svg" alt="logo"
            /></span>
            <span class="logo-sm"
              ><img src="@/assets/img/logo-small.svg" alt="small logo"
            /></span>
          </span>

          <!-- Logo Dark -->
          <span class="logo-dark">
            <span class="logo-lg"
              ><img src="@/assets/img/logo-white.svg" alt="dark logo"
            /></span>
          </span>
        </router-link>

        <!-- Sidebar Mobile Button -->
        <a
          id="mobile_btn"
          class="mobile-btn"
          href="#sidebar"
          @click="toggleSidebar1"
        >
          <i class="ti ti-menu-deep fs-24"></i>
        </a>

        <button
          class="sidenav-toggle-btn btn border-0 p-0 active"
          id="toggle_btn2"
        >
          <i class="ti ti-arrow-right"></i>
        </button>
      </div>

      <div class="d-flex align-items-center">
        <!-- Appointment -->
        <div class="header-item">
          <div class="dropdown me-2">
            <router-link
              to="/appointments/appointments-list"
              class="btn topbar-link"
              ><i class="ti ti-calendar-due"></i
            ></router-link>
          </div>
        </div>
        <!-- Appointment -->

        <!-- Settings -->
        <div class="header-item">
          <div class="dropdown me-2">
            <router-link
              to="/account-settings/profile-settings"
              class="btn topbar-link"
              ><i class="ti ti-settings-2"></i
            ></router-link>
          </div>
        </div>
        <!-- Settings -->

        <!-- Light/Dark Mode Button -->
        <div class="header-item d-none d-sm-flex me-2">
          <button
            class="topbar-link btn btn-icon topbar-link"
            id="light-dark-mode"
            type="button"
            @click="toggleDarkMode"
          >
            <i
              class="fs-16 ti"
              :class="[isDarkMode ? 'ti-sun' : 'ti-moon']"
            ></i>
          </button>
        </div>

        <!-- Notification Dropdown -->
        <div class="header-item">
          <div class="dropdown me-3">
            <button
              class="topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none"
              data-bs-toggle="dropdown"
              data-bs-offset="0,24"
              type="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="ti ti-bell-check fs-16 animate-ring"></i>
              <span class="notification-badge"></span>
            </button>

            <div
              class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
              style="min-height: 300px"
            >
              <div class="p-2 border-bottom">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0 fs-16 fw-semibold">Notifications</h6>
                  </div>
                </div>
              </div>

              <!-- Notification Body -->
              <div
                class="notification-body position-relative z-2 rounded-0"
                data-simplebar
              >
                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-1"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-01.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Dr. Smith</p>
                      <p class="mb-1 text-wrap">
                        updated the
                        <span class="fw-medium text-dark">surgery</span>
                        schedule.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>4 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-1"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-2"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-06.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Dr. Patel</p>
                      <p class="mb-1 text-wrap">
                        completed a
                        <span class="fw-medium text-dark">follow-up</span>
                        report for patient
                        <span class="fw-medium text-dark">Emily</span>.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>8 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-2"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-3"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-02.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Emily</p>
                      <p class="mb-1 text-wrap">
                        booked an appointment with
                        <span class="fw-medium text-dark">Dr. Patel</span> for
                        <span class="fw-medium text-dark">April 15</span>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>15 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-3"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap"
                  id="notification-4"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-07.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Amelia</p>
                      <p class="mb-1 text-wrap">
                        completed the
                        <span class="fw-medium text-dark">pre-visit</span>
                        health questionnaire.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>20 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-4"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- View All-->
              <div class="p-2 rounded-bottom border-top text-center">
                <router-link
                  to="/notifications"
                  class="text-center text-decoration-underline fs-14 mb-0"
                >
                  View All Notifications
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- User Dropdown -->
        <div
          class="dropdown profile-dropdown d-flex align-items-center justify-content-center"
        >
          <a
            href="javascript:void(0);"
            class="topbar-link dropdown-toggle drop-arrow-none position-relative"
            data-bs-toggle="dropdown"
            data-bs-offset="0,22"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img
              src="@/assets/img/users/user-01.jpg"
              width="32"
              class="rounded-circle d-flex"
              alt="user-image"
            />
            <span class="online text-success"
              ><i
                class="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"
              ></i
            ></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
            <!-- Item-->
            <router-link
              to="/account-settings/profile-settings"
              class="dropdown-item"
            >
              <i class="ti ti-settings me-1 align-middle"></i>
              <span class="align-middle">Change Password</span>
            </router-link>

            <!-- Item-->
            <router-link to="/finance/transactions" class="dropdown-item">
              <i class="ti ti-transition-right me-1 align-middle"></i>
              <span class="align-middle">Transactions</span>
            </router-link>

            <!-- Item-->
            <div class="pt-2 mt-2 border-top">
              <a
                href="javascript:void(0);"
                class="dropdown-item text-danger"
                @click="handleLogout"
                :class="{ disabled: isLoggingOut }"
              >
                <span
                  v-if="isLoggingOut"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                ></span>
                <i v-else class="ti ti-logout me-1 fs-17 align-middle"></i>
                <span class="align-middle">{{
                  isLoggingOut ? "Logging Out..." : "Log Out"
                }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Topbar End -->

  <theme-settings></theme-settings>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

export default {
  name: "LayoutsHeader",
  setup() {
    const router = useRouter();
    const isDarkMode = ref(false);
    const isLoggingOut = ref(false);

    const setThemeAttribute = (enabled) => {
      document.documentElement.setAttribute(
        "data-bs-theme",
        enabled ? "dark" : "light"
      );
    };

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
      setThemeAttribute(isDarkMode.value);
    };

    const initializeDarkMode = () => {
      const darkMode = localStorage.getItem("dark");
      isDarkMode.value = darkMode === "enabled";
      setThemeAttribute(isDarkMode.value);
    };

    const handleLogout = async () => {
      if (isLoggingOut.value) return;

      try {
        isLoggingOut.value = true;

        // Clear all authentication-related cookies and localStorage
        clearAuthData();

        // Show success message if toast is available
        if (window.showToast) {
          window.showToast("Successfully logged out", "success");
        }

        // Small delay to show the logout message
        setTimeout(() => {
          // Redirect to login page
          router.push("/").then(() => {
            // Force page reload to clear any remaining state
            window.location.reload();
          });
        }, 500);
      } catch (error) {
        console.error("Error during logout:", error);

        // Even if there's an error, still clear data and redirect
        clearAuthData();

        if (window.showToast) {
          window.showToast("Logged out", "info");
        }

        router.push("/");
      } finally {
        isLoggingOut.value = false;
      }
    };

    const clearAuthData = () => {
      // Clear cookies
      Cookies.remove("adminToken");
      Cookies.remove("userToken");
      Cookies.remove("authToken");

      // Clear localStorage items that might contain auth data
      localStorage.removeItem("adminToken");
      localStorage.removeItem("userToken");
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("adminUser");

      // Clear sessionStorage as well
      sessionStorage.removeItem("adminToken");
      sessionStorage.removeItem("userToken");
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("adminUser");
    };

    const toggleSidebar1 = () => {
      const body = document.body;
      body.classList.toggle("slide-nav");
    };

    onMounted(() => {
      initializeDarkMode();
    });

    return {
      isDarkMode,
      isLoggingOut,
      toggleDarkMode,
      handleLogout,
      toggleSidebar1,
    };
  },
};
</script>

<style scoped>
.disabled {
  opacity: 0.6;
  cursor: not-allowed !important;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.dropdown-item.disabled:hover {
  background-color: transparent;
}
</style>
