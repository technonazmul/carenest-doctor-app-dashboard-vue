<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-lg-12">
          <!-- Page Header -->
          <div
            class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3"
          >
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-0 d-flex align-items-center">
                <router-link to="/doctors/doctors-grid">
                  <i class="ti ti-chevron-left me-1 fs-14"></i>Doctors
                </router-link>
              </h6>
            </div>
          </div>

          <!-- Doctor Profile Card -->
          <div class="card">
            <div
              class="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3"
            >
              <div
                class="d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3"
              >
                <div class="me-3 doctor-profile-img">
                  <img
                    :src="
                      doctor.image
                        ? `${apiBase}/uploads/${doctor.image}`
                        : `${apiBase}/uploads/default-doctor.jpg`
                    "
                    class="rounded avatar avatar-xxl"
                    alt="Doctor Image"
                    style="width: 80px; height: 80px; object-fit: cover"
                  />
                </div>
                <div class="flex-fill">
                  <div class="d-flex align-items-center mb-1">
                    <h6 class="mb-0 fw-semibold">{{ doctor.name || "N/A" }}</h6>
                    <span
                      class="badge border bg-white text-dark fw-medium ms-2"
                      v-if="selectedSpecialty"
                    >
                      <i class="ti ti-point-filled me-1 text-info"></i
                      >{{ selectedSpecialty.name }}
                    </span>
                  </div>
                  <span class="d-block mb-3 fs-13">{{
                    doctor.qualifications || "N/A"
                  }}</span>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 fs-13">
                      <i class="ti ti-building-hospital me-1"></i>
                      Department: {{ doctor.designationAndDepartment || "N/A" }}
                    </p>
                    <span class="badge badge-soft-success fw-medium ms-2">
                      <i class="ti ti-point-filled me-1 text-success"></i
                      >Available
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">Consultation Charge</p>
                <h6 class="fs-18 fw-bold mb-3">
                  {{ doctor.fee || "0" }}
                </h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <!-- Availability Section -->
              <div class="card">
                <div class="card-body">
                  <h5 class="fw-bold mb-3">Availability</h5>
                  <ul class="nav nav-tabs nav-bordered nav-border-bottom mb-3">
                    <li
                      class="nav-item flex-fill"
                      v-for="(slots, day) in doctor.timeSlots"
                      :key="day"
                    >
                      <a
                        class="nav-link text-center fw-semibold"
                        :class="{ active: activeDay === day }"
                        href="javascript:void(0);"
                        @click="setActiveDay(day)"
                      >
                        {{ day }}
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade active show">
                      <div
                        class="d-flex align-items-center flex-wrap gap-2"
                        v-if="doctor.timeSlots && doctor.timeSlots[activeDay]"
                      >
                        <span
                          v-for="slot in doctor.timeSlots[activeDay]"
                          :key="slot"
                          class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-2 text-dark"
                        >
                          {{ slot }}
                        </span>
                        <div
                          v-if="doctor.timeSlots[activeDay].length === 0"
                          class="text-muted"
                        >
                          No available slots for {{ activeDay }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Biography Section -->
              <div class="card" v-if="doctor.biography">
                <div class="card-body">
                  <h5 class="fw-bold mb-3">Biography</h5>
                  <p>{{ doctor.biography }}</p>
                </div>
              </div>

              <!-- Experience Section -->
              <div class="card" v-if="doctor.experience">
                <div class="card-body">
                  <h5 class="fw-bold mb-3">Experience</h5>
                  <div class="d-flex align-items-center">
                    <span class="me-2"><i class="ti ti-user-check"></i></span>
                    <h6 class="mb-0 fw-bold">
                      {{ doctor.experience }} Years of Experience
                    </h6>
                  </div>
                </div>
              </div>

              <!-- Specialties Section -->
              <div class="card" v-if="doctor.specialty">
                <div class="card-body">
                  <h5 class="fw-bold mb-3">Specialties</h5>
                  <p>{{ doctor.specialty }}</p>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body">
                  <h6 class="fw-bold mb-3">About</h6>
                  <div>
                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-mail"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">Email Address</h6>
                        <p>{{ doctor.email || "N/A" }}</p>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-user-check"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">
                          Year of Experience
                        </h6>
                        <p>
                          {{
                            doctor.experience
                              ? doctor.experience + "+ Years"
                              : "N/A"
                          }}
                        </p>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-users"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">Total Patients</h6>
                        <p>{{ doctor.patient || "N/A" }}</p>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mb-3">
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-certificate"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">Qualifications</h6>
                        <p>{{ doctor.qualifications || "N/A" }}</p>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center mb-3"
                      v-if="selectedSpecialty"
                    >
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-medical-cross"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">Department</h6>
                        <p>{{ selectedSpecialty.name }}</p>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center"
                      v-if="doctor.designationAndDepartment"
                    >
                      <span
                        class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                      >
                        <i class="ti ti-building-hospital"></i>
                      </span>
                      <div>
                        <h6 class="fw-semibold fs-13 mb-1">
                          Designation & Department
                        </h6>
                        <p>{{ doctor.designationAndDepartment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";

export default {
  setup() {
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;
    console.log(adminToken);

    return {
      adminToken,
      apiBaseUrl,
    };
  },

  data() {
    return {
      doctorId: null,
      apiBase: API_BASE,
      specialties: [],
      activeDay: "Monday",
      doctor: {
        name: "",
        email: "",
        specialty: "",
        biography: "",
        experience: "",
        patient: "",
        specialization: "",
        designationAndDepartment: "",
        fee: "",
        qualifications: "",
        image: null,
        timeSlots: {
          Saturday: [],
          Sunday: [],
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
        },
      },
    };
  },

  computed: {
    selectedSpecialty() {
      return this.specialties.find(
        (spec) => spec._id === this.doctor.specialization
      );
    },
  },

  async mounted() {
    this.doctorId = this.$route.params.id;
    const authHeaders = this.getAuthHeaders();
    console.log("Doctor ID:", this.doctorId);
    // Fetch doctor data
    if (this.doctorId) {
      try {
        const response = await axios.get(
          `${this.apiBaseUrl}/doctor/${this.doctorId}`,
          authHeaders
        );

        this.doctor = { ...this.doctor, ...response.data };

        // Ensure timeSlots is properly initialized
        if (!this.doctor.timeSlots) {
          this.doctor.timeSlots = {
            Saturday: [],
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
          };
        }

        // Set the first day with available slots as active
        const daysWithSlots = Object.keys(this.doctor.timeSlots).find(
          (day) =>
            this.doctor.timeSlots[day] && this.doctor.timeSlots[day].length > 0
        );
        if (daysWithSlots) {
          this.activeDay = daysWithSlots;
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        this.handleError(error);
      }
    }

    // Fetch specialties
    try {
      const response = await axios.get(
        `${this.apiBaseUrl}/specilities`,
        authHeaders
      );
      this.specialties = response.data;
    } catch (error) {
      console.error("Error fetching specialties:", error);
      this.handleError(error);
    }
  },

  methods: {
    getAuthHeaders() {
      return {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      };
    },

    setActiveDay(day) {
      this.activeDay = day;
    },

    handleError(error) {
      if (error.response && error.response.status === 401) {
        const message = "Authentication failed. Please login again.";
        if (typeof toastr !== "undefined") {
          toastr.error(message);
        } else {
          alert(message);
        }
        this.$router.push("/admin/login");
      } else {
        const message = "Something went wrong!";
        if (typeof toastr !== "undefined") {
          toastr.warning(message);
        } else {
          alert(message);
        }
      }
    },
  },
};
</script>

<style scoped>
.doctor-profile-img img {
  border-radius: 8px;
}

.avatar-xxl {
  width: 4rem;
  height: 4rem;
}

.nav-tabs .nav-link.active {
  background-color: #007bff;
  color: white !important;
  border-color: #007bff;
}

.nav-tabs .nav-link {
  border: 1px solid #dee2e6;
  margin-right: 2px;
}

.tab-content .tab-pane {
  min-height: 100px;
}

.badge-soft-success {
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
}
</style>
