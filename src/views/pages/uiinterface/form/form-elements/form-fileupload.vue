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
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">File Uploads</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
            <li class="breadcrumb-item active">File Uploads</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Dropzone File Upload</h5>
        </div>
        <div class="card-body">
          <p class="text-muted">
            DropzoneJS is an open source library that provides drag’n’drop file uploads
            with image previews.
          </p>
          <form
            action="/"
            method="post"
            class="dropzone"
            id="myAwesomeDropzone"
            data-plugin="dropzone"
            data-previews-container="#file-previews"
            data-upload-preview-template="#uploadPreviewTemplate"
          >
            <div class="fallback">
              <input name="file" type="file" multiple />
            </div>
            <div class="dz-message needsclick">
              <i class="ti ti-cloud-upload h1 text-muted"></i>
              <h3>Drop files here or click to upload.</h3>
              <span class="text-muted fs-13"
                >(This is just a demo dropzone. Selected files are
                <strong>not</strong> actually uploaded.)</span
              >
            </div>
          </form>

          <!-- Preview -->
          <div class="dropzone-previews mt-3" id="file-previews"></div>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->

      <!-- file preview template -->
      <div class="d-none" id="uploadPreviewTemplate">
        <div class="mt-1 mb-0 shadow-none border">
          <div class="p-2">
            <!-- start row -->
            <div class="row align-items-center">
              <div class="col-auto">
                <img
                  data-dz-thumbnail
                  src="#"
                  class="avatar-sm rounded bg-light"
                  alt="User Img"
                />
              </div>
              <!-- end col -->
              <div class="col ps-0">
                <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
                <p class="mb-0" data-dz-size></p>
              </div>
              <!-- end col -->
              <div class="col-auto">
                <a
                  href="javascript:void(0);"
                  class="btn btn-link btn-lg text-muted"
                  data-dz-remove
                  ><i class="ti ti-x"></i
                ></a>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
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
      text: "File Upload",
    };
  },
};
</script>
