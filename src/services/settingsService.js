import axios from "axios";
import { API_BASE } from "@/api/apiConfig";

class SettingsService {
  constructor() {
    this.settings = null;
    this.loading = false;
    this.error = null;
    this.listeners = new Set();
  }

  // Fetch settings from API
  async fetchSettings() {
    if (this.loading) return this.settings;

    this.loading = true;
    this.error = null;

    try {
      const response = await axios.get(`${API_BASE}/api/backend/settings`);

      if (response.data && response.data.success) {
        this.settings = response.data.data;
        this.notifyListeners();
        return this.settings;
      } else {
        throw new Error("Invalid settings response");
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      this.error = error.message;
      // Set default fallback settings
      this.settings = {
        financial: {
          currency: "USD",
          currencySymbol: "$",
          serviceFee: 0,
          transactionFee: 0,
          taxRate: 0,
        },
        general: {
          companyName: "Company",
          contactEmail: "",
          phoneNumber: "",
          address: "",
        },
      };
      throw error;
    } finally {
      this.loading = false;
    }
  }

  // Get settings (fetch if not loaded)
  async getSettings() {
    if (!this.settings && !this.loading) {
      await this.fetchSettings();
    }
    return this.settings;
  }

  // Get currency symbol
  getCurrencySymbol() {
    return this.settings?.financial?.currencySymbol || "$";
  }

  // Get currency code
  getCurrency() {
    return this.settings?.financial?.currency || "USD";
  }

  // Format currency with proper symbol
  formatCurrency(amount, options = {}) {
    if (amount === null || amount === undefined)
      return this.getCurrencySymbol() + "0";

    const {
      minimumFractionDigits = 0,
      maximumFractionDigits = 2,
      showSymbol = true,
    } = options;

    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(Math.abs(amount));

    const symbol = showSymbol ? this.getCurrencySymbol() : "";
    return `${symbol}${formatted}`;
  }

  // Get company info
  getCompanyInfo() {
    return this.settings?.general || {};
  }

  // Get financial settings
  getFinancialSettings() {
    return this.settings?.financial || {};
  }

  // Subscribe to settings changes
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  // Notify all subscribers
  notifyListeners() {
    this.listeners.forEach((callback) => callback(this.settings));
  }

  // Refresh settings (force reload)
  async refreshSettings() {
    this.settings = null;
    return await this.fetchSettings();
  }
}

// Create singleton instance
const settingsService = new SettingsService();

export default settingsService;
