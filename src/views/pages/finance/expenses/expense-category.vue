<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Expense Category</h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_new_category"
            ><i class="ti ti-plus me-1"></i>Add Category</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Table -->
      <div class="table-responsive">
        <table class="table table-nowrap">
          <thead class="thead-light">
            <tr>
              <th class="no-sort">Category</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="">Medical Supplies</a></td>
              <td>
                <span
                  class="badge badge-soft-success rounded text-success fw-medium border border-success fs-13"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><a href="">Laboratory</a></td>
              <td>
                <span
                  class="badge badge-soft-success rounded text-success fw-medium border border-success fs-13"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><a href="">Cleaning Services</a></td>
              <td>
                <span
                  class="badge badge-soft-success rounded text-success fw-medium border border-success fs-13"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><a href="">Salary</a></td>
              <td>
                <span
                  class="badge badge-soft-success rounded text-success fw-medium border border-success fs-13"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><a href="">Utilities</a></td>
              <td>
                <span
                  class="badge badge-soft-danger rounded text-danger fw-medium border border-danger fs-13"
                  >Inactive</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><a href="">Medical Supplies</a></td>
              <td>
                <span
                  class="badge badge-soft-danger rounded text-danger fw-medium border border-danger fs-13"
                  >Inactive</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_new_category"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--  End Table -->
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

  <!-- ========================
			End Page Content
		========================= -->
  <!-- End Wrapper -->

  <!-- Start Add Category -->
  <div class="modal fade" id="add_new_category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">New Category</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label mb-1 text-dark fs-14 fw-medium"
              >Category Name<span class="text-danger">*</span></label
            >
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light btn-sm me-2 fs-13 fw-medium"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary btn-sm fs-13 fw-medium">
            Add New Category
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Category  -->

  <!-- Start Edit Category -->
  <div class="modal fade" id="edit_new_category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Category</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Category Name<span class="text-danger">*</span></label
              >
              <div class="input-group">
                <input type="text" class="form-control" value="Medical Supplies" />
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Status<span class="text-danger">*</span></label
              >
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Active
                </a>
                <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                  <li>
                    <div class="mb-2">
                      <input
                        type="text"
                        class="form-control form-control"
                        placeholder="Search"
                      />
                    </div>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center rounded-1">
                      <input class="form-check-input m-0 me-2" type="checkbox" checked />
                      Approved
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center rounded-1">
                      <input class="form-check-input m-0 me-2" type="checkbox" />
                      Options Enhanced
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center rounded-1">
                      <input class="form-check-input m-0 me-2" type="checkbox" checked />
                      Pending
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center rounded-1">
                      <input class="form-check-input m-0 me-2" type="checkbox" />
                      New
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light btn-sm me-2 fs-13 fw-medium"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary btn-sm fs-13 fw-medium">
            Add New Category
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Edit Category  -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-0"
          />
          <div class="mb-3 position-relative z-1">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
          <p class="mb-3 position-relative z-1">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href=""
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
