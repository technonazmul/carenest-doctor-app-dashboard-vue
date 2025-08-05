<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Specializations<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Specializations : {{ specializations.length }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary text-white ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_specialization"
            ><i class="ti ti-plus me-1"></i>Add New Specialization</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <div
        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
      >
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search specializations..."
                  v-model="searchQuery"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recent</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Oldest</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredSpecializations"
          :loading="isLoading"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Specialization'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar me-2">
                  <img
                    :src="getImageUrl(record.image)"
                    alt="Specialization"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    style="object-fit: cover"
                  />
                </a>
                <div>
                  <h6 class="mb-0 fs-14 fw-semibold">
                    {{ record.name }}
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium px-2 py-1 fs-13 badge badge-soft-success rounded text-success border border-success"
                >Active
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_specialization"
                      @click="setEditSpecialization(record)"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      @click="confirmDeleteSpecialization(record._id)"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>

      <!-- Loading state -->
      <div
        v-if="isLoading && specializations.length === 0"
        class="text-center p-4"
      >
        <p>Loading specializations...</p>
      </div>

      <!-- Empty state -->
      <div
        v-if="!isLoading && specializations.length === 0"
        class="text-center p-4"
      >
        <p>No specializations found.</p>
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

  <!-- Start Add Modal -->
  <div id="add_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Specialization</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="createSpecialization">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Specialization Name<span class="text-danger ms-1"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control"
                v-model="newSpecialization.name"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Upload Image</label>
              <input
                type="file"
                @change="onFileChange"
                class="form-control"
                ref="fileInput"
                accept="image/*"
              />
            </div>
            <div class="mb-0">
              <label class="form-label">Description</label>
              <textarea
                class="form-control"
                rows="3"
                v-model="newSpecialization.description"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button
              type="button"
              class="btn btn-light border"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              Add Specialization
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Edit Modal -->
  <div id="edit_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Specialization</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="updateSpecialization">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Specialization Name<span class="text-danger ms-1"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control"
                v-model="editSpecialization.name"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Current Image</label>
              <div v-if="editSpecialization.image" class="mb-2">
                <img
                  :src="getImageUrl(editSpecialization.image)"
                  alt="Current Image"
                  width="60"
                  height="60"
                  class="rounded"
                  style="object-fit: cover"
                />
              </div>
              <label class="form-label">Upload New Image</label>
              <input
                type="file"
                @change="onUpdateFileChange"
                class="form-control"
                accept="image/*"
              />
            </div>
            <div class="mb-0">
              <label class="form-label">Description</label>
              <textarea
                class="form-control"
                rows="3"
                v-model="editSpecialization.description"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button
              type="button"
              class="btn btn-white border"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Modal -->
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const columns = [
  {
    title: "Specialization",
    dataIndex: "name",
    key: "Specialization",
    sorter: {
      compare: (a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "Status",
    sorter: {
      compare: (a, b) =>
        a.status.toLowerCase().localeCompare(b.status.toLowerCase()),
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

export default {
  setup() {
    // Get admin token from cookie
    const adminToken = Cookies.get("adminToken");
    const apiBase = API_BASE;
    const apiBaseUrl = `${apiBase}/api/backend`;

    return {
      adminToken,
      apiBase,
      apiBaseUrl,
    };
  },
  data() {
    return {
      searchQuery: "",
      columns,
      specializations: [],
      isLoading: true,
      deletingSpecializationId: null,
      newSpecialization: {
        name: "",
        description: "",
        image: null,
      },
      editSpecialization: {
        _id: null,
        name: "",
        description: "",
        image: "",
        newImage: null,
      },
    };
  },
  computed: {
    filteredSpecializations() {
      const query = this.searchQuery.toLowerCase();
      return this.specializations.filter((record) => {
        return (
          record.name.toLowerCase().includes(query) ||
          (record.description &&
            record.description.toLowerCase().includes(query))
        );
      });
    },
  },
  async mounted() {
    await this.fetchSpecializations();
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

    // Fetch all specializations
    async fetchSpecializations() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/specilities`,
          this.getAuthHeaders()
        );
        this.specializations = response.data;
      } catch (error) {
        console.error("Error fetching specializations:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to fetch specializations.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Create a new specialization
    async createSpecialization() {
      try {
        const formData = new FormData();
        formData.append("name", this.newSpecialization.name);
        formData.append(
          "description",
          this.newSpecialization.description || ""
        );
        if (this.newSpecialization.image) {
          formData.append("image", this.newSpecialization.image);
        }

        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${this.apiBaseUrl}/specialization/add`,
          formData,
          { headers }
        );

        this.specializations.push(response.data);
        this.resetNewSpecializationForm();

        // Close modal
        const modal = document.getElementById("add_specialization");

        toastr.success("Specialization added successfully!");
      } catch (error) {
        console.error("Error adding specialization:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
        } else {
          toastr.error("Failed to add specialization.");
        }
      }
    },

    // Set specialization for editing
    setEditSpecialization(specialization) {
      this.editSpecialization = {
        _id: specialization._id,
        name: specialization.name,
        description: specialization.description || "",
        image: specialization.image,
        newImage: null,
      };
    },

    // Update specialization
    async updateSpecialization() {
      try {
        const formData = new FormData();
        formData.append("name", this.editSpecialization.name);
        formData.append(
          "description",
          this.editSpecialization.description || ""
        );

        if (this.editSpecialization.newImage) {
          formData.append("updateimage", this.editSpecialization.newImage);
        }

        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        await axios.post(
          `${this.apiBaseUrl}/speciality/update/${this.editSpecialization._id}`,
          formData,
          { headers }
        );

        // Update the specialization in the data array
        const index = this.specializations.findIndex(
          (s) => s._id === this.editSpecialization._id
        );
        if (index !== -1) {
          this.specializations[index].name = this.editSpecialization.name;
          this.specializations[index].description =
            this.editSpecialization.description;
          if (this.editSpecialization.newImage) {
            // Update image reference
            this.specializations[index].image =
              this.editSpecialization.newImage.name;
          }
        }

        // Close modal
        const modal = document.getElementById("edit_specialization");

        toastr.success("Specialization updated successfully!");
      } catch (error) {
        console.error("Error updating specialization:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
        } else {
          toastr.error("Failed to update specialization.");
        }
      }
    },

    // Confirm delete specialization
    async confirmDeleteSpecialization(id) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this specialization?"
      );
      if (confirmed) {
        await this.deleteSpecialization(id);
      }
    },

    // Delete specialization
    async deleteSpecialization(id) {
      this.deletingSpecializationId = id;
      try {
        await axios.delete(
          `${this.apiBaseUrl}/speciality/delete/${id}`,
          this.getAuthHeaders()
        );

        this.specializations = this.specializations.filter(
          (specialization) => specialization._id !== id
        );

        toastr.success("Specialization deleted successfully.");
      } catch (error) {
        console.error("Error deleting specialization:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
        } else {
          toastr.error("Failed to delete specialization.");
        }
      } finally {
        this.deletingSpecializationId = null;
      }
    },

    // Handle file input change for new specialization
    onFileChange(event) {
      this.newSpecialization.image = event.target.files[0];
    },

    // Handle file input change for updating specialization
    onUpdateFileChange(event) {
      this.editSpecialization.newImage = event.target.files[0];
    },

    // Get image URL
    getImageUrl(imageName) {
      if (!imageName) {
        return "/placeholder-image.jpg"; // Default placeholder
      }
      return `${this.apiBase}/uploads/${imageName}`;
    },

    // Reset new specialization form
    resetNewSpecializationForm() {
      this.newSpecialization = {
        name: "",
        description: "",
        image: null,
      };
      // Reset file input
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = "";
      }
    },

    // Format date for display
    formatDate(dateString) {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.custom-badge {
  border: none;
}
.status-green {
  background-color: #e5f8ed;
  color: #0cb777;
}
.action-icon {
  color: #777;
  font-size: 18px;
  display: inline-block;
}
</style>
