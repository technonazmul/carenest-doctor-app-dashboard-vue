<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 py-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Scrollbar</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Advanced UI</a>
            </li>

            <li class="breadcrumb-item active">Scrollbar</li>
          </ol>
        </div>
      </div>
      <!-- end page header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Default Scroll</h4>
            </div>
            <!-- end card-header -->

            <p class="text-muted m-3">
              Just use data attribute <code>data-simplebar</code> and add
              <code>max-height: **px</code> oh fix height
            </p>

            <div class="card-body py-0 mb-3" data-simplebar style="max-height: 250px">
              SimpleBar does only one thing: replace the browser's default scrollbar with
              a custom CSS-styled one without losing performances. Unlike some popular
              plugins, SimpleBar doesn't mimic scroll with Javascript, causing janks and
              strange scrolling behaviours... You keep the awesomeness of native
              scrolling...with a custom scrollbar!
              <p>
                SimpleBar <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong> <code>overflow: auto</code> scroll
                and <strong>only</strong> replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily customize
                it as you want! Or even have multiple style on the same page...or just
                keep the default style ("Mac OS" scrollbar style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
                You keep the performances/behaviours of the native scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p class="mb-0">
                SimpleBar has been tested on the following browsers: Chrome, Firefox,
                Safari, Edge, IE11.
              </p>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">RTL Position</h4>
            </div>
            <!-- end card-header -->

            <div class="card-body pb-0">
              <p class="text-muted">
                Just use data attribute
                <code>data-simplebar data-simplebar-direction='rtl'</code> and add
                <code>max-height: **px</code> oh fix height
              </p>
            </div>
            <!-- end card-body -->

            <div
              class="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-direction="rtl"
              style="max-height: 250px"
            >
              SimpleBar does only one thing: replace the browser's default scrollbar with
              a custom CSS-styled one without losing performances. Unlike some popular
              plugins, SimpleBar doesn't mimic scroll with Javascript, causing janks and
              strange scrolling behaviours... You keep the awesomeness of native
              scrolling...with a custom scrollbar!
              <p>
                SimpleBar <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong> <code>overflow: auto</code> scroll
                and <strong>only</strong> replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily customize
                it as you want! Or even have multiple style on the same page...or just
                keep the default style ("Mac OS" scrollbar style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
                You keep the performances/behaviours of the native scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p class="mb-0">
                SimpleBar has been tested on the following browsers: Chrome, Firefox,
                Safari, Edge, IE11.
              </p>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Scroll Size</h4>
            </div>
            <!-- end card-header -->

            <div class="card-body pb-0">
              <p class="text-muted">
                Just use data attribute <code>data-simplebar</code> and add
                <code>max-height: **px</code> oh fix height
              </p>
            </div>
            <!-- end card-body -->

            <div
              class="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-lg
              style="max-height: 250px"
            >
              SimpleBar does only one thing: replace the browser's default scrollbar with
              a custom CSS-styled one without losing performances. Unlike some popular
              plugins, SimpleBar doesn't mimic scroll with Javascript, causing janks and
              strange scrolling behaviours... You keep the awesomeness of native
              scrolling...with a custom scrollbar!
              <p>
                SimpleBar <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong> <code>overflow: auto</code> scroll
                and <strong>only</strong> replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily customize
                it as you want! Or even have multiple style on the same page...or just
                keep the default style ("Mac OS" scrollbar style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
                You keep the performances/behaviours of the native scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p class="mb-0">
                SimpleBar has been tested on the following browsers: Chrome, Firefox,
                Safari, Edge, IE11.
              </p>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Scroll Color</h4>
            </div>
            <!-- end card-header -->

            <div class="card-body pb-0">
              <p class="text-muted">
                Just use data attribute
                <code>data-simplebar data-simplebar-primary</code> and add
                <code>max-height: **px</code> oh fix height
              </p>
            </div>
            <!-- end card-body -->

            <div
              class="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-primary
              style="max-height: 250px"
            >
              SimpleBar does only one thing: replace the browser's default scrollbar with
              a custom CSS-styled one without losing performances. Unlike some popular
              plugins, SimpleBar doesn't mimic scroll with Javascript, causing janks and
              strange scrolling behaviours... You keep the awesomeness of native
              scrolling...with a custom scrollbar!
              <p>
                SimpleBar <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong> <code>overflow: auto</code> scroll
                and <strong>only</strong> replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily customize
                it as you want! Or even have multiple style on the same page...or just
                keep the default style ("Mac OS" scrollbar style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
                You keep the performances/behaviours of the native scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p class="mb-0">
                SimpleBar has been tested on the following browsers: Chrome, Firefox,
                Safari, Edge, IE11.
              </p>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
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

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Scrollbar",
    };
  },
};
</script>
