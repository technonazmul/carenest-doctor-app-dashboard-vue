<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div
        class="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4"
      >
        <div>
          <h4 class="fw-bold mb-0">Admin Dashboard</h4>
        </div>
        <div class="d-flex align-items-center flex-wrap gap-2">
          <router-link
            to="/appointments/new-appointment"
            class="btn btn-primary d-inline-flex align-items-center"
            ><i class="ti ti-plus me-1"></i>New Appointment</router-link
          >
          <router-link
            to="/doctors/doctor-schedule"
            class="btn btn-outline-white bg-white d-inline-flex align-items-center"
            ><i class="ti ti-calendar-time me-1"></i>Schedule
            Availability</router-link
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img
              src="@/assets/img/bg/bg-01.svg"
              alt="img"
              class="position-absolute start-0 top-0"
            />
            <div class="card-body">
              <div
                class="d-flex align-items-center mb-2 justify-content-between"
              >
                <span class="avatar bg-primary rounded-circle"
                  ><i class="ti ti-calendar-heart fs-24"></i
                ></span>
                <div class="text-end">
                  <span
                    class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success"
                    >{{ totalDoctorChange }}</span
                  >
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Doctors</p>
                  <h3 class="fw-bold mb-0">{{ totalDoctor }}</h3>
                </div>
                <div>
                  <div id="s-col" class="chart-set">
                    <apexchart
                      type="bar"
                      height="54"
                      width="80"
                      :options="adminColChart.sChart"
                      :series="adminColChart.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img
              src="@/assets/img/bg/bg-02.svg"
              alt="img"
              class="position-absolute start-0 top-0"
            />
            <div class="card-body">
              <div
                class="d-flex align-items-center mb-2 justify-content-between"
              >
                <span class="avatar bg-danger rounded-circle"
                  ><i class="ti ti-calendar-heart fs-24"></i
                ></span>
                <div class="text-end">
                  <span
                    class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success"
                    >{{ totalPatientChange }}</span
                  >
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Patients</p>
                  <h3 class="fw-bold mb-0">{{ totalPatient }}</h3>
                </div>
                <div>
                  <div id="s-col-2" class="chart-set">
                    <apexchart
                      type="area"
                      height="54"
                      width="100"
                      :options="adminColChart2.sChart2"
                      :series="adminColChart2.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img
              src="@/assets/img/bg/bg-03.svg"
              alt="img"
              class="position-absolute start-0 top-0"
            />
            <div class="card-body">
              <div
                class="d-flex align-items-center mb-2 justify-content-between"
              >
                <span class="avatar bg-info rounded-circle"
                  ><i class="ti ti-calendar-heart fs-24"></i
                ></span>
                <div class="text-end">
                  <span
                    class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success"
                    >{{ totalAppointmentsChange }}</span
                  >
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Appointment</p>
                  <h3 class="fw-bold mb-0">{{ totalAppointments }}</h3>
                </div>
                <div>
                  <div id="s-col-3" class="chart-set"></div>
                  <apexchart
                    type="bar"
                    height="54"
                    width="80"
                    :options="adminColChart3.sChart3"
                    :series="adminColChart3.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img
              src="@/assets/img/bg/bg-04.svg"
              alt="img"
              class="position-absolute start-0 top-0"
            />
            <div class="card-body">
              <div
                class="d-flex align-items-center mb-2 justify-content-between"
              >
                <span class="avatar bg-success rounded-circle"
                  ><i class="ti ti-calendar-heart fs-24"></i
                ></span>
                <div class="text-end">
                  <span
                    class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success"
                    >+25%</span
                  >
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between overflow-hidden"
              >
                <div>
                  <p class="mb-1">Revenue</p>
                  <h3 class="fw-bold mb-0 text-truncate">$55,1240</h3>
                </div>
                <div>
                  <div id="s-col-4" class="chart-set">
                    <apexchart
                      type="area"
                      height="54"
                      width="100"
                      :options="adminColChart4.sChart4"
                      :series="adminColChart4.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- row start -->
      <div class="row">
        <!-- col start -->
        <div class="col-xl-8">
          <!-- card start -->
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">Appointment Statistics</h5>
            </div>
            <div class="card-body pb-0">
              <div class="row row-gap-3 mb-2">
                <div class="col-md-3 col-sm-6">
                  <div class="bg-light border p-2 text-center rounded-2">
                    <p class="mb-1 text-truncate">
                      <i class="ti ti-point-filled me-1 text-primary"></i>All
                      Appointments
                    </p>
                    <h5 class="fw-bold mb-0">{{ totalAppointments }}</h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="bg-light border p-2 text-center rounded-2">
                    <p class="mb-1">
                      <i class="ti ti-point-filled me-1 text-danger"></i
                      >Cancelled
                    </p>
                    <h5 class="fw-bold mb-0">
                      {{ totalCancelledAppointments }}
                    </h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="bg-light border p-2 text-center rounded-2">
                    <p class="mb-1">
                      <i class="ti ti-point-filled me-1 text-warning"></i
                      >Reschedule
                    </p>
                    <h5 class="fw-bold mb-0">
                      {{ totalRescheduledAppointments }}
                    </h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="bg-light border p-2 text-center rounded-2">
                    <p class="mb-1">
                      <i class="ti ti-point-filled me-1 text-success"></i
                      >Completed
                    </p>
                    <h5 class="fw-bold mb-0">
                      {{ totalCompletedAppointments }}
                    </h5>
                  </div>
                </div>
              </div>
              <div class="chart-set" id="s-col-19">
                <apexchart
                  type="bar"
                  height="340"
                  :options="adminColChart19.sChart19"
                  :series="adminColChart19.series"
                ></apexchart>
              </div>
            </div>
          </div>
          <!-- card end -->

          <!-- card start -->
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">Popular Doctors</h5>
            </div>
            <div class="card-body">
              <div class="row row-gap-3">
                <div
                  class="col-md-4"
                  v-for="doctor in popularDoctors"
                  :key="doctor._id"
                >
                  <div class="border shadow-sm p-3 rounded-2">
                    <div class="d-flex align-items-center mb-3">
                      <router-link
                        :to="`/doctors/doctor-details/${doctor._id}`"
                        class="avatar me-2 flex-shrink-0 position-relative"
                      >
                        <span
                          class="online text-success position-absolute end-0 bottom-0 pe-1"
                        >
                          <i
                            class="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white"
                          ></i>
                        </span>
                        <img
                          v-if="doctor.image"
                          :src="`${API_BASE}/uploads/${
                            doctor.image || 'default.jpg'
                          }`"
                          alt="img"
                          class="rounded-circle"
                        />
                        <img
                          v-else
                          src="@/assets/img/doctors/doctor-01.jpg"
                          alt="img"
                          class="rounded-circle"
                        />
                      </router-link>
                      <div>
                        <h6 class="fs-14 mb-1 text-truncate">
                          <router-link
                            :to="`/doctors/doctor-details/${doctor._id}`"
                            class="fw-semibold"
                          >
                            {{ doctor.name || "Unknown Doctor" }}
                          </router-link>
                        </h6>
                        <p class="mb-0 fs-13">
                          {{ doctor.specialty || "N/A" }}
                        </p>
                      </div>
                    </div>
                    <p class="mb-0">
                      <span class="text-dark fw-semibold">{{
                        doctor.appointmentCount
                      }}</span>
                      Bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-4">
          <div class="card shadow-sm">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0 text-truncate">Appointments</h5>
            </div>
            <div class="card-body">
              <div class="datepic mb-1">
                <!-- <div :style="{ width: '100%' }"> -->
                <a-calendar
                  v-model:value="value"
                  :fullscreen="false"
                  @panelChange="onPanelChange"
                  @select="onDateSelect"
                />
                <!-- </div> -->
              </div>

              <div
                v-for="(appointment, index) in dateWiseAppointments"
                class="mb-3 bg-light p-3 rounded-2 d-flex align-items-center justify-content-between"
              >
                <div>
                  <h6 class="fs-14 fw-semibold mb-1">
                    <i class="fas fa-user-md"></i>
                    {{ appointment.doctorId.name }}
                    <i class="fas fa-user ps-3"></i>
                    {{ appointment.userId.name }}
                  </h6>
                  <p class="mb-0 text-truncate">
                    <i class="ti ti-calendar-time me-1 text-dark"></i>
                    {{ appointment.date }} - {{ appointment.slot }}
                  </p>
                </div>
                <div
                  class="avatar-list-stacked avatar-group-sm event flex-shrink-0"
                >
                  <span class="avatar avatar-lg rounded-circle border-0">
                    <img
                      v-if="appointment.userId.image"
                      :src="`${API_BASE}/uploads/${appointment.userId.image}`"
                      class="img-fluid rounded-circle border border-white"
                      alt="Img"
                    />
                    <img
                      v-else
                      src="@/assets/img/profiles/avatar-26.jpg"
                      class="img-fluid rounded-circle border border-white"
                      alt="Img"
                    />
                  </span>
                  <span class="avatar avatar-lg rounded-circle border-0">
                    <img
                      v-if="appointment.doctorId.image"
                      :src="`${API_BASE}/uploads/${appointment.doctorId.image}`"
                      class="img-fluid rounded-circle border border-white"
                      alt="Img"
                    />
                    <img
                      v-else
                      src="@/assets/img/doctors/doctor-05.jpg"
                      class="img-fluid rounded-circle border border-white"
                      alt="Img"
                    />
                  </span>
                </div>
              </div>

              <router-link
                to="/appointments/appointments-list"
                class="btn btn-light w-100"
                >View All Appointments</router-link
              >
            </div>
          </div>
        </div>
        <!-- col end -->
      </div>
      <!-- end row -->

      <!-- row start -->
      <div class="row">
        <div class="col-12 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">All Appointments</h5>
              <router-link
                to="/appointments/appointments-list"
                class="btn fw-normal btn-outline-white"
                >View All</router-link
              >
            </div>
            <div class="card-body">
              <!-- Table start -->
              <div class="table-responsive table-nowrap">
                <table class="table border">
                  <thead class="thead-light">
                    <tr>
                      <th>Doctor</th>
                      <th>Patient</th>
                      <th>Date & Time</th>
                      <th>Mode</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(appointment, index) in latestAppointments"
                      :key="index"
                    >
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link
                            :to="
                              '/doctors/doctor-details/' +
                              appointment.doctorId?._id
                            "
                            class="avatar me-2"
                          >
                            <img
                              v-if="appointment.doctorId.image"
                              :src="`${API_BASE}/uploads/${appointment.doctorId.image}`"
                              class="rounded-circle"
                              alt="Img"
                            />
                            <img
                              v-else
                              src="@/assets/img/doctors/doctor-05.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </router-link>
                          <div>
                            <h6 class="fs-14 mb-1">
                              <router-link
                                :to="
                                  '/doctors/doctor-details/' +
                                  appointment.doctorId?._id
                                "
                                class="fw-semibold"
                              >
                                {{
                                  appointment.doctorId?.name || "Unknown Doctor"
                                }}
                              </router-link>
                            </h6>
                            <p class="mb-0 fs-13">
                              {{
                                appointment.doctorId
                                  ?.designationAndDepartment || "N/A"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div class="d-flex align-items-center">
                          <router-link
                            :to="
                              '/patients/patient-details/' +
                              appointment.userId?._id
                            "
                            class="avatar me-2"
                          >
                            <img
                              v-if="appointment.userId.image"
                              :src="`${API_BASE}/uploads/${appointment.userId.image}`"
                              class="rounded-circle"
                              alt="Img"
                            />
                            <img
                              v-else
                              src="@/assets/img/profiles/avatar-26.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </router-link>
                          <div>
                            <h6 class="fs-14 mb-1">
                              <router-link
                                :to="
                                  '/patients/patient-details/' +
                                  appointment.userId?._id
                                "
                                class="fw-medium"
                              >
                                {{
                                  appointment.userId?.name || "Unknown Patient"
                                }}
                              </router-link>
                            </h6>
                            <p
                              v-if="appointment.userId.phone"
                              class="mb-0 fs-13"
                            >
                              {{ appointment.userId.phone }}
                            </p>
                            <p
                              v-else-if="appointment.userId.email"
                              class="mb-0 fs-13"
                            >
                              {{ appointment.userId.email }}
                            </p>
                            <p v-else class="mb-0 fs-13">N/A</p>
                          </div>
                        </div>
                      </td>

                      <td>{{ appointment.date }} - {{ appointment.slot }}</td>
                      <td>Online</td>
                      <td>
                        <span
                          :class="[
                            'badge fs-13 py-1 border rounded fw-medium',
                            appointment.status === 'upcoming'
                              ? 'badge-soft-info border-info'
                              : appointment.status === 'confirmed'
                              ? 'badge-soft-success border-success text-success'
                              : appointment.status === 'cancelled'
                              ? 'badge-soft-danger border-danger'
                              : 'badge-soft-secondary border-secondary',
                          ]"
                        >
                          {{
                            appointment.status
                              ? appointment.status.charAt(0).toUpperCase() +
                                appointment.status.slice(1)
                              : "N/A"
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Table end -->
            </div>
          </div>
        </div>
      </div>
      <!-- row end -->

      <!-- row start -->
      <div class="row">
        <!-- col start -->
        <div class="col-xl-4 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">Top 5 Patients</h5>
              <router-link
                to="/patients/patients-list"
                class="btn fw-normal btn-outline-white"
                >View All</router-link
              >
            </div>
            <div class="card-body">
              <div
                v-for="(patient, index) in topPatients"
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <router-link
                    to="/patients/patient-details"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      v-if="patient.image"
                      :src="`${API_BASE}/uploads/${patient.image}`"
                      alt="img"
                      class="rounded-circle"
                    />

                    <img
                      v-else
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </router-link>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <router-link
                        to="/patients/patient-details"
                        class="fw-medium"
                        >{{ patient.name }}</router-link
                      >
                    </h6>
                  </div>
                </div>
                <span
                  class="badge fw-medium badge-soft-primary border border-primary flex-shrink-0"
                  >{{ patient.appointmentCount }} Appointments</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-4 col-lg-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">Recent Transactions</h5>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Weekly <i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Monthly</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Weekly</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Yearly</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/icons/stripe.svg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <a href="javascript:void(0);" class="fw-semibold"
                        >General Check-up</a
                      >
                    </h6>
                    <p class="mb-0 fs-13 text-truncate">
                      <a href="javascript:void(0);" class="link-primary"
                        >#INV5889</a
                      >
                    </p>
                  </div>
                </div>
                <span class="badge fw-medium bg-success flex-shrink-0"
                  >+ $234</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/icons/paypal.svg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <a href="javascript:void(0);" class="fw-semibold"
                        >Online Consultation</a
                      >
                    </h6>
                    <p class="mb-0 fs-13 text-truncate">
                      <a href="javascript:void(0);" class="link-primary"
                        >#INV7874</a
                      >
                    </p>
                  </div>
                </div>
                <span class="badge fw-medium bg-success flex-shrink-0"
                  >+ $234</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/icons/stripe.svg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <a href="javascript:void(0);" class="fw-semibold"
                        >Purchase Product</a
                      >
                    </h6>
                    <p class="mb-0 fs-13 text-truncate">
                      <a href="javascript:void(0);" class="link-primary"
                        >#INV4458</a
                      >
                    </p>
                  </div>
                </div>
                <span class="badge fw-medium bg-danger flex-shrink-0"
                  >- $69</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/icons/paypal.svg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <a href="javascript:void(0);" class="fw-semibold"
                        >Online Consultation</a
                      >
                    </h6>
                    <p class="mb-0 fs-13 text-truncate">
                      <a href="javascript:void(0);" class="link-primary"
                        >#INV5456</a
                      >
                    </p>
                  </div>
                </div>
                <span class="badge fw-medium bg-success flex-shrink-0"
                  >+ $234</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-0"
              >
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/icons/stripe.svg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="fs-14 mb-1 text-truncate">
                      <a href="javascript:void(0);" class="fw-semibold"
                        >Online Consultation</a
                      >
                    </h6>
                    <p class="mb-0 fs-13 text-truncate">
                      <a href="javascript:void(0);" class="link-primary"
                        >#INV4557</a
                      >
                    </p>
                  </div>
                </div>
                <span class="badge fw-medium bg-success flex-shrink-0"
                  >+ $234</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-4 col-lg-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div
              class="card-header d-flex align-items-center justify-content-between"
            >
              <h5 class="fw-bold mb-0">Leave Requests</h5>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Today <i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Today</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">This Week</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">This Month</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/doctors/doctor-details"
                    class="avatar flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-16.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </router-link>
                  <div class="ms-2">
                    <div>
                      <h6 class="fw-semibold text-truncate mb-1 fs-14">
                        <router-link to="/doctors/doctor-details"
                          >James Allaire</router-link
                        >
                      </h6>
                      <p class="fs-13 mb-0 text-truncate">
                        4 Days - Personal Reason
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                    ><i class="ti ti-x fw-bold"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                    ><i class="ti ti-check fw-bold"></i
                  ></a>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/doctors/doctor-details"
                    class="avatar flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-21.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </router-link>
                  <div class="ms-2">
                    <div>
                      <h6 class="fw-semibold text-truncate mb-1 fs-14">
                        <router-link to="/doctors/doctor-details"
                          >Esther Schmidt</router-link
                        >
                      </h6>
                      <p class="fs-13 mb-0 text-truncate">
                        2 Days - Going to Hospital
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                    ><i class="ti ti-x fw-bold"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                    ><i class="ti ti-check fw-bold"></i
                  ></a>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/doctors/doctor-details"
                    class="avatar flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/doctors/doctor-03.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </router-link>
                  <div class="ms-2">
                    <div>
                      <h6 class="fw-semibold text-truncate mb-1 fs-14">
                        <router-link to="/doctors/doctor-details"
                          >Valerie Padgett</router-link
                        >
                      </h6>
                      <p class="fs-13 mb-0 text-truncate">
                        1 Day - Changing Account
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                    ><i class="ti ti-x fw-bold"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                    ><i class="ti ti-check fw-bold"></i
                  ></a>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/doctors/doctor-details"
                    class="avatar flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/doctors/doctor-02.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </router-link>
                  <div class="ms-2">
                    <div>
                      <h6 class="fw-semibold text-truncate mb-1 fs-14">
                        <router-link to="/doctors/doctor-details"
                          >Diane Nash</router-link
                        >
                      </h6>
                      <p class="fs-13 mb-0 text-truncate">1 Day - Not Well</p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                    ><i class="ti ti-x fw-bold"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                    ><i class="ti ti-check fw-bold"></i
                  ></a>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-0">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/doctors/doctor-details"
                    class="avatar flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/doctors/doctor-09.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </router-link>
                  <div class="ms-2">
                    <div>
                      <h6 class="fw-semibold text-truncate mb-1 fs-14">
                        <router-link to="/doctors/doctor-details"
                          >Sally Cavazos</router-link
                        >
                      </h6>
                      <p class="fs-13 mb-0 text-truncate">
                        2 Days - Going to Checkup
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                    ><i class="ti ti-x fw-bold"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                    ><i class="ti ti-check fw-bold"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->
      </div>
      <!-- row end -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>
</template>
<script>
import {
  adminColChart,
  adminColChart4,
  adminColChart2,
  adminColChart3,
  adminColChart19,
  adminCircleChart,
} from "./data";
import { ref } from "vue";
import { API_BASE } from "@/api/apiConfig";
import axios from "axios";
const value = ref();
const onPanelChange = (value, mode) => {
  console.log(value, mode);
};

export default {
  data() {
    return {
      value,
      onPanelChange,
      adminColChart: adminColChart,
      adminColChart4: adminColChart4,
      adminColChart2: adminColChart2,
      adminColChart3: adminColChart3,
      adminColChart19: adminColChart19,
      adminCircleChart: adminCircleChart,
      totalDoctor: 0,
      totalDoctorChange: 0,
      totalPatient: 0,
      totalPatientChange: 0,
      totalAppointments: 0,
      totalAppointmentsChange: 0,
      totalOngoingAppointments: 0,
      totalCompletedAppointments: 0,
      totalCancelledAppointments: 0,
      totalRescheduledAppointments: 0,
      dateWiseAppointments: [],
      API_BASE: API_BASE,
      popularDoctors: [],
      latestAppointments: [],
      topPatients: [],
    };
  },
  async mounted() {
    await this.fetchTotalDoctor();
    await this.fetchTotalPatient();
    await this.fetchTotalAppointments();
    await this.fetchPopularDoctors();
    await this.fetchLatestAppointments();
    await this.fetchTopPatients();

    // 👇 Get today’s date and format as YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    // 👇 Convert string to Date object to simulate selection
    const dateObject = new Date(formattedDate);
    this.onDateSelect({
      format: () => formattedDate, // Fake format() to match your method
    });
  },
  methods: {
    async onDateSelect(date) {
      const formattedDate = date.format("YYYY-MM-DD");
      const response = await axios.get(
        `${API_BASE}/api/backend/appointments?date=${formattedDate}`
      );
      console.log(response.data.appointments);
      this.dateWiseAppointments = response.data.appointments;
    },
    async fetchTotalDoctor() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/total-doctors`
        );
        this.totalDoctor = response.data.totalDoctors;
        this.totalDoctorChange = response.data.percentageChange;
      } catch (error) {
        console.error("Error fetching total doctors:", error);
      }
    },
    async fetchTotalPatient() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/total-patients`
        );
        this.totalPatient = response.data.totalPatients;
        this.totalPatientChange = response.data.percentageChange;
      } catch (error) {
        console.error("Error fetching total patients:", error);
      }
    },
    async fetchTotalAppointments() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/total-appointments`
        );
        const data = response.data;

        this.totalAppointments = data.totalAppointments;
        this.totalAppointmentsChange = data.percentageChange;
        this.totalOngoingAppointments = data.statusCounts.upcoming;
        this.totalCompletedAppointments = data.statusCounts.completed;
        this.totalCancelledAppointments = data.statusCounts.cancelled;
        this.totalRescheduledAppointments = data.statusCounts.reschedule;

        // ✅ Update chart data dynamically
        const status = data.statusCounts;

        this.adminColChart19.series = response.data.chartSeries;
      } catch (error) {
        console.error("Error fetching total appointments:", error);
      }
    },
    async fetchPopularDoctors() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/popular-doctors`
        );
        this.popularDoctors = response.data.popularDoctors;
      } catch (error) {
        console.error("Error fetching popular doctors:", error);
      }
    },
    async fetchLatestAppointments() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/latest-appointments`
        );
        this.latestAppointments = response.data.latestAppointments;
      } catch (error) {
        console.error("Error fetching latest appointments:", error);
      }
    },
    async fetchTopPatients() {
      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/top-patients`
        );
        this.topPatients = response.data.topPatients;
      } catch (error) {
        console.error("Error fetching top patients:", error);
      }
    },
  },
};
</script>
