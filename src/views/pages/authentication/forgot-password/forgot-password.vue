<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild position-relative z-1">
      <div
        class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white"
      >
        <!-- start row-->
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              class="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0"
            >
              <img
                src="@/assets/img/auth/forgot-illustration-img.png"
                alt="log-illustration-img-01"
                class="img-fluid img1"
              />
            </div>
          </div>
          <!-- end row-->

          <div class="col-lg-6 col-md-12 col-sm-12">
            <div
              class="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3"
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
                    <div class="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
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
                            <router-link to="/login-illustration" class="hover-a">
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
                <p class="text-dark text-center">Copyright &copy; 2025 - Preclinic</p>
              </div>
              <!-- end row-->
            </div>
          </div>
        </div>
        <!-- end row-->
      </div>
    </div>
    <!-- End Content -->
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
