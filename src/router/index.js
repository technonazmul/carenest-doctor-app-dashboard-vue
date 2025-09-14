import { createRouter, createWebHistory } from "vue-router";
import { requireRole } from "@/middleware/roleGuard.js";

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("@/views/pages/authentication/login/login-index.vue"),
  },
  {
    path: "/login-cover",
    name: "login-cover",
    component: () =>
      import("@/views/pages/authentication/login/login-cover.vue"),
  },
  {
    path: "/login-basic",
    name: "login-basic",
    component: () =>
      import("@/views/pages/authentication/login/login-basic.vue"),
  },
  {
    path: "/login-illustration",
    name: "login-illustration",
    component: () =>
      import("@/views/pages/authentication/login/login-illustration.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("@/views/pages/authentication/register/register.vue"),
  },
  {
    path: "/register-cover",
    name: "register-cover",
    component: () =>
      import("@/views/pages/authentication/register/register-cover.vue"),
  },
  {
    path: "/register-basic",
    name: "register-basic",
    component: () =>
      import("@/views/pages/authentication/register/register-basic.vue"),
  },
  {
    path: "/forgot-password-cover",
    name: "forgot-password-cover",
    component: () =>
      import(
        "@/views/pages/authentication/forgot-password/forgot-password-cover.vue"
      ),
  },
  {
    path: "/forgot-password-basic",
    name: "forgot-password-basic",
    component: () =>
      import(
        "@/views/pages/authentication/forgot-password/forgot-password-basic.vue"
      ),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () =>
      import(
        "@/views/pages/authentication/forgot-password/forgot-password.vue"
      ),
  },
  {
    path: "/reset-password-cover",
    name: "reset-password-cover",
    component: () =>
      import(
        "@/views/pages/authentication/reset-password/reset-password-cover.vue"
      ),
  },
  {
    path: "/reset-password-basic",
    name: "reset-password-basic",
    component: () =>
      import(
        "@/views/pages/authentication/reset-password/reset-password-basic.vue"
      ),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () =>
      import("@/views/pages/authentication/reset-password/reset-password.vue"),
  },
  {
    path: "/email-verification-cover",
    name: "email-verification-cover",
    component: () =>
      import(
        "@/views/pages/authentication/email-verification/email-verification-cover.vue"
      ),
  },
  {
    path: "/email-verification-basic",
    name: "email-verification-basic",
    component: () =>
      import(
        "@/views/pages/authentication/email-verification/email-verification-basic.vue"
      ),
  },
  {
    path: "/email-verification",
    name: "email-verification",
    component: () =>
      import(
        "@/views/pages/authentication/email-verification/email-verification.vue"
      ),
  },
  {
    path: "/two-step-verification-cover",
    name: "two-step-verification-cover",
    component: () =>
      import(
        "@/views/pages/authentication/two-step-verification/two-step-verification-cover.vue"
      ),
  },
  {
    path: "/two-step-verification-basic",
    name: "two-step-verification-basic",
    component: () =>
      import(
        "@/views/pages/authentication/two-step-verification/two-step-verification-basic.vue"
      ),
  },
  {
    path: "/two-step-verification",
    name: "two-step-verification",
    component: () =>
      import(
        "@/views/pages/authentication/two-step-verification/two-step-verification.vue"
      ),
  },
  {
    path: "/success-cover",
    name: "success-cover",
    component: () =>
      import("@/views/pages/authentication/success/success-cover.vue"),
  },
  {
    path: "/success-basic",
    name: "success-basic",
    component: () =>
      import("@/views/pages/authentication/success/success-basic.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/pages/authentication/success/success.vue"),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import("@/views/pages/authentication/lock-screen.vue"),
  },
  {
    path: "/error-403",
    name: "error-403",
    component: () => import("@/views/pages/authentication/error/error-403.vue"),
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/pages/authentication/error/error-404.vue"),
  },
  {
    path: "/error-500",
    name: "error-500",
    component: () => import("@/views/pages/authentication/error/error-500.vue"),
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/pages/notifications.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("@/views/pages/dashboard/dashboard-index.vue"),
    children: [
      { path: "", redirect: "/dashboard/admin-dashboard" },
      {
        path: "admin-dashboard",
        component: () => import("@/views/pages/dashboard/admin-dashboard.vue"),
        beforeEnter: requireRole([
          "superadmin",
          "manager",
          "marketer",
          "support",
          "finance",
        ]),
      },
      {
        path: "settings",
        component: () => import("@/views/pages/settings/main-settings.vue"),
        beforeEnter: requireRole(["superadmin"]),
      },
    ],
  },
  {
    path: "/layout",
    component: () => import("@/views/pages/layout/layout-index.vue"),
    children: [
      { path: "", redirect: "/layout/layout-default" },
      {
        path: "layout-default",
        component: () => import("@/views/pages/dashboard/admin-dashboard.vue"),
      },
      {
        path: "layout-mini",
        component: () => import("@/views/pages/layout/layout-mini.vue"),
      },
      {
        path: "layout-hover-view",
        component: () => import("@/views/pages/layout/layout-hover-view.vue"),
      },
      {
        path: "layout-hidden",
        component: () => import("@/views/pages/layout/layout-hidden.vue"),
      },
      {
        path: "layout-full-width",
        component: () => import("@/views/pages/layout/layout-full-width.vue"),
      },
      {
        path: "layout-rtl",
        component: () => import("@/views/pages/layout/layout-rtl.vue"),
      },
    ],
  },
  {
    path: "/patient",
    component: () => import("@/views/pages/patient/patient-index.vue"),
    children: [
      { path: "", redirect: "/patient/patient-dashboard" },
      {
        path: "patient-dashboard",
        component: () => import("@/views/pages/patient/patient-dashboard.vue"),
      },
      {
        path: "patient-appointments",
        component: () =>
          import("@/views/pages/patient/patient-appointments.vue"),
      },
      {
        path: "patient-appointment-details",
        component: () =>
          import("@/views/pages/patient/patient-appointment-details.vue"),
      },
      {
        path: "patient-doctors",
        component: () => import("@/views/pages/patient/patient-doctors.vue"),
      },
      {
        path: "patient-doctor-details",
        component: () =>
          import("@/views/pages/patient/patients-doctor-details.vue"),
      },
      {
        path: "patient-prescriptions",
        component: () =>
          import("@/views/pages/patient/patient-prescriptions.vue"),
      },
      {
        path: "patient-invoices",
        component: () => import("@/views/pages/patient/patient-invoices.vue"),
      },
      {
        path: "patient-invoice-details",
        component: () =>
          import("@/views/pages/patient/patient-invoice-details.vue"),
      },
      {
        path: "patient-notifications",
        component: () =>
          import("@/views/pages/patient/patient-notifications.vue"),
      },
      {
        path: "patient-prescription-details",
        component: () =>
          import("@/views/pages/patient/patient-prescription-details.vue"),
      },
    ],
  },
  {
    path: "/patient/settings",
    component: () =>
      import("@/views/pages/patient/settings/patients-settings.vue"),
    children: [
      { path: "", redirect: "/patient/settings/patient-profile-settings" },
      {
        path: "patient-profile-settings",
        component: () =>
          import("@/views/pages/patient/settings/patient-profile-settings.vue"),
      },
      {
        path: "patient-password-settings",
        component: () =>
          import(
            "@/views/pages/patient/settings/patients-password-settings.vue"
          ),
      },
      {
        path: "patient-notifications-settings",
        component: () =>
          import(
            "@/views/pages/patient/settings/patients-notifications-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/doctors",
    component: () => import("@/views/pages/doctors/doctors-index.vue"),
    beforeEnter: requireRole(["superadmin", "manager", "support"]),
    children: [
      { path: "", redirect: "/doctors/doctors-grid" },
      {
        path: "doctors-grid",
        component: () => import("@/views/pages/doctors/doctors-grid.vue"),
      },
      {
        path: "doctors-list",
        component: () => import("@/views/pages/doctors/doctors-list.vue"),
      },
      {
        path: "add-doctor",
        component: () => import("@/views/pages/doctors/add-doctor.vue"),
      },
      {
        path: "edit-doctor/:id",
        component: () => import("@/views/pages/doctors/edit-doctor.vue"),
      },
      {
        path: "doctor-details/:id",
        component: () => import("@/views/pages/doctors/doctor-details.vue"),
      },
      {
        path: "doctor-schedule",
        component: () => import("@/views/pages/doctors/doctor-schedule.vue"),
      },
    ],
  },
  {
    path: "/patients",
    component: () => import("@/views/pages/patients/patients-index.vue"),
    beforeEnter: requireRole(["superadmin", "manager", "support"]),
    children: [
      { path: "", redirect: "/patients/patients-list" },
      {
        path: "patients-list",
        component: () => import("@/views/pages/patients/patients-list.vue"),
      },
      {
        path: "patient-details/:id",
        component: () => import("@/views/pages/patients/patient-details.vue"),
      },
      {
        path: "patients-grid",
        component: () => import("@/views/pages/patients/patients-grid.vue"),
      },
      {
        path: "create-patient",
        component: () => import("@/views/pages/patients/create-patient.vue"),
      },
      {
        path: "edit-patient/:id",
        component: () => import("@/views/pages/patients/edit-patient.vue"),
      },
    ],
  },
  {
    path: "/appointments",
    component: () =>
      import("@/views/pages/appointments/appointments-index.vue"),
    beforeEnter: requireRole(["superadmin", "manager", "support"]),
    children: [
      { path: "", redirect: "/appointments/appointments-list" },
      {
        path: "appointments-list",
        component: () =>
          import("@/views/pages/appointments/appointments-list.vue"),
      },
      {
        path: "chat-history/:appointmentId",
        component: () =>
          import("@/views/pages/appointments/appointment-chat-history.vue"),
      },
      {
        path: "appointment-calendar",
        component: () =>
          import("@/views/pages/appointments/appointments-calendar.vue"),
      },
      {
        path: "edit-appointment/:appointmentId",
        component: () =>
          import("@/views/pages/appointments/edit-appointment.vue"),
      },
      {
        path: "appointment-consultations",
        component: () =>
          import("@/views/pages/appointments/appointment-consultations.vue"),
      },
    ],
  },
  {
    path: "/clinic",
    component: () => import("@/views/pages/clinic/clinic-index.vue"),
    children: [
      { path: "", redirect: "/clinic/messages" },
      {
        path: "messages",
        component: () => import("@/views/pages/clinic/messages.vue"),
      },
      {
        path: "activities",
        component: () => import("@/views/pages/clinic/activities.vue"),
      },
      {
        path: "assets",
        component: () => import("@/views/pages/clinic/assets.vue"),
      },
      {
        path: "specializations",
        component: () => import("@/views/pages/clinic/specializations.vue"),
        beforeEnter: requireRole(["superadmin", "manager"]),
      },
      {
        path: "banners",
        component: () => import("@/views/pages/clinic/banner/manage.vue"),
        beforeEnter: requireRole(["superadmin", "marketer"]),
      },
      {
        path: "notifications",
        component: () =>
          import("@/views/pages/clinic/notifications/manage.vue"),
        beforeEnter: requireRole(["superadmin", "marketer"]),
      },
      {
        path: "reviews",
        component: () => import("@/views/pages/clinic/reviews/manage.vue"),
        beforeEnter: requireRole([
          "superadmin",
          "manager",
          "marketer",
          "support",
        ]),
      },
      {
        path: "services",
        component: () => import("@/views/pages/clinic/services.vue"),
      },
      {
        path: "locations",
        component: () => import("@/views/pages/clinic/locations.vue"),
      },
    ],
  },
  {
    path: "/finance",
    component: () => import("@/views/pages/finance/finance-index.vue"),
    children: [
      { path: "", redirect: "/finance/income" },
      {
        path: "income",
        component: () => import("@/views/pages/finance/income.vue"),
      },
      {
        path: "payments",
        component: () => import("@/views/pages/finance/payments.vue"),
      },
      {
        path: "transactions",
        component: () => import("@/views/pages/finance/transactions.vue"),
        beforeEnter: requireRole(["superadmin", "manager", "finance"]),
      },
    ],
  },
  {
    path: "/withdrawals",
    component: () => import("@/views/pages/withdrawals/withdrawals-list.vue"),
    beforeEnter: requireRole(["superadmin", "manager", "finance"]),
  },
  {
    path: "/withdraw-methods-management",
    component: () =>
      import("@/views/pages/withdraw-methods/withdraw-methods-index.vue"),
    beforeEnter: requireRole(["superadmin"]),
  },
  {
    path: "/users",
    component: () => import("@/views/pages/users/users-index.vue"),
    children: [
      { path: "", redirect: "/users/admin-manage" },
      {
        path: "admin-manage",
        component: () => import("@/views/pages/users/admin-manage.vue"),
        beforeEnter: requireRole(["superadmin"]),
      },
      {
        path: "permissions",
        component: () => import("@/views/pages/users/permissions.vue"),
      },
      {
        path: "delete-account-request",
        component: () =>
          import("@/views/pages/users/delete-account-request.vue"),
      },
    ],
  },
  {
    path: "/account-settings",
    component: () =>
      import("@/views/pages/settings/account-settings/account-settings.vue"),
    children: [
      { path: "", redirect: "/account-settings/profile-settings" },
      {
        path: "profile-settings",
        component: () =>
          import(
            "@/views/pages/settings/account-settings/profile-settings.vue"
          ),
      },
      {
        path: "security-settings",
        component: () =>
          import(
            "@/views/pages/settings/account-settings/security-settings.vue"
          ),
      },
      {
        path: "notifications-settings",
        component: () =>
          import(
            "@/views/pages/settings/account-settings/notifications-settings.vue"
          ),
      },
      {
        path: "integrations-settings",
        component: () =>
          import(
            "@/views/pages/settings/account-settings/integrations-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/website-settings",
    component: () =>
      import("@/views/pages/settings/website-settings/website-settings.vue"),
    beforeEnter: requireRole(["superadmin"]),
    children: [
      { path: "", redirect: "/website-settings/organization-settings" },
      {
        path: "organization-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/organization-settings.vue"
          ),
      },
      {
        path: "localization-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/localization-settings.vue"
          ),
      },
      {
        path: "prefixes-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/prefixes-settings.vue"
          ),
      },
      {
        path: "seo-setup-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/seo-setup-settings.vue"
          ),
      },
      {
        path: "language-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/language-settings.vue"
          ),
      },
      {
        path: "language-settings2",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/language-settings2.vue"
          ),
      },
      {
        path: "language-settings3",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/language-settings3.vue"
          ),
      },
      {
        path: "maintenance-mode-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/maintenance-mode-settings.vue"
          ),
      },
      {
        path: "login-and-register-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/login-and-register-settings.vue"
          ),
      },
      {
        path: "preferences-settings",
        component: () =>
          import(
            "@/views/pages/settings/website-settings/preferences-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/clinic-settings",
    component: () =>
      import("@/views/pages/settings/clinic-settings/clinic-settings.vue"),
    beforeEnter: requireRole(["superadmin", "manager"]),
    children: [
      { path: "", redirect: "/clinic-settings/appointment-settings" },
      {
        path: "appointment-settings",
        component: () =>
          import(
            "@/views/pages/settings/clinic-settings/appointment-settings.vue"
          ),
      },
      {
        path: "working-hours-settings",
        component: () =>
          import(
            "@/views/pages/settings/clinic-settings/working-hours-settings.vue"
          ),
      },
      {
        path: "cancellation-reason-settings",
        component: () =>
          import(
            "@/views/pages/settings/clinic-settings/cancellation-reason-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/app-settings",
    component: () =>
      import("@/views/pages/settings/app-settings/app-settings.vue"),
    beforeEnter: requireRole(["superadmin"]),
    children: [
      { path: "", redirect: "/app-settings/invoice-settings" },
      {
        path: "invoice-settings",
        component: () =>
          import("@/views/pages/settings/app-settings/invoice-settings.vue"),
      },
      {
        path: "invoice-templates-settings",
        component: () =>
          import(
            "@/views/pages/settings/app-settings/invoice-templates-settings.vue"
          ),
      },
      {
        path: "signatures-settings",
        component: () =>
          import("@/views/pages/settings/app-settings/signatures-settings.vue"),
      },
      {
        path: "custom-fields-settings",
        component: () =>
          import(
            "@/views/pages/settings/app-settings/custom-fields-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/system-settings",
    component: () =>
      import("@/views/pages/settings/system-settings/system-settings.vue"),
    beforeEnter: requireRole(["superadmin"]),
    children: [
      { path: "", redirect: "/system-settings/email-settings" },
      {
        path: "email-settings",
        component: () =>
          import("@/views/pages/settings/system-settings/email-settings.vue"),
      },
      {
        path: "email-templates-settings",
        component: () =>
          import(
            "@/views/pages/settings/system-settings/email-templates-settings.vue"
          ),
      },
      {
        path: "sms-gateways-settings",
        component: () =>
          import(
            "@/views/pages/settings/system-settings/sms-gateways-settings.vue"
          ),
      },
      {
        path: "sms-templates-settings",
        component: () =>
          import(
            "@/views/pages/settings/system-settings/sms-templates-settings.vue"
          ),
      },
      {
        path: "gdpr-cookies-settings",
        component: () =>
          import(
            "@/views/pages/settings/system-settings/gdpr-cookies-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/finance-settings",
    component: () =>
      import("@/views/pages/settings/finance-settings/finance-settings.vue"),
    beforeEnter: requireRole(["superadmin", "finance"]),
    children: [
      { path: "", redirect: "/finance-settings/payment-methods-settings" },
      {
        path: "payment-methods-settings",
        component: () =>
          import(
            "@/views/pages/settings/finance-settings/payment-methods-settings.vue"
          ),
      },
      {
        path: "bank-accounts-settings",
        component: () =>
          import(
            "@/views/pages/settings/finance-settings/bank-accounts-settings.vue"
          ),
      },
      {
        path: "tax-rates-settings",
        component: () =>
          import(
            "@/views/pages/settings/finance-settings/tax-rates-settings.vue"
          ),
      },
      {
        path: "currencies-settings",
        component: () =>
          import(
            "@/views/pages/settings/finance-settings/currencies-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/others-settings",
    component: () =>
      import("@/views/pages/settings/others-settings/others-settings.vue"),
    beforeEnter: requireRole(["superadmin"]),
    children: [
      { path: "", redirect: "/others-settings/sitemap-settings" },
      {
        path: "sitemap-settings",
        component: () =>
          import("@/views/pages/settings/others-settings/sitemap-settings.vue"),
      },
      {
        path: "clear-cache-settings",
        component: () =>
          import(
            "@/views/pages/settings/others-settings/clear-cache-settings.vue"
          ),
      },
      {
        path: "storage-settings",
        component: () =>
          import("@/views/pages/settings/others-settings/storage-settings.vue"),
      },
      {
        path: "cronjob-settings",
        component: () =>
          import("@/views/pages/settings/others-settings/cronjob-settings.vue"),
      },
      {
        path: "ban-ip-address-settings",
        component: () =>
          import(
            "@/views/pages/settings/others-settings/ban-ip-address-settings.vue"
          ),
      },
      {
        path: "system-backup-settings",
        component: () =>
          import(
            "@/views/pages/settings/others-settings/system-backup-settings.vue"
          ),
      },
      {
        path: "database-backup-settings",
        component: () =>
          import(
            "@/views/pages/settings/others-settings/database-backup-settings.vue"
          ),
      },
      {
        path: "system-update",
        component: () =>
          import("@/views/pages/settings/others-settings/system-update.vue"),
      },
    ],
  },
  {
    path: "/content",
    component: () => import("@/views/pages/content/content-index.vue"),
    beforeEnter: requireRole(["superadmin", "marketer"]),
    children: [
      { path: "", redirect: "/content/pages" },
      {
        path: "pages",
        component: () => import("@/views/pages/content/pages.vue"),
      },
      {
        path: "add-page",
        component: () => import("@/views/pages/content/add-page.vue"),
      },
      {
        path: "edit-page",
        component: () => import("@/views/pages/content/edit-page.vue"),
      },
      {
        path: "testimonials",
        component: () => import("@/views/pages/content/testimonials.vue"),
      },
      {
        path: "faq",
        component: () => import("@/views/pages/content/faq.vue"),
      },
    ],
  },
  {
    path: "/doctor",
    component: () => import("@/views/pages/doctor/doctor-index.vue"),
    children: [
      { path: "", redirect: "/doctor/doctor-dashboard" },
      {
        path: "doctor-dashboard",
        component: () => import("@/views/pages/doctor/doctor-dashboard.vue"),
      },
      {
        path: "doctors-appointments",
        component: () =>
          import("@/views/pages/doctor/appointments/doctors-appointments.vue"),
      },
      {
        path: "doctors-appointment-details",
        component: () =>
          import(
            "@/views/pages/doctor/appointments/doctors-appointment-details.vue"
          ),
      },
      {
        path: "online-consultations",
        component: () =>
          import("@/views/pages/doctor/appointments/online-consultations.vue"),
      },
      {
        path: "doctors-schedules",
        component: () => import("@/views/pages/doctor/doctors-schedules.vue"),
      },
      {
        path: "doctors-prescriptions",
        component: () =>
          import("@/views/pages/doctor/doctors-prescriptions.vue"),
      },
      {
        path: "doctors-prescription-details",
        component: () =>
          import("@/views/pages/doctor/doctors-prescription-details.vue"),
      },
      {
        path: "doctors-patient-details",
        component: () =>
          import("@/views/pages/doctor/doctors-patient-details.vue"),
      },
      {
        path: "doctors-leaves",
        component: () => import("@/views/pages/doctor/doctors-leaves.vue"),
      },
      {
        path: "doctors-reviews",
        component: () => import("@/views/pages/doctor/doctors-reviews.vue"),
      },
      {
        path: "doctors-notifications",
        component: () =>
          import("@/views/pages/doctor/doctors-notifications.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory("/"),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Continue with the navigation
  if (to.name === "chat") {
    document.body.classList.add("chat-page");
  } else {
    document.body.classList.remove("chat-page");
  }
  next();
});
