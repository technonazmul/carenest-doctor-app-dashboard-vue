<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild">
      <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 z-1">
        <div
          class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
        >
          <div class="col-lg-6">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <div class="mx-auto mb-5 text-center">
                <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
              </div>
              <div class="error-images mb-3">
                <img src="@/assets/img/error-500.svg" alt="image" class="img-fluid" />
              </div>
              <div class="text-center">
                <h4 class="mb-2 fw-bold">Oops, something went wrong</h4>
                <p class="fs-14 text-center">
                  Server Error 500. We apologise and are fixing the problem. Please try
                  again at a later stage
                </p>
                <div class="d-flex justify-content-center pb-3">
                  <router-link
                    to="/dashboard/"
                    class="btn btn-primary d-flex align-items-center"
                    ><i class="ti ti-chevron-left me-2"></i>Back to Dashboard</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Bg Content -->

    <img src="@/assets/img/auth/auth-bg-top.png" alt="" class="img-fluid element-01" />
    <img src="@/assets/img/auth/auth-bg-bot.png" alt="" class="img-fluid element-02" />
    <!-- End Bg Content -->
  </div>
</template>
