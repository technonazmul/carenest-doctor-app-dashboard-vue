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
      <div class="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">FAQ</h4>
        </div>
        <div class="text-end">
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_faq"
            ><i class="ti ti-plus me-1"></i>Add New FAQ</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Table List -->
      <div class="table-responsive border bg-white">
        <table class="table table-nowrap">
          <thead>
            <tr>
              <th class="text-dark">Questions</th>
              <th class="text-dark">Answer</th>
              <th class="text-dark">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What services does your clinic offer?</td>
              <td>
                <p class="truncate-text">
                  We provide a comprehensive range of services, including preventive care,
                  diagnostics, treatment for acute and chronic conditions, vaccinations,
                  and wellness counseling.
                </p>
              </td>
              <td>General</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Do you accept walk-in patients?</td>
              <td>
                <p class="truncate-text">
                  Yes, we accept walk-in patients for urgent care needs. However,
                  scheduling an appointment is recommended to reduce waiting times.
                </p>
              </td>
              <td>General</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>What should I bring to my appointment?</td>
              <td>
                <p class="truncate-text">
                  Please bring a valid ID, your insurance card, a list of current
                  medications, and any relevant medical records.
                </p>
              </td>
              <td>General</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>How do I cancel or reschedule my appointment?</td>
              <td>
                <p class="truncate-text">
                  To cancel or reschedule, please call our office at least 24 hours in
                  advance to avoid any cancellation fees.
                </p>
              </td>
              <td>General</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>What medical services do you provide?</td>
              <td>
                <p class="truncate-text">
                  We offer a range of services including preventive care, chronic disease
                  management, vaccinations, pediatric care, and minor surgical procedures.
                </p>
              </td>
              <td>General</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Do you offer telemedicine consultations?</td>
              <td>
                <p class="truncate-text">
                  Yes, we provide telemedicine services for certain non-emergency
                  conditions. Please contact our office to determine if your condition is
                  suitable for a virtual visit.
                </p>
              </td>
              <td>Prescriptions</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Are laboratory services available on-site?</td>
              <td>
                <p class="truncate-text">
                  Yes, we have an on-site laboratory for blood tests, urinalysis, and
                  other diagnostic services.
                </p>
              </td>
              <td>Treatment</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Which insurance plans do you accept?</td>
              <td>
                <p class="truncate-text">
                  We accept most major insurance plans. Please visit our website or call
                  our billing department to confirm if we accept your specific plan.
                </p>
              </td>
              <td>Clinic Policies</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>How do I access the patient portal?</td>
              <td>
                <p class="truncate-text">
                  You can access the patient portal by visiting our website and clicking
                  on the "Patient Portal" link. First-time users will need to register
                  using their email address and a provided access code.
                </p>
              </td>
              <td>Wellness</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>What should I do in case of a medical emergency?</td>
              <td>
                <p class="truncate-text">
                  If you are experiencing a life-threatening emergency, call 911 or go to
                  the nearest emergency room immediately.
                </p>
              </td>
              <td>Wellness</td>
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
                      data-bs-target="#edit_faq"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_faq"
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

  <!-- Start Add Categories -->
  <div id="add_faq" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark fw-bold modal-title">Add FAQ</h5>
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
            <div class="mb-2">
              <label class="form-label">Category</label>
              <input type="text" class="form-control" placeholder="Placeholder" />
            </div>
            <div class="mb-2">
              <label class="form-label">Question</label>
              <input type="text" class="form-control" placeholder="Placeholder" />
            </div>
            <div class="mb-0">
              <label class="form-label">Answer</label>
              <textarea class="form-control" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add FAQ
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_faq" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Edit FAQ</h5>
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
            <div class="mb-2">
              <label class="form-label">Category</label>
              <input type="text" class="form-control" value="General" />
            </div>
            <div class="mb-2">
              <label class="form-label">Question</label>
              <input
                type="text"
                class="form-control"
                value="Do you accept my health insurance?"
              />
            </div>
            <div class="mb-0">
              <label class="form-label">Answer</label>
              <textarea class="form-control">
We accep  t most major insurance plans. You can check the list of accepted insurers on our website or call us to confirm coverage.</textarea
              >
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
  <div class="modal fade" id="delete_faq">
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
