<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Grid System</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Form</a></li>

            <li class="breadcrumb-item active">Grid & Gutters</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Form Grid</h5>
            </div>
            <div class="card-body">
              <!-- start row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <!-- end col -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <!-- end col -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Address</label>

                  <!-- start row -->
                  <div class="row">
                    <div class="col-xl-12 mb-3">
                      <input type="text" class="form-control" placeholder="Street" />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-12 mb-3">
                      <input type="text" class="form-control" placeholder="Landmark" />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-6 mb-3">
                      <input type="text" class="form-control" placeholder="City" />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-6 mb-3">
                      <select id="inputState1" class="form-select">
                        <option selected="">State</option>
                        <option>...</option>
                      </select>
                    </div>
                    <!-- end col -->
                    <div class="col-xl-6 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Postal/Zip code"
                      />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-6 mb-3">
                      <select id="inputCountry" class="form-select">
                        <option selected="">Country</option>
                        <option>...</option>
                      </select>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                </div>
                <!-- end col -->
                <div class="col-md-6 mb-3">
                  <!-- start row -->
                  <div class="row">
                    <div class="col-xl-12 mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="Email" />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-12 mb-3">
                      <label class="form-label">DOB</label>
                      <input type="date" class="form-control" />
                    </div>
                    <!-- end col -->
                    <div class="col-xl-12 mb-3">
                      <!-- start row -->
                      <div class="row">
                        <label class="form-label mb-1">Maritial Status</label>
                        <div class="col-xl-6">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="status-married"
                              required=""
                            />
                            <label class="form-check-label" for="status-married">
                              Married
                            </label>
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="status-unmarried"
                              required=""
                            />
                            <label class="form-check-label" for="status-unmarried">
                              Single
                            </label>
                          </div>
                        </div>
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-xl-12"></div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                </div>
                <!-- end col -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Contact Number</label>
                  <input type="number" class="form-control" placeholder="Phone Number" />
                </div>
                <!-- end col -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Alternative Contact</label>
                  <input type="number" class="form-control" placeholder="Phone Number" />
                </div>
                <!-- end col -->
                <div class="col-md-12">
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck"> Check me out </label>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Gutters</h5>
            </div>
            <div class="card-body">
              <!-- start row -->
              <form class="row g-3 mt-0">
                <div class="col-md-6">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <!-- end col -->
                <div class="col-md-6">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <!-- end col -->
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <!-- end col -->
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <!-- end col -->
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <!-- end col -->
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck3" />
                    <label class="form-check-label" for="gridCheck3">
                      Check me out
                    </label>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
                <!-- end col -->
              </form>
              <!-- end row -->
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ============================================================== -->
  <!-- End Page content -->
  <!-- ============================================================== -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Grid Gutters",
    };
  },
};
</script>
