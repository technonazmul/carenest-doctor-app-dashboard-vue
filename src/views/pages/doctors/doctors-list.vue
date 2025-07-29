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
              Doctor List
              <span class="badge badge-soft-primary fs-13 fw-medium ms-2">
                Total Doctors : {{ doctors.length }}
              </span>
            </h4>
          </div>
          <div class="text-end d-flex">
            <!-- View toggle -->
            <div
              class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
            >
              <a
                href="#"
                class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                :class="{ 'bg-primary text-white': viewMode === 'list' }"
                @click="setViewMode('list')"
              >
                <i
                  class="ti ti-list fs-14"
                  :class="viewMode === 'list' ? 'text-white' : 'text-dark'"
                ></i>
              </a>
              <a
                href="#"
                class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                :class="{ 'bg-primary text-white': viewMode === 'grid' }"
                @click="setViewMode('grid')"
              >
                <i
                  class="ti ti-layout-grid fs-14"
                  :class="viewMode === 'grid' ? 'text-white' : 'text-body'"
                ></i>
              </a>
            </div>

            <!-- Add New Doctor Button -->
            <router-link
              to="/doctors/add-doctor"
              class="btn btn-primary ms-2 fs-13 btn-md"
            >
              <i class="ti ti-plus me-1"></i>New Doctor
            </router-link>
          </div>
        </div>
        <!-- End Page Header -->

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
                    placeholder="Search doctors..."
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
                  <label class="form-label">Department</label>
                  <select class="form-select" v-model="filters.department">
                    <option value="">All Departments</option>
                    <option
                      v-for="dept in departments"
                      :key="dept"
                      :value="dept"
                    >
                      {{ dept }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-select" v-model="filters.status">
                    <option value="">All Status</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Experience</label>
                  <select class="form-select" v-model="filters.experience">
                    <option value="">All Experience</option>
                    <option value="0-5">0-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
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
                    @click="setSortBy('name_asc')"
                    >Name (A-Z)</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('name_desc')"
                    >Name (Z-A)</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('fees_asc')"
                    >Fees (Low to High)</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    @click="setSortBy('fees_desc')"
                    >Fees (High to Low)</a
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
          <p class="mt-2">Loading doctors...</p>
        </div>

        <!-- Doctors List View -->
        <div v-else-if="viewMode === 'list'" class="table-responsive">
          <table class="table table-nowrap">
            <thead>
              <tr>
                <th>Name & Designation</th>

                <th>Fees</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="doctor in paginatedDoctors"
                :key="doctor._id || doctor.id"
              >
                <td>
                  <div class="d-flex align-items-center">
                    <div class="avatar me-2">
                      <img
                        :src="getImageUrl(doctor.image || doctor.Image)"
                        alt="Doctor"
                        class="rounded-circle"
                        style="width: 40px; height: 40px; object-fit: cover"
                        @error="handleImageError"
                      />
                    </div>
                    <div>
                      <h6 class="mb-1 fs-14 fw-semibold">
                        {{ doctor.name || doctor.Name }}
                      </h6>
                      <span class="fs-13 d-block text-muted">{{
                        doctor.specialty || doctor.Role
                      }}</span>
                      <span class="fs-13 d-block text-muted">{{
                        doctor.email || doctor.personalNumber
                      }}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <h6 class="fs-14 fw-semibold mb-0">
                    {{ formatFee(doctor.fee || doctor.Fees) }}
                  </h6>
                </td>
                <td>
                  <span :class="getStatusClass(doctor.status || doctor.Status)">
                    {{
                      doctor.active === true || doctor.active === "true"
                        ? "Active"
                        : "Deactive"
                    }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="action-item me-2">
                      <a
                        href="#"
                        @click.prevent="viewSchedule(doctor)"
                        title="View Schedule"
                      >
                        <i class="ti ti-calendar-cog"></i>
                      </a>
                    </div>
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
                            href="#"
                            class="dropdown-item justify-content-start"
                            @click="viewDoctor(doctor)"
                          >
                            <i class="ti ti-eye me-2"></i>View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item justify-content-start"
                            @click="editDoctor(doctor._id)"
                          >
                            <i class="ti ti-edit me-2"></i>Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="dropdown-item text-danger justify-content-start"
                            @click="confirmDelete(doctor)"
                          >
                            <i class="ti ti-trash me-2"></i>Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="paginatedDoctors.length === 0">
                <td colspan="8" class="text-center p-4">
                  <div class="d-flex flex-column align-items-center">
                    <i class="ti ti-users-off fs-1 text-muted mb-2"></i>
                    <p class="mb-0">No doctors found.</p>
                    <small class="text-muted"
                      >Try adjusting your search or filters.</small
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Doctors Grid View -->
        <div v-else class="row">
          <div
            v-for="doctor in paginatedDoctors"
            :key="doctor._id || doctor.id"
            class="col-xl-3 col-lg-4 col-md-6 mb-4"
          >
            <div class="card doctor-card h-100">
              <div class="card-body text-center">
                <div class="avatar-lg mx-auto mb-3">
                  <img
                    :src="getImageUrl(doctor.image || doctor.Image)"
                    alt="Doctor"
                    class="rounded-circle w-100 h-100"
                    style="object-fit: cover"
                    @error="handleImageError"
                  />
                </div>
                <h5 class="card-title mb-1">
                  {{ doctor.name || doctor.Name }}
                </h5>
                <p class="text-muted mb-2">
                  {{ doctor.specialty || doctor.Role }}
                </p>
                <p class="text-muted small mb-2">
                  {{ doctor.designationAndDepartment || doctor.Department }}
                </p>
                <div class="mb-3">
                  <span :class="getStatusClass(doctor.status || doctor.Status)">
                    {{ doctor.status || doctor.Status }}
                  </span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Fee:</small>
                  <strong>{{ formatFee(doctor.fee || doctor.Fees) }}</strong>
                </div>
                <div class="btn-group w-100" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="viewDoctor(doctor)"
                  >
                    <i class="ti ti-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm"
                    @click="viewSchedule(doctor)"
                  >
                    <i class="ti ti-calendar-cog"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-warning btn-sm"
                    @click="editDoctor(doctor._id)"
                  >
                    <i class="ti ti-edit"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="confirmDelete(doctor)"
                  >
                    <i class="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bulk Actions -->
        <div
          v-if="selectedDoctors.length > 0"
          class="alert alert-info d-flex justify-content-between align-items-center"
        >
          <span>{{ selectedDoctors.length }} doctor(s) selected</span>
          <div>
            <button
              class="btn btn-sm btn-outline-danger me-2"
              @click="confirmBulkDelete"
            >
              <i class="ti ti-trash me-1"></i>Delete Selected
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
            {{ filteredDoctorsCount }} entries
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

    <!-- Add/Edit Doctor Modal -->
    <div class="modal fade" id="addDoctorModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ isEditMode ? "Edit Doctor" : "Add New Doctor" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="resetForm"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm" ref="doctorForm">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Full Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    :class="{ 'is-invalid': errors.name }"
                    required
                  />
                  <div v-if="errors.name" class="invalid-feedback">
                    {{ errors.name }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    v-model="form.email"
                    :class="{ 'is-invalid': errors.email }"
                    required
                  />
                  <div v-if="errors.email" class="invalid-feedback">
                    {{ errors.email }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.appointmentPhoneNumber"
                    :class="{ 'is-invalid': errors.appointmentPhoneNumber }"
                  />
                  <div
                    v-if="errors.appointmentPhoneNumber"
                    class="invalid-feedback"
                  >
                    {{ errors.appointmentPhoneNumber }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Specialty</label>
                  <select class="form-select" v-model="form.specialty">
                    <option value="">Select Specialty</option>
                    <option
                      v-for="specialty in specialties"
                      :key="specialty"
                      :value="specialty"
                    >
                      {{ specialty }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Department</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.designationAndDepartment"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Fee ($)</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.fee"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Qualifications</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.qualifications"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Experience (Years)</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.experience"
                    min="0"
                  />
                </div>
                <div class="col-12 mb-3">
                  <label class="form-label">Biography</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    v-model="form.biography"
                  ></textarea>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Profile Image</label>
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileChange"
                    accept="image/*"
                    ref="imageInput"
                  />
                  <div v-if="imagePreview" class="mt-2">
                    <img
                      :src="imagePreview"
                      alt="Preview"
                      style="width: 80px; height: 80px; object-fit: cover"
                      class="rounded"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3" v-if="!isEditMode">
                  <label class="form-label"
                    >Password <span class="text-danger">*</span></label
                  >
                  <input
                    type="password"
                    class="form-control"
                    v-model="form.password"
                    :class="{ 'is-invalid': errors.password }"
                    :required="!isEditMode"
                  />
                  <div v-if="errors.password" class="invalid-feedback">
                    {{ errors.password }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-select" v-model="form.status">
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="resetForm"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="submitForm"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              {{ isEditMode ? "Update Doctor" : "Add Doctor" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View Doctor Modal -->
    <div class="modal fade" id="viewDoctorModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Doctor Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body" v-if="viewingDoctor">
            <div class="row">
              <div class="col-md-4 text-center">
                <img
                  :src="getImageUrl(viewingDoctor.image || viewingDoctor.Image)"
                  alt="Doctor"
                  class="rounded-circle mb-3"
                  style="width: 150px; height: 150px; object-fit: cover"
                />
                <h5>{{ viewingDoctor.name || viewingDoctor.Name }}</h5>
                <p class="text-muted">
                  {{ viewingDoctor.specialty || viewingDoctor.Role }}
                </p>
                <span
                  :class="
                    getStatusClass(viewingDoctor.status || viewingDoctor.Status)
                  "
                >
                  {{ viewingDoctor.status || viewingDoctor.Status }}
                </span>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-6 mb-3">
                    <strong>Department:</strong>
                    <p>
                      {{
                        viewingDoctor.designationAndDepartment ||
                        viewingDoctor.Department ||
                        "N/A"
                      }}
                    </p>
                  </div>
                  <div class="col-6 mb-3">
                    <strong>Phone:</strong>
                    <p>
                      {{
                        viewingDoctor.appointmentPhoneNumber ||
                        viewingDoctor.Phone ||
                        "N/A"
                      }}
                    </p>
                  </div>
                  <div class="col-6 mb-3">
                    <strong>Email:</strong>
                    <p>
                      {{ viewingDoctor.email || viewingDoctor.Email || "N/A" }}
                    </p>
                  </div>
                  <div class="col-6 mb-3">
                    <strong>Consultation Fee:</strong>
                    <p>
                      {{ formatFee(viewingDoctor.fee || viewingDoctor.Fees) }}
                    </p>
                  </div>
                  <div class="col-6 mb-3">
                    <strong>Experience:</strong>
                    <p>{{ viewingDoctor.experience || "N/A" }} years</p>
                  </div>
                  <div class="col-6 mb-3">
                    <strong>Qualifications:</strong>
                    <p>{{ viewingDoctor.qualifications || "N/A" }}</p>
                  </div>
                  <div class="col-12 mb-3" v-if="viewingDoctor.biography">
                    <strong>Biography:</strong>
                    <p>{{ viewingDoctor.biography }}</p>
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
              type="button"
              class="btn btn-primary"
              @click="editDoctor(viewingDoctor._id)"
              data-bs-dismiss="modal"
            >
              <i class="ti ti-edit me-1"></i>Edit Doctor
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Delete</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to delete
              <strong>{{ doctorToDelete?.name || doctorToDelete?.Name }}</strong
              >?
            </p>
            <p class="text-muted small">This action cannot be undone.</p>
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
              @click="deleteDoctor"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Delete Confirmation Modal -->
    <div class="modal fade" id="bulkDeleteModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Bulk Delete</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to delete
              <strong>{{ selectedDoctors.length }}</strong> selected doctor(s)?
            </p>
            <p class="text-muted small">This action cannot be undone.</p>
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
              @click="bulkDeleteDoctors"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              Delete All Selected
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
        <div class="toast-body text-white">
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

export default {
  name: "DoctorManagement",
  setup() {
    const adminToken = Cookies.get("adminToken");
    return {
      adminToken,
    };
  },
  data() {
    return {
      // Data arrays
      doctors: [],
      specialties: [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Pediatrics",
        "Dermatology",
        "Ophthalmology",
        "Psychiatry",
        "Radiology",
        "Surgery",
        "Internal Medicine",
      ],

      // Loading states
      isLoading: true,
      isSubmitting: false,

      // View mode
      viewMode: "list", // 'list' or 'grid'

      // Search and filter
      searchQuery: "",
      filters: {
        department: "",
        status: "",
        experience: "",
      },
      sortBy: "recent",

      // Selection
      selectedDoctors: [],
      selectAll: false,

      // Pagination
      currentPage: 1,
      itemsPerPage: 10,
      // Modal and form data
      isEditMode: false,
      form: {
        name: "",
        email: "",
        appointmentPhoneNumber: "",
        specialty: "",
        designationAndDepartment: "",
        fee: 0,
        qualifications: "",
        experience: 0,
        biography: "",
        image: null,
        password: "",
        status: "Available",
      },
      errors: {},
      imagePreview: null,

      // Viewing doctor
      viewingDoctor: null,
      doctorToDelete: null,

      // Toast notifications
      toasts: [],
      toastId: 0,
    };
  },

  computed: {
    // Filter departments from existing doctors
    departments() {
      const depts = this.doctors
        .map((doctor) => doctor.designationAndDepartment || doctor.Department)
        .filter(Boolean);
      return [...new Set(depts)].sort();
    },

    // Count active filters
    activeFiltersCount() {
      return Object.values(this.filters).filter((value) => value !== "").length;
    },

    // Sort label for display
    sortLabel() {
      const labels = {
        recent: "Recently Added",
        name_asc: "Name (A-Z)",
        name_desc: "Name (Z-A)",
        fees_asc: "Fees (Low to High)",
        fees_desc: "Fees (High to Low)",
      };
      return labels[this.sortBy] || "Recently Added";
    },

    // Filtered and sorted doctors
    filteredDoctors() {
      let filtered = [...this.doctors];

      // Search filter
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter((doctor) => {
          const name = (doctor.name || doctor.Name || "").toLowerCase();
          const email = (doctor.email || doctor.Email || "").toLowerCase();
          const department = (
            doctor.designationAndDepartment ||
            doctor.Department ||
            ""
          ).toLowerCase();
          const specialty = (
            doctor.specialty ||
            doctor.Role ||
            ""
          ).toLowerCase();

          return (
            name.includes(query) ||
            email.includes(query) ||
            department.includes(query) ||
            specialty.includes(query)
          );
        });
      }

      // Department filter
      if (this.filters.department) {
        filtered = filtered.filter(
          (doctor) =>
            (doctor.designationAndDepartment || doctor.Department) ===
            this.filters.department
        );
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(
          (doctor) => (doctor.status || doctor.Status) === this.filters.status
        );
      }

      // Experience filter
      if (this.filters.experience) {
        filtered = filtered.filter((doctor) => {
          const exp = doctor.experience || 0;
          switch (this.filters.experience) {
            case "0-5":
              return exp <= 5;
            case "5-10":
              return exp > 5 && exp <= 10;
            case "10+":
              return exp > 10;
            default:
              return true;
          }
        });
      }

      // Sort
      filtered.sort((a, b) => {
        switch (this.sortBy) {
          case "name_asc":
            return (a.name || a.Name || "").localeCompare(
              b.name || b.Name || ""
            );
          case "name_desc":
            return (b.name || b.Name || "").localeCompare(
              a.name || a.Name || ""
            );
          case "fees_asc":
            return (a.fee || a.Fees || 0) - (b.fee || b.Fees || 0);
          case "fees_desc":
            return (b.fee || b.Fees || 0) - (a.fee || a.Fees || 0);
          case "recent":
          default:
            return (
              new Date(b.createdAt || Date.now()) -
              new Date(a.createdAt || Date.now())
            );
        }
      });

      return filtered;
    },

    filteredDoctorsCount() {
      return this.filteredDoctors.length;
    },

    // Pagination
    totalPages() {
      return Math.ceil(this.filteredDoctorsCount / this.itemsPerPage);
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },

    endIndex() {
      return Math.min(
        this.startIndex + this.itemsPerPage,
        this.filteredDoctorsCount
      );
    },

    paginatedDoctors() {
      return this.filteredDoctors.slice(this.startIndex, this.endIndex);
    },

    visiblePages() {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(this.totalPages, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
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

    selectAll(newVal) {
      if (newVal) {
        this.selectedDoctors = this.paginatedDoctors.map(
          (doctor) => doctor._id || doctor.id
        );
      } else {
        this.selectedDoctors = [];
      }
    },
  },

  async mounted() {
    try {
      await this.fetchDoctors();
    } catch (error) {
      this.showToast("Error", "Failed to load doctors", "danger");
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    getAuthHeaders() {
      return {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      };
    },
    // API Methods
    async fetchDoctors() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/doctors`,
          this.getAuthHeaders()
        );
        this.doctors = response.data.doctors || response.data || [];
      } catch (error) {
        console.error("Error fetching doctors:", error);
        throw error;
      }
    },

    async submitForm() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      this.errors = {};

      try {
        // Validate form
        if (!this.form.name?.trim()) {
          this.errors.name = "Name is required";
        }

        if (!this.form.email?.trim()) {
          this.errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
          this.errors.email = "Please enter a valid email";
        }

        if (!this.isEditMode && !this.form.password?.trim()) {
          this.errors.password = "Password is required";
        }

        if (Object.keys(this.errors).length > 0) {
          this.isSubmitting = false;
          return;
        }

        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (this.form[key] !== null && this.form[key] !== "") {
            formData.append(key, this.form[key]);
          }
        });

        let response;
        if (this.isEditMode) {
          response = await axios.put(`/api/doctors/${this.form.id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } else {
          response = await axios.post("/api/doctors", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        }

        await this.fetchDoctors();
        this.closeModal("addDoctorModal");
        this.resetForm();

        this.showToast(
          "Success",
          `Doctor ${this.isEditMode ? "updated" : "added"} successfully`,
          "success"
        );
      } catch (error) {
        console.error("Error saving doctor:", error);
        this.showToast("Error", "Failed to save doctor", "danger");
      } finally {
        this.isSubmitting = false;
      }
    },

    async deleteDoctor() {
      if (this.isSubmitting || !this.doctorToDelete) return;

      this.isSubmitting = true;

      try {
        await axios.delete(
          `/api/doctors/${this.doctorToDelete._id || this.doctorToDelete.id}`
        );
        await this.fetchDoctors();

        this.closeModal("deleteModal");
        this.doctorToDelete = null;

        this.showToast("Success", "Doctor deleted successfully", "success");
      } catch (error) {
        console.error("Error deleting doctor:", error);
        this.showToast("Error", "Failed to delete doctor", "danger");
      } finally {
        this.isSubmitting = false;
      }
    },

    async bulkDeleteDoctors() {
      if (this.isSubmitting || this.selectedDoctors.length === 0) return;

      this.isSubmitting = true;

      try {
        await axios.delete("/api/doctors/bulk", {
          data: { ids: this.selectedDoctors },
        });

        await this.fetchDoctors();
        this.closeModal("bulkDeleteModal");
        this.clearSelection();

        this.showToast(
          "Success",
          "Selected doctors deleted successfully",
          "success"
        );
      } catch (error) {
        console.error("Error bulk deleting doctors:", error);
        this.showToast("Error", "Failed to delete selected doctors", "danger");
      } finally {
        this.isSubmitting = false;
      }
    },

    // UI Methods
    setViewMode(mode) {
      this.viewMode = mode;
      this.clearSelection();
    },

    onSearchChange() {
      // Debounce search if needed
      this.currentPage = 1;
    },

    setSortBy(sortType) {
      this.sortBy = sortType;
      this.currentPage = 1;
    },

    clearFilters() {
      this.filters = {
        department: "",
        status: "",
        experience: "",
      };
    },

    // Selection methods
    toggleSelectAll() {
      // Handled by watcher
    },

    clearSelection() {
      this.selectedDoctors = [];
      this.selectAll = false;
    },

    // Pagination
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.clearSelection();
      }
    },

    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      this.openModal("addDoctorModal");
    },

    editDoctor(id) {
      this.$router.push(`edit-doctor/${id}`);
    },

    viewDoctor(doctor) {
      this.viewingDoctor = doctor;
      this.openModal("viewDoctorModal");
    },

    confirmDelete(doctor) {
      this.doctorToDelete = doctor;
      this.openModal("deleteModal");
    },

    confirmBulkDelete() {
      this.openModal("bulkDeleteModal");
    },

    viewSchedule(doctor) {
      // Navigate to schedule page or open schedule modal
      this.$router.push(`/doctors/${doctor._id || doctor.id}/schedule`);
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        appointmentPhoneNumber: "",
        specialty: "",
        designationAndDepartment: "",
        fee: 0,
        qualifications: "",
        experience: 0,
        biography: "",
        image: null,
        password: "",
        status: "Available",
      };
      this.errors = {};
      this.imagePreview = null;

      if (this.$refs.imageInput) {
        this.$refs.imageInput.value = "";
      }
    },

    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.image = file;

        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    // Helper methods
    openModal(modalId) {
      const modal = new bootstrap.Modal(document.getElementById(modalId));
      modal.show();
    },

    closeModal(modalId) {
      const modalElement = document.getElementById(modalId);
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    },

    getImageUrl(imagePath) {
      if (!imagePath) return "/uploads/default-doctor.jpg";
      if (imagePath.startsWith("http")) return imagePath;
      return `${API_BASE}/uploads/${imagePath}`;
    },

    handleImageError(event) {
      event.target.src = `${API_BASE}/uploads/default-doctor.jpg`;
    },

    formatFee(fee) {
      const amount = fee || 0;
      //return `$${amount.toFixed(2)}`;
      return amount;
    },

    getStatusClass(status) {
      const statusClasses = {
        Available: "badge bg-success",
        Unavailable: "badge bg-danger",
      };
      return statusClasses[status] || "badge bg-secondary";
    },

    // Export methods
    async exportData(format) {
      try {
        const response = await axios.get(
          `/api/doctors/export?format=${format}`,
          {
            responseType: format === "pdf" ? "blob" : "blob",
          }
        );

        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `doctors.${format === "pdf" ? "pdf" : "xlsx"}`;
        link.click();
        window.URL.revokeObjectURL(url);

        this.showToast(
          "Success",
          `Doctors exported as ${format.toUpperCase()}`,
          "success"
        );
      } catch (error) {
        console.error("Export error:", error);
        this.showToast("Error", "Failed to export data", "danger");
      }
    },

    // Toast methods
    showToast(title, message, type = "info") {
      const toast = {
        id: ++this.toastId,
        title,
        message,
        type,
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

<style scoped>
.doctor-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.doctor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-input {
  position: relative;
}

.btn-searchset {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
}

.search-input .form-control {
  padding-left: 35px;
}

.filter-dropdown {
  min-width: 250px;
}

.action-item a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  color: #6c757d;
  transition: all 0.2s;
}

.action-item a:hover {
  background-color: #f8f9fa;
  color: #495057;
}

.toast {
  min-width: 300px;
}

.avatar {
  width: 40px;
  height: 40px;
}

.avatar-lg {
  width: 80px;
  height: 80px;
}

.table-responsive {
  border-radius: 8px;
  overflow: hidden;
}

.page-wrapper {
  min-height: calc(100vh - 60px);
}

@media (max-width: 768px) {
  .search-set {
    width: 100%;
  }

  .right-content {
    width: 100%;
    justify-content: flex-start;
  }

  .doctor-card {
    margin-bottom: 1rem;
  }
}
</style>
