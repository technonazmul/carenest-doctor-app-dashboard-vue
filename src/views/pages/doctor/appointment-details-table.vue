<template>
  <!--  Start Filter -->
  <div class="d-flex align-items-center justify-content-between flex-wrap">
    <div class="d-flex align-items-center gap-2">
      <div class="search-set mb-3">
        <div class="d-flex align-items-center flex-wrap gap-2">
          <div class="table-search d-flex align-items-center mb-0">
            <div class="search-input">
              <input
                type="text"
                class="form-control"
                placeholder="Search appointments..."
                v-model="searchQuery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3"
    >
      <div class="dropdown me-2">
        <a
          href="javascript:void(0);"
          class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          <i class="ti ti-filter text-gray-5 me-1"></i>Filters
        </a>
        <div
          class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
          id="filter-dropdown"
        >
          <div
            class="d-flex align-items-center justify-content-between border-bottom filter-header"
          >
            <h4 class="mb-0 fw-bold">Filter</h4>
            <div class="d-flex align-items-center">
              <a
                href="javascript:void(0);"
                class="link-danger text-decoration-underline"
                @click.prevent="clearAllFilters"
                >Clear All</a
              >
            </div>
          </div>
          <form @submit.prevent="applyFilters">
            <div class="filter-body pb-0">
              <!-- Doctor Filter -->
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label">Doctor</label>
                  <a
                    href="javascript:void(0);"
                    class="link-primary mb-1"
                    @click.prevent="clearFilter('doctor')"
                    >Reset</a
                  >
                </div>
                <select v-model="filters.doctor" class="form-select">
                  <option value="">Select Doctor</option>
                  <option
                    v-for="doctor in uniqueDoctors"
                    :key="doctor"
                    :value="doctor"
                  >
                    {{ doctor }}
                  </option>
                </select>
              </div>

              <!-- Status Filter -->
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label">Status</label>
                  <a
                    href="javascript:void(0);"
                    class="link-primary mb-1"
                    @click.prevent="clearFilter('status')"
                    >Reset</a
                  >
                </div>
                <select v-model="filters.status" class="form-select">
                  <option value="">Select Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="rescheduled">Rescheduled</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </div>

              <!-- Payment Status Filter -->
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label">Payment Status</label>
                  <a
                    href="javascript:void(0);"
                    class="link-primary mb-1"
                    @click.prevent="clearFilter('paymentStatus')"
                    >Reset</a
                  >
                </div>
                <select v-model="filters.paymentStatus" class="form-select">
                  <option value="">Select Payment Status</option>
                  <option value="pending">pending</option>
                  <option value="paid">paid</option>
                  <option value="held">held</option>
                  <option value="release_requested">Release Requested</option>
                  <option value="released">Release to Doctor</option>
                  <option value="refunded">refunded</option>
                </select>
              </div>
            </div>
            <div
              class="filter-footer d-flex align-items-center justify-content-end border-top"
            >
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-md me-2 fw-medium"
                id="close-filter"
                >Close</a
              >
              <button type="submit" class="btn btn-primary btn-md fw-medium">
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--  End Filter -->

  <!--  Start Table -->
  <div class="table-responsive" v-if="!loading">
    <a-table
      class="table table-nowrap datatable"
      :columns="columns"
      :data-source="filteredAndSortedAppointments"
      :pagination="paginationConfig"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'Doctor_Name'">
          <div class="d-flex align-items-center">
            <router-link
              to="/doctors/doctor-details"
              class="avatar me-2 flex-shrink-0"
            >
              <img
                :src="record.doctorImage"
                alt="doctor"
                class="rounded-circle"
                @error="handleImageError"
              />
            </router-link>
            <div>
              <h6 class="fs-14 mb-1 text-truncate">
                <router-link to="/doctors/doctor-details" class="fw-semibold">{{
                  record.doctorName
                }}</router-link>
              </h6>
              <p class="mb-0 fs-13 text-truncate">
                {{ record.doctorSpecialty }}
              </p>
            </div>
          </div>
        </template>
        <template v-if="column.key === 'Status'">
          <span
            class="fw-medium fs-13 badge"
            :class="getStatusClass(record.status)"
            >{{ record.status }}</span
          >
        </template>
        <template v-if="column.key === 'PaymentStatus'">
          <span
            class="fw-medium fs-13 badge"
            :class="getPaymentStatusClass(record.paymentStatus)"
            >{{ record.paymentStatus }}</span
          >
        </template>
        <template v-if="column.key === 'action'">
          <div class="action-item">
            <a href="javascript:void(0);" data-bs-toggle="dropdown">
              <i class="ti ti-dots-vertical"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center"
                  @click.prevent="viewAppointmentDetails(record)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#view_details"
                  >View</a
                >
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center text-danger"
                  @click.prevent="confirmDeleteAppointment(record._id)"
                  >Delete</a
                >
              </li>
            </ul>
          </div>
        </template>
      </template>
    </a-table>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center p-4">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-2">Loading appointments...</p>
  </div>

  <!-- Empty State -->
  <div
    v-if="!loading && filteredAndSortedAppointments.length === 0"
    class="text-center p-4"
  >
    <i class="ti ti-calendar-off fs-48 text-muted mb-3 d-block"></i>
    <h5 class="text-muted">No appointments found</h5>
    <p class="text-muted">
      This patient has no appointments or try adjusting your search criteria
    </p>
  </div>
  <!--  End Table -->

  <!-- Start View Details -->
  <div
    class="offcanvas offcanvas-offset offcanvas-end"
    tabindex="-1"
    id="view_details"
  >
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">
          Appointment Details
          <span
            class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2"
            v-if="selectedAppointment"
            >#{{ selectedAppointment._id?.slice(-6).toUpperCase() }}</span
          >
        </h5>
        <button
          type="button"
          class="btn-close custom-btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x bg-white fs-16 text-dark"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0" v-if="selectedAppointment">
      <h6 class="bg-light py-2 px-3 fw-bold">When & Where</h6>
      <div class="px-3 my-4">
        <div
          class="bg-light p-3 mb-3 border rounded-3 d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md me-2">
              <img
                :src="selectedAppointment.doctorImage"
                alt="doctor"
                class="rounded-circle"
                @error="handleImageError"
              />
            </a>
            <a href="javascript:void(0);" class="text-dark fw-semibold">
              {{ selectedAppointment.doctorName }}
              <span class="text-body fs-13 fw-normal d-block">
                {{ selectedAppointment.doctorSpecialty }}
              </span>
            </a>
          </div>
          <div class="flex-shrink-0" v-if="selectedAppointment.meetingLink">
            <a
              :href="selectedAppointment.meetingLink"
              target="_blank"
              class="btn btn-outline-white bg-white fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-brand-hipchat"></i>
            </a>
          </div>
        </div>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Appointment On
          <span class="text-body fw-normal">{{
            formatDate(selectedAppointment.date)
          }}</span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Time
          <span class="text-body fw-normal">{{
            selectedAppointment.slot
          }}</span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Mode
          <span class="text-body fw-normal">{{
            selectedAppointment.mode
          }}</span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Payment Status
          <span
            class="text-body fw-normal badge"
            :class="getPaymentStatusClass(selectedAppointment.paymentStatus)"
          >
            {{ selectedAppointment.paymentStatus }}
          </span>
        </p>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">Appointment Actions</h6>
      <div class="px-3 my-4">
        <div
          class="d-flex align-items-center justify-content-between mb-3"
          v-if="selectedAppointment.mode === 'Online'"
        >
          <div class="d-flex align-items-center">
            Telehealth
            <label class="d-flex align-items-center form-switch ps-1">
              <input
                class="form-check-input m-0 me-2"
                type="checkbox"
                :checked="selectedAppointment.mode === 'Online'"
                disabled
              />
            </label>
          </div>
          <div v-if="selectedAppointment.meetingLink">
            <a
              :href="selectedAppointment.meetingLink"
              target="_blank"
              class="btn-primary btn btn-sm rounded d-flex align-items-center"
            >
              <i class="ti ti-video me-1"></i> Start
            </a>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Status</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <select
              class="form-select"
              v-model="selectedAppointment.status"
              @change="updateSelectedAppointmentStatus"
            >
              <option value="upcoming">Upcoming</option>
              <option value="rescheduled">Rescheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div class="row align-items-center mt-3">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Payment Status</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <select
              class="form-select"
              v-model="selectedAppointment.paymentStatus"
              @change="updateSelectedAppointmentPaymentStatus"
            >
              <option value="pending">pending</option>
              <option value="paid">paid</option>
              <option value="held">held</option>
              <option value="release_requested">Release Requested</option>
              <option value="released">Release to Doctor</option>
              <option value="refunded">refunded</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End View Details -->
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
  props: {
    patientId: {
      type: String,
      required: true,
    },
  },

  setup() {
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;

    return {
      adminToken,
      apiBaseUrl,
    };
  },

  data() {
    return {
      searchQuery: "",
      loading: true,
      appointments: [],
      selectedAppointment: null,
      appointmentToDelete: null,
      dateRangeText: "16 Apr 25 - 16 Apr 25",

      dateRangeFilter: {
        start: null,
        end: null,
      },

      toastConfig: {
        position: "top-right",
        duration: 3000,
      },

      filters: {
        doctor: "",
        designation: "",
        mode: "",
        status: "",
        paymentStatus: "",
      },

      columns: [
        {
          title: "Date & Time",
          dataIndex: "dateTime",
          key: "DateTime",
          sorter: {
            compare: (a, b) => new Date(a.date) - new Date(b.date),
          },
        },
        {
          title: "Doctor Name",
          dataIndex: "doctorName",
          key: "Doctor_Name",
          sorter: {
            compare: (a, b) => a.doctorName.localeCompare(b.doctorName),
          },
        },
        {
          title: "Mode",
          dataIndex: "mode",
          key: "Mode",
          sorter: {
            compare: (a, b) => a.mode.localeCompare(b.mode),
          },
        },
        {
          title: "Payment Status",
          dataIndex: "paymentStatus",
          key: "PaymentStatus",
          sorter: {
            compare: (a, b) => a.paymentStatus.localeCompare(b.paymentStatus),
          },
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "Status",
          sorter: {
            compare: (a, b) => a.status.localeCompare(b.status),
          },
        },
        {
          title: "",
          key: "action",
          sorter: false,
        },
      ],

      paginationConfig: {
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ["10", "25", "50", "100"],
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
      },
    };
  },

  computed: {
    formattedAppointments() {
      return this.appointments.map((appointment) => ({
        ...appointment,
        doctorName: appointment.doctorId?.name || "N/A",
        doctorSpecialty: appointment.doctorId?.specialty || "General",
        doctorImage: `${API_BASE}/uploads/${
          appointment.doctorId?.image || "default-doctor.jpg"
        }`,
        dateTime: this.formatDateTime(appointment.date, appointment.slot),
        mode: appointment.mode || "Online",
        status: appointment.status || "upcoming",
        paymentStatus: appointment.paymentStatus || "pending",
        meetingLink: appointment.meetingLink || null,
      }));
    },

    filteredAndSortedAppointments() {
      let filtered = this.formattedAppointments;

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (appointment) =>
            appointment.doctorName.toLowerCase().includes(query) ||
            appointment.doctorSpecialty.toLowerCase().includes(query) ||
            appointment.mode.toLowerCase().includes(query) ||
            appointment.status.toLowerCase().includes(query) ||
            appointment.paymentStatus.toLowerCase().includes(query) ||
            appointment.dateTime.toLowerCase().includes(query)
        );
      }

      // Apply date range filter
      if (this.dateRangeFilter.start && this.dateRangeFilter.end) {
        filtered = filtered.filter((appointment) => {
          const appointmentDate = new Date(appointment.date);
          return (
            appointmentDate >= this.dateRangeFilter.start &&
            appointmentDate <= this.dateRangeFilter.end
          );
        });
      }

      // Apply filters
      if (this.filters.doctor) {
        filtered = filtered.filter(
          (appointment) => appointment.doctorName === this.filters.doctor
        );
      }

      if (this.filters.designation) {
        filtered = filtered.filter(
          (appointment) =>
            appointment.doctorSpecialty === this.filters.designation
        );
      }

      if (this.filters.mode) {
        filtered = filtered.filter(
          (appointment) => appointment.mode === this.filters.mode
        );
      }

      if (this.filters.status) {
        filtered = filtered.filter(
          (appointment) => appointment.status === this.filters.status
        );
      }

      if (this.filters.paymentStatus) {
        filtered = filtered.filter(
          (appointment) =>
            appointment.paymentStatus === this.filters.paymentStatus
        );
      }

      // Sort by date (most recent first)
      return filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    },

    uniqueDoctors() {
      return [
        ...new Set(
          this.formattedAppointments.map(
            (appointment) => appointment.doctorName
          )
        ),
      ];
    },

    uniqueDesignations() {
      return [
        ...new Set(
          this.formattedAppointments.map(
            (appointment) => appointment.doctorSpecialty
          )
        ),
      ];
    },
  },

  watch: {
    patientId: {
      immediate: true,
      handler(newPatientId) {
        if (newPatientId) {
          this.fetchPatientAppointments();
        }
      },
    },
  },

  mounted() {
    // Initialize date range picker if you're using one
    this.initializeDateRangePicker();

    // Setup Bootstrap dropdowns
    this.initializeBootstrapComponents();
  },

  methods: {
    // Get auth headers for requests
    getAuthHeaders() {
      return {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      };
    },

    // Fetch patient-specific appointments from API
    async fetchPatientAppointments() {
      if (!this.patientId) return;

      try {
        this.loading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/patient/appointments/${this.patientId}`,
          this.getAuthHeaders()
        );
        this.appointments = response.data.appointments;
      } catch (error) {
        console.error("Error fetching patient appointments:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          //this.showError("There was an error fetching patient appointments.");
        }
      } finally {
        this.loading = false;
      }
    },

    // Update appointment status
    async updateAppointmentStatus(id, newStatus) {
      try {
        await axios.post(
          `${this.apiBaseUrl}/booking/update-status/${id}`,
          { status: newStatus },
          this.getAuthHeaders()
        );
        this.showSuccess(`Appointment status updated to ${newStatus}!`);
        await this.fetchPatientAppointments();
      } catch (error) {
        console.error("Error updating appointment status:", error);
        this.showError("There was an error updating appointment status.");
      }
    },

    // Update appointment payment status
    async updateAppointmentPaymentStatus(id, newStatus) {
      try {
        await axios.post(
          `${this.apiBaseUrl}/booking/update-payment-status/${id}`,
          { status: newStatus },
          this.getAuthHeaders()
        );
        this.showSuccess(`Payment status updated to ${newStatus}!`);
        await this.fetchPatientAppointments();
      } catch (error) {
        console.error("Error updating payment status:", error);
        this.showError("There was an error updating payment status.");
      }
    },

    // Update selected appointment status from detail view
    async updateSelectedAppointmentStatus() {
      if (this.selectedAppointment) {
        await this.updateAppointmentStatus(
          this.selectedAppointment._id,
          this.selectedAppointment.status
        );
      }
    },

    // Update selected appointment payment status from detail view
    async updateSelectedAppointmentPaymentStatus() {
      if (this.selectedAppointment) {
        await this.updateAppointmentPaymentStatus(
          this.selectedAppointment._id,
          this.selectedAppointment.paymentStatus
        );
      }
    },

    // Delete appointment
    confirmDeleteAppointment(id) {
      const confirmed = confirm(
        "Are you sure you want to delete this appointment?"
      );
      if (confirmed) {
        this.deleteAppointment(id);
      }
    },

    async deleteAppointment(id) {
      if (!id) return;

      try {
        await axios.delete(
          `${this.apiBaseUrl}/appointment/${id}`,
          this.getAuthHeaders()
        );
        this.showSuccess("Appointment deleted successfully!");
        await this.fetchPatientAppointments();
      } catch (error) {
        console.error("Error deleting appointment:", error);
        this.showError("There was an error deleting the appointment.");
      }
    },

    // View appointment details
    viewAppointmentDetails(appointment) {
      this.selectedAppointment = { ...appointment };
    },

    // Format date and time
    formatDateTime(date, slot) {
      if (!date) return "N/A";
      const appointmentDate = new Date(date);
      const formattedDate = appointmentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      });
      return `${formattedDate}, ${slot || "N/A"}`;
    },

    // Format date for display
    formatDate(date) {
      if (!date) return "N/A";
      const appointmentDate = new Date(date);
      return appointmentDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },

    // Get status badge class
    getStatusClass(status) {
      const statusClasses = {
        completed: "badge-soft-success",
        upcoming: "badge-soft-info",
        cancelled: "badge-soft-danger",
        rescheduled: "badge-soft-warning",
        confirmed: "badge-soft-primary",
      };
      return statusClasses[status.toLowerCase()] || "badge-soft-secondary";
    },

    // Get payment status badge class
    getPaymentStatusClass(paymentStatus) {
      const statusClasses = {
        paid: "badge-soft-success",
        pending: "badge-soft-warning",
        held: "badge-soft-info",
        refunded: "badge-soft-danger",
      };
      return (
        statusClasses[paymentStatus.toLowerCase()] || "badge-soft-secondary"
      );
    },

    // Get next status for status progression
    getNextStatus(currentStatus) {
      const statusFlow = {
        upcoming: "completed",
        confirmed: "completed",
        rescheduled: "upcoming",
      };
      return statusFlow[currentStatus] || currentStatus;
    },

    // Get status action text
    getStatusActionText(currentStatus) {
      const actionTexts = {
        upcoming: "Mark Complete",
        confirmed: "Mark Complete",
        rescheduled: "Confirm",
        completed: "Reopen",
      };
      return actionTexts[currentStatus] || "Update";
    },

    // Filter methods
    applyFilters() {
      // Filters are applied automatically through computed property
      this.closeFilterDropdown();
    },

    clearAllFilters() {
      this.filters = {
        doctor: "",
        designation: "",
        mode: "",
        status: "",
        paymentStatus: "",
      };
      this.searchQuery = "";
      this.dateRangeFilter = {
        start: null,
        end: null,
      };
    },

    clearFilter(filterName) {
      this.filters[filterName] = "";
    },

    // Initialize date range picker
    initializeDateRangePicker() {
      if (this.$refs.dateRangeInput) {
        // Initialize your date range picker here
        // This depends on which date picker library you're using
        // Example for daterangepicker:
        /*
        $(this.$refs.dateRangeInput).daterangepicker({
          startDate: moment().subtract(29, 'days'),
          endDate: moment(),
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
        }, (start, end, label) => {
          this.dateRangeText = start.format('DD MMM YY') + ' - ' + end.format('DD MMM YY');
          this.filterByDateRange(start.toDate(), end.toDate());
        });
        */
      }
    },

    // Initialize Bootstrap components
    initializeBootstrapComponents() {
      // Initialize Bootstrap dropdowns, offcanvas, etc.
      if (typeof window.bootstrap !== "undefined") {
        // Initialize dropdowns
        const dropdownElementList =
          document.querySelectorAll(".dropdown-toggle");
        dropdownElementList.forEach((dropdownToggleEl) => {
          if (!dropdownToggleEl.dataset.initialized) {
            new window.bootstrap.Dropdown(dropdownToggleEl);
            dropdownToggleEl.dataset.initialized = "true";
          }
        });

        // Initialize offcanvas
        const offcanvasElementList = document.querySelectorAll(".offcanvas");
        offcanvasElementList.forEach((offcanvasEl) => {
          if (!offcanvasEl.dataset.initialized) {
            new window.bootstrap.Offcanvas(offcanvasEl);
            offcanvasEl.dataset.initialized = "true";
          }
        });
      }
    },

    // Filter by date range
    filterByDateRange(startDate, endDate) {
      // Add date range filtering logic here
      this.dateRangeFilter = {
        start: startDate,
        end: endDate,
      };
    },

    // Close filter dropdown
    closeFilterDropdown() {
      const dropdown = document.getElementById("filter-dropdown");
      if (dropdown && dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    },

    // Handle dropdown clicks
    handleDropdownClick(event) {
      event.stopPropagation();
    },

    // Handle image error
    handleImageError(event) {
      event.target.src = `${API_BASE}/uploads/default-doctor.jpg`;
    },

    // Utility methods for notifications
    showSuccess(message) {
      if (window.showToast) {
        window.showToast(message, "success");
      } else {
        alert(message);
      }
    },

    showError(message) {
      if (window.showToast) {
        window.showToast(message, "error");
      } else {
        alert(message);
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles for the appointment component */
.badge-soft-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.badge-soft-info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.badge-soft-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.badge-soft-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.badge-soft-primary {
  background-color: #d6e9ff;
  color: #0056b3;
  border: 1px solid #b3d7ff;
}

.badge-soft-secondary {
  background-color: #e2e3e5;
  color: #383d41;
  border: 1px solid #d6d8db;
}

.reportrange-picker {
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.15s ease-in-out;
}

.reportrange-picker:hover {
  background-color: #f8f9fa;
}

.reportrange-picker-field {
  font-size: 14px;
  color: #495057;
}

.filter-dropdown {
  min-width: 300px;
  max-width: 350px;
}

.filter-header {
  padding: 1rem;
  background-color: #f8f9fa;
}

.filter-body {
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
}

.filter-footer {
  padding: 1rem;
  background-color: #f8f9fa;
}

.offcanvas-offset {
  width: 400px;
}

.custom-btn-close {
  background: none;
  border: none;
  padding: 0.25rem;
  border-radius: 0.375rem;
}

.custom-btn-close:hover {
  background-color: #f8f9fa;
}

.avatar {
  width: 40px;
  height: 40px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-md {
  width: 48px;
  height: 48px;
}

.action-item .dropdown-toggle::after {
  display: none;
}

.action-item .dropdown-menu {
  min-width: 150px;
}

.table-nowrap {
  white-space: nowrap;
}

.table-nowrap .text-truncate {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-input {
  position: relative;
}

.btn-searchset {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  border: none;
  background: none;
  color: #6c757d;
}

.btn-searchset:before {
  content: "\1F50D";
  font-size: 16px;
}

/* Loading spinner */
.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Empty state */
.ti-calendar-off {
  opacity: 0.5;
}

/* Form controls */
.form-select:focus,
.form-control:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Table responsive adjustments */
.table-responsive {
  border-radius: 0.375rem;
  overflow: hidden;
}

.table th {
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
}

.table td {
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
}

.table tbody tr:hover {
  background-color: #f8f9fa;
}

/* Badge improvements */
.badge {
  font-size: 0.75em;
  font-weight: 500;
  padding: 0.375em 0.75em;
  border-radius: 0.25rem;
}

/* Button improvements */
.btn-outline-white {
  color: #6c757d;
  border-color: #dee2e6;
}

.btn-outline-white:hover {
  color: #495057;
  background-color: #f8f9fa;
  border-color: #adb5bd;
}

/* Dropdown improvements */
.dropdown-menu {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .offcanvas-offset {
    width: 100%;
  }

  .table-responsive {
    font-size: 0.875rem;
  }

  .avatar {
    width: 32px;
    height: 32px;
  }

  .avatar-md {
    width: 40px;
    height: 40px;
  }

  .filter-dropdown {
    min-width: 280px;
  }

  .d-flex.flex-wrap .mb-3 {
    margin-bottom: 0.5rem !important;
  }
}

@media (max-width: 576px) {
  .table-nowrap .text-truncate {
    max-width: 120px;
  }

  .paginationConfig .ant-pagination-options {
    display: none;
  }
}

/* Animation for loading */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.table tbody tr {
  animation: fadeIn 0.3s ease-in-out;
}

/* Scroll improvements */
.filter-body::-webkit-scrollbar {
  width: 6px;
}

.filter-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.filter-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.filter-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
