<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild position-relative z-1">
      <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <!-- start row -->
        <div
          class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
        >
          <div class="col-lg-4 mx-auto">
            <form
              @submit.prevent="submitForm"
              class="d-flex justify-content-center align-items-center"
            >
              <div
                class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill"
              >
                <div class="mx-auto mb-5 text-center">
                  <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                </div>
                <div class="card border-1 p-lg-3 shadow-md rounded-3">
                  <div class="card-body">
                    <div class="text-center mb-3">
                      <h5 class="mb-1 fs-20 fw-bold">Welcome Back!</h5>
                    </div>
                    <div class="text-center mb-3">
                      <span class="avatar avatar-xxxl rounded-circle flex-shrink-0">
                        <img
                          src="@/assets/img/users/user-01.jpg"
                          class="rounded-circle"
                          alt="img"
                        />
                      </span>
                      <p class="text-dark">John Carter</p>
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
                    <div class="mb-2">
                      <button type="submit" class="btn bg-primary text-white w-100">
                        Login
                      </button>
                    </div>
                  </div>
                  <!-- end card body -->
                </div>
                <!-- end card -->
              </div>
            </form>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Bg Content -->

    <img src="@/assets/img/auth/auth-bg-top.png" alt="" class="img-fluid element-01" />
    <img src="@/assets/img/auth/auth-bg-bot.png" alt="" class="img-fluid element-02" />
    <!-- End Bg Content -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    submitForm() {
      this.$router.push("/dashboard/admin-dashboard");
    },
  },
};
</script>
