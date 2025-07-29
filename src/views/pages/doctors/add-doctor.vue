<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <!-- Start Page Header -->
          <div
            class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3"
          >
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-0 d-flex align-items-center">
                <router-link to="/doctors/doctors-grid"
                  ><i class="ti ti-chevron-left me-1 fs-14"></i
                  >Doctor</router-link
                >
              </h6>
            </div>
          </div>
          <!-- End Page Header -->

          <!-- Start Add Doctor -->
          <div class="card">
            <div class="card-body">
              <div
                class="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3"
              >
                <h5 class="offcanvas-title fs-18 fw-bold">New Doctor</h5>
              </div>

              <!-- Success/Error Messages -->
              <div v-if="responseMessage" class="alert alert-info">
                {{ responseMessage }}
              </div>

              <form @submit.prevent="addDoctor">
                <div class="bg-light px-3 py-2 mb-3">
                  <h6 class="fw-bold mb-0">Contact Information</h6>
                </div>
                <div class="pb-0">
                  <!-- start row-->
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3 d-flex align-items-center">
                        <label class="form-label">Profile Image</label>
                        <div
                          class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                        >
                          <i class="ti ti-user-plus fs-16"></i>
                          <input
                            type="file"
                            class="form-control image-sign"
                            @change="onFileChange"
                            ref="fileInput"
                            :key="fileInputKey"
                          />
                          <div
                            class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1"
                          >
                            <a
                              href="javascript:void(0);"
                              class="text-white d-flex align-items-center justify-content-center"
                            >
                              <i class="ti ti-photo fs-14"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col-->

                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Full Name
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Email Address
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="email"
                              class="form-control"
                              v-model="form.email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Password
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="password"
                              class="form-control"
                              v-model="form.password"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Qualifications
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.qualifications"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col-->

                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Year Of Experience</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.experience"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Total Patients</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.patient"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col-->

                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Specialty<span class="text-danger ms-1"
                                >*</span
                              ></label
                            >
                            <select
                              class="form-control"
                              v-model="form.specialization"
                              required
                            >
                              <option value="">Select Specialty</option>
                              <option
                                v-for="item in specialties"
                                :key="item._id"
                                :value="item._id"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Specialties In Text</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.specialty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col-->

                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Designation & Department</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.designationAndDepartment"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Fee <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.fee"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col-->

                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Biography</label>
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="form.biography"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <!-- end row-->
                </div>

                <!-- Time Slots Section -->
                <div class="bg-light px-3 py-2 mb-3">
                  <h6 class="fw-bold mb-0">Available Time Slots</h6>
                </div>
                <div class="p-3">
                  <div class="row">
                    <div
                      class="col-12 col-md-6 col-lg-4 mb-4"
                      v-for="(slots, day) in form.timeSlots"
                      :key="day"
                    >
                      <h6 class="fw-bold mb-3">{{ day }}</h6>
                      <div class="row">
                        <div
                          class="col-6 col-sm-4 mb-2"
                          v-for="(slot, index) in staticTimeSlots"
                          :key="index"
                        >
                          <button
                            type="button"
                            :class="[
                              'btn btn-sm w-100',
                              form.timeSlots[day].includes(slot)
                                ? 'btn-primary'
                                : 'btn-outline-secondary',
                            ]"
                            @click="toggleTimeSlot(day, slot)"
                          >
                            {{ slot }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Form Actions -->
                <div class="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    class="btn btn-light btm-md"
                    @click="cancelForm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary btm-md"
                    :disabled="isLoading"
                  >
                    <span v-if="isLoading">Adding...</span>
                    <span v-else>Add Doctor</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- End Add Doctor -->
        </div>
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
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
  setup() {
    const apiBase = API_BASE;
    // Get admin token from cookie
    const adminToken = Cookies.get("adminToken");

    // Define API base URL
    const apiBaseUrl = `${apiBase}/api/backend`;

    // Return values to use in the component
    return {
      adminToken,
      apiBaseUrl,
    };
  },
  data() {
    return {
      specialties: [],
      isLoading: false,
      responseMessage: "",
      form: {
        name: "",
        email: "",
        specialty: "",
        biography: "",
        experience: "",
        videos: "",
        patient: "",
        specialization: "",
        designationAndDepartment: "",
        bmdcNumber: "",
        fee: "",
        qualifications: "",
        appointmentPhoneNumber: "",
        workplace: "",
        chamberNameAddress: "",
        visitingHour: "",
        password: "",
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
      fileInputKey: Date.now(),
    };
  },
  computed: {
    staticTimeSlots() {
      const startTime = new Date().setHours(8, 0, 0, 0); // 8:00 AM
      const endTime = new Date().setHours(24, 0, 0, 0); // 11:00 PM
      const slots = [];
      let currentTime = startTime;

      while (currentTime < endTime) {
        slots.push(
          new Date(currentTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        currentTime += 20 * 60 * 1000; // Add 20 minutes
      }
      return slots;
    },
  },
  async mounted() {
    try {
      // Get auth headers for API requests
      const authHeaders = this.getAuthHeaders();

      // Fetch specialties with authentication
      const getspecilities = await axios.get(
        `${this.apiBaseUrl}/specilities`,
        authHeaders
      );
      console.log(authHeaders);
      this.specialties = getspecilities.data;
    } catch (error) {
      console.error("Error fetching specialties:", error);
      if (error.response && error.response.status === 401) {
        this.showError("Authentication failed. Please login again.");
        // Redirect to login if token is invalid
        this.$router.push("/admin/login");
      }
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

    // Add doctor
    async addDoctor() {
      this.isLoading = true;
      try {
        const formData = new FormData();

        // Append form fields to FormData
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("specialty", this.form.specialty);
        formData.append("biography", this.form.biography);
        formData.append("experience", this.form.experience);
        formData.append("videos", this.form.videos);
        formData.append("patient", this.form.patient);
        formData.append("specialization", this.form.specialization);
        formData.append(
          "designationAndDepartment",
          this.form.designationAndDepartment
        );
        formData.append("bmdcNumber", this.form.bmdcNumber);
        formData.append("fee", this.form.fee);
        formData.append("qualifications", this.form.qualifications);
        formData.append(
          "appointmentPhoneNumber",
          this.form.appointmentPhoneNumber
        );
        formData.append("workplace", this.form.workplace);
        formData.append("chamberNameAddress", this.form.chamberNameAddress);
        formData.append("visitingHour", this.form.visitingHour);
        formData.append("password", this.form.password);
        // Append timeSlots as JSON string
        formData.append("timeSlots", JSON.stringify(this.form.timeSlots));
        if (this.form.image) {
          formData.append("image", this.form.image);
        }

        // Add auth headers for multipart form data
        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${this.apiBaseUrl}/doctor/register`,
          formData,
          { headers }
        );

        this.showSuccess("Doctor added successfully!");
        this.resetForm();

        // Redirect to doctors list after successful creation
        setTimeout(() => {
          this.$router.push("/doctors/doctors-grid");
        }, 2000);
      } catch (error) {
        console.error("Error adding doctor:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          this.showError("There was an error adding the doctor.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    cancelForm() {
      this.resetForm();
      // Navigate back to doctors list
      this.$router.push("/doctors/doctors-grid");
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        specialty: "",
        biography: "",
        experience: "",
        videos: "",
        patient: "",
        specialization: "",
        designationAndDepartment: "",
        bmdcNumber: "",
        fee: "",
        qualifications: "",
        appointmentPhoneNumber: "",
        workplace: "",
        chamberNameAddress: "",
        visitingHour: "",
        password: "",
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
      };
      this.fileInputKey = Date.now(); // Reset file input
      this.responseMessage = "";
    },

    toggleTimeSlot(day, slot) {
      const slots = this.form.timeSlots[day];
      if (slots.includes(slot)) {
        this.form.timeSlots[day] = slots.filter((s) => s !== slot); // Remove slot
      } else {
        this.form.timeSlots[day].push(slot); // Add slot
      }
    },

    // Add doctor file upload
    onFileChange(e) {
      this.form.image = e.target.files[0];
    },

    showSuccess(message) {
      this.responseMessage = message;
      // You can also integrate with toastr here if available
      if (typeof toastr !== "undefined") {
        toastr.success(message);
      }
    },

    showError(message) {
      this.responseMessage = message;
      // You can also integrate with toastr here if available
      if (typeof toastr !== "undefined") {
        toastr.error(message);
      }
    },
  },
};
</script>

<style scoped>
.time-slot-item {
  width: 93px;
}

.drag-upload-btn input[type="file"] {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.alert {
  margin-bottom: 1rem;
}

.btn-sm {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

@media (max-width: 768px) {
  .col-6.col-sm-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
