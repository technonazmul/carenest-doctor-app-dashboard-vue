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
        <!-- Start Page Header -->
        <div
          class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
        >
          <div class="flex-grow-1">
            <h4 class="fw-bold mb-0">
              Patients List
              <span
                class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
                >Total Patients : {{ patients.length }}</span
              >
            </h4>
          </div>
          <div class="text-end d-flex">
            <!-- dropdown-->

            <!-- Add New Patient Button with Collapse -->
            <a
              class="btn btn-primary ms-2 fs-13 btn-md"
              data-bs-toggle="collapse"
              href="#collapsePatientForm"
              role="button"
              aria-expanded="false"
              aria-controls="collapsePatientForm"
            >
              <i class="ti ti-plus me-1"></i>New Patient
            </a>
          </div>
        </div>
        <!-- End Page Header -->

        <!-- Add New Patient Form (Collapsible) -->
        <div class="collapse mb-4" id="collapsePatientForm">
          <div class="card card-body">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="userRegister">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-heading">
                          <h4>New Patient</h4>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label
                            >Patient Name
                            <span class="login-danger">*</span></label
                          >
                          <input
                            class="form-control"
                            type="text"
                            v-model="form.name"
                            placeholder="Enter patient name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label
                            >Email <span class="login-danger">*</span></label
                          >
                          <input
                            class="form-control"
                            type="email"
                            v-model="form.email"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label>Phone</label>
                          <input
                            class="form-control"
                            type="tel"
                            v-model="form.phone"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label>Gender</label>
                          <select class="form-control" v-model="form.gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label
                            >Password <span class="login-danger">*</span></label
                          >
                          <div class="position-relative">
                            <input
                              class="form-control"
                              :type="showPassword ? 'text' : 'password'"
                              v-model="form.password"
                              placeholder="Enter password"
                              required
                              minlength="6"
                            />
                            <button
                              type="button"
                              class="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3"
                              @click="togglePasswordVisibility"
                              style="
                                border: none;
                                background: none;
                                z-index: 10;
                              "
                            >
                              <i
                                :class="
                                  showPassword ? 'ti ti-eye-off' : 'ti ti-eye'
                                "
                              ></i>
                            </button>
                          </div>
                          <small class="text-muted">Minimum 6 characters</small>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label
                            >Confirm Password
                            <span class="login-danger">*</span></label
                          >
                          <div class="position-relative">
                            <input
                              class="form-control"
                              :type="showConfirmPassword ? 'text' : 'password'"
                              v-model="form.confirmPassword"
                              placeholder="Confirm password"
                              required
                              :class="{ 'is-invalid': passwordMismatch }"
                            />
                            <button
                              type="button"
                              class="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3"
                              @click="toggleConfirmPasswordVisibility"
                              style="
                                border: none;
                                background: none;
                                z-index: 10;
                              "
                            >
                              <i
                                :class="
                                  showConfirmPassword
                                    ? 'ti ti-eye-off'
                                    : 'ti ti-eye'
                                "
                              ></i>
                            </button>
                          </div>
                          <div
                            v-if="passwordMismatch"
                            class="invalid-feedback d-block"
                          >
                            Passwords do not match
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4">
                        <div class="input-block local-forms">
                          <label>Profile Image</label>
                          <input
                            class="form-control"
                            type="file"
                            @change="handleImageUpload"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="doctor-submit text-end">
                          <button
                            type="submit"
                            class="btn btn-primary submit-form me-2"
                            :disabled="
                              isLoading || passwordMismatch || !isFormValid
                            "
                          >
                            {{ isLoading ? "Creating..." : "Create Patient" }}
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary cancel-form"
                            @click="cancelForm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  Start Filter -->
        <div
          class="d-flex align-items-center justify-content-between flex-wrap"
        >
          <div>
            <div class="search-set mb-3">
              <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="table-search d-flex align-items-center mb-0">
                  <div class="search-input">
                    <a href="javascript:void(0);" class="btn-searchset"></a>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search patients..."
                      v-model="searchQuery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3"
          >
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i class="ti ti-filter text-gray-5 me-1"></i>Filters
              </a>
              <div
                class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                id="filter-dropdown"
              >
                <div
                  class="d-flex align-items-center justify-content-between border-bottom filter-header"
                >
                  <h4 class="mb-0 fw-bold">Filter</h4>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="link-danger text-decoration-underline"
                      @click="clearFilters"
                      >Clear All</a
                    >
                  </div>
                </div>
                <div class="p-3">
                  <div class="mb-3">
                    <label class="form-label">Verification Status</label>
                    <select class="form-control" v-model="filters.verified">
                      <option value="">All Status</option>
                      <option value="true">Verified</option>
                      <option value="false">Not Verified</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Gender</label>
                    <select class="form-control" v-model="filters.gender">
                      <option value="">All Genders</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                data-bs-toggle="dropdown"
              >
                <span class="me-1"> Sort By : </span> {{ sortBy }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('Recent')"
                    >Recent</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('Oldest')"
                    >Oldest</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('Name')"
                    >Name</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--  End Filter -->

        <!--  Start Table -->
        <div class="table-responsive">
          <div v-if="isLoading" class="text-center p-4">
            <p>Loading patients...</p>
          </div>
          <div
            v-else-if="filteredPatients.length === 0"
            class="text-center p-4"
          >
            <p>No patients found.</p>
          </div>
          <a-table
            v-else
            class="table table-nowrap datatable"
            :columns="columns"
            :data-source="filteredPatients"
            :pagination="{
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '25', '50', '100'],
            }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'patient'">
                <div class="d-flex align-items-center">
                  <router-link
                    :to="`/patients/patient-details/${record._id}`"
                    class="avatar avatar-md me-2"
                  >
                    <img
                      :src="getPatientImageUrl(record.image)"
                      alt="patient"
                      class="rounded-circle avatar-img"
                    />
                  </router-link>
                  <router-link
                    :to="`/patients/patient-details/${record._id}`"
                    class="text-dark fw-semibold"
                  >
                    {{ record.name }}
                    <span class="text-body fs-13 fw-normal d-block">
                      {{ record.gender || "N/A" }}
                    </span>
                  </router-link>
                </div>
              </template>
              <template v-if="column.key === 'verified'">
                <span
                  :class="[
                    'badge border rounded fs-13 fw-medium',
                    {
                      'badge-soft-success border-success text-success':
                        record.isVerified,
                      'badge-soft-danger border-danger text-danger':
                        !record.isVerified,
                    },
                  ]"
                  >{{ record.isVerified ? "Verified" : "Not Verified" }}</span
                >
              </template>
              <template v-if="column.key === 'action'">
                <div class="d-flex align-items-center gap-1">
                  <router-link
                    to="/appointments/appointments-list"
                    class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                  >
                    <i class="ti ti-calendar-cog"></i>
                  </router-link>
                  <a
                    href="javascript:void(0);"
                    class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                    data-bs-toggle="dropdown"
                  >
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                  <ul class="dropdown-menu p-2">
                    <li>
                      <router-link
                        :to="`/patients/edit-patient/${record._id}`"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <i class="fa-solid fa-pen-to-square m-r-5"></i>Edit
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        :to="`/patients/patient-details/${record._id}`"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <i class="fa fa-eye m-r-5"></i>View
                      </router-link>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center"
                        @click.prevent="confirmDeletePatient(record._id)"
                      >
                        <i class="fa fa-trash-alt m-r-5"></i>Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </template>
            </template>
          </a-table>
        </div>
        <!--  End Table -->
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

    <!-- Start Delete Modal  -->
    <div class="modal fade" id="delete_modal">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center position-relative">
            <img
              src="@/assets/img/bg/delete-modal-bg-01.png"
              alt=""
              class="img-fluid position-absolute top-0 start-0 z-0"
            />
            <img
              src="@/assets/img/bg/delete-modal-bg-02.png"
              alt=""
              class="img-fluid position-absolute bottom-0 end-0 z-0"
            />
            <div class="mb-3 position-relative z-1">
              <span class="avatar avatar-lg bg-danger text-white"
                ><i class="ti ti-trash fs-24"></i
              ></span>
            </div>
            <h5 class="fw-bold mb-1 position-relative z-1">
              Delete Confirmation
            </h5>
            <p class="mb-3 position-relative z-1">
              Are you sure want to delete this patient?
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light position-relative z-1 me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a
                href="javascript:void(0);"
                class="btn btn-danger position-relative z-1"
                data-bs-dismiss="modal"
                @click="deletePatient"
                >Yes, Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Delete Modal  -->
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const columns = [
  {
    title: "Patient",
    dataIndex: "name",
    key: "patient",
    sorter: {
      compare: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) =>
        (a.email || "").toLowerCase() > (b.email || "").toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: {
      compare: (a, b) =>
        (a.phone || "").toLowerCase() > (b.phone || "").toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: {
      compare: (a, b) =>
        (a.gender || "").toLowerCase() > (b.gender || "").toLowerCase()
          ? -1
          : 1,
    },
  },
  {
    title: "Joined Date",
    dataIndex: "createdAt",
    sorter: {
      compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
  },
  {
    title: "Status",
    dataIndex: "isVerified",
    key: "verified",
    sorter: {
      compare: (a, b) => a.isVerified - b.isVerified,
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];

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
      searchQuery: "",
      patients: [],
      columns,
      isLoading: true,
      sortBy: "Recent",
      patientToDelete: null,
      showPassword: false,
      showConfirmPassword: false,
      responseMessage: "",
      filters: {
        verified: "",
        gender: "",
      },
      form: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
        image: null,
      },
      imageFile: null,
    };
  },

  computed: {
    passwordMismatch() {
      return (
        this.form.password &&
        this.form.confirmPassword &&
        this.form.password !== this.form.confirmPassword
      );
    },

    isFormValid() {
      return (
        this.form.name &&
        this.form.email &&
        this.form.password &&
        this.form.confirmPassword &&
        !this.passwordMismatch &&
        this.form.password.length >= 6
      );
    },

    filteredPatients() {
      let filtered = [...this.patients];

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter((record) => {
          return (
            record.name.toLowerCase().includes(query) ||
            (record.email && record.email.toLowerCase().includes(query)) ||
            (record.phone && record.phone.toLowerCase().includes(query)) ||
            (record.gender && record.gender.toLowerCase().includes(query))
          );
        });
      }

      // Apply verification filter
      if (this.filters.verified !== "") {
        const isVerified = this.filters.verified === "true";
        filtered = filtered.filter(
          (patient) => patient.isVerified === isVerified
        );
      }

      // Apply gender filter
      if (this.filters.gender) {
        filtered = filtered.filter(
          (patient) => patient.gender === this.filters.gender
        );
      }

      // Apply sorting
      if (this.sortBy === "Recent") {
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (this.sortBy === "Oldest") {
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else if (this.sortBy === "Name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      return this.formatPatientsData(filtered);
    },
  },

  async mounted() {
    await this.fetchData();
  },

  methods: {
    // Toggle password visibility
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    // Toggle confirm password visibility
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },

    // Get auth headers for requests
    getAuthHeaders() {
      return {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      };
    },

    // Fetch patients data
    async fetchData() {
      try {
        this.isLoading = true;
        const authHeaders = this.getAuthHeaders();

        // Fetch patients from /users endpoint
        const patientsResponse = await axios.get(
          `${this.apiBaseUrl}/users`,
          authHeaders
        );
        this.patients = patientsResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Format patient data
    formatPatientsData(patientsArray) {
      return patientsArray.map((patient) => {
        return {
          ...patient,
          // Format the createdAt date for display
          createdAt: this.formatDate(patient.createdAt),
          // Ensure all fields have fallback values
          email: patient.email || "N/A",
          phone: patient.phone || "N/A",
          gender: patient.gender || "N/A",
          image: patient.image || null,
        };
      });
    },

    // Format date helper
    formatDate(dateString) {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },

    // Get patient profile image URL
    getPatientImageUrl(image) {
      if (!image) {
        return `${this.apiBase}/uploads/no_profile_picture.jpg`;
      }
      return `${this.apiBase}/uploads/${image}`;
    },

    // Handle image upload
    handleImageUpload(event) {
      this.imageFile = event.target.files[0];
    },

    // User Register function (adapted from first file)
    async userRegister() {
      // Validate form before submission
      if (!this.isFormValid) {
        toastr.error("Please fill in all required fields correctly.");
        return;
      }

      try {
        // Create form data object for file upload
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("password", this.form.password);

        // Add optional fields if they exist
        if (this.form.phone) {
          formData.append("phone", this.form.phone);
        }
        if (this.form.gender) {
          formData.append("gender", this.form.gender);
        }

        // Add image if selected
        if (this.imageFile) {
          formData.append("image", this.imageFile);
        }
        // Add before axios.post call
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }

        const response = await axios.post(
          `${this.apiBaseUrl}/user/register`,
          formData,
          {
            ...this.getAuthHeaders(),
            headers: {
              ...this.getAuthHeaders().headers,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.patients.push(response.data.user);
        console.log("Patient added successfully:", response.data);
        toastr.success("Patient added successfully!");

        // Reset form and close collapse
        this.resetForm();
      } catch (error) {
        console.error("Error adding patient:", error);
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
          toastr.error("There was an error adding the patient.");
        }
      }
    },

    // Cancel form
    cancelForm() {
      this.resetForm();
      this.closePatientForm();
    },

    // Reset form
    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
        image: null,
      };
      this.imageFile = null;
      this.showPassword = false;
      this.showConfirmPassword = false;
    },

    // Close patient form
    closePatientForm() {
      const collapseElement = document.getElementById("collapsePatientForm");
    },

    // Confirm delete patient
    confirmDeletePatient(id) {
      if (confirm("Are you sure you want to delete this patient?")) {
        this.deletePatient(id);
      }
    },

    async deletePatient(id) {
      try {
        await axios.delete(
          `${this.apiBaseUrl}/user/${id}`,
          this.getAuthHeaders()
        );
        // Remove the user from the local list
        this.patients = this.patients.filter((patient) => patient._id !== id);
        toastr.success("Patient deleted successfully!");
      } catch (error) {
        console.error("Error deleting patient:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("There was an error deleting the patient.");
        }
      }
    },

    // Set sort by
    setSortBy(sortType) {
      this.sortBy = sortType;
    },

    // Clear filters
    clearFilters() {
      this.filters = {
        verified: "",
        gender: "",
      };
    },
  },
};
</script>

<style scoped>
.badge {
  padding: 0.5em 0.8em;
  font-size: 0.875em;
  border-radius: 0.25rem;
}
.dropdown-action .dropdown-toggle::after {
  display: none;
}
.action-icon {
  color: #777;
  font-size: 18px;
  display: inline-block;
}
.dropdown-menu {
  min-width: 120px;
}
.avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 5px;
}
.avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 5px;
}
.avatar-img {
  width: 100%;
  height: 100%;
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
.login-danger {
  color: #dc3545;
}

.position-relative .btn-link {
  padding: 0;
  color: #6c757d;
}

.position-relative .btn-link:hover {
  color: #495057;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
  margin-top: 0.25rem;
}
</style>
