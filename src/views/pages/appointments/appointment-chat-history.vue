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
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3"
      >
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Chat History</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Appointments</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Chat</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->
      <div class="chat-wrapper">
        <!-- Start Chat -->
        <div class="chat chat-messages show" id="middle">
          <div class="chat-header p-3">
            <div class="user-details">
              <div class="ms-2 overflow-hidden">
                <h6 class="mb-0">
                  <i class="fa-solid fa-wheelchair"></i>
                  {{ appointment?.userId?.name || "Patient Name" }}
                </h6>
              </div>
            </div>
            <div class="chat-options">
              <div class="ms-2 overflow-hidden">
                <h6 class="mb-0">
                  <i class="fas fa-user-md"></i>
                  {{ appointment?.doctorId?.name || "Doctor Name" }}
                </h6>
              </div>
            </div>

            <!-- Chat Search Start -->
            <div class="chat-search search-wrap contact-search">
              <form>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Contacts"
                  />
                  <span class="input-group-text"
                    ><i class="ti ti-search"></i
                  ></span>
                </div>
              </form>
            </div>
            <!-- Chat Search End -->
          </div>
          <div class="chat-body chat-page-group slimscroll">
            <div class="messages">
              <div
                v-for="(msg, index) in messages"
                :key="msg._id"
                :class="[
                  'chats',
                  msg.senderType === 'doctor' ? 'chats-right' : '',
                ]"
              >
                <!-- Message from other user -->
                <div v-if="msg.senderType !== 'doctor'" class="chat-avatar">
                  <img
                    v-if="msg.doctorId"
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </div>

                <div class="chat-content" style="width: 100%">
                  <div class="chat-info" v-if="msg.message">
                    <div class="message-content">
                      {{ msg.message }}
                    </div>
                  </div>

                  <div v-if="msg.images && msg.images.length">
                    <div
                      class="chat-info"
                      v-for="(img, i) in msg.images"
                      :key="i"
                    >
                      <img
                        :src="`${API_BASE}${img}`"
                        alt="attachment"
                        class="img-fluid rounded mb-2"
                        style="max-width: 500px"
                      />
                    </div>
                  </div>

                  <div
                    :class="[
                      'chat-profile-name',
                      msg.senderType === 'doctor' ? 'text-end' : '',
                    ]"
                  >
                    <h6>
                      <span class="chat-time">{{
                        formatTime(msg.timestamp)
                      }}</span>
                      <span
                        v-if="msg.senderType === 'doctor'"
                        class="msg-read success"
                      >
                        <i class="ti ti-checks"></i>
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Chat -->
      </div>
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

  <!-- ========================
			End Page Content
		========================= -->
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";

export default {
  data() {
    return {
      messages: [],
      appointmentId: null,
      appointment: null,
      loading: true,
      API_BASE: API_BASE,
    };
  },
  mounted() {
    this.appointmentId = this.$route.params.appointmentId;
    this.fetchMessages();
    this.fetchBooking();
  },
  methods: {
    async fetchBooking() {
      try {
        const res = await axios.get(
          `${API_BASE}/api/backend/appointments/${this.appointmentId}`
        );
        this.appointment = res.data.booking || null;
        console.log("Fetched booking:", this.appointment);
      } catch (error) {
        console.error("Failed to fetch booking", error);
      }
    },
    async fetchMessages() {
      try {
        const res = await axios.get(
          `${API_BASE}/api/backend/messages/${this.appointmentId}`
        );
        this.messages = res.data.messages || [];
      } catch (error) {
        console.error("Failed to fetch messages", error);
        this.messages = [];
      } finally {
        this.loading = false;
      }
    },
    formatTime(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours() % 12 || 12;
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      return `${hours}:${minutes} ${ampm}`;
    },
  },
};
</script>
