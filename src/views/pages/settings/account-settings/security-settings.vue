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
                  <h5 class="fw-bold">Security</h5>
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- start row -->
                <div class="row">
                  <div class="col-lg-8">
                    <div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Password</h5>
                            <p class="fs-14">
                              Set a unique password to secure the account
                            </p>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#change_password"
                            ><span class="btn btn-md btn-light p-1 shadow-sm border"
                              ><i class="ti ti-edit"></i></span
                          ></a>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">
                              Two Factor Authentication
                            </h5>
                            <p class="fs-14">
                              Use your mobile phone to receive security PIN.
                            </p>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <label class="d-flex align-items-center form-switch ps-3">
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                          </label>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Google Authentication</h5>
                            <p class="fs-14">Connect to Google</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <label class="d-flex align-items-center form-switch ps-3">
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                          </label>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Phone Number</h5>
                            <p class="fs-14">Phone Number associated with the account</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#phone_verification"
                            ><span class="btn btn-md btn-light border shadow-sm p-1"
                              ><i class="ti ti-edit"></i></span
                          ></a>
                          <a href="javascript:void(0);"
                            ><span class="btn btn-md btn-light border shadow-sm p-1"
                              ><i class="ti ti-trash"></i></span
                          ></a>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Email Address</h5>
                            <p class="fs-14">Email Address associated with the account</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#email_verification"
                            ><span class="btn btn-md btn-light border shadow-sm p-1"
                              ><i class="ti ti-edit"></i></span
                          ></a>
                          <a href="javascript:void(0);"
                            ><span class="btn btn-md btn-light border shadow-sm p-1"
                              ><i class="ti ti-trash"></i></span
                          ></a>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Deactivate Account</h5>
                            <p class="fs-14">
                              ​Your account will be deactivated and reactivated upon
                              signing in again.
                            </p>
                          </div>
                        </div>
                        <a href="javascript:void(0);"
                          ><span class="btn btn-md btn-light border shadow-sm p-1"
                            ><i class="ti ti-ban"></i></span
                        ></a>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <h5 class="fs-16 fw-semibold mb-1">Delete Account</h5>
                            <p class="fs-14">Your account will be permanently deleted</p>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                          ><span class="btn btn-md btn-light border shadow-sm p-1"
                            ><i class="ti ti-trash"></i></span
                        ></a>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-4">
                    <div class="card bg-light">
                      <div class="card-body">
                        <div class="mb-3">
                          <h6 class="fs-14 fw-semibold">Browsers & Devices</h6>
                          <p class="mb-1">The associated browsers & devices</p>
                          <a href="javascript:void(0);" class="btn btn-primary"
                            ><i class="ti ti-logout me-1"></i>Sign out from all</a
                          >
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Chrome - Windows</h6>
                            <span class="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Safari Macos</h6>
                            <span class="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Chrome - Windows</h6>
                            <span class="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Chrome - Windows</h6>
                            <span class="fs-13">19 Mar 2025, 02:50 PM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Firefox Windows</h6>
                            <span class="fs-13">20 Feb 2025, 06:20 PM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Chrome - Windows</h6>
                            <span class="fs-13">18 Jan 2025, 03:15 PM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2 border-bottom"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Safari Macos</h6>
                            <span class="fs-13">02 Jan 2025, 09:30 AM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between p-2"
                        >
                          <div>
                            <h6 class="fs-14 fw-semibold">Firefox Windows</h6>
                            <span class="fs-13">28 Dec 2024, 05:40 PM</span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-md bg-white border shadow-sm p-1"
                            ><i class="ti ti-logout"></i
                          ></a>
                        </div>
                      </div>
                      <!-- end card -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
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
  <div id="change_password" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Change Password</h4>
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
                >Current Password<span class="text-danger ms-1">*</span></label
              >
              <div class="pass-group input-group">
                <span class="input-group-text border-end-0">
                  <i class="ti ti-lock"></i>
                </span>
                <span class="isax toggle-password isax-eye-slash"></span>
                <input
                  type="password"
                  class="pass-input form-control border-start-0 ps-0"
                  placeholder="****************"
                />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >New Password<span class="text-danger ms-1">*</span></label
              >
              <div class="pass-group input-group mb-3">
                <span class="input-group-text border-end-0">
                  <i class="ti ti-lock"></i>
                </span>
                <span class="isax toggle-passwords isax-eye-slash"></span>
                <input
                  type="password"
                  class="pass-inputs form-control border-start-0 ps-0"
                  placeholder="****************"
                />
              </div>
              <div class="password-strength d-flex" id="passwordStrength">
                <span id="poor"></span>
                <span id="weak"></span>
                <span id="strong"></span>
                <span id="heavy"></span>
              </div>
              <div id="passwordInfo" class="mb-2"></div>
              <p class="text-gray-5">
                Use 8 or more characters with a mix of letters, numbers & symbols.
              </p>
            </div>
            <div>
              <label class="form-label"
                >Confirm Password<span class="text-danger ms-1">*</span></label
              >
              <div class="pass-group input-group">
                <span class="input-group-text border-end-0">
                  <i class="ti ti-lock"></i>
                </span>
                <span class="isax toggle-passworda isax-eye-slash"></span>
                <input
                  type="password"
                  class="pass-inputa form-control border-start-0 ps-0"
                  placeholder="****************"
                />
              </div>
            </div>
          </div>
          <div
            class="modal-footer d-flex align-items-center justify-content-between gap-1"
          >
            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div id="phone_verification" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Change Phone Number</h4>
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
                >Current Phone Number<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >New Phone Number<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" id="phone2" />
              <p class="mt-2 d-inline-flex align-items-center">
                <i class="ti ti-info-circle me-1"></i>New phone number only updated once
                you verified
              </p>
            </div>
            <div>
              <label class="form-label"
                >Current Password<span class="text-danger ms-1">*</span></label
              >
              <div class="pass-group input-group">
                <span class="input-group-text border-end-0">
                  <i class="ti ti-lock"></i>
                </span>
                <span class="isax toggle-password isax-eye-slash"></span>
                <input
                  type="password"
                  class="pass-input form-control border-start-0 ps-0"
                  placeholder="****************"
                />
              </div>
            </div>
          </div>
          <div
            class="modal-footer d-flex align-items-center justify-content-between gap-1"
          >
            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div id="email_verification" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Change Email Address</h4>
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
                >Current Email Address<span class="text-danger ms-1">*</span></label
              >
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >New Email Address<span class="text-danger ms-1">*</span></label
              >
              <input type="email" class="form-control" />
              <p class="mt-2 d-inline-flex align-items-center">
                <i class="ti ti-info-circle me-1"></i>New email address only updated once
                you verified
              </p>
            </div>
            <div>
              <label class="form-label"
                >Current Password<span class="text-danger ms-1">*</span></label
              >
              <div class="pass-group input-group">
                <span class="input-group-text border-end-0">
                  <i class="ti ti-lock"></i>
                </span>
                <span class="isax toggle-password isax-eye-slash"></span>
                <input
                  type="password"
                  class="pass-input form-control border-start-0 ps-0"
                  placeholder="****************"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-end gap-1">
            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div id="two-factor" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold">SMS Two Factor Authentication</h4>
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
                >Phone Number<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" id="phone3" />
            </div>
            <p class="fs-13 mb-0">
              By providing your phone number, you agree to receive text messages from
              Figma to enable two-factor authentication when you log in.
            </p>
          </div>
          <div
            class="modal-footer d-flex align-items-center justify-content-between gap-1"
          >
            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div id="delete_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Delete Account</h4>
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
              <p class="text-dark fw-semibold mb-0">Why Are You Deleting Your Account?</p>
              <p class="fs-13">
                We're sorry to see you go! To help us improve, please let us know your
                reason for deleting your account
              </p>
            </div>
            <div>
              <div class="form-check mb-3 d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio-2"
                  id="Radio-sm-1"
                />
                <div class="ms-2">
                  <p class="text-dark fw-semibold mb-0">No longer using the service</p>
                  <label class="form-check-label fs-13" for="Radio-sm-1">
                    I no longer need this service and won’t be using it in the future.
                  </label>
                </div>
              </div>
              <div class="form-check mb-3 d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio-2"
                  id="Radio-sm-2"
                />
                <div class="ms-2">
                  <p class="text-dark fw-semibold mb-0">Privacy concerns</p>
                  <label class="form-check-label fs-13" for="Radio-sm-2">
                    I am concerned about how my data is handled and want to remove
                  </label>
                </div>
              </div>
              <div class="form-check mb-3 d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio-2"
                  id="Radio-sm-3"
                />
                <div class="ms-2">
                  <p class="text-dark fw-semibold mb-0">Too many notifications/emails</p>
                  <label class="form-check-label fs-13" for="Radio-sm-3">
                    I’m overwhelmed by the volume of notifications or emails
                  </label>
                </div>
              </div>
              <div class="form-check mb-3 d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio-2"
                  id="Radio-sm-4"
                />
                <div class="ms-2">
                  <p class="text-dark fw-semibold mb-0">Poor user experience</p>
                  <label class="form-check-label fs-13" for="Radio-sm-4">
                    I’ve had difficulty using the platform, and it didn’t meet my
                    expectations
                  </label>
                </div>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio-2"
                  id="Radio-sm-5"
                  checked
                />
                <label class="form-check-label text-dark fw-semibold" for="Radio-sm-5">
                  Other (Please specify)
                </label>
              </div>
            </div>
            <div>
              <label class="form-label"
                >Reason<span class="text-danger ms-1">*</span></label
              >
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div
            class="modal-footer d-flex align-items-center justify-content-between gap-1"
          >
            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Confirm & Delete</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
