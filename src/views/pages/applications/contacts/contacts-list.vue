<template>
  <layouts-header :title="title" :text1="text1" :text="text" />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <div class="mb-3">
        <h4 class="fw-bold mb-0">Contacts</h4>
      </div>
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-0">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"
                  ><i class="isax isax-search-normal fs-12"></i
                ></a>
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
        <div class="d-flex mb-3 align-items-center flex-wrap row-gap-3">
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Status
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-1">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Sort By : Last 7 Days
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-1">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recently Added</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Ascending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Desending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last Month</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last 7 Days</a
                >
              </li>
            </ul>
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#add-contact"
            ><i class="ti ti-circle-plus me-1"></i>Add Contact</a
          >
        </div>
      </div>
      <div class="table-responsive">
        <contacts-table></contacts-table>
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer-->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer-->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <contacts-modal></contacts-modal>
</template>

<script>
export default {
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "Contacts",
    };
  },
};
</script>
