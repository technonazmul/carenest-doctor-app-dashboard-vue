<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Carousel</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>

            <li class="breadcrumb-item active">Carousel</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Slides Only</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">
                Here’s a carousel with slides only. Note the presence of the
                <code>.d-block</code> and <code>.img-fluid</code> on carousel images to
                prevent browser default image alignment.
              </p>
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-2.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-3.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">With Controls</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">Adding in the previous and next controls:</p>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-2.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-3.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-1.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">With Indicators</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">
                You can also add the indicators to the carousel, alongside the controls,
                too.
              </p>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-3.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-1.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-2.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">With Captions</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within any
                <code>.carousel-item</code>.
              </p>
              <div
                id="carouselExampleCaption"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      src="@/assets/img/media/img-1.jpg"
                      alt="Slide"
                      class="d-block img-fluid"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="text-white">First slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/img/media/img-2.jpg"
                      alt="Slide"
                      class="d-block img-fluid"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="text-white">Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/img/media/img-3.jpg"
                      alt="Slide"
                      class="d-block img-fluid"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="text-white">Third slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaption"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaption"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Crossfade</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">
                Add <code>.carousel-fade</code> to your carousel to animate slides with a
                fade transition instead of a slide.
              </p>
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-2.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-3.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleFade"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleFade"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Individual Interval</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <p class="text-muted">
                Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to
                change the amount of time to delay between automatically cycling to the
                next item.
              </p>
              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-2.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-3.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="@/assets/img/media/img-4.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleInterval"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleInterval"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Disable Touch Swiping</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <div
                id="carouselExampleControlsNoTouching"
                class="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="@/assets/img/media/img-2.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/img/media/img-3.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/img/media/img-4.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Dark Variant</h5>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <div
                id="carouselExampleDark"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img
                      src="@/assets/img/media/img-2.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="text-fixed-white">First slide label</h5>
                      <p class="op-7">
                        Some representative placeholder content for the first slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="@/assets/img/media/img-3.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="text-fixed-white">Second slide label</h5>
                      <p class="op-7">
                        Some representative placeholder content for the second slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/img/media/img-4.jpg"
                      class="d-block w-100"
                      alt="Slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="text-fixed-white">Third slide label</h5>
                      <p class="op-7">
                        Some representative placeholder content for the third slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Carousel",
    };
  },
};
</script>
