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
          <h4 class="fw-bold mb-0">
            Transactions
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Total Transactions : {{ totalTransactions }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Download as Excel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div
        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
      >
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
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
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
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-0">
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label mb-1">Patient</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue-multiselect
                      v-model="selected"
                      :options="Designation"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Practioner</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
                      :options="Doctor"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Designation</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue3-select
                      v-model="selectedTwo"
                      :options="DesiApp"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Payment Method</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue-multiselect
                      v-model="selectedThree"
                      :options="Department"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date</label
                    >
                    <div class="input-icon-end position-relative">
                      <a-date-picker
                        v-model:value="valueOne"
                        class="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Amount</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue-multiselect
                      v-model="selectedFour"
                      :options="Amount"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1"
                        >Reset</a
                      >
                    </div>
                    <vue-multiselect
                      v-model="selectedFive"
                      :options="Status"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
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
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recent</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Oldest</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  End Filter -->

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!-- Error State -->
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <!--  Start Table -->
      <div class="table-responsive" v-if="!loading && !error">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'TransactionID'">
              <div>
                <a href="">{{ record.TransactionID }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Patient'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl('user-01.jpg')"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold"
                  >{{ record.Patient }}
                </a>
              </div>
            </template>
            <template v-if="column.key === 'Description'">
              <div class="text-dark">{{ record.Description }}</div>
              <ul class="list-unstyled mb-0">
                <li
                  v-for="(line, index) in record.Details"
                  :key="index"
                  class="text-muted fs-13"
                >
                  {{ line }}
                </li>
              </ul>
            </template>
            <template v-if="column.key === 'PaidDate'">
              <div class="fw-semibold text-dark">{{ record.PaidDate }}</div>
            </template>
            <template v-if="column.key === 'PaymentMethod'">
              <div class="text-dark">{{ record.PaymentMethod }}</div>
            </template>
            <template v-if="column.key === 'Amount'">
              <div class="text-dark">${{ record.Amount }}</div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium"
                :class="[
                  'badge',
                  {
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Completed',
                    'badge-soft-info rounded text-info border border-info':
                      record.Status === 'Pending',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
          </template>
        </a-table>
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

  <!-- ========================
			End Page Content
		========================= -->
  <!-- End Wrapper -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";

const columns = [
  {
    title: "Transaction ID",
    dataIndex: "TransactionID",
    key: "TransactionID",
    sorter: {
      compare: (a, b) =>
        a.TransactionID.toLowerCase() > b.TransactionID.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
  },
  {
    title: "Paid Date",
    dataIndex: "PaidDate",
    key: "PaidDate",
  },
  {
    title: "Payment Method",
    dataIndex: "PaymentMethod",
    key: "PaymentMethod",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => (a.Amount > b.Amount ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();

export default {
  data() {
    return {
      searchQuery: "",
      data: [],
      columns,
      valueOne,
      valueTwo,
      valueThree,
      loading: false,
      error: null,
      totalTransactions: 0,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      // Simplified filter options based on actual API data
      Designation: [], // Will be populated from API data
      Doctor: [], // Will be populated from API data
      DesiApp: [
        { label: "Select", value: "Select" },
        { label: "Consultation", value: "Consultation" },
      ],
      Department: [{ id: 1, name: "Booking" }],
      Amount: [
        { id: 1, name: "$500 - $1000" },
        { id: 2, name: "$1000+" },
      ],
      Status: [
        { id: 1, name: "upcoming" },
        { id: 2, name: "pending" },
      ],
    };
  },
  async mounted() {
    await this.fetchTransactions();
  },
  methods: {
    async fetchTransactions() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          "http://0.0.0.0:5002/api/backend/company-transactions"
        );

        if (response.data && response.data.transactions) {
          this.processTransactionData(response.data.transactions);
          this.totalTransactions = response.data.transactions.length;
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        this.error = "Failed to load transactions. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    processTransactionData(transactions) {
      this.data = transactions.map((transaction) => {
        const booking = transaction.referenceId;

        let details = [];
        if (transaction.note) {
          details = transaction.note
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0);
        }

        return {
          TransactionID: transaction._id,
          Patient: booking ? "Patient" : "N/A",
          Description: transaction.source,
          PaidDate: this.formatDate(transaction.createdAt || booking?.date),
          PaymentMethod: transaction.method || "N/A",
          Amount: transaction.amount,
          Status: transaction.type === "DEBIT" ? "Completed" : "Pending",
          Details: details,
          _originalData: transaction,
        };
      });
    },

    formatDate(dateString) {
      if (!dateString) return "N/A";

      // Handle MM/DD/YYYY format
      if (dateString.includes("/")) {
        const [month, day, year] = dateString.split("/");
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }

      // Handle ISO date format (like createdAt timestamps)
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },

    mapStatus(paymentStatus) {
      if (!paymentStatus) return "Pending";

      switch (paymentStatus) {
        case "pending":
          return "Pending";
        case "completed":
        case "released":
          return "Completed";
        default:
          return "Pending";
      }
    },

    formatDate(dateString) {
      if (!dateString) return "N/A";

      // Handle MM/DD/YYYY format
      if (dateString.includes("/")) {
        const [month, day, year] = dateString.split("/");
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }

      // Handle ISO date format
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },

    mapStatus(paymentStatus) {
      switch (paymentStatus) {
        case "pending":
          return "Pending";
        case "completed":
          return "Completed";
        default:
          return "Pending";
      }
    },

    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url)
        .href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.TransactionID.toLowerCase().includes(query) ||
          record.Patient.toLowerCase().includes(query) ||
          record.Description.toLowerCase().includes(query) ||
          record.PaidDate.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
          record.Amount.toString().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
