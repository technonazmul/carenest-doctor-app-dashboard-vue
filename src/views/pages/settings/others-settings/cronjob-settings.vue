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
                <h5 class="fw-bold">Cronjob</h5>
              </div>
              <div class="card-body px-0 mx-3">
                <form>
                  <!-- start row -->
                  <div class="row border-bottom mb-3">
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-2">
                          <label class="form-label mb-0">Cronjob Link</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-10">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-2">
                          <label class="form-label mb-0">Execution Interval</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-10">
                          <vue3-tags-input
                            class="input-tags form-control"
                            type="text"
                            id="inputBox2"
                            data-role="tagsinput"
                            name="specialist"
                            value="Tag1"
                            :tags="tagsTwo"
                          />
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
                </form>
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
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsTwo: ["1 Day", "1 Hour"],
    };
  },
};
</script>
