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
          <h4 class="fs-18 fw-semibold mb-0">Form Validation</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>

            <li class="breadcrumb-item active">Form Validation</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-sm-12">
          <!-- Custom Boostrap Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Custom Bootstrap Form Validation</h5>
              <p class="card-text">
                For custom Bootstrap form validation messages, you’ll need to add the
                <code>novalidate</code> boolean attribute to your form. For server side
                validation
                <a
                  href="https://getbootstrap.com/docs/4.1/components/forms/#server-side"
                  target="_blank"
                  >read full documentation</a
                >.
              </p>
            </div>
            <form-validation-one></form-validation-one>
          </div>
          <!-- /Custom Boostrap Validation -->

          <!-- Default Browser Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Browser Defaults</h5>
              <p class="card-text">
                Not interested in custom validation feedback messages or writing
                JavaScript to change form behaviors? All good, you can use the browser
                defaults. Try submitting the form below.
              </p>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-sm">
                    <form>
                      <div class="form-row row">
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault01">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="First Name"
                            value="Mark"
                            required
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault02">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault02"
                            placeholder="Last Name"
                            value="Otto"
                            required
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationDefaultUsername">Username</label>
                          <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2"
                              >@</span
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationDefaultUsername"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend2"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row row">
                        <div class="col-md-6 mb-3">
                          <label for="validationDefault03">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault03"
                            placeholder="City"
                            required
                          />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault04">State</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="State"
                            required
                          />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault05">Zip</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault05"
                            placeholder="Zip"
                            required
                          />
                        </div>
                      </div>
                      <div class="input-block mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck2"
                            required
                          />
                          <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="submit">Submit form</button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- /Default Browser Validation -->

          <!-- Server Side Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Server Side</h5>
              <p class="card-text">
                We recommend using client side validation, but in case you require server
                side, you can indicate invalid and valid form fields with
                <code>.is-invalid</code> and <code>.is-valid</code>. Note that
                <code>.invalid-feedback</code> is also supported with these classes.
              </p>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="form-row row">
                  <div class="col-md-4 mb-3">
                    <label for="validationServer01">First Name</label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer01"
                      placeholder="First Name"
                      value="Mark"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServer02">Last Name</label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer02"
                      placeholder="Last Name"
                      value="Otto"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServerUsername">Username</label>
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend3">@</span>
                      <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      <div class="invalid-feedback">Please choose a username.</div>
                    </div>
                  </div>
                </div>
                <div class="form-row row">
                  <div class="col-md-6 mb-3">
                    <label for="validationServer03">City</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer03"
                      placeholder="City"
                      required
                    />
                    <div class="invalid-feedback">Please provide a valid city.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationServer04">State</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer04"
                      placeholder="State"
                      required
                    />
                    <div class="invalid-feedback">Please provide a valid state.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationServer05">Zip</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer05"
                      placeholder="Zip"
                      required
                    />
                    <div class="invalid-feedback">Please provide a valid zip.</div>
                  </div>
                </div>
                <div class="input-block mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck3">
                      Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">Submit form</button>
              </form>
            </div>
          </div>
          <!-- /Server Side Validation -->

          <!-- Supported Elements -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Supported Elements</h5>
              <p class="card-text">
                Form validation styles are also available for bootstrap custom form
                controls.
              </p>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm">
                  <form class="was-validated">
                    <div class="custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input me-1"
                        id="customControlValidation1"
                        required
                      />
                      <label for="customControlValidation1"
                        >Check this custom checkbox</label
                      >
                      <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>
                    <div class="custom-radio">
                      <input
                        type="radio"
                        class="form-check-input me-1"
                        id="customControlValidation2"
                        name="radio-stacked"
                        required
                      />
                      <label for="customControlValidation2"
                        >Toggle this custom radio</label
                      >
                    </div>
                    <div class="custom-radio mb-3">
                      <input
                        type="radio"
                        class="form-check-input me-1"
                        id="customControlValidation3"
                        name="radio-stacked"
                        required
                      />
                      <label for="customControlValidation3"
                        >Or toggle this other custom radio</label
                      >
                      <div class="invalid-feedback">
                        More example invalid feedback text
                      </div>
                    </div>
                    <div class="input-block mb-3">
                      <select class="form-select" required>
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div class="invalid-feedback">
                        Example invalid custom select feedback
                      </div>
                    </div>

                    <div class="input-block mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="validatedCustomFile"
                        required
                      />
                      <div class="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Supported Elements -->

          <!-- Validation Tooltips -->
          <div class="card mb-0">
            <div class="card-header">
              <h5 class="card-title mb-0">Tooltips</h5>
              <p class="card-text">
                You can swap the <code>.{valid|invalid}-feedback</code> classes for
                <code>.{valid|invalid}-tooltip</code> classes to display validation
                feedback in a styled tooltip.
              </p>
            </div>
            <div class="card-body">
              <form
                ref="form"
                class="needs-validation"
                novalidate
                @submit.prevent="validateFormOne"
              >
                <div class="form-row row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltip01">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      placeholder="First name"
                      value="Mark"
                      required
                    />
                    <div class="valid-tooltip">Looks good!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltip02">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip02"
                      placeholder="Last name"
                      value="Otto"
                      required
                    />
                    <div class="valid-tooltip">Looks good!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltipUsername"
                      >Username</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltipUsername"
                      placeholder="Username"
                      required
                    />
                    <div class="invalid-tooltip">
                      Please choose a unique and valid username.
                    </div>
                  </div>
                </div>
                <div class="form-row row">
                  <div class="col-md-6 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip03">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip03"
                      placeholder="City"
                      required
                    />
                    <div class="invalid-tooltip">Please provide a valid city.</div>
                  </div>
                  <div class="col-md-3 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip04">State</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip04"
                      placeholder="State"
                      required
                    />
                    <div class="invalid-tooltip">Please provide a valid state.</div>
                  </div>
                  <div class="col-md-3 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip05">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip05"
                      placeholder="Zip"
                      required
                    />
                    <div class="invalid-tooltip">Please provide a valid zip.</div>
                  </div>
                </div>
                <button class="btn btn-primary mt-4" type="submit">Submit form</button>
              </form>
            </div>
          </div>
          <!-- /Validation Tooltips -->
        </div>
        <!-- /Row -->
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
      text: "Form Validation",
      firstName: "Mark",
      lastName: "Otto",
      username: "",
      city: "",
      state: "",
      zip: "",
      agreed: false,
    };
  },
  mounted() {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  methods: {
    validateFormOne() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
      } else {
        // Handle form submission
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>
