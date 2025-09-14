<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- row start -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- page header start -->
          <div class="mb-4">
            <h6 class="fw-bold mb-0 d-flex align-items-center">
              <router-link
                to="/appointments/appointments-list"
                class="text-dark"
              >
                <i class="ti ti-chevron-left me-1"></i>Appointments</router-link
              >
              > Edit Appointment
            </h6>
          </div>
          <!-- page header end -->

          <!-- Loading State -->
          <div
            v-if="isLoading"
            class="d-flex justify-content-center align-items-center"
            style="min-height: 300px"
          >
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <!-- Main Content -->
          <div v-else>
            <!-- Error Display -->
            <div
              v-if="!originalAppointment && !isLoading"
              class="alert alert-warning"
            >
              <h5 class="alert-heading">Unable to Load Appointment</h5>
              <p class="mb-0">
                There was an issue loading the appointment details. Please check
                the browser console for more information.
                <br /><strong>Appointment ID:</strong> {{ appointmentId }}
              </p>
              <hr />
              <div class="d-flex gap-2 mt-2">
                <button
                  @click="fetchBookingDetails"
                  class="btn btn-sm btn-warning"
                >
                  Retry
                </button>
                <router-link
                  to="/appointments/appointments-list"
                  class="btn btn-sm btn-secondary"
                  >Go Back</router-link
                >
              </div>
            </div>
            <!-- Current Appointment Info -->
            <div v-if="originalAppointment" class="card mb-4">
              <div
                class="card-body"
                style="background-color: #f8f9ff; border: 1px solid #e3e6f3"
              >
                <h6 class="fw-bold mb-3 text-primary">
                  Current Appointment Details
                </h6>
                <div class="row">
                  <div class="col-md-6">
                    <p class="mb-2">
                      <strong>Patient:</strong>
                      {{ originalAppointment.patientName }}
                    </p>
                    <p class="mb-2">
                      <strong>Doctor:</strong>
                      {{ originalAppointment.doctorName }}
                    </p>
                    <p class="mb-0">
                      <strong>Status:</strong>
                      <span
                        class="badge"
                        :class="{
                          'bg-success':
                            originalAppointment.status === 'upcoming',
                          'bg-warning':
                            originalAppointment.status === 'pending',
                          'bg-secondary':
                            originalAppointment.status === 'completed',
                          'bg-danger':
                            originalAppointment.status === 'cancelled',
                        }"
                        >{{ originalAppointment.status }}</span
                      >
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p class="mb-2">
                      <strong>Date:</strong>
                      {{ formatDisplayDate(originalAppointment.date) }}
                    </p>
                    <p class="mb-2">
                      <strong>Time:</strong> {{ originalAppointment.slot }}
                    </p>
                    <p class="mb-0">
                      <strong>Fee:</strong> ৳{{ originalAppointment.fee }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Edit Form -->
            <div class="card">
              <div class="card-body">
                <div class="form">
                  <div class="mb-4">
                    <h6 class="fw-bold text-primary">
                      Update Appointment Schedule
                    </h6>
                  </div>

                  <!-- Date Selection -->
                  <div class="mb-4">
                    <label class="form-label mb-3 fw-medium">
                      Select New Date<span class="text-danger ms-1">*</span>
                    </label>

                    <!-- Available Days (horizontal scroll) -->
                    <div
                      class="d-flex gap-2 overflow-auto pb-2"
                      style="white-space: nowrap"
                    >
                      <button
                        v-for="day in availableDays"
                        :key="day.dayName"
                        type="button"
                        class="btn flex-shrink-0"
                        :class="
                          selectedDay === day.dayName
                            ? 'btn-primary'
                            : 'btn-outline-primary'
                        "
                        style="min-width: 80px; height: 80px"
                        @click="selectDay(day.dayName)"
                      >
                        <div class="d-flex flex-column align-items-center">
                          <small class="fw-bold">{{
                            day.dayName.substring(0, 3)
                          }}</small>
                          <span class="fs-10">{{ day.date }}</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <!-- Time Slot Selection -->
                  <div v-if="selectedDay" class="mb-4">
                    <label class="form-label mb-3 fw-medium">
                      Select Time Slot for {{ selectedDay
                      }}<span class="text-danger ms-1">*</span>
                    </label>

                    <div v-if="timeSlots.length > 0" class="row g-2">
                      <div
                        v-for="slot in timeSlots"
                        :key="slot"
                        class="col-lg-2 col-md-3 col-4"
                      >
                        <button
                          type="button"
                          class="btn w-100"
                          :class="
                            selectedTimeSlot === slot
                              ? 'btn-success'
                              : 'btn-outline-secondary'
                          "
                          @click="selectTimeSlot(slot)"
                        >
                          {{ slot }}
                        </button>
                      </div>
                    </div>

                    <div v-else-if="!loadingSlots" class="text-center py-4">
                      <div class="text-muted">
                        <i class="ti ti-calendar-off fs-1 mb-2"></i>
                        <p>No available slots for this day</p>
                      </div>
                    </div>

                    <div v-if="loadingSlots" class="text-center py-4">
                      <div
                        class="spinner-border spinner-border-sm text-primary me-2"
                        role="status"
                      ></div>
                      Loading available slots...
                    </div>
                  </div>

                  <!-- Select Date Message -->
                  <div v-else class="text-center py-5">
                    <div class="text-muted">
                      <i class="ti ti-calendar-event fs-1 mb-2"></i>
                      <p>Please select a date to view available time slots</p>
                    </div>
                  </div>

                  <!-- Update Button -->
                  <div
                    class="d-flex align-items-center justify-content-end gap-2 mt-4 pt-3 border-top"
                  >
                    <router-link
                      to="/appointments/appointments-list"
                      class="btn btn-light"
                    >
                      Cancel
                    </router-link>
                    <button
                      type="button"
                      class="btn btn-primary"
                      :disabled="!canUpdate || updating"
                      @click="updateAppointment"
                    >
                      <span
                        v-if="updating"
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      {{ getUpdateButtonText() }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- row end -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; , All Rights Reserved</p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
			End Page Content
		========================= -->
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE } from "@/api/apiConfig";

export default {
  name: "EditAppointment",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const appointmentId = route.params.appointmentId;

    // API configuration
    const apiBase = API_BASE;
    const adminToken = Cookies.get("adminToken");
    const apiBaseUrl = `${apiBase}/api/backend`;
    const appApiBaseUrl = `${apiBase}/api/app`; // For app endpoints

    // Reactive data
    const isLoading = ref(true);
    const updating = ref(false);
    const loadingSlots = ref(false);
    const originalAppointment = ref(null);
    const availableDays = ref([]);
    const timeSlots = ref([]);
    const selectedDay = ref(null);
    const selectedDate = ref(null);
    const selectedTimeSlot = ref(null);
    const doctorTimeSlots = ref({});
    const doctorId = ref("");

    const daysOfWeek = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    // Get auth headers
    const getAuthHeaders = () => ({
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });

    // Computed properties
    const canUpdate = computed(() => {
      return selectedDay.value && selectedTimeSlot.value;
    });

    // Methods
    const formatDisplayDate = (dateString) => {
      if (!dateString) return "";
      try {
        const date = new Date(
          dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2")
        );
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch (error) {
        return dateString;
      }
    };

    const getNextAvailableDays = (timeSlots) => {
      const today = new Date();
      const nextDays = [];

      for (let i = 0; i < 14 && nextDays.length < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        const dayName = day.toLocaleDateString("en-US", { weekday: "long" });

        if (timeSlots[dayName] && timeSlots[dayName].length > 0) {
          nextDays.push({
            dayName: dayName,
            date: day.getDate().toString().padStart(2, "0"),
            fullDate: day,
          });
        }
      }
      return nextDays;
    };

    const getNextDateByDayName = (dayName) => {
      const daysOfWeek = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 0,
      };

      const now = new Date();
      const targetDay = daysOfWeek[dayName];

      if (targetDay === undefined) {
        throw new Error("Invalid day name");
      }

      let daysUntilNext = (targetDay - now.getDay() + 7) % 7;
      if (daysUntilNext === 0) daysUntilNext = 0; // If it's today

      const resultDate = new Date(now);
      resultDate.setDate(now.getDate() + daysUntilNext);
      return resultDate;
    };

    const isFutureTimeSlot = (slot, selectedDate) => {
      try {
        const now = new Date();
        const selectedDay = new Date(selectedDate);

        // Ensure the slot has proper format
        let formattedSlot = slot;
        if (!slot.includes(" ")) {
          formattedSlot = `${slot.substring(
            0,
            slot.length - 2
          )} ${slot.substring(slot.length - 2)}`;
        }

        // Parse time slot
        const [time, meridiem] = formattedSlot.split(" ");
        const [hours, minutes] = time.split(":").map(Number);
        let hour24 = hours;

        if (meridiem.toLowerCase() === "pm" && hours !== 12) {
          hour24 += 12;
        } else if (meridiem.toLowerCase() === "am" && hours === 12) {
          hour24 = 0;
        }

        const fullSlotDateTime = new Date(selectedDay);
        fullSlotDateTime.setHours(hour24, minutes, 0, 0);

        return fullSlotDateTime > now;
      } catch (error) {
        console.error("Error parsing time slot:", error);
        return true; // Default to showing the slot if parsing fails
      }
    };

    const selectDay = async (dayName) => {
      selectedDay.value = dayName;
      selectedTimeSlot.value = null;
      timeSlots.value = [];

      const dateObj = getNextDateByDayName(dayName);
      selectedDate.value = dateObj.toISOString().split("T")[0];

      await fetchTimeSlots(dayName, dateObj);
    };

    const selectTimeSlot = (slot) => {
      selectedTimeSlot.value = slot;
    };

    const fetchTimeSlots = async (dayName, dateObj) => {
      if (!doctorId.value) return;

      loadingSlots.value = true;
      try {
        // Convert date to MM/dd/yyyy format for API (same as Flutter)
        const formattedDate = `${(dateObj.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${dateObj
          .getDate()
          .toString()
          .padStart(2, "0")}/${dateObj.getFullYear()}`;

        console.log("Fetching slots for:", {
          doctorId: doctorId.value,
          date: formattedDate,
        });

        const response = await axios.post(
          `${appApiBaseUrl}/doctor/available-slots/test`,
          {
            doctorId: doctorId.value,
            date: formattedDate,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${adminToken}`,
            },
          }
        );

        console.log("Available slots response:", response.data);

        const allSlots = response.data.availableSlots || [];

        // Filter only future time slots (same logic as Flutter)
        timeSlots.value = allSlots.filter((slot) =>
          isFutureTimeSlot(slot, selectedDate.value)
        );

        console.log("Filtered future slots:", timeSlots.value);
      } catch (error) {
        console.error("Error fetching time slots:", error);
        timeSlots.value = [];
      } finally {
        loadingSlots.value = false;
      }
    };

    const fetchBookingDetails = async () => {
      console.log("=== Starting fetchBookingDetails ===");
      console.log("Appointment ID:", appointmentId);

      try {
        console.log("Admin token available:", !!adminToken);

        if (!adminToken) {
          console.error("No admin token found, redirecting to login");
          router.push("/admin/login");
          return;
        }

        console.log(
          "Making API call to:",
          `${appApiBaseUrl}/bookingdetails/${appointmentId}`
        );

        const response = await axios.get(
          `${appApiBaseUrl}/bookingdetails/${appointmentId}`,
          getAuthHeaders()
        );

        console.log("Response status:", response.status);
        console.log("Full API response:", response.data);

        const booking = response.data.booking;

        if (!booking) {
          console.error("No booking data in response");
          isLoading.value = false;
          return;
        }

        // Set original appointment data
        originalAppointment.value = {
          patientName: booking.userId?.name || "Unknown Patient",
          doctorName: booking.doctorId?.name || "Unknown Doctor",
          date: booking.date,
          slot: booking.slot,
          fee: booking.fee,
          status: booking.status,
        };

        console.log("Original appointment set:", originalAppointment.value);

        // Extract doctor information
        doctorId.value = booking.doctorId?._id || "";
        doctorTimeSlots.value = booking.doctorId?.timeSlots || {};

        console.log("Doctor ID:", doctorId.value);
        console.log(
          "Doctor time slots:",
          JSON.stringify(doctorTimeSlots.value, null, 2)
        );

        // Generate available days
        if (Object.keys(doctorTimeSlots.value).length > 0) {
          availableDays.value = getNextAvailableDays(doctorTimeSlots.value);
          console.log("Available days generated:", availableDays.value);
        } else {
          console.warn("No doctor time slots available");
        }

        isLoading.value = false;
        console.log("=== fetchBookingDetails completed successfully ===");
      } catch (error) {
        console.error("=== Error in fetchBookingDetails ===");
        console.error("Error type:", error.constructor.name);
        console.error("Error message:", error.message);
        console.error("Full error:", error);

        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);

          if (error.response.status === 401) {
            console.log("Unauthorized, redirecting to admin login");
            router.push("/admin/login");
            return;
          }
        }

        isLoading.value = false;
      }
    };

    const updateAppointment = async () => {
      if (!canUpdate.value) return;

      updating.value = true;
      try {
        // Convert selectedDate to MM/dd/yyyy format (same as Flutter)
        const dateObj = new Date(selectedDate.value);
        const formattedDate = `${(dateObj.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${dateObj
          .getDate()
          .toString()
          .padStart(2, "0")}/${dateObj.getFullYear()}`;

        console.log("Updating appointment with:", {
          bookingId: appointmentId,
          doctorId: doctorId.value,
          newSlot: selectedTimeSlot.value,
          newDate: formattedDate,
        });

        const response = await axios.post(
          `${apiBaseUrl}/booking/update-appointment`,
          {
            bookingId: appointmentId,
            doctorId: doctorId.value,
            newSlot: selectedTimeSlot.value,
            newDate: formattedDate,
          },
          getAuthHeaders()
        );

        console.log("Update appointment response:", response.data);
        showSuccess("Appointment updated successfully!");
        router.push("/appointments/appointments-list");
      } catch (error) {
        console.error("Error updating appointment:", error);
        showError("Error updating appointment");
      } finally {
        updating.value = false;
      }
    };

    const getUpdateButtonText = () => {
      if (updating.value) return "Updating...";
      if (!canUpdate.value) return "Select Date and Time";

      const dateObj = new Date(selectedDate.value);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const formattedDate = `${
        monthNames[dateObj.getMonth()]
      } ${dateObj.getDate()}`;

      return `Update to ${formattedDate} at ${selectedTimeSlot.value}`;
    };

    // Utility methods for notifications
    const showSuccess = (message) => {
      if (window.showToast) {
        window.showToast(message, "success");
      } else {
        alert(message);
      }
    };

    const showError = (message) => {
      if (window.showToast) {
        window.showToast(message, "error");
      } else {
        alert(message);
      }
    };

    // Lifecycle
    onMounted(() => {
      console.log("=== Component mounted ===");
      console.log("Route params:", route.params);
      console.log("Appointment ID from route:", appointmentId);
      console.log("API Base:", apiBase);
      console.log("Admin token available:", !!adminToken);

      if (!appointmentId) {
        console.error("No appointmentId in route params");
        router.push("/appointments/appointments-list");
        return;
      }

      fetchBookingDetails();
    });

    return {
      isLoading,
      updating,
      loadingSlots,
      originalAppointment,
      availableDays,
      timeSlots,
      selectedDay,
      selectedDate,
      selectedTimeSlot,
      canUpdate,
      appointmentId,
      formatDisplayDate,
      selectDay,
      selectTimeSlot,
      updateAppointment,
      getUpdateButtonText,
      fetchBookingDetails,
    };
  },
};
</script>

<style scoped>
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.overflow-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
