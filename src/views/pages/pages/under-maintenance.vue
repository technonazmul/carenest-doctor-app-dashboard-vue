<template>
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <!-- start row -->
      <div
        class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
      >
        <div class="col-lg-5">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="mb-3 p-3">
              <img src="@/assets/img/logo.svg" alt="logo" class="img-fluid" />
            </div>
            <div class="error-images mb-3 pb-3">
              <img
                src="@/assets/img/bg/under-maintanence.svg"
                alt="image"
                class="img-fluid"
              />
            </div>
            <div class="text-center">
              <h5 class="fw-bold mb-1">We Will Return Shortly.</h5>
              <p class="fs-16 text-center">
                We're working on new technology upgrades. We regret any inconvenience this
                has caused.
              </p>
              <div class="d-flex justify-content-center pb-3">
                <router-link
                  to="/dashboard/admin-dashboard"
                  class="btn btn-primary d-flex align-items-center"
                  ><i class="ti ti-chevron-left me-1"></i>Back to Dashboard</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>
