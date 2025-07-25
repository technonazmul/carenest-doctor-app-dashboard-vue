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
                  <img
                    src="@/assets/img/logo.svg"
                    class="img-fluid"
                    alt="Logo"
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
                            value="123456"
                            :class="{ 'is-invalid': errors.password }"
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
                    <div
                      class="d-flex align-items-center justify-content-between mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-md mb-0">
                          <input
                            class="form-check-input"
                            id="remember_me"
                            type="checkbox"
                          />
                          <label
                            for="remember_me"
                            class="form-check-label mt-0 text-dark"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <div class="text-end">
                        <router-link to="/forgot-password" class="text-danger"
                          >Forgot Password?</router-link
                        >
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
                    <div class="login-or position-relative mb-3">
                      <span class="span-or">OR</span>
                    </div>
                    <div class="mb-3">
                      <div
                        class="d-flex align-items-center justify-content-center flex-wrap"
                      >
                        <div class="text-center me-2 flex-fill">
                          <a
                            href="javascript:void(0);"
                            class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                          >
                            <img
                              class="img-fluid m-1"
                              src="@/assets/img/icons/facebook-logo.svg"
                              alt="Facebook"
                            />
                          </a>
                        </div>
                        <div class="text-center me-2 flex-fill">
                          <a
                            href="javascript:void(0);"
                            class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                          >
                            <img
                              class="img-fluid m-1"
                              src="@/assets/img/icons/google-logo.svg"
                              alt="Google"
                            />
                          </a>
                        </div>
                        <div class="text-center me-2 flex-fill">
                          <a
                            href="javascript:void(0);"
                            class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                          >
                            <img
                              class="img-fluid m-1"
                              src="@/assets/img/icons/apple-logo.svg"
                              alt="apple"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <h6 class="fw-normal fs-14 text-dark mb-0">
                        Don’t have an account yet?
                        <router-link to="/register" class="hover-a">
                          Register</router-link
                        >
                      </h6>
                    </div>
                  </div>
                  <!-- end card body -->
                </div>
                <!-- end card -->
              </div>
            </Form>
            <p class="text-dark text-center">
              Copyright &copy; {{ new Date().getFullYear() }} - Preclinic
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
import Cookies from "js-cookie"; // ✅ for token storage (alternative: localStorage)
import { API_BASE } from "@/api/apiConfig";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    const router = useRouter();

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

        // ✅ Store token in cookie (secure in prod)
        Cookies.set("adminToken", data.token, {
          expires: 1,
          sameSite: "Strict",
          secure: true,
        });

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
    };
  },
};
</script>
