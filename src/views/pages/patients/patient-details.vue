<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
      Start Page Content
  ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center p-4">
        <p>Loading patient data...</p>
      </div>

      <div v-else>
        <!-- page header start -->
        <div class="mb-4">
          <h6 class="fw-bold mb-0 d-flex align-items-center">
            <router-link to="/patients/patients-list" class="text-dark">
              <i class="ti ti-chevron-left me-1"></i>Patients
            </router-link>
          </h6>
        </div>
        <!-- page header end -->

        <!-- card start -->
        <div class="card">
          <div class="row align-items-end">
            <div class="col-xl-9 col-lg-8">
              <div
                class="d-sm-flex align-items-center position-relative z-0 overflow-hidden p-3"
              >
                <img
                  src="@/assets/img/icons/shape-01.svg"
                  alt="img"
                  class="z-n1 position-absolute end-0 top-0 d-none d-lg-flex"
                />
                <a
                  href="javascript:void(0);"
                  class="avatar avatar-xxxl patient-avatar me-2 flex-shrink-0"
                >
                  <img
                    :src="getPatientImageUrl(patient.image)"
                    alt="patient"
                    class="rounded"
                  />
                </a>
                <div>
                  <p class="text-primary mb-1">
                    #PT{{ String(patient.id).padStart(4, "0") }}
                  </p>
                  <h5 class="mb-1">
                    <a href="javascript:void(0);" class="fw-bold">{{
                      patient.name || "N/A"
                    }}</a>
                  </h5>
                  <p class="mb-3">{{ patient.email }}</p>
                  <div class="d-flex align-items-center flex-wrap">
                    <p
                      v-if="patient.phone"
                      class="mb-0 d-inline-flex align-items-center"
                    >
                      <i class="ti ti-phone me-1 text-dark"></i>Phone :
                      <span class="text-dark ms-1">{{ patient.phone }}</span>
                    </p>
                    <span
                      v-if="patient.phone && patient.createdAt"
                      class="mx-2 text-light"
                      >|</span
                    >
                    <p class="mb-0 d-inline-flex align-items-center">
                      <i class="ti ti-calendar-time me-1 text-dark"></i>Joined :
                      <span class="text-dark ms-1">{{
                        formatDate(patient.createdAt)
                      }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4">
              <div class="p-3 text-lg-end">
                <div class="mb-4">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14 me-2"
                  >
                    <i class="ti ti-phone"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14 me-2"
                  >
                    <i class="ti ti-message-circle"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14"
                  >
                    <i class="ti ti-video"></i>
                  </a>
                </div>
                <router-link
                  to="/appointments/new-appointment"
                  class="btn btn-primary"
                >
                  <i class="ti ti-calendar-event me-1"></i>Book Appointment
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card end -->

        <!-- row start -->
        <div class="row">
          <div class="col-xl-5 d-flex">
            <div class="card shadow-sm flex-fill w-100">
              <div class="card-header">
                <h5 class="fw-bold mb-0">
                  <i class="ti ti-user-star me-1"></i>About
                </h5>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"
                      >
                        <i class="ti ti-gender-male fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1">Gender</h6>
                        <p class="mb-0">
                          {{ patient.gender || "Not specified" }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"
                      >
                        <i class="ti ti-mail fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1">Email</h6>
                        <p class="mb-0 text-break">{{ patient.email }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-if="patient.phone" class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"
                      >
                        <i class="ti ti-phone fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1">Phone</h6>
                        <p class="mb-0">{{ patient.phone }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"
                      >
                        <i class="ti ti-calendar-check fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1">Status</h6>
                        <p class="mb-0">
                          <span
                            :class="
                              patient.isVerified
                                ? 'badge bg-success'
                                : 'badge bg-warning'
                            "
                          >
                            {{ patient.isVerified ? "Verified" : "Pending" }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7 d-flex">
            <div class="card shadow-sm flex-fill w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h5 class="fw-bold mb-0">
                  <i class="ti ti-activity me-1"></i>Recent Activity
                </h5>
                <small class="text-muted"
                  >Last updated: {{ formatDate(patient.createdAt) }}</small
                >
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-2 bg-primary bg-opacity-10 text-primary flex-shrink-0 me-2 border"
                      >
                        <i class="ti ti-calendar-plus fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1 text-truncate">
                          Member Since
                        </h6>
                        <p
                          class="mb-0 d-inline-flex align-items-center text-truncate"
                        >
                          <i
                            class="ti ti-point-filled me-1 text-success fs-18"
                          ></i>
                          {{ formatDateOnly(patient.createdAt) }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-2 bg-success bg-opacity-10 text-success flex-shrink-0 me-2 border"
                      >
                        <i class="ti ti-shield-check fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1 text-truncate">
                          Account Status
                        </h6>
                        <p
                          class="mb-0 d-inline-flex align-items-center text-truncate"
                        >
                          <i
                            :class="
                              patient.isVerified
                                ? 'ti ti-point-filled me-1 text-success fs-18'
                                : 'ti ti-point-filled me-1 text-warning fs-18'
                            "
                          ></i>
                          {{
                            patient.isVerified
                              ? "Active & Verified"
                              : "Pending Verification"
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-2 bg-info bg-opacity-10 text-info flex-shrink-0 me-2 border"
                      >
                        <i class="ti ti-id-badge fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1 text-truncate">
                          Patient ID
                        </h6>
                        <p
                          class="mb-0 d-inline-flex align-items-center text-truncate"
                        >
                          <i
                            class="ti ti-point-filled me-1 text-primary fs-18"
                          ></i>
                          #PT{{ String(patient.id).padStart(4, "0") }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-2 bg-warning bg-opacity-10 text-warning flex-shrink-0 me-2 border"
                      >
                        <i class="ti ti-clock fs-16"></i>
                      </span>
                      <div>
                        <h6 class="fs-13 fw-bold mb-1 text-truncate">
                          Last Login
                        </h6>
                        <p
                          class="mb-0 d-inline-flex align-items-center text-truncate"
                        >
                          <i
                            class="ti ti-point-filled me-1 text-info fs-18"
                          ></i>
                          Recently Active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- row end -->

        <!-- tab start -->
        <ul class="nav nav-tabs nav-bordered mb-3">
          <li class="nav-item">
            <a
              href="#appointments"
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link active bg-transparent"
            >
              <span>Appointments</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#transactions"
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link bg-transparent"
            >
              <span>Transactions</span>
            </a>
          </li>
        </ul>
        <!-- tab end -->

        <!-- tab content start -->
        <div class="tab-content">
          <div class="tab-pane show active" id="appointments">
            <appointment-details-table
              :patient-id="patientId"
            ></appointment-details-table>
          </div>
          <div class="tab-pane" id="transactions">
            <transactions-details-table
              :patient-id="patientId"
            ></transactions-details-table>
          </div>
        </div>
        <!-- tab content end -->
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
      End Page Content
  ========================= -->
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default {
  setup() {
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;

    return {
      adminToken,
      apiBaseUrl,
      apiBase,
    };
  },

  data() {
    return {
      isLoading: true,
      patientId: null,
      patient: {
        id: null,
        name: "",
        email: "",
        phone: "",
        gender: "",
        image: null,
        isVerified: false,
        createdAt: null,
      },
    };
  },

  async mounted() {
    // Get the patient ID from the route parameters
    this.patientId = this.$route.params.id;

    if (this.patientId) {
      await this.fetchPatientData();
    } else {
      toastr.error("Patient ID not found");
      this.$router.push("/patients/patients-list");
    }
  },

  methods: {
    // Get auth headers for requests
    getAuthHeaders() {
      return {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      };
    },

    // Fetch patient data
    async fetchPatientData() {
      try {
        this.isLoading = true;
        const authHeaders = this.getAuthHeaders();

        const response = await axios.get(
          `${this.apiBaseUrl}/user/${this.patientId}`,
          authHeaders
        );

        const patientData = response.data;

        // Populate patient object with API data
        this.patient = {
          id: patientData.id || this.patientId,
          name: patientData.name || "",
          email: patientData.email || "",
          phone: patientData.phone || "",
          gender: patientData.gender || "",
          image: patientData.image || null,
          isVerified: patientData.isVerified || false,
          createdAt: patientData.createdAt,
        };
      } catch (error) {
        console.error("Error fetching patient data:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else if (error.response && error.response.status === 404) {
          toastr.error("Patient not found.");
          this.$router.push("/patients/patients-list");
        } else {
          toastr.error("Error loading patient data.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Get patient profile image URL
    getPatientImageUrl(image) {
      if (!image) {
        return `${this.apiBase}/uploads/no_profile_picture.jpg`;
      }
      return `${this.apiBase}/uploads/${image}`;
    },

    // Format date helper
    formatDate(dateString) {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },

    // Format date for DOB (without time)
    formatDateOnly(dateString) {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.avatar-xxxl {
  width: 120px;
  height: 120px;
}

.patient-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-break {
  word-break: break-word;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
  color: #000 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}
</style>
