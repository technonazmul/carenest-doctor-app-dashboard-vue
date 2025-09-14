<!-- src/views/pages/authentication/error/error-403.vue -->
<template>
  <div class="main-wrapper error-wrapper">
    <div class="error-box">
      <div class="error-content">
        <div class="error-content-info">
          <div class="error-info">
            <h1>403</h1>
            <div class="error-details">
              <h3>Access Forbidden</h3>
              <p>
                You don't have permission to access this resource. Your current
                role ({{ currentRole }}) doesn't allow access to this page.
              </p>
            </div>
          </div>
        </div>
        <div class="error-btn">
          <button @click="goBack" class="btn btn-primary me-2">
            <i class="ti ti-arrow-left me-1"></i>Go Back
          </button>
          <router-link
            to="/dashboard/admin-dashboard"
            class="btn btn-outline-primary"
          >
            <i class="ti ti-home me-1"></i>Back to Dashboard
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const currentRole = ref(localStorage.getItem("role") || "Unknown");

const goBack = () => {
  // Go back to previous page or dashboard if no history
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push("/dashboard/admin-dashboard");
  }
};

onMounted(() => {
  // Log access attempt for security audit
  console.warn(
    `Access denied for role: ${currentRole.value} to route: ${route.path}`
  );
});
</script>

<style scoped>
.main-wrapper {
  min-height: 100vh;
}

.error-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.error-box {
  max-width: 500px;
  width: 100%;
  text-align: center;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.error-logo {
  margin-bottom: 30px;
}

.error-logo img {
  max-height: 50px;
}

.error-info h1 {
  font-size: 120px;
  font-weight: 700;
  color: #ff6b6b;
  margin: 0;
  line-height: 1;
}

.error-details h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 20px 0 15px;
}

.error-details p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.error-btn {
  margin-top: 30px;
}

.error-btn .btn {
  padding: 12px 24px;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-outline-primary {
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
}

.error-btn .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.me-1 {
  margin-right: 0.25rem;
}

.me-2 {
  margin-right: 0.5rem;
}

/* Responsive */
@media (max-width: 576px) {
  .error-box {
    margin: 20px;
    padding: 20px;
  }

  .error-info h1 {
    font-size: 80px;
  }

  .error-details h3 {
    font-size: 20px;
  }

  .error-btn .btn {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
