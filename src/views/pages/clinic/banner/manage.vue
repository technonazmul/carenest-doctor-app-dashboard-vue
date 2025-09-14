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
            Banners<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Banners : {{ banners.length }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary text-white ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_banner"
            ><i class="ti ti-plus me-1"></i>Add New Banner</a
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
                  placeholder="Search by priority number..."
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
          :data-source="filteredBanners"
          :loading="isLoading"
          :pagination="{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '25', '50'],
          }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'BannerImage'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2">
                  <img
                    :src="getImageUrl(record.image, record.newImage)"
                    alt="Banner"
                    width="120"
                    height="60"
                    style="
                      object-fit: cover;
                      -webkit-box-shadow: 0 5px 15px 0 rgba(105, 103, 103, 0.5);
                      box-shadow: 0 5px 15px 0 rgba(105, 103, 103, 0.5);
                      border: 2px solid #ffffff;
                      border-radius: 10px;
                    "
                  />
                </a>
              </div>
            </template>
            <template v-if="column.key === 'Priority'">
              <span class="fw-medium fs-14">{{ record.priority }}</span>
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
                      data-bs-target="#edit_banner"
                      @click="setEditBanner(record)"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      @click="confirmDeleteBanner(record._id)"
                      :class="{ 'text-muted': deletingBannerId === record._id }"
                      >{{
                        deletingBannerId === record._id
                          ? "Deleting..."
                          : "Delete"
                      }}</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>

      <!-- Loading state -->
      <div v-if="isLoading && banners.length === 0" class="text-center p-4">
        <p>Loading banners...</p>
      </div>

      <!-- Empty state -->
      <div v-if="!isLoading && banners.length === 0" class="text-center p-4">
        <p>No banners found.</p>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; , All Rights Reserved</p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- Start Add Modal -->
  <div id="add_banner" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Banner</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="createBanner">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Priority Number<span class="text-danger ms-1">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="newBanner.priority"
                required
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Upload Image<span class="text-danger ms-1">*</span></label
              >
              <input
                type="file"
                @change="onFileChange"
                class="form-control"
                ref="fileInput"
                accept="image/*"
                required
              />
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
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isCreating"
            >
              {{ isCreating ? "Adding..." : "Add Banner" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Edit Modal -->
  <div id="edit_banner" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Banner</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="updateBanner">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Priority Number<span class="text-danger ms-1">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="editBanner.priority"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Current Image</label>
              <div v-if="editBanner.image" class="mb-2">
                <img
                  :src="getImageUrl(editBanner.image)"
                  alt="Current Image"
                  width="120"
                  height="60"
                  class="rounded"
                  style="
                    object-fit: cover;
                    -webkit-box-shadow: 0 5px 15px 0 rgba(105, 103, 103, 0.5);
                    box-shadow: 0 5px 15px 0 rgba(105, 103, 103, 0.5);
                    border: 2px solid #ffffff;
                  "
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
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button
              type="button"
              class="btn btn-white border"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="updatingBannerId === editBanner._id"
            >
              {{
                updatingBannerId === editBanner._id
                  ? "Updating..."
                  : "Save Changes"
              }}
            </button>
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
    title: "Banner Image",
    dataIndex: "image",
    key: "BannerImage",
    sorter: false,
  },
  {
    title: "Priority Number",
    dataIndex: "priority",
    key: "Priority",
    sorter: {
      compare: (a, b) => parseInt(a.priority) - parseInt(b.priority),
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "Status",
    sorter: false,
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
      banners: [],
      isLoading: true,
      isCreating: false,
      updatingBannerId: null,
      deletingBannerId: null,
      newBanner: {
        priority: "",
        image: null,
      },
      editBanner: {
        _id: null,
        priority: "",
        image: "",
        newImage: null,
      },
    };
  },
  computed: {
    filteredBanners() {
      const query = this.searchQuery.toLowerCase();
      return this.banners.filter((record) => {
        return (
          record.priority &&
          record.priority.toString().toLowerCase().includes(query)
        );
      });
    },
  },
  async mounted() {
    await this.fetchBanners();
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

    // Fetch all banners
    async fetchBanners() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/banners`,
          this.getAuthHeaders()
        );
        this.banners = response.data;
      } catch (error) {
        console.error("Error fetching banners:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to fetch banners.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Create a new banner
    async createBanner() {
      try {
        this.isCreating = true;
        const formData = new FormData();
        formData.append("priority", this.newBanner.priority);
        formData.append("image", this.newBanner.image);

        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${this.apiBaseUrl}/banner/create`,
          formData,
          { headers }
        );

        this.banners.push(response.data);
        this.resetNewBannerForm();

        toastr.success("Banner added successfully!");
      } catch (error) {
        console.error("Error adding banner:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to add banner.");
        }
      } finally {
        this.isCreating = false;
      }
    },

    // Set banner for editing
    setEditBanner(banner) {
      this.editBanner = {
        _id: banner._id,
        priority: banner.priority,
        image: banner.image,
        newImage: null,
      };
    },

    // Update banner
    async updateBanner() {
      try {
        this.updatingBannerId = this.editBanner._id;
        const formData = new FormData();
        formData.append("priority", this.editBanner.priority);

        if (this.editBanner.newImage) {
          formData.append("image", this.editBanner.newImage);
        }

        const headers = {
          ...this.getAuthHeaders().headers,
          "Content-Type": "multipart/form-data",
        };

        await axios.post(
          `${this.apiBaseUrl}/banner/update/${this.editBanner._id}`,
          formData,
          { headers }
        );

        // Update the banner in the data array
        const index = this.banners.findIndex(
          (b) => b._id === this.editBanner._id
        );
        if (index !== -1) {
          this.banners[index].priority = this.editBanner.priority;
          if (this.editBanner.newImage) {
            this.banners[index].newImage = this.editBanner.newImage;
          }
        }

        toastr.success("Banner updated successfully!");
      } catch (error) {
        console.error("Error updating banner:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to update banner.");
        }
      } finally {
        this.updatingBannerId = null;
      }
    },

    // Confirm delete banner
    async confirmDeleteBanner(id) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this banner?"
      );
      if (confirmed) {
        await this.deleteBanner(id);
      }
    },

    // Delete banner
    async deleteBanner(id) {
      this.deletingBannerId = id;
      try {
        await axios.delete(
          `${this.apiBaseUrl}/banner/delete/${id}`,
          this.getAuthHeaders()
        );

        this.banners = this.banners.filter((banner) => banner._id !== id);

        toastr.success("Banner deleted successfully.");
      } catch (error) {
        console.error("Error deleting banner:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to delete banner.");
        }
      } finally {
        this.deletingBannerId = null;
      }
    },

    // Handle file input change for new banner
    onFileChange(event) {
      this.newBanner.image = event.target.files[0];
    },

    // Handle file input change for updating banner
    onUpdateFileChange(event) {
      this.editBanner.newImage = event.target.files[0];
    },

    // Get image URL
    getImageUrl(imageName, newImage = null) {
      if (newImage) {
        return URL.createObjectURL(newImage);
      }
      if (!imageName) {
        return "/placeholder-image.jpg"; // Default placeholder
      }
      return `${this.apiBase.replace("/api/backend", "")}/uploads/${imageName}`;
    },

    // Reset new banner form
    resetNewBannerForm() {
      this.newBanner = {
        priority: "",
        image: null,
      };
      // Reset file input
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = "";
      }
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
