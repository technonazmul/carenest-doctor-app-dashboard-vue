<template>
  <!-- Topbar Start -->
  <header class="navbar-header">
    <div class="page-container topbar-menu">
      <div class="d-flex align-items-center gap-2">
        <!-- Logo -->
        <router-link to="/dashboard/admin-dashboard" class="logo">
          <!-- Logo Normal -->
          <span class="logo-light">
            <span class="logo-lg"><img src="@/assets/img/logo.svg" alt="logo" /></span>
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
        <a id="mobile_btn" class="mobile-btn" href="#sidebar" @click="toggleSidebar1">
          <i class="ti ti-menu-deep fs-24"></i>
        </a>

        <button class="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn2">
          <i class="ti ti-arrow-right"></i>
        </button>

        <!-- Search -->
        <div class="me-auto d-flex align-items-center header-search d-lg-flex d-none">
          <!-- Search -->
          <div class="input-icon-start position-relative me-2">
            <span class="input-icon-addon">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" class="form-control shadow-sm" placeholder="Search" />
            <span
              class="input-icon-addon text-dark shadow fs-18 d-inline-flex p-0 header-search-icon"
              ><i class="ti ti-command"></i
            ></span>
          </div>
          <!-- /Search -->
        </div>
      </div>

      <div class="d-flex align-items-center">
        <!-- Search for Mobile -->
        <div class="header-item d-flex d-lg-none me-2">
          <button
            class="topbar-link btn btn-icon"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            type="button"
          >
            <i class="ti ti-search fs-16"></i>
          </button>
        </div>

        <!-- AI Assistance -->
        <a href="javascript:void(0);" class="btn btn-liner-gradient me-3 d-lg-flex d-none"
          >AI Assistance<i class="ti ti-chart-bubble-filled ms-1"></i
        ></a>

        <div class="header-item">
          <div class="dropdown me-2">
            <router-link to="/patient/patient-appointments" class="btn topbar-link"
              ><i class="ti ti-calendar-due"></i
            ></router-link>
          </div>
        </div>

        <div class="header-item">
          <div class="dropdown me-2">
            <router-link
              to="/patient/settings/patient-profile-settings"
              class="btn topbar-link"
              ><i class="ti ti-settings-2"></i
            ></router-link>
          </div>
        </div>

        <!-- Light/Dark Mode Button -->
        <div class="header-item d-none d-sm-flex me-2">
          <button
            class="topbar-link btn btn-icon topbar-link"
            id="light-dark-mode"
            type="button"
            @click="toggleDarkMode"
          >
            <i class="fs-16 ti" :class="[isDarkMode ? 'ti-sun' : 'ti-moon']"></i>
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
                        <span class="fw-medium text-dark">surgery</span> schedule.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
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
                        <span class="fw-medium text-dark">follow-up</span> report for
                        patient <span class="fw-medium text-dark">Emily</span>.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
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
                      <div class="d-flex justify-content-between align-items-center">
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
                        <span class="fw-medium text-dark">pre-visit</span> health
                        questionnaire.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
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
                  to="/patient/patient-notifications"
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
              src="@/assets/img/users/user-02.jpg"
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
            <div class="d-flex align-items-center bg-light rounded-3 p-2 mb-2">
              <img
                src="@/assets/img/users/user-02.jpg"
                class="rounded-circle"
                width="42"
                height="42"
                alt=""
              />
              <div class="ms-2">
                <p class="fw-medium text-dark mb-0">Carol Lam</p>
                <span class="d-block fs-13">Patient</span>
              </div>
            </div>

            <!-- Item-->
            <router-link
              to="/patient/settings/patient-profile-settings"
              class="dropdown-item"
            >
              <i class="ti ti-user-circle me-1 align-middle"></i>
              <span class="align-middle">Profile Settings</span>
            </router-link>

            <!-- item -->
            <div
              class="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0"
            >
              <label class="form-check-label" for="notify"
                ><i class="ti ti-bell me-1"></i>Notifications</label
              >
              <input
                class="form-check-input me-0"
                type="checkbox"
                role="switch"
                id="notify"
              />
            </div>

            <!-- Item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="ti ti-receipt me-1 align-middle"></i>
              <span class="align-middle">Activity Logs</span>
            </a>

            <!-- Item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="ti ti-help me-1 align-middle"></i>
              <span class="align-middle">Help & Support</span>
            </a>

            <!-- Item-->
            <div class="pt-2 mt-2 border-top">
              <router-link to="/" class="dropdown-item text-danger">
                <i class="ti ti-logout me-1 fs-17 align-middle"></i>
                <span class="align-middle">Log Out</span>
              </router-link>
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

export default {
  data() {
    return {};
  },
  methods: {
    toggleSidebar1() {
      const body = document.body;
      body.classList.toggle("slide-nav");
    },
  },
  setup() {
    const isDarkMode = ref(false);

    const setThemeAttribute = (enabled) => {
      document.documentElement.setAttribute("data-bs-theme", enabled ? "dark" : "light");
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

    onMounted(() => {
      initializeDarkMode();
    });

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
