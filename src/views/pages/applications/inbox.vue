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
          <h4 class="fs-18 fw-semibold mb-0">Chat</h4>
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
          <div class="chat-header">
            <div class="user-details">
              <div class="d-xl-none">
                <a class="text-muted chat-close me-2" href="#">
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>
              <div class="avatar avatar-lg online flex-shrink-0">
                <img
                  src="@/assets/img/profiles/avatar-01.jpg"
                  class="rounded-circle"
                  alt="image"
                />
              </div>
              <div class="ms-2 overflow-hidden">
                <h6 class="mb-0">Anthony Lewis</h6>
                <span class="last-seen">Online</span>
              </div>
            </div>
            <div class="chat-options">
              <ul class="list-unstyled">
                <li>
                  <a
                    href="javascript:void(0)"
                    class="btn chat-search-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Search"
                  >
                    <i class="ti ti-search"></i>
                  </a>
                </li>
                <li>
                  <a class="btn no-bg" href="#" data-bs-toggle="dropdown">
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-1">
                    <li>
                      <a href="#" class="dropdown-item"
                        ><i class="ti ti-volume-off me-2"></i>Mute
                        Notification</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item"
                        ><i class="ti ti-clock-hour-4 me-2"></i>Disappearing
                        Message</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item"
                        ><i class="ti ti-clear-all me-2"></i>Clear Message</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item"
                        ><i class="ti ti-trash me-2"></i>Delete Chat</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item"
                        ><i class="ti ti-ban me-2"></i>Block</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
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
              <div class="chats">
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </div>
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      Hi John, I wanted to update you on a new company policy
                      regarding remote work.
                    </div>
                  </div>
                  <div class="chat-profile-name">
                    <h6>
                      Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span>
                    </h6>
                  </div>
                  <div class="chat-info">
                    <div class="message-content">Do you have a moment?</div>
                  </div>
                  <div class="chat-profile-name">
                    <h6>
                      Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="chats chats-right">
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      Sure, Sarah. What’s the new policy?
                    </div>
                  </div>
                  <div class="chat-profile-name text-end">
                    <h6>
                      You<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span
                      ><span class="msg-read success"
                        ><i class="ti ti-checks"></i
                      ></span>
                    </h6>
                  </div>
                </div>
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-14.jpg"
                    class="rounded-circle dreams_chat"
                    alt="image"
                  />
                </div>
              </div>
              <div class="chats">
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </div>
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      Starting next month, we’ll be implementing a hybrid work
                      model. Employees can work from home up to three days a
                      week.
                    </div>
                  </div>
                  <div class="chat-profile-name">
                    <h6>
                      Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="chats chats-right">
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      That sounds great! Are there any specific requirements for
                      tracking our hours when working remotely?
                    </div>
                  </div>
                  <div class="chat-profile-name text-end">
                    <h6>
                      You<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span
                      ><span class="msg-read success"
                        ><i class="ti ti-checks"></i
                      ></span>
                    </h6>
                  </div>
                </div>
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-14.jpg"
                    class="rounded-circle dreams_chat"
                    alt="image"
                  />
                </div>
              </div>
              <div class="chat-line">
                <span class="chat-date">Today, July 24</span>
              </div>
              <div class="chats">
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </div>
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      Yes, we’ll be using a time-tracking tool to log hours.
                      You’ll need to ensure you’re available during your usual
                      working hours and keep your manager updated if anything
                      changes.
                    </div>
                  </div>
                  <div class="chat-profile-name">
                    <h6>
                      Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="chats chats-right">
                <div class="chat-content">
                  <div class="chat-info">
                    <div class="message-content">
                      Got it. Do we need to fill out any forms to start working
                      remotely?
                    </div>
                  </div>
                  <div class="chat-profile-name text-end">
                    <h6>
                      You<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">08:00 AM</span
                      ><span class="msg-read success"
                        ><i class="ti ti-checks"></i
                      ></span>
                    </h6>
                  </div>
                </div>
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-14.jpg"
                    class="rounded-circle dreams_chat"
                    alt="image"
                  />
                </div>
              </div>
              <div class="chats">
                <div class="chat-avatar">
                  <img
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </div>
                <div class="chat-content">
                  <div class="chat-profile-name">
                    <h6>
                      Edward Lietz<i class="ti ti-circle-filled fs-7 mx-2"></i
                      ><span class="chat-time">02:39 PM</span
                      ><span class="msg-read success"
                        ><i class="ti ti-checks"></i
                      ></span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-footer">
            <form class="footer-form">
              <div class="chat-footer-wrap">
                <div class="form-wrap">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type Your Message"
                  />
                </div>

                <div
                  class="form-item position-relative d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    class="action-circle file-action position-absolute"
                  >
                    <i class="ti ti-folder"></i>
                  </a>
                  <input
                    type="file"
                    class="open-file position-relative"
                    name="files"
                    id="files"
                  />
                </div>

                <div class="form-btn">
                  <button class="btn btn-primary" type="submit">
                    <i class="ti ti-send"></i>
                  </button>
                </div>
              </div>
            </form>
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

export default {
  data() {
    return {
      messages: [],
      appointmentId: null,
    };
  },
  mounted() {
    this.appointmentId = this.$route.params.appointmentId;
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const res = await axios.get(`/api/chat/${this.appointmentId}`);
        this.messages = res.data;
        console.log("Fetched messages:", res.data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    },
  },
};
</script>
