<template>
  <doctor-header></doctor-header>
  <doctor-sidebar></doctor-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Appointment</h4>
        </div>

        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Download as Excel</a>
              </li>
            </ul>
          </div>
          <div
            class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
          >
            <router-link
              to="/doctor/doctors-appointments"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-dark"></i
            ></router-link>
            <router-link
              to="/doctor/doctors-appointment-details"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-calendar-event fs-14 text-body"></i>
            </router-link>
          </div>

          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="offcanvas"
            data-bs-target="#new_appointment"
            ><i class="ti ti-plus me-1"></i> New Appointment
          </a>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="d-flex align-items-center gap-2">
          <div class="search-set mb-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="table-search d-flex align-items-center mb-0">
                <div class="search-input">
                  <a href="javascript:void(0);" class="btn-searchset"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex right-content align-items-center flex-wrap mb-3">
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon text-dark">
                <i class="ti ti-calendar-event"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm bookingrange"
                ref="dateRangeInput"
              />
            </div>
          </div>
        </div>

        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter text-gray-5 me-1"></i>Filters
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-0">
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label mb-1">Doctor</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <select class="select2" multiple="multiple">
                      <option value="m-1" selected>Dr. Mick Thompson</option>
                      <option value="m-2">Dr. Sarah Johnson</option>
                      <option value="m-3">Dr. Emily Carter</option>
                      <option value="m-4">Dr. David Lee</option>
                      <option value="m-5">Dr. Anna Kim</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Designation</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <select class="select2" multiple="multiple">
                      <option value="m-1" selected>Cardiologist</option>
                      <option value="m-2">Orthopedic Surgeon</option>
                      <option value="m-3">Pediatrician</option>
                      <option value="m-4">Gynecologist</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Department</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <select class="select2" multiple="multiple">
                      <option value="m-1" selected>Cardiology</option>
                      <option value="m-2">Orthopedics</option>
                      <option value="m-3">Pediatrics</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date<span class="text-danger">*</span></label
                    >
                    <div class="input-icon-end position-relative">
                      <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Amount</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <select class="select2" multiple="multiple">
                      <option value="m-1" selected>$501 - $1000</option>
                      <option value="m-2">$501 - $1100</option>
                      <option value="m-3">$701 - $1200</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <select class="select2" multiple="multiple">
                      <option value="m-1" selected>Available</option>
                      <option value="m-2">Unavailable</option>
                    </select>
                  </div>
                </div>
                <div
                  class="filter-footer d-flex align-items-center justify-content-end border-top"
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light btn-md me-2 fw-medium"
                    id="close-filter"
                    >Close</a
                  >
                  <button type="submit" class="btn btn-primary btn-md fw-medium">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
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
        </div>
      </div>
      <!--  End Filter -->

      <!-- Start Card -->
      <div class="card mb-0">
        <div class="card-body">
          <div id="calendar">
            <div ref="calendarEl" />
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
        Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->
  <calendar-modal></calendar-modal>
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// Define the getImageUrl function outside the component scope
function getImageUrl(avatar) {
  const imgPath = typeof avatar === "object" && avatar.img ? avatar.img : avatar;

  return new URL(`/src/assets/img/users/${imgPath}`, import.meta.url).href;
}

export default {
  data(){
    return{
      valueOne,
    }
  },
  mounted() {
    const calendarEl = document.getElementById("calendar");

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      initialView: "dayGridMonth",
      editable: true,
      droppable: true,
      events: [
        {
          title: "Team A",
          start: "2025-05-04",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [
              { img: "user-01.jpg" },
              { img: "user-02.jpg" },
              { img: "user-03.jpg" },
            ],
          },
        },
        {
          title: "Team B",
          start: "2025-05-06",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [
              { img: "user-04.jpg" },
              { img: "user-05.jpg" },
              { img: "user-06.jpg" },
            ],
          },
        },
        {
          title: "Meeting",
          start: "2025-05-18",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-10.jpg" }, { img: "user-11.jpg" }],
          },
        },
        {
          title: "Follow-up",
          start: "2025-05-20",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-12.jpg" }, { img: "user-13.jpg" }],
          },
        },
        {
          title: "Review",
          start: "2025-05-25",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-14.jpg" }],
          },
        },
        {
          title: "Wrap-up",
          start: "2025-05-30",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-15.jpg" }],
          },
        },
      ],
      eventContent: function (arg) {
        const avatars = arg.event.extendedProps.avatars || [];
        let avatarHtml = "";

        avatars.slice(0, 4).forEach((avatar) => {
          avatarHtml += `<img src="${getImageUrl(
            avatar
          )}" class="avatar" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 2px;">`;
        });

        if (avatars.length > 4) {
          avatarHtml += `<span style="font-size: 12px; background: #ccc; padding: 2px 6px; border-radius: 12px;">+${
            avatars.length - 4
          }</span>`;
        }

        return {
          html: `<div style="display:flex; align-items:center;">${avatarHtml}</div>`,
        };
      },
      eventClick: function (info) {
        document.getElementById("event_modal").style.display = "block";
        document.getElementById("eventTitle").innerText = info.event.title;
      },
      drop: function (info) {
        console.log("Event dropped");
      },
      eventReceive: function (info) {
        console.log("Event added", info.event.title);
      },
    });

    calendar.render();
  },
};
</script>
