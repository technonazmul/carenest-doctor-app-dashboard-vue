<template>
  <div class="container-fuild">
    <div
      class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 coming-soon-cover"
    >
      <img
        src="@/assets/img/bg/coming-soon-bg.png"
        alt=""
        class="img-fluid position-absolute bottom-0"
      />

      <!-- start row -->
      <div
        class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
      >
        <div class="col-lg-6 mx-auto">
          <div class="card bg-transparent border-0">
            <div
              class="comming-soon-pg d-flex flex-column align-items-center justify-content-center"
            >
              <div class="mb-3 p-3">
                <img src="@/assets/img/logo.svg" alt="logo" class="img-fluid" />
              </div>
              <div class="pb-3 mb-3">
                <img src="@/assets/img/bg/coming-soon.svg" alt="logo" class="img-fluid" />
              </div>
              <ul
                class="d-inline-flex list-unstyled align-items-center justify-content-center mb-3"
              >
                <li class="me-sm-3 me-2">
                  <div class="timer-cover">
                    <div
                      class="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3"
                    >
                      <p class="mb-1">Days</p>
                      <h3 class="days fw-bold mb-0">54</h3>
                    </div>
                  </div>
                </li>
                <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>
                <li class="me-sm-3 me-2">
                  <div class="timer-cover">
                    <div
                      class="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3"
                    >
                      <p class="mb-1">Hours</p>
                      <h3 class="hours fw-bold mb-0">2</h3>
                    </div>
                  </div>
                </li>

                <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>
                <li class="me-sm-3 me-2">
                  <div class="timer-cover">
                    <div
                      class="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3"
                    >
                      <p class="mb-1">Minutes</p>
                      <h3 class="minutes fw-bold mb-0">54</h3>
                    </div>
                  </div>
                </li>
                <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>
                <li>
                  <div class="timer-cover">
                    <div
                      class="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3"
                    >
                      <p class="mb-1">Seconds</p>
                      <h2 class="seconds fw-bold mb-0">10</h2>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="w-75">
                <div class="subscribe-form w-100">
                  <div class="mb-3">
                    <p class="d-flex text-center justify-content-center">
                      Explore the amazing new features we have created just for you. To
                      receive the most recent updates sent to your email, subscribe to our
                      newsletter.
                    </p>
                  </div>
                  <div class="d-flex align-items-center ps-0 mb-3">
                    <input
                      type="email"
                      class="form-control me-2"
                      placeholder="Enter Your Mail Address"
                    />
                    <a href="javascript:void(0);" class="btn btn-primary">Subscribe</a>
                  </div>
                </div>
                <div
                  class="d-flex flex-wrap justify-content-center align-items-center pb-3 media-btn"
                >
                  <a
                    href="javascript:void(0);"
                    class="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-brand-facebook fs-16"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-brand-twitter fs-16"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-brand-linkedin fs-16"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn rounded-circle btn-icon btn-sm d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-brand-instagram fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>
