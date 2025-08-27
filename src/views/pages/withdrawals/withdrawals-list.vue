<template>
  <div>
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
          class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
        >
          <div class="flex-grow-1">
            <h4 class="fw-bold mb-0">
              Withdraw Requests
              <span class="badge badge-soft-primary fs-13 fw-medium ms-2">
                Total Requests : {{ withdrawRequests.length }}
              </span>
            </h4>
          </div>
          <div class="text-end d-flex">
            <!-- Export Button -->
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-primary fs-13 btn-md dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-download me-1"></i>Export
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item"
                    @click="exportData('excel')"
                  >
                    <i class="ti ti-file-spreadsheet me-2"></i>Excel
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item"
                    @click="exportData('pdf')"
                  >
                    <i class="ti ti-file-text me-2"></i>PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End Page Header -->

        <!-- Stats Cards -->
        <div class="row mb-4">
          <div class="col-xl-3 col-sm-6">
            <div class="card flex-fill">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden mb-2">
                  <div>
                    <p class="mb-1 text-truncate">Total Amount</p>
                    <h6>{{ formatCurrency(totalAmount) }}</h6>
                  </div>
                </div>
                <div class="attendance-report-bar mb-2">
                  <div class="progress" role="progressbar" style="height: 5px">
                    <div
                      class="progress-bar bg-primary"
                      style="width: 85%"
                    ></div>
                  </div>
                </div>
                <div>
                  <p class="d-flex align-items-center text-truncate">
                    <span
                      class="text-success fs-12 d-flex align-items-center me-1"
                    >
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+12.40%
                    </span>
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6">
            <div class="card flex-fill">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden mb-2">
                  <div>
                    <p class="mb-1 text-truncate">Pending Requests</p>
                    <h6>{{ pendingRequests }}</h6>
                  </div>
                </div>
                <div class="attendance-report-bar mb-2">
                  <div class="progress" role="progressbar" style="height: 5px">
                    <div
                      class="progress-bar bg-warning"
                      style="width: 65%"
                    ></div>
                  </div>
                </div>
                <div>
                  <p class="d-flex align-items-center text-truncate">
                    <span
                      class="text-warning fs-12 d-flex align-items-center me-1"
                    >
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+8.20%
                    </span>
                    from last week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6">
            <div class="card flex-fill">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden mb-2">
                  <div>
                    <p class="mb-1 text-truncate">Approved</p>
                    <h6>{{ approvedRequests }}</h6>
                  </div>
                </div>
                <div class="attendance-report-bar mb-2">
                  <div class="progress" role="progressbar" style="height: 5px">
                    <div
                      class="progress-bar bg-success"
                      style="width: 90%"
                    ></div>
                  </div>
                </div>
                <div>
                  <p class="d-flex align-items-center text-truncate">
                    <span
                      class="text-success fs-12 d-flex align-items-center me-1"
                    >
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+15.30%
                    </span>
                    from last week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6">
            <div class="card flex-fill">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden mb-2">
                  <div>
                    <p class="mb-1 text-truncate">This Month</p>
                    <h6>{{ formatCurrency(thisMonthAmount) }}</h6>
                  </div>
                </div>
                <div class="attendance-report-bar mb-2">
                  <div class="progress" role="progressbar" style="height: 5px">
                    <div class="progress-bar bg-info" style="width: 75%"></div>
                  </div>
                </div>
                <div>
                  <p class="d-flex align-items-center text-truncate">
                    <span
                      class="text-info fs-12 d-flex align-items-center me-1"
                    >
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+22.10%
                    </span>
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search and Filter Section -->
        <div
          class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <div class="search-set mb-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="table-search d-flex align-items-center mb-0">
                <div class="search-input">
                  <a href="javascript:void(0);" class="btn-searchset"></a>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search withdraw requests..."
                    v-model="searchQuery"
                    @input="onSearchChange"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
          >
            <!-- Filters -->
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-filter text-gray-5 me-1"></i>Filters
                <span
                  v-if="activeFiltersCount > 0"
                  class="badge bg-primary ms-1"
                  >{{ activeFiltersCount }}</span
                >
              </a>
              <div
                class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-3"
              >
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-select" v-model="filters.status">
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Method</label>
                  <select class="form-select" v-model="filters.method">
                    <option value="">All Methods</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="bkash">bKash</option>
                    <option value="nagad">Nagad</option>
                    <option value="stripe">Stripe</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Currency</label>
                  <select class="form-select" v-model="filters.currency">
                    <option value="">All Currencies</option>
                    <option value="USD">USD</option>
                    <option value="BDT">BDT</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Amount Range</label>
                  <select class="form-select" v-model="filters.amountRange">
                    <option value="">All Amounts</option>
                    <option value="0-100">0 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="500-1000">500 - 1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="clearFilters"
                >
                  Clear All
                </button>
              </div>
            </div>

            <!-- Sort By -->
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                data-bs-toggle="dropdown"
              >
                <span class="me-1">Sort By : </span> {{ sortLabel }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('recent')"
                    >Recently Added</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('amount_asc')"
                    >Amount (Low to High)</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('amount_desc')"
                    >Amount (High to Low)</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('oldest')"
                    >Oldest First</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="text-center p-4">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-2">Loading withdraw requests...</p>
        </div>

        <!-- Withdraw Requests Table -->
        <div v-else class="table-responsive">
          <table class="table table-nowrap">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    v-model="selectAll"
                    @change="toggleSelectAll"
                  />
                </th>
                <th>Request ID</th>
                <th>Doctor</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="request in paginatedRequests" :key="request._id">
                <td>
                  <input
                    type="checkbox"
                    :value="request._id"
                    v-model="selectedRequests"
                  />
                </td>
                <td>
                  <a
                    href="javascript:void(0);"
                    class="tb-data text-primary"
                    @click="viewRequest(request)"
                  >
                    {{ formatRequestId(request._id) }}
                  </a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm me-2">
                      <img
                        v-if="request.doctorId && request.doctorId.image"
                        :src="`${API_BASE}/uploads/${request.doctorId.image}`"
                        class="rounded-circle"
                        alt="Doctor"
                      />
                      <div
                        v-else
                        class="avatar-placeholder bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                      >
                        {{ getDoctorInitials(request.doctorId) }}
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0 fs-14">
                        {{ getDoctorName(request.doctorId) }}
                      </h6>
                      <small class="text-muted">{{
                        getDoctorSpecialty(request.doctorId)
                      }}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="badge badge-soft-info">
                    {{ getMethodDisplayName(request.method) }}
                  </span>
                </td>
                <td>
                  <h6 class="fs-14 fw-semibold mb-0">
                    {{ formatAmount(request.amount, request.currency) }}
                  </h6>
                </td>
                <td>
                  <span class="badge badge-soft-secondary">
                    {{ request.currency }}
                  </span>
                </td>
                <td>
                  <span :class="getStatusClass(request.status)">
                    <i class="ti ti-point-filled me-1"></i>
                    {{ getStatusDisplayName(request.status) }}
                  </span>
                </td>
                <td>
                  {{ formatDate(request.requestedAt) }}
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div
                      class="action-item dropdown"
                      style="position: relative"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-sm btn-icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end shadow">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item justify-content-start"
                            @click="viewRequest(request)"
                          >
                            <i class="ti ti-eye me-2"></i>View Details
                          </a>
                        </li>
                        <li v-if="canApprove(request)">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item justify-content-start text-success"
                            @click="approveRequest(request)"
                          >
                            <i class="ti ti-check me-2"></i>Approve
                          </a>
                        </li>
                        <li v-if="canReject(request)">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item justify-content-start text-danger"
                            @click="rejectRequest(request)"
                          >
                            <i class="ti ti-x me-2"></i>Reject
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="paginatedRequests.length === 0">
                <td colspan="9" class="text-center p-4">
                  <div class="d-flex flex-column align-items-center">
                    <i class="ti ti-receipt-off fs-1 text-muted mb-2"></i>
                    <p class="mb-0">No withdraw requests found.</p>
                    <small class="text-muted"
                      >Try adjusting your search or filters.</small
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bulk Actions -->
        <div
          v-if="selectedRequests.length > 0"
          class="alert alert-info d-flex justify-content-between align-items-center"
        >
          <span>{{ selectedRequests.length }} request(s) selected</span>
          <div>
            <button
              class="btn btn-sm btn-success me-2"
              @click="confirmBulkApprove"
            >
              <i class="ti ti-check me-1"></i>Approve Selected
            </button>
            <button
              class="btn btn-sm btn-danger me-2"
              @click="confirmBulkReject"
            >
              <i class="ti ti-x me-1"></i>Reject Selected
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="clearSelection"
            >
              Clear Selection
            </button>
          </div>
        </div>

        <!-- Pagination -->
        <div
          v-if="totalPages > 1"
          class="d-flex justify-content-between align-items-center mt-4"
        >
          <div class="d-flex align-items-center">
            <label class="me-2">Show:</label>
            <select
              class="form-select form-select-sm"
              style="width: auto"
              v-model="itemsPerPage"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span class="ms-2 text-muted">per page</span>
          </div>

          <nav>
            <ul class="pagination mb-0">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="changePage(currentPage - 1)"
                  >Previous</a
                >
              </li>
              <li
                v-for="page in visiblePages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="changePage(page)"
                  >{{ page }}</a
                >
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="changePage(currentPage + 1)"
                  >Next</a
                >
              </li>
            </ul>
          </nav>

          <div class="text-muted">
            Showing {{ startIndex + 1 }} to {{ endIndex }} of
            {{ filteredRequestsCount }} entries
          </div>
        </div>
      </div>
      <!-- End Content -->

      <!-- Footer -->
      <div class="footer text-center bg-white p-2 border-top">
        <p class="text-dark mb-0">
          2025 &copy;
          <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
          Rights Reserved
        </p>
      </div>
    </div>

    <!-- View Request Details Modal -->
    <div class="modal fade" id="viewRequestModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Withdraw Request Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body" v-if="viewingRequest">
            <!-- Doctor Information Section -->
            <div v-if="viewingRequest.doctorId" class="card mb-4">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="ti ti-user-circle me-2"></i>Doctor Information
                </h6>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-3 text-center">
                    <div
                      class="avatar avatar-xl mb-3"
                      style="width: 200px; height: 200px"
                    >
                      <img
                        v-if="viewingRequest.doctorId.image"
                        :src="`${API_BASE}/uploads/${viewingRequest.doctorId.image}`"
                        class="rounded-circle"
                        alt="Doctor"
                        style="object-fit: cover"
                      />
                      <div
                        v-else
                        class="avatar-placeholder bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                        style="width: 80px; height: 80px; font-size: 24px"
                      >
                        {{ getDoctorInitials(viewingRequest.doctorId) }}
                      </div>
                    </div>
                    <div class="d-flex justify-content-center gap-1 mb-2">
                      <i
                        v-for="n in 5"
                        :key="n"
                        class="ti ti-star-filled"
                        :class="
                          n <= (viewingRequest.doctorId.averageRating || 0)
                            ? 'text-warning'
                            : 'text-muted'
                        "
                      ></i>
                    </div>
                    <small class="text-muted"
                      >{{
                        viewingRequest.doctorId.totalReviews || 0
                      }}
                      reviews</small
                    >
                  </div>
                  <div class="col-md-9">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <strong>Name:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.name || "N/A" }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Specialization:</strong>
                          <p class="mb-1">
                            {{ getDoctorSpecialty(viewingRequest.doctorId) }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>BMDC Number:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.bmdcNumber || "N/A" }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Experience:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.experience || "N/A" }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <strong>Email:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.email || "N/A" }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Phone:</strong>
                          <p class="mb-1">
                            {{
                              viewingRequest.doctorId.personalNumber || "N/A"
                            }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Gender:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.gender || "N/A" }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Current Balance:</strong>
                          <p class="mb-1 text-primary fw-semibold">
                            {{
                              formatCurrency(
                                viewingRequest.doctorId.balance || 0
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-3">
                          <strong>Qualifications:</strong>
                          <p class="mb-1">
                            {{
                              viewingRequest.doctorId.qualifications || "N/A"
                            }}
                          </p>
                        </div>
                        <div class="mb-3">
                          <strong>Workplace:</strong>
                          <p class="mb-1">
                            {{ viewingRequest.doctorId.workplace || "N/A" }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Request Information Section -->
            <div class="card mb-4">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="ti ti-receipt me-2"></i>Request Information
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <strong>Request ID:</strong>
                      <p class="mb-1">
                        {{ formatRequestId(viewingRequest._id) }}
                      </p>
                    </div>
                    <div class="mb-3">
                      <strong>Method:</strong>
                      <span class="badge badge-soft-info ms-2">
                        {{ getMethodDisplayName(viewingRequest.method) }}
                      </span>
                    </div>
                    <div class="mb-3">
                      <strong>Amount:</strong>
                      <p class="h5 text-primary mb-1">
                        {{
                          formatAmount(
                            viewingRequest.amount,
                            viewingRequest.currency
                          )
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <strong>Currency:</strong>
                      <span class="badge badge-soft-secondary ms-2">
                        {{ viewingRequest.currency }}
                      </span>
                    </div>
                    <div class="mb-3">
                      <strong>Status:</strong>
                      <span
                        :class="getStatusClass(viewingRequest.status)"
                        class="ms-2"
                      >
                        {{ getStatusDisplayName(viewingRequest.status) }}
                      </span>
                    </div>
                    <div class="mb-3">
                      <strong>Requested At:</strong>
                      <p class="mb-1">
                        {{ formatDate(viewingRequest.requestedAt) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Method Details -->
            <div v-if="viewingRequest.fields" class="card">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="ti ti-credit-card me-2"></i>Payment Method Details
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div
                      v-for="(value, key) in viewingRequest.fields"
                      :key="key"
                      class="mb-2"
                    >
                      <strong>{{ formatFieldName(key) }}:</strong>
                      <span class="ms-2">{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="viewingRequest.fields" class="card">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="ti ti-credit-card me-2"></i>Financial Details
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div
                      v-for="(value, key) in viewingRequest.fees"
                      :key="key"
                      class="mb-2"
                    >
                      <strong>{{ formatFieldName(key) }}:</strong>
                      <span class="ms-2">{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              v-if="canApprove(viewingRequest)"
              type="button"
              class="btn btn-success"
              @click="approveRequest(viewingRequest)"
              data-bs-dismiss="modal"
            >
              <i class="ti ti-check me-1"></i>Approve
            </button>
            <button
              v-if="canReject(viewingRequest)"
              type="button"
              class="btn btn-danger"
              @click="rejectRequest(viewingRequest)"
              data-bs-dismiss="modal"
            >
              <i class="ti ti-x me-1"></i>Reject
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Action Confirmation Modals -->
    <div class="modal fade" id="bulkApproveModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Bulk Approval</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to approve
              <strong>{{ selectedRequests.length }}</strong> selected
              request(s)?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="bulkApproveRequests"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              Approve All Selected
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="bulkRejectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Bulk Rejection</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to reject
              <strong>{{ selectedRequests.length }}</strong> selected
              request(s)?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="bulkRejectRequests"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              Reject All Selected
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast show"
        :class="`bg-${toast.type}`"
        role="alert"
      >
        <div class="toast-header">
          <strong class="me-auto">{{ toast.title }}</strong>
          <button
            type="button"
            class="btn-close"
            @click="removeToast(toast.id)"
          ></button>
        </div>
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  name: "WithdrawRequestsManagement",
  setup() {
    const adminToken = Cookies.get("adminToken");
    return {
      adminToken,
      API_BASE,
    };
  },
  data() {
    return {
      // Data arrays
      withdrawRequests: [],

      // Loading states
      isLoading: true,
      isSubmitting: false,

      // Search and filter
      searchQuery: "",
      filters: {
        status: "",
        method: "",
        currency: "",
        amountRange: "",
      },
      sortBy: "recent",

      // Selection
      selectedRequests: [],
      selectAll: false,

      // Pagination
      currentPage: 1,
      itemsPerPage: 10,

      // Viewing request
      viewingRequest: null,

      // Toast notifications
      toasts: [],
      toastId: 0,
    };
  },

  computed: {
    // Count active filters
    activeFiltersCount() {
      return Object.values(this.filters).filter((value) => value !== "").length;
    },

    // Sort label for display
    sortLabel() {
      const labels = {
        recent: "Recently Added",
        oldest: "Oldest First",
        amount_asc: "Amount (Low to High)",
        amount_desc: "Amount (High to Low)",
      };
      return labels[this.sortBy] || "Recently Added";
    },

    // Statistics
    totalAmount() {
      return this.withdrawRequests.reduce(
        (sum, request) => sum + request.amount,
        0
      );
    },

    pendingRequests() {
      return this.withdrawRequests.filter(
        (request) => request.status === "pending"
      ).length;
    },

    approvedRequests() {
      return this.withdrawRequests.filter(
        (request) => request.status === "approved"
      ).length;
    },

    thisMonthAmount() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      return this.withdrawRequests
        .filter((request) => {
          const requestDate = new Date(request.requestedAt);
          return (
            requestDate.getMonth() === currentMonth &&
            requestDate.getFullYear() === currentYear
          );
        })
        .reduce((sum, request) => sum + request.amount, 0);
    },

    // Filtered requests based on search and filters
    filteredRequests() {
      let filtered = [...this.withdrawRequests];

      // Apply search
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (request) =>
            request._id.toLowerCase().includes(query) ||
            request.method.toLowerCase().includes(query) ||
            request.status.toLowerCase().includes(query) ||
            request.currency.toLowerCase().includes(query) ||
            (request.doctorId &&
              request.doctorId.name &&
              request.doctorId.name.toLowerCase().includes(query))
        );
      }

      // Apply filters
      if (this.filters.status) {
        filtered = filtered.filter(
          (request) => request.status === this.filters.status
        );
      }

      if (this.filters.method) {
        filtered = filtered.filter(
          (request) => request.method === this.filters.method
        );
      }

      if (this.filters.currency) {
        filtered = filtered.filter(
          (request) => request.currency === this.filters.currency
        );
      }

      if (this.filters.amountRange) {
        filtered = filtered.filter((request) => {
          const amount = request.amount;
          switch (this.filters.amountRange) {
            case "0-100":
              return amount >= 0 && amount <= 100;
            case "100-500":
              return amount > 100 && amount <= 500;
            case "500-1000":
              return amount > 500 && amount <= 1000;
            case "1000+":
              return amount > 1000;
            default:
              return true;
          }
        });
      }

      // Apply sorting
      filtered.sort((a, b) => {
        switch (this.sortBy) {
          case "recent":
            return new Date(b.requestedAt) - new Date(a.requestedAt);
          case "oldest":
            return new Date(a.requestedAt) - new Date(b.requestedAt);
          case "amount_asc":
            return a.amount - b.amount;
          case "amount_desc":
            return b.amount - a.amount;
          default:
            return new Date(b.requestedAt) - new Date(a.requestedAt);
        }
      });

      return filtered;
    },

    filteredRequestsCount() {
      return this.filteredRequests.length;
    },

    // Pagination
    totalPages() {
      return Math.ceil(this.filteredRequestsCount / this.itemsPerPage);
    },

    paginatedRequests() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredRequests.slice(start, end);
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },

    endIndex() {
      return Math.min(
        this.startIndex + this.itemsPerPage,
        this.filteredRequestsCount
      );
    },

    visiblePages() {
      const pages = [];
      const totalPages = this.totalPages;
      const current = this.currentPage;

      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) pages.push(i);
          pages.push("...");
          pages.push(totalPages);
        } else if (current >= totalPages - 3) {
          pages.push(1);
          pages.push("...");
          for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
        } else {
          pages.push(1);
          pages.push("...");
          for (let i = current - 1; i <= current + 1; i++) pages.push(i);
          pages.push("...");
          pages.push(totalPages);
        }
      }

      return pages;
    },
  },

  watch: {
    searchQuery() {
      this.currentPage = 1;
    },
    filters: {
      handler() {
        this.currentPage = 1;
      },
      deep: true,
    },
    itemsPerPage() {
      this.currentPage = 1;
    },
    selectedRequests() {
      this.selectAll =
        this.selectedRequests.length === this.paginatedRequests.length &&
        this.paginatedRequests.length > 0;
    },
  },

  async mounted() {
    await this.loadWithdrawRequests();
  },

  methods: {
    async loadWithdrawRequests() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${API_BASE}/api/backend/withdraw-requests`,
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
          }
        );

        this.withdrawRequests = response.data.requests || [];
      } catch (error) {
        console.error("Error loading withdraw requests:", error);
        this.showToast("error", "Error", "Failed to load withdraw requests");
      } finally {
        this.isLoading = false;
      }
    },

    // Doctor helper methods
    getDoctorName(doctor) {
      return doctor && doctor.name ? doctor.name : "Unknown Doctor";
    },

    getDoctorSpecialty(doctor) {
      return doctor && doctor.specialty ? doctor.specialty : "Not specified";
    },

    getDoctorInitials(doctor) {
      if (!doctor || !doctor.name) return "UD";
      const names = doctor.name.split(" ");
      return names
        .map((name) => name.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
    },

    // Search methods
    onSearchChange() {
      // Debounced search can be implemented here if needed
    },

    // Filter methods
    clearFilters() {
      this.filters = {
        status: "",
        method: "",
        currency: "",
        amountRange: "",
      };
    },

    setSortBy(sortType) {
      this.sortBy = sortType;
    },

    // Selection methods
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedRequests = this.paginatedRequests.map(
          (request) => request._id
        );
      } else {
        this.selectedRequests = [];
      }
    },

    clearSelection() {
      this.selectedRequests = [];
      this.selectAll = false;
    },

    // Pagination methods
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.selectedRequests = [];
        this.selectAll = false;
      }
    },

    // Request actions
    viewRequest(request) {
      this.viewingRequest = request;
      const modal = new Modal(document.getElementById("viewRequestModal"));
      modal.show();
    },

    canApprove(request) {
      return request && request.status === "pending";
    },

    canReject(request) {
      return request && request.status === "pending";
    },

    async approveRequest(request) {
      try {
        this.isSubmitting = true;
        await axios.post(
          `${API_BASE}/api/backend/withdraw/approve/${request._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
          }
        );

        await this.loadWithdrawRequests();
        this.showToast(
          "success",
          "Success",
          "Withdraw request approved successfully"
        );
      } catch (error) {
        console.error("Error approving request:", error);

        let message = "Failed to approve withdraw request";

        // Axios error response exists
        if (error.response && error.response.data) {
          // Check if backend sent an 'error' field
          if (error.response.data.error) {
            message = error.response.data.error;
          } else if (typeof error.response.data === "string") {
            // fallback if backend sent plain string
            message = error.response.data;
          }
        } else if (error.message) {
          // fallback for network errors or timeout
          message = error.message;
        }

        this.showToast("error", "Error", message);
      } finally {
        this.isSubmitting = false;
      }
    },

    async rejectRequest(request) {
      try {
        this.isSubmitting = true;
        await axios.patch(
          `${API_BASE}/withdraw-requests-status/${request._id}/reject`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
          }
        );

        await this.loadWithdrawRequests();
        this.showToast(
          "success",
          "Success",
          "Withdraw request rejected successfully"
        );
      } catch (error) {
        console.error("Error rejecting request:", error);
        this.showToast("error", "Error", "Failed to reject withdraw request");
      } finally {
        this.isSubmitting = false;
      }
    },

    // Bulk actions
    confirmBulkApprove() {
      const modal = new Modal(document.getElementById("bulkApproveModal"));
      modal.show();
    },

    confirmBulkReject() {
      const modal = new Modal(document.getElementById("bulkRejectModal"));
      modal.show();
    },

    async bulkApproveRequests() {
      try {
        this.isSubmitting = true;
        await axios.patch(
          `${API_BASE}/withdraw-requests/bulk-approve`,
          { requestIds: this.selectedRequests },
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
          }
        );

        await this.loadWithdrawRequests();
        this.clearSelection();
        this.showToast(
          "success",
          "Success",
          `${this.selectedRequests.length} requests approved successfully`
        );

        // Close modal
        const modal = Modal.getInstance(
          document.getElementById("bulkApproveModal")
        );
        modal.hide();
      } catch (error) {
        console.error("Error bulk approving requests:", error);
        this.showToast("error", "Error", "Failed to approve selected requests");
      } finally {
        this.isSubmitting = false;
      }
    },

    async bulkRejectRequests() {
      try {
        this.isSubmitting = true;
        await axios.patch(
          `${API_BASE}/withdraw-requests/bulk-reject`,
          { requestIds: this.selectedRequests },
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
          }
        );

        await this.loadWithdrawRequests();
        this.clearSelection();
        this.showToast(
          "success",
          "Success",
          `${this.selectedRequests.length} requests rejected successfully`
        );

        // Close modal
        const modal = Modal.getInstance(
          document.getElementById("bulkRejectModal")
        );
        modal.hide();
      } catch (error) {
        console.error("Error bulk rejecting requests:", error);
        this.showToast("error", "Error", "Failed to reject selected requests");
      } finally {
        this.isSubmitting = false;
      }
    },

    // Export methods
    async exportData(format) {
      try {
        const response = await axios.get(
          `${API_BASE}/withdraw-requests/export?format=${format}`,
          {
            headers: {
              Authorization: `Bearer ${this.adminToken}`,
            },
            responseType: "blob",
          }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `withdraw-requests.${format === "excel" ? "xlsx" : "pdf"}`
        );
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        this.showToast("success", "Success", `Data exported as ${format}`);
      } catch (error) {
        console.error("Error exporting data:", error);
        this.showToast("error", "Error", "Failed to export data");
      }
    },

    // Formatting methods
    formatRequestId(id) {
      return `#${id.slice(-8).toUpperCase()}`;
    },

    formatAmount(amount, currency) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      }).format(amount);
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    getMethodDisplayName(method) {
      const methods = {
        paypal: "PayPal",
        bank_transfer: "Bank Transfer",
        bkash: "bKash",
        nagad: "Nagad",
        stripe: "Stripe",
      };
      return methods[method] || method;
    },

    getStatusDisplayName(status) {
      const statuses = {
        pending: "Pending",
        approved: "Approved",
        rejected: "Rejected",
      };
      return statuses[status] || status;
    },

    getStatusClass(status) {
      const classes = {
        pending: "badge badge-soft-warning",
        approved: "badge badge-soft-success",
        rejected: "badge badge-soft-danger",
      };
      return classes[status] || "badge badge-soft-secondary";
    },

    formatFieldName(fieldName) {
      return fieldName
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },

    // Toast methods
    showToast(type, title, message) {
      const toast = {
        id: ++this.toastId,
        type,
        title,
        message,
      };
      this.toasts.push(toast);

      // Auto remove after 5 seconds
      setTimeout(() => {
        this.removeToast(toast.id);
      }, 5000);
    },

    removeToast(id) {
      const index = this.toasts.findIndex((toast) => toast.id === id);
      if (index > -1) {
        this.toasts.splice(index, 1);
      }
    },
  },
};
</script>
