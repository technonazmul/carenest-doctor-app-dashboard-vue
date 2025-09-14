<template>
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
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Admin Users</h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_admin"
            ><i class="ti ti-plus me-1"></i>New Admin</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="admins"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }"
            ><template v-if="column.key === 'role'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-primary rounded text-primary border border-primary':
                      record.role === 'superadmin',
                    'badge-soft-info rounded text-info border border-info':
                      record.role === 'manager',
                    'badge-soft-secondary rounded text-secondary border border-secondary':
                      record.role === 'support',
                  },
                ]"
                >{{ record.role }}
              </span>
            </template>
            <template v-if="column.key === 'createdAt'">
              {{ formatDate(record.createdAt) }}
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
                      @click="editAdmin(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_admin"
                      >Edit</a
                    >
                  </li>
                  <li v-if="record._id !== currentAdminId">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center text-danger"
                      @click="confirmDelete(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_admin"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; , All Rights Reserved</p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
			End Page Content
		========================= -->

  <!-- Start Add Modal -->
  <div id="add_admin" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">New Admin</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="createAdmin">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Username<span class="text-danger ms-1">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="addForm.username"
                  :class="{ 'is-invalid': addErrors.username }"
                  required
                />
                <div v-if="addErrors.username" class="invalid-feedback">
                  {{ addErrors.username }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Role<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="addForm.role"
                  :options="roleOptions"
                  placeholder="Select Role"
                  :class="{ 'is-invalid': addErrors.role }"
                />
                <div v-if="addErrors.role" class="invalid-feedback">
                  {{ addErrors.role }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Password<span class="text-danger ms-1">*</span></label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="addForm.password"
                  :class="{ 'is-invalid': addErrors.password }"
                  required
                />
                <div v-if="addErrors.password" class="invalid-feedback">
                  {{ addErrors.password }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Confirm Password<span class="text-danger ms-1"
                    >*</span
                  ></label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="addForm.confirmPassword"
                  :class="{ 'is-invalid': addErrors.confirmPassword }"
                  required
                />
                <div v-if="addErrors.confirmPassword" class="invalid-feedback">
                  {{ addErrors.confirmPassword }}
                </div>
              </div>
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
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Adding..." : "Add Admin" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Edit Modal -->
  <div id="edit_admin" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Admin</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="updateAdmin">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Username<span class="text-danger ms-1">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="editForm.username"
                  :class="{ 'is-invalid': editErrors.username }"
                  required
                />
                <div v-if="editErrors.username" class="invalid-feedback">
                  {{ editErrors.username }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >Role<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="editForm.role"
                  :options="roleOptions"
                  placeholder="Select Role"
                  :class="{ 'is-invalid': editErrors.role }"
                />
                <div v-if="editErrors.role" class="invalid-feedback">
                  {{ editErrors.role }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label"
                  >New Password (leave blank to keep current)</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="editForm.password"
                  :class="{ 'is-invalid': editErrors.password }"
                />
                <div v-if="editErrors.password" class="invalid-feedback">
                  {{ editErrors.password }}
                </div>
              </div>
              <div class="col-md-6 mb-3" v-if="editForm.password">
                <label class="form-label">Confirm New Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="editForm.confirmPassword"
                  :class="{ 'is-invalid': editErrors.confirmPassword }"
                />
                <div v-if="editErrors.confirmPassword" class="invalid-feedback">
                  {{ editErrors.confirmPassword }}
                </div>
              </div>
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
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Updating..." : "Update Admin" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_admin">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Admin</h5>
          <p class="mb-3">
            Are you sure you want to delete admin "{{
              adminToDelete?.username
            }}"?
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
              @click="deleteAdmin"
              data-bs-dismiss="modal"
              :disabled="isSubmitting"
              >{{ isSubmitting ? "Deleting..." : "Yes, Delete" }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    sorter: {
      compare: (a, b) =>
        a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    sorter: {
      compare: (a, b) => (a.role.toLowerCase() > b.role.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: {
      compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
  },
  {
    title: "Actions",
    key: "action",
    sorter: false,
  },
];

export default {
  name: "AdminUsers",
  setup() {
    const router = useRouter();

    // API configuration
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;
    const currentAdminId = ref(null);

    // Reactive data
    const admins = ref([]);
    const loading = ref(false);
    const isSubmitting = ref(false);
    const adminToDelete = ref(null);

    // Form data
    const addForm = ref({
      username: "",
      password: "",
      confirmPassword: "",
      role: "",
    });

    const editForm = ref({
      _id: "",
      username: "",
      password: "",
      confirmPassword: "",
      role: "",
    });

    // Error handling
    const addErrors = ref({});
    const editErrors = ref({});

    // Options
    const roleOptions = [
      { label: "Super Admin", value: "superadmin" },
      { label: "Manager", value: "manager" },
      { label: "Support", value: "support" },
    ];

    // Methods
    const getAuthHeaders = () => ({
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    const showToast = (message, type = "success") => {
      if (window.showToast) {
        window.showToast(message, type);
      } else {
        console.log(`${type}: ${message}`);
      }
    };

    const fetchAdmins = async () => {
      loading.value = true;
      try {
        const response = await axios.get(
          `${apiBaseUrl}/admin-users`,
          getAuthHeaders()
        );
        admins.value = response.data.admins;
        currentAdminId.value = response.data.currentAdminId;
      } catch (error) {
        console.error("Error fetching admins:", error);
        if (error.response?.status === 401) {
          router.push("/");
        } else {
          showToast("Failed to fetch admin users", "error");
        }
      } finally {
        loading.value = false;
      }
    };

    const validateAddForm = () => {
      addErrors.value = {};
      let isValid = true;

      if (!addForm.value.username.trim()) {
        addErrors.value.username = "Username is required";
        isValid = false;
      }

      if (!addForm.value.password) {
        addErrors.value.password = "Password is required";
        isValid = false;
      } else if (addForm.value.password.length < 8) {
        addErrors.value.password = "Password must be at least 8 characters";
        isValid = false;
      }

      if (addForm.value.password !== addForm.value.confirmPassword) {
        addErrors.value.confirmPassword = "Passwords do not match";
        isValid = false;
      }

      if (!addForm.value.role) {
        addErrors.value.role = "Role is required";
        isValid = false;
      }

      return isValid;
    };

    const validateEditForm = () => {
      editErrors.value = {};
      let isValid = true;

      if (!editForm.value.username.trim()) {
        editErrors.value.username = "Username is required";
        isValid = false;
      }

      if (editForm.value.password && editForm.value.password.length < 8) {
        editErrors.value.password = "Password must be at least 8 characters";
        isValid = false;
      }

      if (
        editForm.value.password &&
        editForm.value.password !== editForm.value.confirmPassword
      ) {
        editErrors.value.confirmPassword = "Passwords do not match";
        isValid = false;
      }

      if (!editForm.value.role) {
        editErrors.value.role = "Role is required";
        isValid = false;
      }

      return isValid;
    };

    const createAdmin = async () => {
      if (!validateAddForm()) return;

      isSubmitting.value = true;
      try {
        await axios.post(
          `${apiBaseUrl}/admin-users`,
          {
            username: addForm.value.username,
            password: addForm.value.password,
            role: addForm.value.role,
          },
          getAuthHeaders()
        );

        showToast("User created successfully", "success");

        // Reset form
        addForm.value = {
          username: "",
          password: "",
          confirmPassword: "",
          role: "",
        };

        // Close modal and refresh data
        const modal = document.getElementById("add_admin");

        fetchAdmins();
      } catch (error) {
        console.error("Error creating admin:", error);
        if (error.response?.data?.message) {
          showToast(error.response.data.message, "error");
        } else {
          showToast("Failed to create admin user", "error");
        }
      } finally {
        isSubmitting.value = false;
      }
    };

    const editAdmin = (admin) => {
      editForm.value = {
        _id: admin._id,
        username: admin.username,
        password: "",
        confirmPassword: "",
        role: admin.role,
      };
      editErrors.value = {};
    };

    const updateAdmin = async () => {
      if (!validateEditForm()) return;

      isSubmitting.value = true;
      try {
        const updateData = {
          username: editForm.value.username,
          role: editForm.value.role,
        };

        if (editForm.value.password) {
          updateData.password = editForm.value.password;
        }

        await axios.put(
          `${apiBaseUrl}/admin-users/${editForm.value._id}`,
          updateData,
          getAuthHeaders()
        );

        showToast("Admin user updated successfully", "success");

        // Close modal and refresh data
        const modal = document.getElementById("edit_admin");

        fetchAdmins();
      } catch (error) {
        console.error("Error updating admin:", error);
        if (error.response?.data?.message) {
          showToast(error.response.data.message, "error");
        } else {
          showToast("Failed to update admin user", "error");
        }
      } finally {
        isSubmitting.value = false;
      }
    };

    const confirmDelete = (admin) => {
      adminToDelete.value = admin;
    };

    const deleteAdmin = async () => {
      if (!adminToDelete.value) return;

      isSubmitting.value = true;
      try {
        await axios.delete(
          `${apiBaseUrl}/admin-users/${adminToDelete.value._id}`,
          getAuthHeaders()
        );

        showToast("Admin user deleted successfully", "success");
        adminToDelete.value = null;
        fetchAdmins();
      } catch (error) {
        console.error("Error deleting admin:", error);
        if (error.response?.data?.message) {
          showToast(error.response.data.message, "error");
        } else {
          showToast("Failed to delete admin user", "error");
        }
      } finally {
        isSubmitting.value = false;
      }
    };

    // Lifecycle
    onMounted(() => {
      if (!adminToken) {
        router.push("/");
        return;
      }
      fetchAdmins();
    });

    return {
      // Data
      admins,
      loading,
      isSubmitting,
      adminToDelete,
      currentAdminId,
      columns,

      // Forms
      addForm,
      editForm,
      addErrors,
      editErrors,

      // Options
      roleOptions,

      // Methods
      formatDate,
      createAdmin,
      editAdmin,
      updateAdmin,
      confirmDelete,
      deleteAdmin,
    };
  },
};
</script>
