<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ============================================================== -->
  <!-- Start Page Content here -->
  <!-- ============================================================== -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Dragula</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Advanced UI</a>
            </li>

            <li class="breadcrumb-item active">Dragula</li>
          </ol>
        </div>
      </div>

      <!-- start row -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Simple Drag and Drop Example</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute <code>data-plugin='dragula'</code> to have
                drag and drop support in your container.
              </p>

              <draggable class="row" v-model="cards" group="cards" item-key="id">
                <template #item="{ element }">
                  <div class="col-md-4">
                    <div :class="['card', 'mb-3', 'mt-3', element.bg, 'text-white']">
                      <div class="card-body">
                        <blockquote class="card-bodyquote mb-0">
                          <p>{{ element.text }}</p>
                          <footer>
                            Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>

              <!-- end row -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Move stuff between containers</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute
                <code>data-plugin='dragula'</code> and
                <code
                  >data-containers='["first-container-id", "second-container-id"]'</code
                >.
              </p>
              <div
                class="row"
                data-plugin="dragula"
                data-containers='["company-list-left", "company-list-right"]'
              >
                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="fs-16 mt-0">Part 1</h5>
                    <div id="company-list-left" class="py-2">
                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-01.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">Louis K. Bond</h5>
                              <p>Founder & CEO</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge
                                  keffiyeh.</span
                                >
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-02.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">Dennis N. Cloutier</h5>
                              <p>Software Engineer</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge
                                  keffiyeh.</span
                                >
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-03.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">Susan J. Sander</h5>
                              <p>Web Designer</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge
                                  keffiyeh.</span
                                >
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end company-list-1-->
                  </div>
                  <!-- end div.bg-light-->
                </div>
                <!-- end col -->

                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="fs-16 mt-0">Part 2</h5>
                    <div id="company-list-right" class="py-2">
                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-04.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">James M. Short</h5>
                              <p>Web Developer</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge keffiyeh
                                </span>
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-05.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">Gabriel J. Snyder</h5>
                              <p>Business Analyst</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge keffiyeh
                                </span>
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-start">
                            <img
                              src="@/assets/img/users/user-06.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1 mt-0">Louie C. Mason</h5>
                              <p>Human Resources</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic"
                                  ><b>"</b>Disrupt pork belly poutine, asymmetrical
                                  tousled succulents selfies. You probably haven't heard
                                  of them tattooed master cleanse live-edge keffiyeh
                                </span>
                              </p>
                            </div>
                            <!-- end w-100 -->
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end company-list-2-->
                  </div>
                  <!-- end div.bg-light-->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
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
        <div class="col-12">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Move stuff between containers using handle</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute
                <code>data-plugin='dragula'</code>,
                <code
                  >data-containers='["first-container-id", "second-container-id"]'</code
                >
                and <code>data-handle-class='dragula-handle'</code>.
              </p>
              <div
                class="row"
                data-plugin="dragula"
                data-containers='["handle-dragula-left", "handle-dragula-right"]'
                data-handleClass="dragula-handle"
              >
                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="fs-16 mt-0">Part 1</h5>
                    <div id="handle-dragula-left" class="py-2">
                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-07.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">Louis K. Bond</h5>
                              <p class="mb-0">Founder & CEO</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-08.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">Dennis N. Cloutier</h5>
                              <p class="mb-0">Software Engineer</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-09.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">Susan J. Sander</h5>
                              <p class="mb-0">Web Designer</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end company-list-1-->
                  </div>
                  <!-- end div.bg-light-->
                </div>
                <!-- end col -->

                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="fs-16 mt-0">Part 2</h5>
                    <div id="handle-dragula-right" class="py-2">
                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-10.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">James M. Short</h5>
                              <p class="mb-0">Web Developer</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-05.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">Gabriel J. Snyder</h5>
                              <p class="mb-0">Business Analyst</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->

                      <div class="card mb-0 mt-2">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-center">
                            <img
                              src="@/assets/img/users/user-03.jpg"
                              alt="image"
                              class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                            />
                            <div class="w-100 overflow-hidden">
                              <h5 class="fs-16 mb-1">Louie C. Mason</h5>
                              <p class="mb-0">Human Resources</p>
                            </div>
                            <!-- end w-100 -->
                            <span class="dragula-handle"></span>
                          </div>
                          <!-- end d-flex -->
                        </div>
                        <!-- end card-body -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end company-list-2-->
                  </div>
                  <!-- end div.bg-light-->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
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

  <!-- ============================================================== -->
  <!-- End Page content -->
  <!-- ============================================================== -->
</template>
<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const cards = ref([
  { id: 1, bg: "bg-primary", text: "Lorem ipsum dolor sit amet." },
  { id: 2, bg: "bg-secondary", text: "Consectetur adipiscing elit." },
  { id: 3, bg: "bg-success", text: "Integer posuere erat a ante." },
  { id: 4, bg: "bg-info", text: "Lorem ipsum again here." },
  { id: 5, bg: "bg-warning", text: "Little warning note here." },
  { id: 6, bg: "bg-danger", text: "Dangerous content." },
]);
</script>
