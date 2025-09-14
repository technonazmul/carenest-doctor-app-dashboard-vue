<template>
  <div class="auth-bg auth-bg-custom position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild position-relative z-1">
      <div
        class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100"
      >
        <!-- start row -->
        <div
          class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap py-3"
        >
          <div class="col-lg-4 mx-auto">
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors }"
              class="d-flex justify-content-center align-items-center"
            >
              <div
                class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill"
              >
                <div class="mx-auto mb-4 text-center">
                  <!-- Loading state -->
                  <div v-if="loading" class="logo-loading">
                    <i class="ti ti-loader-2 animate-spin"></i>
                    <span class="ms-2">Loading...</span>
                  </div>
                  <!-- Logo from API or fallback -->
                  <img
                    v-else
                    :src="logoUrl || '@/assets/img/logo.svg'"
                    class="img-fluid"
                    alt="Logo"
                    @error="handleImageError"
                  />
                </div>
                <div class="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                  <div class="card-body">
                    <div class="text-center mb-3">
                      <h5 class="mb-1 fs-20 fw-bold">Sign In</h5>
                      <p class="mb-0">
                        Please enter below details to access the dashboard
                      </p>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <div class="input-group">
                        <span class="input-group-text border-end-0 bg-white">
                          <i class="ti ti-user fs-14 text-dark"></i>
                        </span>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Enter Username"
                          class="form-control border-start-0 ps-0"
                          :class="{ 'is-invalid': errors.username }"
                        />
                        <div class="invalid-feedback">
                          {{ errors.username }}
                        </div>
                        <div class="emailshow text-danger" id="username"></div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <div class="position-relative">
                        <div
                          class="pass-group input-group position-relative border rounded"
                        >
                          <span class="input-group-text bg-white border-0">
                            <i class="ti ti-lock text-dark fs-14"></i>
                          </span>
                          <Field
                            name="password"
                            :type="showPassword ? 'text' : 'password'"
                            class="pass-input form-control ps-0 border-0"
                            :class="{ 'is-invalid': errors.password }"
                            placeholder="Enter Password"
                          />
                          <span class="input-group-text bg-white border-0">
                            <i
                              @click="toggleShow"
                              class="toggle-password text-dark fs-14"
                              :class="{
                                'ti ti-eye': showPassword,
                                'ti ti-eye-off': !showPassword,
                              }"
                            ></i>
                          </span>
                        </div>
                        <div class="mt-2">
                          <div class="invalid-feedback">
                            {{ errors.password }}
                          </div>
                          <div
                            class="emailshow text-danger"
                            id="password"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-2">
                      <button
                        type="submit"
                        class="btn bg-primary text-white w-100"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <!-- end card body -->
                </div>
                <!-- end card -->
              </div>
            </Form>
            <p class="text-dark text-center">
              Copyright &copy; {{ new Date().getFullYear() }}
            </p>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- End Content -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import { useSettings } from "@/composables/useSettings";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      logoUrl: null,
      settings: null,
      loading: true,
    };
  },
  async mounted() {
    await this.fetchSettings();
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    async fetchSettings() {
      try {
        this.loading = true;
        const response = await axios.get(`${this.apiBaseUrl}/settings`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.success && response.data.data) {
          this.settings = response.data.data;

          // Set logo URL from API response
          if (this.settings.general?.logo?.filename) {
            this.logoUrl = `${this.apiBase}/uploads/settings/${this.settings.general.logo.filename}`;
          }
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
        // Keep logoUrl as null to fallback to default images
      } finally {
        this.loading = false;
      }
    },

    handleImageError(event) {
      // Fallback to default logo if API logo fails to load
      console.warn("Failed to load logo from API, falling back to default");
      event.target.src = "@/assets/img/logo.svg";
    },
  },
  setup() {
    const router = useRouter();
    const apiBase = API_BASE;
    const apiBaseUrl = `${apiBase}/api/backend`;
    const { getCurrencySymbol, formatCurrency } = useSettings();

    const schema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });

    const onSubmit = async (values, { setErrors }) => {
      // Clear old messages
      document.getElementById("username").innerHTML = "";
      document.getElementById("password").innerHTML = "";

      try {
        const response = await fetch(API_BASE + "/api/backend/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data?.message?.toLowerCase().includes("password")) {
            setErrors({ password: data.message });
          } else {
            setErrors({ username: data.message });
          }
          return;
        }

        // ✅ Store token securely
        Cookies.set("adminToken", data.token, {
          expires: 1,
          sameSite: "Strict",
          secure: true,
        });

        // ✅ Store role for sidebar filtering
        if (data.user && data.user.role) {
          localStorage.setItem("role", data.user.role);
        }

        // ✅ Redirect on success
        router.push("/dashboard");
      } catch (err) {
        console.error("Login error:", err);
        setErrors({ email: "Unexpected error occurred. Try again." });
      }
    };

    return {
      schema,
      onSubmit,
      checked: ref(false),
      apiBase,
      apiBaseUrl,
      getCurrencySymbol,
      formatCurrency,
    };
  },
};
</script>

<style scoped>
.logo-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.2rem;
  min-height: 40px; /* Adjust based on your logo height */
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
