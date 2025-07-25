<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-semibold mb-0">Appointment</h4>
        </div>
        <div class="text-end d-flex">
          <!-- dropdown-->

          <router-link
            to="/appointments/new-appointment"
            class="btn btn-primary ms-2 fs-13 btn-md"
            ><i class="ti ti-plus me-1"></i> New Appointment
          </router-link>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-2">
          <div class="search-set mb-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="table-search d-flex align-items-center mb-0">
                <div class="search-input">
                  <a href="javascript:void(0);" class="btn-searchset"></a>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
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
                  <!-- Patient Filter -->
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Patient</label>
                      <a
                        href="javascript:void(0);"
                        class="link-primary mb-1"
                        @click.prevent="clearFilter('patient')"
                        >Reset</a
                      >
                    </div>
                    <select v-model="filters.patient" class="form-select">
                      <option value="">Select Patient</option>
                      <option
                        v-for="patient in uniquePatients"
                        :key="patient"
                        :value="patient"
                      >
                        {{ patient }}
                      </option>
                    </select>
                  </div>

                  <!-- Doctor Filter -->
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
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
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
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
                      <option value="upcoming">Upcoming/NotConfirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="rescheduled">Rescheduled</option>
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
                  <button
                    type="submit"
                    class="btn btn-primary btn-md fw-medium"
                  >
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
            <template v-if="column.key === 'Patient'">
              <div class="d-flex align-items-center">
                <router-link
                  to="/patients/patient-details"
                  class="avatar avatar-md me-2"
                >
                  <img
                    :src="record.patientImage"
                    alt="patient"
                    class="rounded-circle"
                    @error="handleImageError"
                  />
                </router-link>
                <router-link
                  to="/patients/patient-details"
                  class="text-dark fw-semibold"
                  >{{ record.patientName }}
                  <span class="text-body fs-13 fw-normal d-block">
                    {{ record.patientPhone }}
                  </span>
                </router-link>
              </div>
            </template>
            <template v-if="column.key === 'Doctor'">
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
                    <router-link
                      to="/doctors/doctor-details"
                      class="fw-semibold"
                      >{{ record.doctorName }}</router-link
                    >
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
                >{{ record.status }}
              </span>
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
                      @click.prevent="editAppointment(record._id)"
                      >Edit</a
                    >
                  </li>
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
                  <li v-if="record.status !== 'Cancelled'">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      @click.prevent="
                        updateAppointmentStatus(
                          record._id,
                          getNextStatus(record.status)
                        )
                      "
                      >{{ getStatusActionText(record.status) }}</a
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
        <p class="text-muted">Try adjusting your search or filter criteria</p>
      </div>
      <!--  End Table -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

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
            >#{{ selectedAppointment?._id?.slice(-6).toUpperCase() }}</span
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
            <a href="javascript:void(0);" class="text-dark fw-semibold"
              >{{ selectedAppointment.doctorName }}
              <span class="text-body fs-13 fw-normal d-block">{{
                selectedAppointment.doctorSpecialty
              }}</span>
            </a>
          </div>
          <div class="flex-shrink-0">
            <router-link
              :to="`/appointments/chat-history/${selectedAppointment._id}`"
              class="btn btn-outline-white bg-white fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-brand-hipchat"></i>
            </router-link>
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
            :class="
              selectedAppointment.paymentStatus === 'paid'
                ? 'badge-soft-success'
                : 'badge-soft-warning'
            "
          >
            {{ selectedAppointment.paymentStatus }}
          </span>
        </p>
        <div
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Patient Details
          <div class="text-body fw-normal d-flex align-items-center">
            <div class="avatar avatar-xs flex-shrink-0">
              <img
                :src="selectedAppointment.patientImage"
                alt="patient"
                class="rounded-circle me-1 flex-shrink-0"
                @error="handleImageError"
              />
            </div>
            {{ selectedAppointment.patientName }}
          </div>
        </div>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">Appointment Details</h6>
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
              <option value="upcoming">upcoming</option>
              <option value="rescheduled">rescheduled</option>
              <option value="completed">completed</option>
              <option value="cancelled">cancelled</option>
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

  <!-- Start Delete Modal -->
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
          <h5 class="fw-bold mb-1 position-relative z-1">
            Delete Confirmation
          </h5>
          <p class="mb-3 position-relative z-1">
            Are you sure want to delete this appointment?
          </p>
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
              @click.prevent="deleteAppointment"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal -->
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
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
      sortOrder: "Recent",

      filters: {
        patient: "",
        doctor: "",
        mode: "",
        status: "",
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
          title: "Patient",
          dataIndex: "patientName",
          key: "Patient",
          sorter: {
            compare: (a, b) => a.patientName.localeCompare(b.patientName),
          },
        },
        {
          title: "Doctor",
          dataIndex: "doctorName",
          key: "Doctor",
          sorter: {
            compare: (a, b) => a.doctorName.localeCompare(b.doctorName),
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
        patientName: appointment.userId?.name || "N/A",
        date: appointment.date,
        patientPhone:
          appointment.userId?.phone || appointment.userId?.email || "N/A",
        patientImage: `${API_BASE}/uploads/${
          appointment.userId?.image || "default-user.jpg"
        }`,
        doctorName: appointment.doctorId?.name || "N/A",
        doctorSpecialty: appointment.doctorId?.specialty || "General",
        doctorImage: `${API_BASE}/uploads/${
          appointment.doctorId?.image || "default-doctor.jpg"
        }`,
        dateTime: this.formatDateTime(appointment.date, appointment.slot),
        paymentStatus: appointment.paymentStatus || "Online",
        status: appointment.status || "Schedule",
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
            appointment.patientName.toLowerCase().includes(query) ||
            appointment.doctorName.toLowerCase().includes(query) ||
            appointment.doctorSpecialty.toLowerCase().includes(query) ||
            appointment.paymentStatus.toLowerCase().includes(query) ||
            appointment.status.toLowerCase().includes(query) ||
            appointment.dateTime.toLowerCase().includes(query)
        );
      }

      // Apply additional filters
      if (this.filters.patient) {
        filtered = filtered.filter(
          (appointment) => appointment.patientName === this.filters.patient
        );
      }

      if (this.filters.doctor) {
        filtered = filtered.filter(
          (appointment) => appointment.doctorName === this.filters.doctor
        );
      }

      if (this.filters.paymentStatus) {
        filtered = filtered.filter(
          (appointment) =>
            appointment.paymentStatus === this.filters.paymentStatus
        );
      }

      if (this.filters.status) {
        filtered = filtered.filter(
          (appointment) => appointment.status === this.filters.status
        );
      }

      // Apply sorting
      return filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (this.sortOrder === "Recent") {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    },

    uniquePatients() {
      return [
        ...new Set(
          this.formattedAppointments.map(
            (appointment) => appointment.patientName
          )
        ),
      ];
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
  },

  async mounted() {
    await this.fetchAppointments();
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

    // Fetch appointments from API
    async fetchAppointments() {
      try {
        this.loading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/booked-list`,
          this.getAuthHeaders()
        );
        this.appointments = response.data;
      } catch (error) {
        console.error("Error fetching appointments:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          this.showError("There was an error fetching appointments.");
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
        await this.fetchAppointments();
      } catch (error) {
        console.error("Error updating appointment status:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          this.showError("There was an error updating appointment status.");
        }
      }
    },

    async updateAppointmentPaymentStatus(id, newStatus) {
      try {
        await axios.post(
          `${this.apiBaseUrl}/booking/update-payment-status/${id}`,
          { status: newStatus },
          this.getAuthHeaders()
        );
        this.showSuccess(`Appointment status updated to ${newStatus}!`);
        await this.fetchAppointments();
      } catch (error) {
        console.error("Error updating appointment status:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          this.showError("There was an error updating appointment status.");
        }
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

    // Update selected appointment status from detail view
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
        console.log("Deleting appointment with ID:", id);
        // Call your delete logic here, e.g., this.deleteAppointment(id)
        this.deleteAppointment(id);
      } else {
        console.log("Deletion cancelled.");
      }
    },
    async deleteAppointment(id) {
      if (!id) return;

      try {
        await axios.delete(
          `${API_BASE}/api/backend/appointment/${id}`,
          this.getAuthHeaders()
        );

        this.showSuccess("Appointment deleted successfully!");
        await this.fetchAppointments(); // Refresh the list
        this.appointmentToDelete = null;
      } catch (error) {
        console.error("Error deleting appointment:", error);
        if (error.response && error.response.status === 401) {
          this.showError("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          this.showError("There was an error deleting the appointment.");
        }
      }
    },
    // Edit appointment
    editAppointment(id) {
      this.$router.push(`/appointments/edit-appointment/${id}`);
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
        "Checked Out": "badge-soft-success",
        "Checked In": "badge-soft-info",
        cancelled: "badge-soft-danger",
        scheduled: "badge-soft-warning",
        confirmed: "badge-soft-primary",
      };
      return statusClasses[status] || "badge-soft-secondary";
    },

    // Get next status for status progression
    getNextStatus(currentStatus) {
      const statusFlow = {
        scheduled: "confirmed",
        confirmed: "checked in",
        "checked in": "checked out",
      };
      return statusFlow[currentStatus] || currentStatus;
    },

    // Get status action text
    getStatusActionText(currentStatus) {
      const actionTexts = {
        scheduled: "Confirm",
        confirmed: "Check In",
        "checked in": "Check Out",
        "checked out": "Complete",
      };
      return actionTexts[currentStatus] || "Update";
    },

    // Open meeting link
    openMeetingLink(link) {
      if (link) {
        window.open(link, "_blank");
      }
    },

    // Filter methods
    applyFilters() {
      // Filters are applied automatically through computed property
      // Close the filter dropdown
      const dropdown = document.getElementById("filter-dropdown");
      if (dropdown) {
        dropdown.classList.remove("show");
      }
    },

    clearAllFilters() {
      this.filters = {
        patient: "",
        doctor: "",
        paymentStatus: "",
        status: "",
      };
      this.searchQuery = "";
    },

    clearFilter(filterName) {
      this.filters[filterName] = "";
    },

    // Sort methods
    setSortOrder(order) {
      this.sortOrder = order;
    },

    // Export methods
    async exportToPDF() {
      try {
        const response = await axios.get(
          `${this.apiBaseUrl}/appointments/export/pdf`,
          {
            ...this.getAuthHeaders(),
            responseType: "blob",
          }
        );

        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `appointments_${
          new Date().toISOString().split("T")[0]
        }.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        this.showSuccess("PDF exported successfully!");
      } catch (error) {
        console.error("Error exporting to PDF:", error);
        this.showError("Failed to export PDF");
      }
    },

    async exportToExcel() {
      try {
        const response = await axios.get(
          `${this.apiBaseUrl}/appointments/export/excel`,
          {
            ...this.getAuthHeaders(),
            responseType: "blob",
          }
        );

        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `appointments_${
          new Date().toISOString().split("T")[0]
        }.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        this.showSuccess("Excel exported successfully!");
      } catch (error) {
        console.error("Error exporting to Excel:", error);
        this.showError("Failed to export Excel");
      }
    },

    // Utility methods for notifications
    showSuccess(message) {
      // Implement your notification system here
      // Example using toast or alert
      if (window.showToast) {
        window.showToast(message, "success");
      } else {
        alert(message);
      }
    },

    showError(message) {
      // Implement your notification system here
      // Example using toast or alert
      if (window.showToast) {
        window.showToast(message, "error");
      } else {
        alert(message);
      }
    },

    // Date range picker initialization
    initializeDateRangePicker() {
      // Initialize date range picker if using a library like daterangepicker
      // This would typically be done in mounted() hook
      this.$nextTick(() => {
        if (
          this.$refs.dateRangeInput &&
          window.$ &&
          window.$.fn.daterangepicker
        ) {
          $(this.$refs.dateRangeInput).daterangepicker(
            {
              startDate: moment().subtract(29, "days"),
              endDate: moment(),
              ranges: {
                Today: [moment(), moment()],
                Yesterday: [
                  moment().subtract(1, "days"),
                  moment().subtract(1, "days"),
                ],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [
                  moment().startOf("month"),
                  moment().endOf("month"),
                ],
                "Last Month": [
                  moment().subtract(1, "month").startOf("month"),
                  moment().subtract(1, "month").endOf("month"),
                ],
              },
            },
            (start, end) => {
              this.dateRangeText =
                start.format("DD MMM YY") + " - " + end.format("DD MMM YY");
              // Apply date filter to appointments
              this.filterByDateRange(start, end);
            }
          );
        }
      });
    },

    // Filter appointments by date range
    filterByDateRange(startDate, endDate) {
      // This would be used with the date range picker
      // You can implement additional filtering logic here
    },
  },
};
</script>
