<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content mt-4">
      <h2 class="mb-4">Create Withdrawal Method</h2>

      <form @submit.prevent="submitForm" class="card p-4 mb-5 shadow-sm">
        <div class="mb-3">
          <label class="form-label">Method</label>
          <input
            v-model="form.method"
            class="form-control"
            placeholder="e.g., paypal"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Label</label>
          <input
            v-model="form.label"
            class="form-control"
            placeholder="Display Label"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Is Active</label>
          <select v-model="form.isActive" class="form-select">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>

        <div class="mb-3">
          <h5>Fields</h5>
          <div
            v-for="(field, index) in form.fields"
            :key="index"
            class="border p-3 mb-3 rounded bg-light"
          >
            <div class="mb-2">
              <label class="form-label">Field Name</label>
              <input
                v-model="field.name"
                class="form-control"
                placeholder="e.g., email"
                required
              />
            </div>

            <div class="mb-2">
              <label class="form-label">Field Label</label>
              <input
                v-model="field.label"
                class="form-control"
                placeholder="e.g., PayPal Email"
                required
              />
            </div>

            <div class="mb-2">
              <label class="form-label">Field Type</label>
              <select v-model="field.type" class="form-select">
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="select">Select</option>
              </select>
            </div>

            <div class="form-check mb-2">
              <input
                v-model="field.required"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label">Required</label>
            </div>

            <button
              type="button"
              class="btn btn-sm btn-danger"
              @click="removeField(index)"
            >
              Remove Field
            </button>
          </div>

          <button type="button" class="btn btn-secondary" @click="addField">
            Add Field
          </button>
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          {{ isEditing ? "Update Method" : "Create Method" }}
        </button>
      </form>

      <!-- Withdrawal Methods Table -->
      <div v-if="methods.length" class="card p-4 shadow-sm">
        <h4>Existing Withdrawal Methods</h4>
        <table class="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Method</th>
              <th>Label</th>
              <th>Status</th>
              <th>Fields</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(method, index) in methods" :key="method._id">
              <td>{{ index + 1 }}</td>
              <td>{{ method.method }}</td>
              <td>{{ method.label }}</td>
              <td>
                <span
                  class="badge"
                  :class="method.isActive ? 'bg-success' : 'bg-secondary'"
                >
                  {{ method.isActive ? "Active" : "Inactive" }}
                </span>
              </td>
              <td>
                <ul class="mb-0">
                  <li v-for="f in method.fields" :key="f.name">
                    {{ f.label }} ({{ f.name }})
                    <span v-if="f.required">*</span>
                  </li>
                </ul>
              </td>
              <td>
                <button
                  class="btn btn-sm btn-warning me-2"
                  @click="editMethod(method)"
                >
                  Edit
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="deleteMethod(method._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default {
  setup() {
    // Get admin token from cookie
    const adminToken = Cookies.get("adminToken");

    return {
      adminToken,
    };
  },
  data() {
    return {
      form: {
        method: "",
        label: "",
        isActive: true,
        fields: [],
      },
      methods: [],
      isEditing: false,
      editingId: null,
    };
  },
  mounted() {
    this.fetchMethods();
  },
  methods: {
    addField() {
      this.form.fields.push({
        name: "",
        label: "",
        type: "text",
        required: false,
      });
    },
    removeField(index) {
      this.form.fields.splice(index, 1);
    },
    editMethod(method) {
      this.form = JSON.parse(JSON.stringify(method)); // Deep clone to avoid direct binding
      this.isEditing = true;
      this.editingId = method._id;
    },
    async submitForm() {
      try {
        if (this.isEditing) {
          // Update
          const res = await axios.put(
            `${API_BASE}/api/backend/withdraw-methods/${this.editingId}`,
            this.form,
            {
              headers: {
                Authorization: `Bearer ${this.adminToken}`,
              },
            }
          );
          toastr.success("Withdrawal method updated!");
        } else {
          // Create
          const res = await axios.post(
            `${API_BASE}/api/backend/withdraw-methods`,
            this.form,
            {
              headers: {
                Authorization: `Bearer ${this.adminToken}`,
              },
            }
          );
          toastr.success("Withdrawal method created!");
        }

        // Reset form
        this.form = { method: "", label: "", isActive: true, fields: [] };
        this.isEditing = false;
        this.editingId = null;
        this.fetchMethods();
      } catch (err) {
        console.error("Submit error:", err);
        toastr.error(err.response?.data?.message || "Something went wrong");
      }
    },
    async fetchMethods() {
      try {
        const res = await axios.get(`${API_BASE}/api/backend/withdraw-methods`);
        this.methods = res.data || [];
      } catch (err) {
        console.error("Fetch error:", err);
        toastr.error("Failed to load withdrawal methods");
      }
    },
    async deleteMethod(id) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this method?"
      );
      if (!confirmDelete) return;

      try {
        await axios.delete(`${API_BASE}/api/backend/withdraw-methods/${id}`, {
          headers: {
            Authorization: `Bearer ${this.adminToken}`,
          },
        });
        toastr.success("Deleted successfully!");
        this.fetchMethods();
      } catch (err) {
        console.error("Delete error:", err);
        toastr.error("Failed to delete method");
      }
    },
  },
};
</script>
