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
                          <h5 class="mb-1 fs-20 fw-bold">Forgot Password</h5>
                          <p class="mb-0">
                            No worries, we’ll send you reset instructions
                          </p>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Email Address</label>
                          <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white">
                              <i class="ti ti-mail fs-14 text-dark"></i>
                            </span>
                            <input
                              type="text"
                              value=""
                              class="form-control border-start-0 ps-0"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>

                        <div class="mb-3">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            Reset Password
                          </button>
                        </div>
                        <div class="text-center">
                          <h6 class="fw-normal fs-14 text-dark mb-0">
                            Return to
                            <router-link to="/login-cover" class="hover-a">
                              login</router-link
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
                  Copyright &copy; 2025 - Preclinic
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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/email-verification");
    },
  },
};
</script>
