<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header Start -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Rating</h3>
          </div>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- start row -->
      <div class="row">
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Basic Rater</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">
                  Show Some <span class="text-danger">&#10084;</span> with rating :
                </p>
                <star-rating v-bind:star-size="20" v-bind:show-rating="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">5 star rater with steps</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
                <star-rating
                  v-bind:star-size="20"
                  v-bind:rating="3"
                  v-bind:show-rating="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Custom messages</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">
                  Your rating is much appreciated&#128079; :
                </p>
                <star-rating
                  v-bind:star-size="20"
                  v-bind:max-rating="10"
                  v-bind:show-rating="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Unlimited number of stars readOnly</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                <star-rating
                  v-bind:star-size="20"
                  v-bind:read-only="true"
                  v-bind:rating="3"
                  v-bind:show-rating="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                5 Star rater with custom isBusyText and simulated backend
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                <star-rating
                  v-bind:star-size="20"
                  v-bind:increment="0.5"
                  v-bind:rating="3.5"
                  v-bind:show-rating="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">On hover event</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                <div class="d-flex flex-wrap align-items-center">
                  <star-rating v-bind:star-size="20" v-bind:show-rating="false" />
                  <span class="live-rating badge bg-success-transparent ms-3"> 1 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Clear/reset rater</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
                <div class="d-flex flex-wrap align-items-center">
                  <star-rating v-bind:star-size="20" v-bind:show-rating="false" />
                  <button
                    class="btn btn-icon btn-sm btn-danger-light ms-3"
                    id="rater-reset-button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Reset"
                  >
                    <vue-feather type="rotate-cw" class="feather-16"></vue-feather>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-title">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
			End Page Content
		========================= -->
</template>
<script>
import StarRating from "vue3-star-ratings";
import { RotateCwIcon } from "vue-feather-icons";
export default {
  components: {
    StarRating,
    RotateCwIcon,
  },
  data() {
    return {
      title: "Home",
      text: "Ratings",
    };
  },
};
</script>
