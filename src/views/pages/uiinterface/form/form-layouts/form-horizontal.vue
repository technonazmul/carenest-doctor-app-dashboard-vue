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
          <h4 class="fs-18 fw-semibold mb-0">Form Horizontal</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>

            <li class="breadcrumb-item active">Form Horizontal</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">First Name</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Last Name</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Email Address</label>
                  <div class="col-lg-9">
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Username</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Password</label>
                  <div class="col-lg-9">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Repeat Password</label>
                  <div class="col-lg-9">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Address Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Address 1</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Address 2</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">City</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">State</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Country</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 form-label">Postal Code</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Horizontal Form</h5>
            </div>
            <div class="card-body">
              <h6 class="fs-16 mb-3">Personal Information</h6>
              <form action="#">
                <!-- start row -->
                <div class="row">
                  <div class="col-xl-6">
                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">First Name</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Last Name</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Gender</label>
                      <div class="col-lg-9">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_male"
                            value="option1"
                            checked
                          />
                          <label class="form-check-label" for="gender_male"> Male </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_female"
                            value="option2"
                          />
                          <label class="form-check-label" for="gender_female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Blood Group</label>
                      <div class="col-lg-9">
                        <select class="form-select">
                          <option>Select</option>
                          <option value="1">A+</option>
                          <option value="2">O+</option>
                          <option value="3">B+</option>
                          <option value="4">AB+</option>
                        </select>
                      </div>
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end col -->
                  <div class="col-xl-6">
                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Username</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Email</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Password</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Repeat Password</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->

                <h6 class="fs-16 mb-3">Address</h6>

                <!-- start row -->
                <div class="row">
                  <div class="col-xl-6">
                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Address Line 1</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Address Line 2</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">State</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end col -->
                  <div class="col-xl-6">
                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">City</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Country</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Postal Code</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->

                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Horizontal Form 2</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row">
                  <div class="col-xl-6">
                    <h6 class="fs-16 mb-3">Personal Information</h6>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">First Name</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Last Name</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Password</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">State</label>
                      <div class="col-lg-9">
                        <select class="form-select">
                          <option>Select State</option>
                          <option value="1">California</option>
                          <option value="2">Texas</option>
                          <option value="3">Florida</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">About</label>
                      <div class="col-lg-9">
                        <textarea
                          rows="4"
                          cols="5"
                          class="form-control"
                          placeholder="Enter message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <h6 class="fs-16 mb-3">Personal Details</h6>
                    <div class="row">
                      <label class="col-lg-3 form-label">Name</label>
                      <div class="col-lg-9">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="First Name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="Last Name"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Email</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Phone</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 form-label">Address</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                        <div class="row mt-4">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <select class="form-select">
                                <option>Select Country</option>
                                <option value="1">USA</option>
                                <option value="2">France</option>
                                <option value="3">India</option>
                                <option value="4">Spain</option>
                              </select>
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="ZIP code"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="State/Province"
                                class="form-control"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="City"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Horizontal form With Icons</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="row mb-3">
                  <label for="inputEmail1" class="col-sm-2 form-label">Email</label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <input type="email" class="form-control" id="inputEmail1" />
                      <div class="input-group-text">
                        <i class="ti ti-mail"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword1" class="col-sm-2 form-label">Password</label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <input type="password" class="form-control" id="inputPassword1" />
                      <div class="input-group-text">
                        <i class="ti ti-lock"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Horizontal form label sizing</h5>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 form-label form-label-sm"
                  >Email</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="col-form-label-sm"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 form-label">Email</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="col-form-label"
                  />
                </div>
              </div>
              <div class="row">
                <label for="colFormLabelLg" class="col-sm-2 form-label form-label-lg"
                  >Email</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="colFormLabelLg"
                    placeholder="col-form-label-lg"
                  />
                </div>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Auto Sizing</h5>
            </div>
            <div class="card-body">
              <form class="row gy-2 gx-3 align-items-center mb-3">
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingInput">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInput"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingInputGroup"
                    >Username</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                  <select class="form-select" id="autoSizingSelect">
                    <option selected="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label class="form-check-label" for="autoSizingCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
              <span class="fw-semibold mb-1 text-muted"
                >You can then remix that once again with size-specific column
                classes.</span
              >
              <form class="row gx-3 gy-2 align-items-center mt-0">
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeInputName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="specificSizeInputName"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeInputGroupUsername"
                    >Username</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="specificSizeInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeSelect"
                    >Preference</label
                  >
                  <select class="form-select" id="specificSizeSelect">
                    <option selected="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck2"
                    />
                    <label class="form-check-label" for="autoSizingCheck2">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
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

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Form Horizontal",
    };
  },
};
</script>
