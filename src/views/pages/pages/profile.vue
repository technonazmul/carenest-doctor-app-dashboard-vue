<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Profile</h4>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-body">
          <!-- start row -->
          <div class="row border-bottom mb-3">
            <div class="col-lg-12">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-2">
                  <label class="form-label mb-0"
                    >Profile Image<span class="text-danger ms-1">*</span></label
                  >
                </div>
                <!-- end col -->
                <div class="col-lg-10">
                  <div class="profile-container">
                    <img src="@/assets/img/users/user-08.jpg" alt="Profile" />
                    <div class="overlay-btn">
                      <a href="javascript:void(0);" class="text-white" id="uploadTrigger">
                        <i class="ti ti-photo fs-10"></i>
                      </a>
                    </div>
                    <input type="file" id="profileUpload" style="display: none" />
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0"
                    >First Name<span class="text-danger ms-1">*</span></label
                  >
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0"
                    >Last Name<span class="text-danger ms-1">*</span></label
                  >
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0"
                    >Email<span class="text-danger ms-1">*</span></label
                  >
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <!-- start row -->
          <div class="row border-bottom mb-3">
            <div class="mb-3">
              <h5 class="fw-bold mb-0">Address Information</h5>
            </div>
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">Address Line 1</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">Address Line 2</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">Country</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <vue3-select
                    v-model="selected"
                    :options="CountPro"
                    placeholder="Select"
                  />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">State</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <vue3-select
                    v-model="selectedOne"
                    :options="StatPro"
                    placeholder="Select"
                  />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">City</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <vue3-select
                    v-model="selectedTwo"
                    :options="CityPro"
                    placeholder="Select"
                  />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-6">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-4">
                  <label class="form-label mb-0">Pincode</label>
                </div>
                <!-- end col -->
                <div class="col-lg-8">
                  <input type="text" class="form-control" />
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <!-- start row -->
          <div class="row border-bottom mb-3">
            <div class="mb-3">
              <h5 class="fw-bold mb-0">Change Password</h5>
            </div>
            <div class="col-lg-4">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-6">
                  <label class="form-label mb-0">Current Password</label>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                  <div class="pass-group input-group">
                    <span class="isax toggle-password isax-eye-slash"></span>
                    <input type="password" class="pass-input form-control rounded" />
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-6">
                  <label class="form-label mb-0">New Password</label>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                  <div class="pass-group input-group">
                    <span class="isax toggle-passwords isax-eye-slash"></span>
                    <input type="password" class="pass-inputs form-control rounded" />
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <!-- start row -->
              <div class="row align-items-center mb-3">
                <div class="col-lg-6">
                  <label class="form-label mb-0">Confirm Password</label>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                  <div class="pass-group input-group">
                    <span class="isax toggle-passworda isax-eye-slash"></span>
                    <input type="password" class="pass-inputa form-control rounded" />
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <div class="d-flex align-items-center justify-content-end">
            <a href="javascript:void(0);" class="btn btn-light me-3">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
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
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      CityPro: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      StatPro: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Onatario", value: "Onatario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CountPro: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
    };
  },
};
</script>
