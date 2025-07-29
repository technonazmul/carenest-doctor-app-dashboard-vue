<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <!-- Page Header -->
          <div
            class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3"
          >
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-0 d-flex align-items-center">
                <router-link to="/doctors/doctors-grid">
                  <i class="ti ti-chevron-left me-1 fs-14"></i>Doctor
                </router-link>
              </h6>
            </div>
          </div>

          <!-- Edit Doctor Form -->
          <div class="card">
            <div class="card-body">
              <div
                class="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3"
              >
                <h5 class="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
              </div>

              <form @submit.prevent="updateDoctor">
                <!-- Contact Information -->
                <div class="bg-light px-3 py-2 mb-3">
                  <h6 class="fw-bold mb-0">Contact Information</h6>
                </div>

                <div class="pb-0">
                  <div class="row">
                    <!-- Profile Image -->
                    <div class="col-lg-12">
                      <div class="mb-3 d-flex align-items-center">
                        <label class="form-label">Profile Image</label>
                        <div
                          class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                        >
                          <img
                            :src="
                              form.image
                                ? `${apiBase}/uploads/${form.image}`
                                : `${apiBase}/uploads/default-doctor.jpg`
                            "
                            class="position-relative z-n1"
                            alt="Doctor Image"
                            style="width: 100%; height: 100%; object-fit: cover"
                          />
                          <input
                            type="file"
                            @change="onFileChange"
                            class="form-control image-sign"
                            ref="fileInput"
                            :key="fileInputKey"
                            accept="image/*"
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

                    <div class="col-lg-12">
                      <div class="row">
                        <!-- Name -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Name <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.name"
                              required
                            />
                          </div>
                        </div>

                        <!-- Email -->
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

                        <!-- Qualifications -->
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

                        <!-- Experience -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Year Of Experience
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.experience"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="row">
                        <!-- Specialty Dropdown -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Department<span class="text-danger ms-1"
                                >*</span
                              ></label
                            >
                            <select
                              class="form-control"
                              v-model="form.specialization"
                              required
                            >
                              <option value="">Select Department</option>
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

                        <!-- Designation & Department -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Designation & Department
                              <span class="text-danger ms-1">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.designationAndDepartment"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="row">
                        <!-- Specialty in Text -->
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

                        <!-- Fee -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Consultation Fee</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.fee"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Total Patients -->
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

                    <!-- Biography -->
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

                    <!-- Password -->
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Password <span class="text-danger">*</span></label
                        >
                        <input
                          type="password"
                          class="form-control"
                          v-model="form.password"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Schedule Information -->
                <div class="bg-light px-3 py-2 mb-3">
                  <h6 class="fw-bold mb-0">Schedule Information</h6>
                </div>

                <div class="mb-4">
                  <h4>Available Time Slots:</h4>
                  <br />

                  <div class="row">
                    <div
                      class="col-lg-4 col-md-6 mb-4"
                      v-for="(slots, day) in form.timeSlots"
                      :key="day"
                    >
                      <h5 class="mb-3">{{ day }}</h5>
                      <div class="row">
                        <div
                          v-for="(slot, index) in staticTimeSlots"
                          :key="index"
                          class="col-4 mb-2"
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

                <!-- Submit Buttons -->
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
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? "Updating..." : "Save Changes" }}
                  </button>
                </div>
              </form>
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
      isSubmitting: false,
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
      const endTime = new Date().setHours(24, 0, 0, 0); // 12:00 AM (midnight)
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
    this.doctorId = this.$route.params.id;
    const authHeaders = this.getAuthHeaders();

    // Fetch doctor data
    if (this.doctorId) {
      try {
        const response = await axios.get(
          `${this.apiBaseUrl}/doctor/${this.doctorId}`,
          authHeaders
        );
        this.form = { ...this.form, ...response.data };

        // Ensure timeSlots is properly initialized
        if (!this.form.timeSlots) {
          this.form.timeSlots = {
            Saturday: [],
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
          };
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

    async updateDoctor() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      try {
        const formData = new FormData();

        // Helper function to append form data
        const appendIfDefined = (key, value) => {
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          } else {
            formData.append(key, "");
          }
        };

        // Append all form fields
        Object.keys(this.form).forEach((key) => {
          if (key === "timeSlots") {
            formData.append(key, JSON.stringify(this.form[key]));
          } else if (key === "image") {
            if (this.form.image instanceof File) {
              formData.append("image", this.form.image);
            } else if (typeof this.form.image === "string" && this.form.image) {
              formData.append("existingImage", this.form.image);
            }
          } else {
            appendIfDefined(key, this.form[key]);
          }
        });

        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${this.apiBaseUrl}/doctor/update/${this.doctorId}`,
          formData,
          { headers }
        );

        this.form = { ...this.form, ...response.data };

        // Show success message (assuming toastr is available)
        if (typeof toastr !== "undefined") {
          toastr.success("Doctor updated successfully!");
        } else {
          alert("Doctor updated successfully!");
        }
      } catch (error) {
        console.error("Error updating doctor:", error);
        this.handleError(error);
      } finally {
        this.isSubmitting = false;
      }
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

    cancelForm() {
      this.$router.push("/admin/doctors");
    },

    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.form.image = file;
      }
    },

    toggleTimeSlot(day, slot) {
      const slots = this.form.timeSlots[day];
      if (slots.includes(slot)) {
        this.form.timeSlots[day] = slots.filter((s) => s !== slot);
      } else {
        this.form.timeSlots[day].push(slot);
      }
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
      this.fileInputKey = Date.now();
    },
  },
};
</script>

<style scoped>
.drag-upload-btn {
  cursor: pointer;
}

.drag-upload-btn input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.time-slot-item {
  width: 93px;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.avatar-xxl {
  width: 4rem;
  height: 4rem;
}
</style>
