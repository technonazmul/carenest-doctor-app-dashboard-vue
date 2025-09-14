import { ref, onMounted, onUnmounted } from "vue";
import settingsService from "@/services/settingsService";

export function useSettings() {
  const settings = ref(null);
  const loading = ref(false);
  const error = ref(null);

  let unsubscribe = null;

  const loadSettings = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await settingsService.getSettings();
      settings.value = data;
    } catch (err) {
      error.value = err.message;
      console.error("Error loading settings:", err);
    } finally {
      loading.value = false;
    }
  };

  const refreshSettings = async () => {
    try {
      const data = await settingsService.refreshSettings();
      settings.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  // Format currency using settings
  const formatCurrency = (amount, options = {}) => {
    return settingsService.formatCurrency(amount, options);
  };

  // Get currency symbol
  const getCurrencySymbol = () => {
    return settingsService.getCurrencySymbol();
  };

  // Get currency code
  const getCurrency = () => {
    return settingsService.getCurrency();
  };

  // Get company info
  const getCompanyInfo = () => {
    return settingsService.getCompanyInfo();
  };

  // Get financial settings
  const getFinancialSettings = () => {
    return settingsService.getFinancialSettings();
  };

  onMounted(() => {
    // Subscribe to settings changes
    unsubscribe = settingsService.subscribe((newSettings) => {
      settings.value = newSettings;
    });

    // Load settings if not already loaded
    if (!settingsService.settings) {
      loadSettings();
    } else {
      settings.value = settingsService.settings;
    }
  });

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  return {
    settings,
    loading,
    error,
    loadSettings,
    refreshSettings,
    formatCurrency,
    getCurrencySymbol,
    getCurrency,
    getCompanyInfo,
    getFinancialSettings,
  };
}
