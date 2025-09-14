<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Review Management<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Reviews : {{ reviews.length }}</span
            >
          </h4>
        </div>
      </div>
      <!-- End Page Header -->

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
                  placeholder="Search reviews..."
                  v-model="searchQuery"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Filter By : </span> All Reviews
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item rounded-1"
                  @click="filterStatus = 'all'"
                  >All Reviews</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item rounded-1"
                  @click="filterStatus = 'pending'"
                  >Pending</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item rounded-1"
                  @click="filterStatus = 'approved'"
                  >Approved</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredAndSortedReviews"
          :loading="isLoading"
          :pagination="{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '25', '50'],
          }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'PatientInfo'">
              <div class="d-flex flex-column">
                <div class="fw-bold mb-1">{{ record.patientName }}</div>
                <div class="text-muted fs-13">{{ record.email }}</div>
              </div>
            </template>
            <template v-if="column.key === 'DoctorInfo'">
              <div class="fw-medium fs-14">{{ record.doctorName }}</div>
            </template>
            <template v-if="column.key === 'Rating'">
              <div class="d-flex align-items-center">
                <span class="text-warning me-2">
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="
                      star <= record.rating ? 'fa fa-star' : 'fa fa-star-o'
                    "
                  ></i>
                </span>
                <span class="fw-medium">({{ record.rating }})</span>
              </div>
            </template>
            <template v-if="column.key === 'ReviewText'">
              <div
                class="text-muted fs-13"
                style="
                  max-width: 200px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                {{ record.reviewText || "No comment provided" }}
              </div>
            </template>
            <template v-if="column.key === 'AppointmentDate'">
              <span class="fw-medium fs-14">{{
                formatDate(record.appointmentDate)
              }}</span>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                :class="
                  record.reviewStatus
                    ? 'fw-medium px-2 py-1 fs-13 badge badge-soft-success rounded text-success border border-success'
                    : 'fw-medium px-2 py-1 fs-13 badge badge-soft-warning rounded text-warning border border-warning'
                "
                >{{ record.reviewStatus ? "Approved" : "Pending" }}
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
                      data-bs-toggle="modal"
                      data-bs-target="#view_review_details"
                      @click="setViewReview(record)"
                      ><i class="fa fa-eye me-2"></i>View Details</a
                    >
                  </li>
                  <li v-if="!record.reviewStatus">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center text-success"
                      @click="approveReview(record.id)"
                      :class="{
                        'text-muted': approvingReviewId === record.id,
                      }"
                      ><i class="fa fa-check me-2"></i
                      >{{
                        approvingReviewId === record.id
                          ? "Approving..."
                          : "Approve"
                      }}</a
                    >
                  </li>
                  <li v-else>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center text-danger"
                      @click="rejectReview(record.id)"
                      :class="{
                        'text-muted': rejectingReviewId === record.id,
                      }"
                      ><i class="fa fa-times me-2"></i
                      >{{
                        rejectingReviewId === record.id
                          ? "Rejecting..."
                          : "Reject"
                      }}</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>

      <!-- Loading state -->
      <div v-if="isLoading && reviews.length === 0" class="text-center p-4">
        <p>Loading reviews...</p>
      </div>

      <!-- Empty state -->
      <div v-if="!isLoading && reviews.length === 0" class="text-center p-4">
        <p>No reviews found.</p>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; , All Rights Reserved</p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- Start View Review Details Modal -->
  <div id="view_review_details" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Review Details</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body" v-if="selectedReview">
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Patient:</div>
            <div class="col-sm-8">{{ selectedReview.patientName }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Email:</div>
            <div class="col-sm-8">{{ selectedReview.email }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Doctor:</div>
            <div class="col-sm-8">{{ selectedReview.doctorName }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Rating:</div>
            <div class="col-sm-8">
              <span class="text-warning me-2">
                <i
                  v-for="star in 5"
                  :key="star"
                  :class="
                    star <= selectedReview.rating
                      ? 'fa fa-star'
                      : 'fa fa-star-o'
                  "
                ></i>
              </span>
              <span class="fw-medium">({{ selectedReview.rating }})</span>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Appointment Date:</div>
            <div class="col-sm-8">{{ selectedReview.appointmentDate }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Status:</div>
            <div class="col-sm-8">
              <span
                :class="
                  selectedReview.reviewStatus
                    ? 'badge badge-soft-success border border-success'
                    : 'badge badge-soft-warning border border-warning'
                "
              >
                {{ selectedReview.reviewStatus ? "Approved" : "Pending" }}
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 fw-bold">Review Comment:</div>
            <div class="col-sm-8">
              <div class="p-3 bg-light rounded">
                {{ selectedReview.reviewText || "No comment provided" }}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex align-items-center gap-1">
          <button
            type="button"
            class="btn btn-light border"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-success"
            v-if="selectedReview && !selectedReview.reviewStatus"
            @click="approveReview(selectedReview.id)"
            :disabled="approvingReviewId === selectedReview.id"
          >
            {{
              approvingReviewId === selectedReview.id
                ? "Approving..."
                : "Approve Review"
            }}
          </button>
          <button
            type="button"
            class="btn btn-danger"
            v-if="selectedReview && selectedReview.reviewStatus"
            @click="rejectReview(selectedReview.id)"
            :disabled="rejectingReviewId === selectedReview.id"
          >
            {{
              rejectingReviewId === selectedReview.id
                ? "Rejecting..."
                : "Reject Review"
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End View Review Details Modal -->
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const columns = [
  {
    title: "Patient Info",
    dataIndex: "patientInfo",
    key: "PatientInfo",
    sorter: false,
  },
  {
    title: "Doctor",
    dataIndex: "doctorName",
    key: "DoctorInfo",
    sorter: false,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "Rating",
    sorter: {
      compare: (a, b) => a.rating - b.rating,
    },
  },
  {
    title: "Review",
    dataIndex: "reviewText",
    key: "ReviewText",
    sorter: false,
  },
  {
    title: "Appointment Date",
    dataIndex: "appointmentDate",
    key: "AppointmentDate",
    sorter: {
      compare: (a, b) =>
        new Date(a.appointmentDate) - new Date(b.appointmentDate),
    },
  },
  {
    title: "Status",
    dataIndex: "reviewStatus",
    key: "Status",
    sorter: false,
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

export default {
  setup() {
    // Get admin token from cookie
    const adminToken = Cookies.get("adminToken");
    const apiBase = API_BASE;
    const apiBaseUrl = `${apiBase}/api/backend`;

    return {
      adminToken,
      apiBase,
      apiBaseUrl,
    };
  },
  data() {
    return {
      searchQuery: "",
      filterStatus: "all",
      sortBy: "recent",
      columns,
      reviews: [],
      isLoading: true,
      approvingReviewId: null,
      rejectingReviewId: null,
      selectedReview: null,
    };
  },
  computed: {
    formattedReviews() {
      return this.reviews.map((item) => {
        return {
          id: item._id,
          patientName: item.userId?.name || "N/A",
          doctorName: item.doctorId?.name || "N/A",
          rating: item.rating || 0,
          reviewText: item.reviewText || "",
          appointmentDate: item.date || "N/A",
          reviewStatus: item.reviewStatus || false,
          email: item.userId?.email || "",
        };
      });
    },

    filteredAndSortedReviews() {
      let filtered = this.formattedReviews;

      // Apply search filter
      if (this.searchQuery) {
        const searchTermLower = this.searchQuery.toLowerCase();
        filtered = filtered.filter((item) => {
          return (
            (item.patientName &&
              item.patientName.toLowerCase().includes(searchTermLower)) ||
            (item.doctorName &&
              item.doctorName.toLowerCase().includes(searchTermLower)) ||
            (item.email &&
              item.email.toLowerCase().includes(searchTermLower)) ||
            (item.appointmentDate &&
              item.appointmentDate.toLowerCase().includes(searchTermLower)) ||
            (item.reviewText &&
              item.reviewText.toLowerCase().includes(searchTermLower))
          );
        });
      }

      // Apply status filter
      if (this.filterStatus !== "all") {
        if (this.filterStatus === "approved") {
          filtered = filtered.filter((item) => item.reviewStatus === true);
        } else if (this.filterStatus === "pending") {
          filtered = filtered.filter((item) => item.reviewStatus === false);
        }
      }

      // Apply sorting
      if (this.sortBy === "recent") {
        filtered.sort(
          (a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate)
        );
      } else if (this.sortBy === "oldest") {
        filtered.sort(
          (a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate)
        );
      } else if (this.sortBy === "rating_high") {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (this.sortBy === "rating_low") {
        filtered.sort((a, b) => a.rating - b.rating);
      }

      return filtered;
    },
  },
  async mounted() {
    await this.fetchReviews();
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

    // Fetch all reviews
    async fetchReviews() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${this.apiBaseUrl}/reviews-list`,
          this.getAuthHeaders()
        );
        this.reviews = response.data;
      } catch (error) {
        console.error("Error fetching reviews:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error("Failed to fetch reviews.");
        }
      } finally {
        this.isLoading = false;
      }
    },

    // Set review for viewing
    setViewReview(review) {
      this.selectedReview = review;
    },

    // Approve review
    async approveReview(id) {
      this.approvingReviewId = id;
      try {
        await axios.post(
          `${this.apiBaseUrl}/booking/review/action/${id}`,
          { action: "approve" },
          this.getAuthHeaders()
        );
        toastr.success("Review approved successfully!");

        await this.fetchReviews();
      } catch (error) {
        console.error("Error approving review:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error(
            error.response?.data?.message || "Error approving review."
          );
        }
      } finally {
        this.approvingReviewId = null;
      }
    },

    // Reject review
    async rejectReview(id) {
      this.rejectingReviewId = id;
      try {
        await axios.post(
          `${this.apiBaseUrl}/booking/review/action/${id}`,
          { action: "reject" },
          this.getAuthHeaders()
        );
        toastr.success("Review rejected successfully!");

        await this.fetchReviews();
      } catch (error) {
        console.error("Error rejecting review:", error);
        if (error.response && error.response.status === 401) {
          toastr.error("Authentication failed. Please login again.");
          this.$router.push("/admin/login");
        } else {
          toastr.error(
            error.response?.data?.message || "Error rejecting review."
          );
        }
      } finally {
        this.rejectingReviewId = null;
      }
    },

    // Format date
    formatDate(dateString) {
      if (!dateString || dateString === "N/A") return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
.custom-badge {
  border: none;
}
.status-green {
  background-color: #e5f8ed;
  color: #0cb777;
}
.action-icon {
  color: #777;
  font-size: 18px;
  display: inline-block;
}
.text-muted {
  color: #6c757d !important;
}

/* Star rating styles */
.fa-star {
  color: #f8ce0b;
}

.fa-star-o {
  color: #ddd;
}

/* Custom styles for the data table */
.vue3-easy-data-table th {
  font-weight: bold;
}
</style>
