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
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Designation<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Designation : 54</span
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
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_designation"
            ><i class="ti ti-plus me-1"></i>Add New Designation</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
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
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
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
                <h5 class="mb-0 fw-bold">Filter</h5>
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
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Designation</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selected"
                      :options="Department"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
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
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
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
                    class="btn btn-light btn-md me-2"
                    id="close-filter"
                    >Close</a
                  >
                  <button type="submit" class="btn btn-primary btn-md">Filter</button>
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Status'">
              <span
                class="px-2 py-1 fs-13 fw-medium"
                :class="[
                  'badge',
                  {
                    'badge-soft-success border border-success':
                      record.Status === 'Active',
                    'badge-soft-danger border border-danger':
                      record.Status === 'Inactive',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_designation"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_designation"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
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

  <!-- Start Add Modal -->
  <div id="add_designation" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Designation</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <div class="form-check d-flex align-items-center me-3">
                  <input
                    class="form-check-input me-2"
                    type="radio"
                    name="Radio-2"
                    id="Radio-sm-1"
                  />
                  <label class="form-check-label fs-13" for="Radio-sm-1">Staff</label>
                </div>
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input me-2"
                    type="radio"
                    name="Radio-2"
                    id="Radio-sm-2"
                  />
                  <label class="form-check-label fs-13" for="Radio-sm-2">Doctor</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Designation Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="select"
                :options="DepartmentSet"
                placeholder="Select"
              />
            </div>
            <div class="mb-0">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Designation</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_designation" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Designation</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <div class="form-check d-flex align-items-center me-3">
                  <input
                    class="form-check-input me-2"
                    type="radio"
                    name="Radio-2"
                    id="Radio-sm-3"
                    checked
                  />
                  <label class="form-check-label fs-13" for="Radio-sm-3">Staff</label>
                </div>
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input me-2"
                    type="radio"
                    name="Radio-2"
                    id="Radio-sm-4"
                  />
                  <label class="form-check-label fs-13" for="Radio-sm-4">Doctor</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Designation Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="Nurse" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectOne"
                :options="DepartmentSetEdit"
                placeholder="Nurse"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3">
A nurse provides patient care and supports medical treatments.</textarea
              >
            </div>
            <div class="mb-0">
              <label class="form-label">Status</label>
              <vue3-select
                v-model="selectTwo"
                :options="StatusEdit"
                placeholder="Nurse"
              />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_designation">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
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
            <a href="javascript:void(0);" class="btn btn-danger position-relative z-1" data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
<script>
const columns = [
  {
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) =>
        a.Designation.toLowerCase() > b.Designation.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
    sorter: {
      compare: (a, b) =>
        a.CreatedDate.toLowerCase() > b.CreatedDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    Designation: "Nurse",
    CreatedDate: "22 Apr 2025",
    Status: "Active",
  },
  {
    Designation: "Pharmacist",
    CreatedDate: "12 Apr 2025",
    Status: "Inactive",
  },
  {
    Designation: "Receptionist",
    CreatedDate: "01 Apr 2025",
    Status: "Active",
  },
  {
    Designation: "Technician",
    CreatedDate: "05 Mar 2025",
    Status: "Active",
  },
  {
    Designation: "Medical Assistant",
    CreatedDate: "20 Mar 2025",
    Status: "Active",
  },
  {
    Designation: "Phlebotomist",
    CreatedDate: "01 Mar 2025",
    Status: "Active",
  },
  {
    Designation: "Dialysis Technician",
    CreatedDate: "15 Feb 2025",
    Status: "Inactive",
  },
  {
    Designation: "Medical Coder",
    CreatedDate: "09 Feb 2025",
    Status: "Active",
  },
  {
    Designation: "Chiropractor",
    CreatedDate: "01 Feb 2025",
    Status: "Active",
  },
  {
    Designation: "Acupuncturist",
    CreatedDate: "12 Jan 2025",
    Status: "Active",
  },
];
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      valueOne,
      select: null,
      selectOne: null,
      selectTwo: null,
      selected: [],
      selectedOne: [],
      StatusEdit: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      DepartmentSet: [
        { label: "Select", value: "Select" },
        { label: "Nurse", value: "Nurse" },
        { label: "Pharmacist", value: "Pharmacist" },
        { label: "Receptionist", value: "Receptionist" },
        { label: "Technician", value: "Technician" },
        { label: "Medical Assistant", value: "Medical Assistant" },
      ],
      DepartmentSetEdit: [
        { label: "Select", value: "Select" },
        { label: "Nurse", value: "Nurse" },
        { label: "Pharmacist", value: "Pharmacist" },
        { label: "Receptionist", value: "Receptionist" },
        { label: "Technician", value: "Technician" },
        { label: "Medical Assistant", value: "Medical Assistant" },
      ],
      Department: [
        { id: 1, name: "Nursing" },
        { id: 2, name: "Pharmacy" },
        { id: 3, name: "Laboratory" },
        { id: 4, name: "Billing" },
      ],
      Status: [
        { id: 1, name: "Active" },
        { id: 2, name: "Inactive" },
      ],
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Designation.toLowerCase().includes(query) ||
          record.CreatedDate.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
