<template>
  <div class="auth-bg position-relative overflow-hidden">
    <div class="container-fuild position-relative z-1">
      <div
        class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white"
      >
        <!-- start row-->
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              class="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0"
            >
              <div class="authentication-card w-100">
                <div class="authen-overlay-item w-100">
                  <div class="authen-head text-center">
                    <h1 class="text-white fs-32 fw-bold mb-2">
                      Seamless healthcare access <br />
                      with smart, modern clinic
                    </h1>
                    <p class="text-light fw-normal text-light">
                      Experience efficient, secure, and user-friendly healthcare
                      management designed for modern clinics and growing practices.
                    </p>
                  </div>
                  <div class="mt-4 mx-auto authen-overlay-img">
                    <img src="@/assets/img/auth/cover-imgs-1.png" alt="Img" />
                  </div>
                </div>
              </div>
              <img
                src="@/assets/img/auth/cover-imgs-2.png"
                alt="cover-imgs-2"
                class="img-fluid cover-img"
              />
            </div>
          </div>
          <!-- end row-->

          <div class="col-lg-6 col-md-12 col-sm-12">
            <div
              class="row justify-content-center align-items-center overflow-auto flex-wrap vh-100"
            >
              <div class="col-md-8 mx-auto">
                <form
                  @submit.prevent="submitForm"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div
                    class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill"
                  >
                    <div class="mx-auto mb-4 text-center">
                      <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                    </div>
                    <div class="card border-1 p-lg-3 shadow-md rounded-3">
                      <div class="card-body">
                        <div class="text-center mb-3">
                          <h5 class="mb-1 fs-20 fw-bold">Reset Password</h5>
                          <p class="mb-0">
                            Your new password must be different from previous used
                            passwords.
                          </p>
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
                              <input
                                :type="showPassword ? 'text' : 'password'"
                                class="pass-input form-control ps-0 border-0"
                                placeholder="****************"
                                v-model="password"
                              />
                              <span
                                class="input-group-text bg-white border-0"
                                @click="togglePassword"
                              >
                                <i
                                  :class="[
                                    'ti',
                                    showPassword ? 'ti-eye' : 'ti-eye-off',
                                    'text-dark',
                                    'fs-14',
                                  ]"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Confirm Password</label>
                          <div class="position-relative">
                            <div
                              class="pass-group input-group position-relative border rounded"
                            >
                              <span class="input-group-text bg-white border-0">
                                <i class="ti ti-lock text-dark fs-14"></i>
                              </span>
                              <input
                                :type="showConfirmPassword ? 'text' : 'password'"
                                class="pass-inputs form-control ps-0 border-0"
                                placeholder="****************"
                                v-model="confirmPassword"
                              />
                              <span
                                class="input-group-text bg-white border-0"
                                @click="toggleConfirmPassword"
                              >
                                <i
                                  :class="[
                                    'ti',
                                    showConfirmPassword ? 'ti-eye' : 'ti-eye-off',
                                    'text-dark',
                                    'fs-14',
                                  ]"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            Submit
                          </button>
                        </div>
                        <div class="text-center">
                          <h6 class="fw-normal fs-14 text-dark mb-0">
                            Return to
                            <router-link to="/login-cover" class="hover-a">
                              Login</router-link
                            >
                          </h6>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                </form>
                <p class="fs-14 text-dark text-center mt-4">
                  Copyright &copy; 2025 - Preclinic.
                </p>
              </div>
              <!-- end row-->
            </div>
          </div>
        </div>
        <!-- end row-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    submitForm() {
      this.$router.push("/success-cover");
    },
  },
};
</script>
