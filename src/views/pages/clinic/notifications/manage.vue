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
            Notifications<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Notifications : {{ notifications.length }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary text-white ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_notification"
            ><i class="ti ti-plus me-1"></i>Add New Notification</a
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
                  placeholder="Search notifications..."
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
          :data-source="filteredNotifications"
          :loading="isLoading"
          :pagination="{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '25', '50'],
          }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'NotificationInfo'">
              <div class="d-flex flex-column">
                <div class="fw-bold mb-1">{{ record.title }}</div>
                <div class="text-muted fs-13">
                  {{ truncateText(record.body, 80) }}
                </div>
              </div>
            </template>
            <template v-if="column.key === 'CreatedAt'">
              <span class="fw-medium fs-14">{{
                formatDate(record.createdAt)
              }}</span>
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
                      data-bs-target="#edit_notification"
                      @click="setEditNotification(record)"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      @click="confirmDeleteNotification(record._id)"
                      :class="{
                        'text-muted': deletingNotificationId === record._id,
                      }"
                      >{{
                        deletingNotificationId === record._id
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
      <div
        v-if="isLoading && notifications.length === 0"
        class="text-center p-4"
      >
        <p>Loading notifications...</p>
      </div>

      <!-- Empty state -->
      <div
        v-if="!isLoading && notifications.length === 0"
        class="text-center p-4"
      >
        <p>No notifications found.</p>
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
  <div id="add_notification" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Notification</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="createNotification">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Title<span class="text-danger ms-1">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="newNotification.title"
                required
                placeholder="Enter notification title"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Body<span class="text-danger ms-1">*</span></label
              >
              <textarea
                class="form-control"
                v-model="newNotification.body"
                rows="4"
                required
                placeholder="Enter notification body"
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
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isCreating"
            >
              {{ isCreating ? "Adding..." : "Add Notification" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Edit Modal -->
  <div id="edit_notification" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Notification</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="updateNotification">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Title<span class="text-danger ms-1">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="editNotification.title"
                required
                placeholder="Enter notification title"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Body<span class="text-danger ms-1">*</span></label
              >
              <textarea
                class="form-control"
                v-model="editNotification.body"
                rows="4"
                required
                placeholder="Enter notification body"
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
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="updatingNotificationId === editNotification._id"
            >
              {{
                updatingNotificationId === editNotification._id
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
    title: "Notification Info",
    dataIndex: "notificationInfo",
    key: "NotificationInfo",
    sorter: false,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "CreatedAt",
    sorter: {
      compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
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
    console.log(adminToken);

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
      notifications: [],
      isLoading: true,
      isCreating: false,
      updatingNotificationId: null,
      deletingNotificationId: null,
      newNotification: {
        title: "",
        body: "",
      },
      editNotification: {
        _id: null,
        title: "",
        body: "",
      },
    };
  },
  computed: {
    filteredNotifications() {
      const query = this.searchQuery.toLowerCase();
      return this.notifications.filter((record) => {
        return (
          (record.title && record.title.toLowerCase().includes(query)) ||
          (record.body && record.body.toLowerCase().includes(query))
        );
      });
    },
  },
  async mounted() {
    await this.fetchNotifications();
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

    // Fetch all notifications
    async fetchNotifications() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/notification/all`,
          this.getAuthHeaders()
        );
        this.notifications = response.data;
      } catch (error) {
        console.error("Error fetching notifications:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to fetch notifications.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Create a new notification
    async createNotification() {
      try {
        this.isCreating = true;
        const response = await axios.post(
          `${this.apiBaseUrl}/notification/create`,
          this.newNotification,
          this.getAuthHeaders()
        );

        if (response.data && response.data.notification) {
          // Add the new notification to the top of the list
          this.notifications.unshift(response.data.notification);
          this.resetNewNotificationForm();

          // Close modal programmatically

          toastr.success("Notification added successfully!");
        }
      } catch (error) {
        console.error("Error adding notification:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to add notification.");
        }
      } finally {
        this.isCreating = false;
      }
    },

    // Set notification for editing
    setEditNotification(notification) {
      this.editNotification = {
        _id: notification._id,
        title: notification.title,
        body: notification.body,
      };
    },

    // Update notification
    async updateNotification() {
      try {
        this.updatingNotificationId = this.editNotification._id;
        const response = await axios.post(
          `${this.apiBaseUrl}/notification/update/${this.editNotification._id}`,
          {
            title: this.editNotification.title,
            body: this.editNotification.body,
          },
          this.getAuthHeaders()
        );

        if (response.data && response.data.success) {
          // Update the notification in the data array
          const index = this.notifications.findIndex(
            (n) => n._id === this.editNotification._id
          );
          if (index !== -1) {
            this.notifications[index].title = this.editNotification.title;
            this.notifications[index].body = this.editNotification.body;
          }

          // Close modal programmatically

          toastr.success("Notification updated successfully!");
        }
      } catch (error) {
        console.error("Error updating notification:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to update notification.");
        }
      } finally {
        this.updatingNotificationId = null;
      }
    },

    // Confirm delete notification
    async confirmDeleteNotification(id) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this notification?"
      );
      if (confirmed) {
        await this.deleteNotification(id);
      }
    },

    // Delete notification
    async deleteNotification(id) {
      this.deletingNotificationId = id;
      try {
        const response = await axios.delete(
          `${this.apiBaseUrl}/notification/delete/${id}`,
          this.getAuthHeaders()
        );

        if (response.data && response.data.success) {
          this.notifications = this.notifications.filter(
            (notification) => notification._id !== id
          );

          toastr.success("Notification deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting notification:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to delete notification.");
        }
      } finally {
        this.deletingNotificationId = null;
      }
    },

    // Truncate text with ellipsis
    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    },

    // Format date
    formatDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },

    // Reset new notification form
    resetNewNotificationForm() {
      this.newNotification = {
        title: "",
        body: "",
      };
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
.text-muted {
  color: #6c757d !important;
}
</style>
