<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Settings</h4>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-body p-0">
          <div class="settings-wrapper d-flex">
            <div class="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div class="card-header border-bottom px-0 mx-3">
                <h5 class="fw-bold">Change Password</h5>
                <p class="text-muted mb-0">
                  Update your admin account password
                </p>
              </div>
              <div class="card-body px-0 mx-3">
                <form @submit.prevent="changePassword" class="password-form">
                  <!-- Current Password -->
                  <div class="row align-items-center mb-3">
                    <div class="col-lg-3">
                      <label for="currentPassword" class="form-label mb-0">
                        Current Password<span class="text-danger ms-1">*</span>
                      </label>
                    </div>
                    <div class="col-lg-9">
                      <input
                        type="password"
                        id="currentPassword"
                        v-model="formData.currentPassword"
                        class="form-control"
                        :class="{ 'is-invalid': errors.currentPassword }"
                        placeholder="Enter your current password"
                        required
                      />
                      <div
                        v-if="errors.currentPassword"
                        class="invalid-feedback"
                      >
                        {{ errors.currentPassword }}
                      </div>
                    </div>
                  </div>

                  <!-- New Password -->
                  <div class="row align-items-center mb-3">
                    <div class="col-lg-3">
                      <label for="newPassword" class="form-label mb-0">
                        New Password<span class="text-danger ms-1">*</span>
                      </label>
                    </div>
                    <div class="col-lg-9">
                      <input
                        type="password"
                        id="newPassword"
                        v-model="formData.newPassword"
                        class="form-control"
                        :class="{ 'is-invalid': errors.newPassword }"
                        placeholder="Enter your new password"
                        required
                      />
                      <div v-if="errors.newPassword" class="invalid-feedback">
                        {{ errors.newPassword }}
                      </div>
                    </div>
                  </div>

                  <!-- Confirm New Password -->
                  <div class="row align-items-center mb-3">
                    <div class="col-lg-3">
                      <label for="confirmPassword" class="form-label mb-0">
                        Confirm New Password<span class="text-danger ms-1"
                          >*</span
                        >
                      </label>
                    </div>
                    <div class="col-lg-9">
                      <input
                        type="password"
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                        class="form-control"
                        :class="{ 'is-invalid': errors.confirmPassword }"
                        placeholder="Confirm your new password"
                        required
                      />
                      <div
                        v-if="errors.confirmPassword"
                        class="invalid-feedback"
                      >
                        {{ errors.confirmPassword }}
                      </div>
                    </div>
                  </div>

                  <!-- Password Requirements -->
                  <div class="row mb-4">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-9">
                      <div class="password-requirements">
                        <p class="mb-2 fw-medium">Password must:</p>
                        <ul class="list-unstyled mb-0">
                          <li
                            :class="{
                              'requirement-met text-success':
                                passwordChecks.length,
                            }"
                          >
                            <i
                              class="ti"
                              :class="
                                passwordChecks.length ? 'ti-check' : 'ti-circle'
                              "
                            ></i>
                            Be at least 8 characters long
                          </li>
                          <li
                            :class="{
                              'requirement-met text-success':
                                passwordChecks.uppercase,
                            }"
                          >
                            <i
                              class="ti"
                              :class="
                                passwordChecks.uppercase
                                  ? 'ti-check'
                                  : 'ti-circle'
                              "
                            ></i>
                            Include at least one uppercase letter
                          </li>
                          <li
                            :class="{
                              'requirement-met text-success':
                                passwordChecks.lowercase,
                            }"
                          >
                            <i
                              class="ti"
                              :class="
                                passwordChecks.lowercase
                                  ? 'ti-check'
                                  : 'ti-circle'
                              "
                            ></i>
                            Include at least one lowercase letter
                          </li>
                          <li
                            :class="{
                              'requirement-met text-success':
                                passwordChecks.number,
                            }"
                          >
                            <i
                              class="ti"
                              :class="
                                passwordChecks.number ? 'ti-check' : 'ti-circle'
                              "
                            ></i>
                            Include at least one number
                          </li>
                          <li
                            :class="{
                              'requirement-met text-success':
                                passwordChecks.special,
                            }"
                          >
                            <i
                              class="ti"
                              :class="
                                passwordChecks.special
                                  ? 'ti-check'
                                  : 'ti-circle'
                              "
                            ></i>
                            Include at least one special character
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Form Buttons -->
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      class="btn btn-light me-3"
                      @click="resetForm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="!isFormValid || isSubmitting"
                    >
                      <span
                        v-if="isSubmitting"
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      {{ isSubmitting ? "Updating..." : "Update Password" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-icon">
          <i class="ti ti-check fs-1 text-white"></i>
        </div>
        <h4 class="fw-bold mb-2">Password Updated</h4>
        <p class="text-muted mb-4">
          Your password has been successfully changed.
        </p>
        <button class="btn btn-primary" @click="closeSuccessModal">
          Continue
        </button>
      </div>
    </div>

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; , All Rights Reserved</p>
    </div>
    <!-- Footer End -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
  name: "AdminSettings",
  setup() {
    const router = useRouter();

    // API configuration
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;

    // Reactive data
    const formData = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    const errors = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    const showSuccessModal = ref(false);
    const isSubmitting = ref(false);

    // Computed properties
    const passwordChecks = computed(() => {
      const password = formData.value.newPassword;
      return {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      };
    });

    const isFormValid = computed(() => {
      // Check if all password requirements are met
      const checks = passwordChecks.value;
      const allChecksPass =
        checks.length &&
        checks.uppercase &&
        checks.lowercase &&
        checks.number &&
        checks.special;

      // Check if passwords match and current password is not empty
      const passwordsMatch =
        formData.value.newPassword === formData.value.confirmPassword;
      const hasCurrentPassword = formData.value.currentPassword.length > 0;

      return allChecksPass && passwordsMatch && hasCurrentPassword;
    });

    // Methods
    const getAuthHeaders = () => ({
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });

    const validateForm = () => {
      let isValid = true;
      errors.value = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };

      // Validate current password
      if (!formData.value.currentPassword) {
        errors.value.currentPassword = "Current password is required";
        isValid = false;
      }

      // Validate new password
      if (!formData.value.newPassword) {
        errors.value.newPassword = "New password is required";
        isValid = false;
      } else {
        const checks = passwordChecks.value;
        if (
          !checks.length ||
          !checks.uppercase ||
          !checks.lowercase ||
          !checks.number ||
          !checks.special
        ) {
          errors.value.newPassword = "Password does not meet all requirements";
          isValid = false;
        }
      }

      // Validate password confirmation
      if (!formData.value.confirmPassword) {
        errors.value.confirmPassword = "Please confirm your new password";
        isValid = false;
      } else if (
        formData.value.newPassword !== formData.value.confirmPassword
      ) {
        errors.value.confirmPassword = "Passwords do not match";
        isValid = false;
      }

      return isValid;
    };

    const changePassword = async () => {
      if (validateForm()) {
        isSubmitting.value = true;

        try {
          // Call the password change API endpoint
          const response = await axios.post(
            `${apiBaseUrl}/admin/update-password`,
            {
              currentPassword: formData.value.currentPassword,
              newPassword: formData.value.newPassword,
            },
            getAuthHeaders()
          );

          // Show success modal
          showSuccessModal.value = true;

          console.log("Password change response:", response.data);

          // Show success notification using toastr if available
          if (window.showToast) {
            window.showToast("Password changed successfully!", "success");
          }
        } catch (error) {
          console.error("Error changing password:", error);

          // Handle different types of errors
          if (error.response) {
            if (error.response.status === 401) {
              // Authentication failed
              if (window.showToast) {
                window.showToast(
                  "Authentication failed. Please login again.",
                  "error"
                );
              }
              // Redirect to login page
              router.push("/");
            } else if (error.response.status === 400) {
              // Incorrect current password
              errors.value.currentPassword = "Current password is incorrect";
              if (window.showToast) {
                window.showToast("Current password is incorrect.", "error");
              }
            } else {
              // Other API errors
              if (window.showToast) {
                window.showToast(
                  "Failed to update password. Please try again.",
                  "error"
                );
              }
            }
          } else {
            // Network or other errors
            if (window.showToast) {
              window.showToast(
                "Network error. Please check your connection.",
                "error"
              );
            }
          }
        } finally {
          isSubmitting.value = false;
        }
      }
    };

    const resetForm = () => {
      formData.value = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
      errors.value = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
    };

    const closeSuccessModal = () => {
      showSuccessModal.value = false;
      resetForm();
    };

    // Lifecycle
    onMounted(() => {
      // Check if admin token exists
      if (!adminToken) {
        console.error("No admin token found, redirecting to login");
        router.push("/");
        return;
      }
    });

    return {
      formData,
      errors,
      showSuccessModal,
      isSubmitting,
      passwordChecks,
      isFormValid,
      changePassword,
      resetForm,
      closeSuccessModal,
    };
  },
};
</script>

<style scoped>
.password-requirements {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #e9ecef;
}

.password-requirements ul li {
  padding-left: 25px;
  position: relative;
  margin-bottom: 8px;
  color: #6c757d;
  font-size: 14px;
}

.password-requirements ul li i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 12px;
}

.requirement-met {
  color: #198754 !important;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-icon {
  margin: 0 auto 20px;
  width: 60px;
  height: 60px;
  background-color: #198754;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
