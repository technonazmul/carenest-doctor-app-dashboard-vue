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
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold">Cancellation Reason</h5>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_reason"
                    ><i class="ti ti-plus me-1"></i>New Reason</a
                  >
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- Table List -->
                <div class="table-responsive border">
                  <table class="table table-nowrap">
                    <thead class="tablehead-light">
                      <tr>
                        <th>Reason</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Personal Emergency</td>
                        <td>30 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Feeling Better</td>
                        <td>15 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Transportation Issues</td>
                        <td>02 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Booked by Mistake</td>
                        <td>27 Mar 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Forgot Appointment</td>
                        <td>25 Jan 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-danger fs-13 fw-medium text-danger border border-danger py-1 px-2"
                            >Inactive</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /Table List -->
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

  <!-- Start Add Categories -->
  <div id="add_reason" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Add Cancellation Reason</h5>
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
            <div class="mb-0">
              <label class="form-label"
                >Reason<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Reason
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_reason" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Edit Cancellation Reason</h5>
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
                >Reason<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="Personal Emergency" />
            </div>
            <div class="mb-0">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label">Required</label>
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input m-0" type="checkbox" checked="" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
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
  <!-- End Edit Categories -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_reason">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
