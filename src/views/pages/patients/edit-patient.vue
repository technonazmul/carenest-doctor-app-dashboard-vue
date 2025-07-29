<template>
  <div class="main-wrapper">
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">
      <!-- Start Content -->
      <div class="content">
        <!-- row start -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- page header start -->
            <div class="mb-4">
              <h6 class="fw-bold mb-0 d-flex align-items-center">
                <router-link to="/patients/patients-list" class="text-dark">
                  <i class="ti ti-chevron-left me-1"></i>Patients
                </router-link>
              </h6>
            </div>
            <!-- page header end -->

            <!-- Loading State -->
            <div v-if="isLoading" class="text-center p-4">
              <p>Loading patient data...</p>
            </div>

            <!-- card start -->
            <div v-else class="card">
              <div class="card-body pb-0">
                <form @submit.prevent="updatePatient">
                  <div class="form">
                    <h6 class="fw-bold mb-3">Patient Information</h6>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3 d-flex align-items-center">
                          <label class="form-label mb-0">Profile Image</label>
                          <div
                            class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                          >
                            <img
                              :src="getPatientImageUrl(form.image)"
                              alt="Patient Image"
                              class="position-relative z-n1 w-100 h-100 object-fit-cover"
                            />
                            <input
                              type="file"
                              class="form-control image-sign"
                              @change="handleImageUpload"
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

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Patient Name<span class="text-danger ms-1"
                              >*</span
                            ></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.name"
                            placeholder="Enter patient name"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Email Address<span class="text-danger ms-1"
                              >*</span
                            ></label
                          >
                          <input
                            type="email"
                            class="form-control"
                            v-model="form.email"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Phone Number</label
                          >
                          <input
                            type="tel"
                            class="form-control"
                            v-model="form.phone"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Gender</label
                          >
                          <select class="form-control" v-model="form.gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Verification Status</label
                          >
                          <select
                            class="form-control"
                            v-model="form.isVerified"
                          >
                            <option :value="true">Verified</option>
                            <option :value="false">Not Verified</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <h6 class="fw-bold mb-3 border-top pt-3">
                      Additional Information
                    </h6>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label mb-1 fw-medium"
                            >Join Date</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            :value="formatDate(form.createdAt)"
                            readonly
                            disabled
                          />
                          <small class="text-muted"
                            >This field cannot be modified</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="d-flex align-items-center justify-content-end mt-4"
                  >
                    <button
                      type="button"
                      class="btn btn-light me-2"
                      @click="cancelForm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="isUpdating || !isFormValid"
                    >
                      {{ isUpdating ? "Updating..." : "Save Changes" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- card end -->
          </div>
        </div>
        <!-- row end -->
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
  </div>
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
      isUpdating: false,
      showPassword: false,
      patientId: null,
      imageFile: null,
      form: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        image: null,
        isVerified: false,
        createdAt: null,
      },
    };
  },

  computed: {
    isFormValid() {
      return this.form.name && this.form.email;
    },
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

        // Populate form with patient data
        this.form = {
          name: response.data.name || "",
          email: response.data.email || "",
          phone: response.data.phone || "",
          gender: response.data.gender || "",
          password: "", // Always empty for security
          image: response.data.image || null,
          isVerified: response.data.isVerified || false,
          createdAt: response.data.createdAt,
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

    // Handle image upload
    handleImageUpload(event) {
      this.imageFile = event.target.files[0];
    },

    // Get patient profile image URL
    getPatientImageUrl(image) {
      if (!image) {
        return `${this.apiBase}/uploads/no_profile_picture.jpg`;
      }
      return `${this.apiBase}/uploads/${image}`;
    },

    // Toggle password visibility
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    // Format date helper
    formatDate(dateString) {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    // Update patient
    async updatePatient() {
      if (!this.isFormValid) {
        toastr.error("Please fill in all required fields.");
        return;
      }

      try {
        this.isUpdating = true;

        // Create form data object for file upload
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("isVerified", this.form.isVerified);

        // Add optional fields if they exist
        if (this.form.phone) {
          formData.append("phone", this.form.phone);
        }
        if (this.form.gender) {
          formData.append("gender", this.form.gender);
        }

        // Only include password if it's provided
        if (this.form.password && this.form.password.trim() !== "") {
          formData.append("password", this.form.password);
        }

        // Add new image if selected
        if (this.imageFile) {
          formData.append("image", this.imageFile);
        }

        const response = await axios.put(
          `${this.apiBaseUrl}/user/${this.patientId}`,
          formData,
          {
            ...this.getAuthHeaders(),
            headers: {
              ...this.getAuthHeaders().headers,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.form.image = response.data.user.image; // update image preview

        toastr.success("Patient updated successfully!");

        // Clear password field after successful update
        this.form.password = "";

        // Optionally redirect back to patients list
        // this.$router.push("/patients/patients-list");
      } catch (error) {
        console.error("Error updating patient:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toastr.error(error.response.data.message);
        } else {
          toastr.error("There was an error updating the patient.");
        }
      } finally {
        this.isUpdating = false;
      }
    },

    // Cancel form and go back
    cancelForm() {
      this.$router.push("/patients/patients-list");
    },
  },
};
</script>

<style scoped>
.avatar {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.avatar-xxl {
  width: 100px;
  height: 100px;
}

.object-fit-cover {
  object-fit: cover;
  object-position: center;
}

.form-heading h4 {
  color: #333;
  margin-bottom: 1rem;
}

.input-block {
  margin-bottom: 1rem;
}

.text-danger {
  color: #dc3545;
}

.position-relative .btn-link {
  padding: 0;
  color: #6c757d;
}

.position-relative .btn-link:hover {
  color: #495057;
}

.image-sign {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.drag-upload-btn {
  cursor: pointer;
}

.drag-upload-btn:hover {
  opacity: 0.8;
}
</style>
