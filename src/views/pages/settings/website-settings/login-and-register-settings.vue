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
            <!-- Start Settings Sidebar -->
            <settings-sidebar></settings-sidebar>
            <!-- End Settings Sidebar -->

            <div class="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div class="card-header border-bottom px-0 mx-3">
                <div class="d-flex">
                  <h5 class="fw-bold">Login & Register</h5>
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- start row -->
                <div class="row">
                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex border-0 mb-0 pb-0">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/google-logo.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">Google</p>
                            <p class="mb-0">
                              Streamline your access using your Google account for secure
                              and efficient login.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#google"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex border-0 mb-0 pb-0">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/facebook.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">Facebook</p>
                            <p class="mb-0">
                              Quickly log in or register using your Facebook account,
                              manage operations
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#facebook"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex border-0 mb-0 pb-0">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/apple.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">Apple</p>
                            <p class="mb-0">
                              Allows users to sign in using their Apple ID, offering
                              secure and privacy access.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#php_mailer"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex border-0 mb-0 pb-0">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/ssd.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">SSO</p>
                            <p class="mb-0">
                              Enables users to access multiple applications or systems
                              with one set of login credentials
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#php_mailer"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- Start Add Mail -->
  <div id="google" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Google Login Settings</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Client ID<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Client Secret Key<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Login Redirect URL<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Mail -->

  <!-- Start Add Mail -->
  <div id="facebook" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Facebook Login Settings</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >API ID<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >API Secret Key<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Login Redirect URL<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Mail -->
</template>
