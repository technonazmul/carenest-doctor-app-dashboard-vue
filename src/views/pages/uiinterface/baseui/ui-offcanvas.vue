<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header Start -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Offcanvas</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>

            <li class="breadcrumb-item active">Offcanvas</li>
          </ol>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Offcanvas</h5>
            </div>

            <div class="card-body">
              <p>
                You can use a link with the <code>href</code> attribute, or a button with
                the <code>data-bs-target</code> attribute. In both cases, the
                <code>data-bs-toggle="offcanvas"</code> is required.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Link with href
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  Button with data-bs-target
                </button>
              </div>

              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h4 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h4>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- end offcanvas header -->

                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>

                  <ul class="ps-3">
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
                <!-- end offcanvas body -->
              </div>
              <!-- end offcanvas -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Offcanvas Backdrop</h5>
            </div>

            <div class="card-body">
              <p>
                Scrolling the <code>&lt;body&gt;</code> element is disabled when an
                offcanvas and its backdrop are visible. Use the
                <code>data-bs-scroll</code> attribute to toggle
                <code>&lt;body&gt;</code> scrolling and <code>data-bs-backdrop</code> to
                toggle the backdrop.
              </p>

              <div class="d-flex flex-wrap gap-2">
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  Enable body scrolling
                </button>
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                >
                  Enable backdrop (default)
                </button>
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  Enable both scrolling & backdrop
                </button>
              </div>

              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                    Colored with scrolling
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- end offcanvas header -->
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>

                  <ul class="ps-3">
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
                <!-- end offcanvas body -->
              </div>
              <!-- end offcanvas -->

              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div class="offcanvas-header">
                  <h4 class="offcanvas-title" id="offcanvasWithBackdropLabel">
                    Offcanvas with backdrop
                  </h4>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- end offcanvas header -->

                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>

                  <ul class="ps-3">
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
                <!-- end offcanvas body -->
              </div>
              <!-- end offcanvas -->

              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                    Backdroped with scrolling
                  </h4>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- end offcanvas header -->

                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>

                  <ul class="ps-3">
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
                <!-- end offcanvas body -->
              </div>
              <!-- end offcanvas -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Offcanvas Placement</h5>
            </div>

            <div class="card-body">
              <p>Try the right and bottom examples out below.</p>
              <ul>
                <li>
                  <code>.offcanvas-start</code> places offcanvas on the left of the
                  viewport (shown above)
                </li>
                <li>
                  <code>.offcanvas-end</code> places offcanvas on the right of the
                  viewport
                </li>
                <li>
                  <code>.offcanvas-top</code> places offcanvas on the top of the viewport
                </li>
                <li>
                  <code>.offcanvas-bottom</code> places offcanvas on the bottom of the
                  viewport
                </li>
              </ul>

              <div>
                <div class="d-flex flex-wrap gap-2">
                  <button
                    class="btn btn-primary mt-2 mt-md-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    Toggle Top offcanvas
                  </button>
                  <button
                    class="btn btn-primary mt-2 mt-md-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    Toggle right offcanvas
                  </button>
                  <button
                    class="btn btn-primary mt-2 mt-md-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom"
                    aria-controls="offcanvasBottom"
                  >
                    Toggle bottom offcanvas
                  </button>
                  <button
                    class="btn btn-primary mt-2 mt-lg-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasLeft"
                    aria-controls="offcanvasLeft"
                  >
                    Toggle Left offcanvas
                  </button>
                </div>

                <div
                  class="offcanvas offcanvas-top"
                  tabindex="-1"
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div class="offcanvas-header">
                    <h4 id="offcanvasTopLabel">Offcanvas Top</h4>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <!-- end offcanvas header -->

                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </div>
                    <h5 class="mt-3">List</h5>
                    <ul class="ps-3">
                      <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                      <li>Neque porro quisquam est, qui dolorem</li>
                      <li>Quis autem vel eum iure qui in ea</li>
                    </ul>
                  </div>
                  <!-- end offcanvas body -->
                </div>
                <!-- end offcanvas -->

                <div
                  class="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header">
                    <h4 id="offcanvasRightLabel">Offcanvas right</h4>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <!-- end offcanvas header -->

                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </div>
                    <h5 class="mt-3">List</h5>
                    <ul class="ps-3">
                      <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                      <li>Neque porro quisquam est, qui dolorem</li>
                      <li>Quis autem vel eum iure qui in ea</li>
                    </ul>
                  </div>
                  <!-- end offcanvas body -->
                </div>
                <!-- end offcanvas -->

                <div
                  class="offcanvas offcanvas-bottom"
                  tabindex="-1"
                  id="offcanvasBottom"
                  aria-labelledby="offcanvasBottomLabel"
                >
                  <div class="offcanvas-header">
                    <h4 class="offcanvas-title" id="offcanvasBottomLabel">
                      Offcanvas bottom
                    </h4>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <!-- end offcanvas header -->

                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </div>
                    <h5 class="mt-3">List</h5>
                    <ul class="ps-3">
                      <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                      <li>Neque porro quisquam est, qui dolorem</li>
                      <li>Quis autem vel eum iure qui in ea</li>
                    </ul>
                  </div>
                  <!-- end offcanvas body -->
                </div>
                <!-- end offcanvas -->

                <div
                  class="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasLeft"
                  aria-labelledby="offcanvasLeftLabel"
                >
                  <div class="offcanvas-header">
                    <h4 id="offcanvasLeftLabel">Offcanvas Left</h4>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <!-- end offcanvas header -->

                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </div>
                    <h5 class="mt-3">List</h5>
                    <ul class="ps-3">
                      <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                      <li>Neque porro quisquam est, qui dolorem</li>
                      <li>Quis autem vel eum iure qui in ea</li>
                    </ul>
                  </div>
                  <!-- end offcanvas body -->
                </div>
                <!-- end offcanvas -->
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Dark Offcanvas</h5>
            </div>

            <div class="card-body">
              <p>
                Change the appearance of offcanvases with utilities to better match them
                to different contexts like dark navbars. Here we add
                <code>.text-bg-dark</code> to the <code>.offcanvas</code> and
                <code>.btn-close-white</code> to <code>.btn-close</code> for proper
                styling with a dark offcanvas. If you have dropdowns within, consider also
                adding <code>.dropdown-menu-dark</code> to <code>.dropdown-menu</code>.
              </p>
              <div>
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDark"
                  aria-controls="offcanvasDark"
                >
                  Dark offcanvas
                </button>

                <div
                  class="offcanvas offcanvas-start text-bg-dark"
                  tabindex="-1"
                  id="offcanvasDark"
                  aria-labelledby="offcanvasDarkLabel"
                >
                  <div class="offcanvas-header">
                    <h5 id="offcanvasDarkLabel">Dark Offcanvas</h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </div>
                    <h5 class="mt-3">List</h5>
                    <ul class="ps-3">
                      <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                      <li>Neque porro quisquam est, qui dolorem</li>
                      <li>Quis autem vel eum iure qui in ea</li>
                    </ul>
                  </div>
                  <!-- end offcanvas body -->
                </div>
                <!-- end offcanvas -->
              </div>
            </div>
            <!-- end card body -->
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
      text: "Offcanvas",
    };
  },
};
</script>
