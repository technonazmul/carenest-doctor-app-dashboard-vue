<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Pricing</h4>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-lg-4 d-flex">
          <div class="card border flex-fill rounded-4 p-3 mb-3">
            <div class="card-body">
              <div class="mb-3">
                <div class="mb-3">
                  <h4 class="fw-bold mb-1">Basic</h4>
                  <p class="mb-3 text-truncate line-clamb-2">Ideal for small practices</p>
                </div>
                <div class="d-flex align-items-center mb-3 flex-wrap gap-2">
                  <h2 class="fs-32 fw-bold mb-0">
                    $0<span class="fs-14 fw-normal">/Month</span>
                  </h2>
                </div>
                <p class="mb-3 text-truncate line-clamb-2">
                  Including GST. Billed Monthly
                </p>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center btn btn-outline-primary rounded w-100 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#checkout"
                >
                  <i class="isax isax-shopping-cart me-1"></i> Choose Plan
                </a>
              </div>
              <div class="mt-3">
                <div>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Patient registration & scheduling
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Email/SMS appointment reminders
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Appointment scheduling (limited)
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Basic electronic medical records (EMR)
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Limited appointments
                  </span>
                  <span class="text-dark d-flex align-items-center mb-0">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Business-hours-only support
                  </span>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-lg-4 d-flex">
          <div class="card border flex-fill rounded-4 p-3 mb-3">
            <div class="card-body">
              <div class="mb-3">
                <div class="mb-3">
                  <h4 class="fw-bold mb-1">Premium</h4>
                  <p class="mb-3 text-truncate line-clamb-2">Ideal for small practices</p>
                </div>
                <div class="d-flex align-items-center mb-1 flex-wrap gap-2">
                  <h2 class="fs-32 fw-bold mb-0">
                    $50<span class="fs-14 fw-normal">/Month</span>
                  </h2>
                </div>
                <div class="d-flex">
                  <p class="text-decoration-line-through">$45/</p>
                  <span class="text-success fw-semibold">Save 5%</span>
                </div>
                <p class="mb-3 text-truncate line-clamb-2">
                  Including GST. Billed Monthly
                </p>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center btn btn-primary rounded w-100 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#checkout"
                >
                  <i class="isax isax-shopping-cart me-1"></i> Choose Plan
                </a>
              </div>
              <div class="mt-3">
                <div>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Role-based staff access
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Basic telemedicine/video consultation
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Unlimited appointments
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Priority customer support
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Advanced AI diagnostics
                  </span>
                  <span class="text-dark d-flex align-items-center mb-0">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Lab test ordering & results tracking
                  </span>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-lg-4 d-flex">
          <div class="card border flex-fill rounded-4 p-3 mb-3">
            <div class="card-body">
              <div class="mb-3">
                <div class="mb-3">
                  <h4 class="fw-bold mb-1">Enterprise</h4>
                  <p class="mb-3 text-truncate line-clamb-2">Ideal for small practices</p>
                </div>
                <div class="d-flex align-items-center mb-1 flex-wrap gap-2">
                  <h2 class="fs-32 fw-bold mb-0">
                    $50<span class="fs-14 fw-normal">/Month</span>
                  </h2>
                </div>
                <div class="d-flex">
                  <p class="text-decoration-line-through">$45/</p>
                  <span class="text-success fw-semibold">Save 5%</span>
                </div>
                <p class="mb-3 text-truncate line-clamb-2">
                  Including GST. Billed Monthly
                </p>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center btn btn-outline-primary rounded w-100 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#checkout"
                >
                  <i class="isax isax-shopping-cart me-1"></i> Choose Plan
                </a>
              </div>
              <div class="mt-3">
                <div>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    All Basic features
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Unlimited appointments
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Billing & invoicing
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-success me-2"></i>
                    Basic electronic medical records (EMR)
                  </span>
                  <span class="text-dark d-flex align-items-center mb-2">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Detailed EMR with templates
                  </span>
                  <span class="text-dark d-flex align-items-center mb-0">
                    <i class="ti ti-checkbox text-danger me-2"></i>
                    Multi-language support
                  </span>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
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
