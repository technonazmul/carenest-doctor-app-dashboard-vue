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
          <h4 class="fs-18 fw-semibold mb-0">Settings</h4>
          <p class="text-muted mb-0">
            Manage your application settings and configurations
          </p>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Settings</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading settings...</p>
      </div>

      <!-- Error State -->
      <div v-if="error && !loading" class="alert alert-danger" role="alert">
        <i class="fas fa-exclamation-triangle me-2"></i>
        {{ error }}
        <button
          @click="loadSettings"
          class="btn btn-sm btn-outline-danger ms-2"
        >
          <i class="fas fa-redo me-1"></i>Retry
        </button>
      </div>

      <form @submit.prevent="saveSettings" v-if="!loading && !error">
        <!-- General Settings -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">General Settings</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="companyName" class="form-label"
                        >Company Name *</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="companyName"
                        v-model="settings.general.companyName"
                        placeholder="Enter company name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="contactEmail" class="form-label"
                        >Contact Email *</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="contactEmail"
                        v-model="settings.general.contactEmail"
                        placeholder="contact@company.com"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label"
                        >Phone Number</label
                      >
                      <input
                        type="tel"
                        class="form-control"
                        id="phoneNumber"
                        v-model="settings.general.phoneNumber"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="logo" class="form-label">Company Logo</label>
                      <input
                        type="file"
                        class="form-control"
                        id="logo"
                        @change="handleFileUpload($event, 'logo')"
                        accept="image/*"
                        ref="logoInput"
                      />
                      <div
                        v-if="logoPreview || settings.general.logo"
                        class="mt-2"
                      >
                        <img
                          :src="
                            logoPreview || getFileUrl(settings.general.logo)
                          "
                          alt="Logo Preview"
                          class="img-thumbnail"
                          style="max-width: 150px; max-height: 150px"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-danger ms-2"
                          @click="removeFile('logo')"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="address" class="form-label">Address</label>
                      <textarea
                        class="form-control"
                        id="address"
                        v-model="settings.general.address"
                        rows="3"
                        placeholder="Company address"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="favicon" class="form-label"
                        >Favicon / App Icon</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="favicon"
                        @change="handleFileUpload($event, 'favicon')"
                        accept="image/*"
                        ref="faviconInput"
                      />
                      <div
                        v-if="faviconPreview || settings.general.favicon"
                        class="mt-2"
                      >
                        <img
                          :src="
                            faviconPreview ||
                            getFileUrl(settings.general.favicon)
                          "
                          alt="Favicon Preview"
                          class="img-thumbnail"
                          style="max-width: 64px; max-height: 64px"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-danger ms-2"
                          @click="removeFile('favicon')"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </div>
                      <small class="text-muted"
                        >Recommended size: 32x32px or 64x64px</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Settings -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Financial Settings</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="currency" class="form-label"
                        >Currency *</label
                      >
                      <select
                        class="form-select"
                        id="currency"
                        v-model="settings.financial.currency"
                        required
                      >
                        <option value="">Select Currency</option>
                        <!-- Major Currencies -->
                        <option value="USD">USD - US Dollar ($)</option>
                        <option value="EUR">EUR - Euro (€)</option>
                        <option value="GBP">GBP - British Pound (£)</option>
                        <option value="JPY">JPY - Japanese Yen (¥)</option>
                        <option value="CHF">CHF - Swiss Franc (CHF)</option>
                        <option value="CAD">CAD - Canadian Dollar (C$)</option>
                        <option value="AUD">
                          AUD - Australian Dollar (A$)
                        </option>
                        <option value="CNY">CNY - Chinese Yuan (¥)</option>

                        <!-- Asian Currencies -->
                        <option value="BDT">BDT - Bangladeshi Taka (৳)</option>
                        <option value="INR">INR - Indian Rupee (₹)</option>
                        <option value="PKR">PKR - Pakistani Rupee (₨)</option>
                        <option value="LKR">LKR - Sri Lankan Rupee (Rs)</option>
                        <option value="NPR">NPR - Nepalese Rupee (Rs)</option>
                        <option value="KRW">KRW - South Korean Won (₩)</option>
                        <option value="SGD">SGD - Singapore Dollar (S$)</option>
                        <option value="HKD">
                          HKD - Hong Kong Dollar (HK$)
                        </option>
                        <option value="MYR">
                          MYR - Malaysian Ringgit (RM)
                        </option>
                        <option value="THB">THB - Thai Baht (฿)</option>
                        <option value="IDR">
                          IDR - Indonesian Rupiah (Rp)
                        </option>
                        <option value="PHP">PHP - Philippine Peso (₱)</option>
                        <option value="VND">VND - Vietnamese Dong (₫)</option>
                        <option value="TWD">TWD - Taiwan Dollar (NT$)</option>
                        <option value="MMK">MMK - Myanmar Kyat (K)</option>
                        <option value="KHR">KHR - Cambodian Riel (៛)</option>
                        <option value="LAK">LAK - Lao Kip (₭)</option>
                        <option value="BND">BND - Brunei Dollar (B$)</option>
                        <option value="MOP">
                          MOP - Macanese Pataca (MOP$)
                        </option>

                        <!-- Middle East & Africa -->
                        <option value="AED">AED - UAE Dirham (د.إ)</option>
                        <option value="SAR">SAR - Saudi Riyal (﷼)</option>
                        <option value="QAR">QAR - Qatari Riyal (﷼)</option>
                        <option value="BHD">BHD - Bahraini Dinar (BD)</option>
                        <option value="KWD">KWD - Kuwaiti Dinar (KD)</option>
                        <option value="OMR">OMR - Omani Rial (﷼)</option>
                        <option value="JOD">JOD - Jordanian Dinar (JD)</option>
                        <option value="LBP">LBP - Lebanese Pound (ل.ل)</option>
                        <option value="ILS">ILS - Israeli Shekel (₪)</option>
                        <option value="TRY">TRY - Turkish Lira (₺)</option>
                        <option value="IRR">IRR - Iranian Rial (﷼)</option>
                        <option value="EGP">EGP - Egyptian Pound (£)</option>
                        <option value="MAD">MAD - Moroccan Dirham (MAD)</option>
                        <option value="TND">TND - Tunisian Dinar (د.ت)</option>
                        <option value="DZD">DZD - Algerian Dinar (د.ج)</option>
                        <option value="LYD">LYD - Libyan Dinar (LD)</option>
                        <option value="ZAR">
                          ZAR - South African Rand (R)
                        </option>
                        <option value="NGN">NGN - Nigerian Naira (₦)</option>
                        <option value="GHS">GHS - Ghanaian Cedi (₵)</option>
                        <option value="KES">KES - Kenyan Shilling (KSh)</option>
                        <option value="UGX">
                          UGX - Ugandan Shilling (USh)
                        </option>
                        <option value="TZS">
                          TZS - Tanzanian Shilling (TSh)
                        </option>
                        <option value="ETB">ETB - Ethiopian Birr (Br)</option>

                        <!-- European Currencies -->
                        <option value="NOK">NOK - Norwegian Krone (kr)</option>
                        <option value="SEK">SEK - Swedish Krona (kr)</option>
                        <option value="DKK">DKK - Danish Krone (kr)</option>
                        <option value="PLN">PLN - Polish Zloty (zł)</option>
                        <option value="CZK">CZK - Czech Koruna (Kč)</option>
                        <option value="HUF">HUF - Hungarian Forint (Ft)</option>
                        <option value="RON">RON - Romanian Leu (lei)</option>
                        <option value="BGN">BGN - Bulgarian Lev (лв)</option>
                        <option value="HRK">HRK - Croatian Kuna (kn)</option>
                        <option value="RSD">RSD - Serbian Dinar (RSD)</option>
                        <option value="BAM">
                          BAM - Bosnia-Herzegovina Mark (KM)
                        </option>
                        <option value="MKD">
                          MKD - Macedonian Denar (ден)
                        </option>
                        <option value="ALL">ALL - Albanian Lek (L)</option>
                        <option value="RUB">RUB - Russian Ruble (₽)</option>
                        <option value="UAH">UAH - Ukrainian Hryvnia (₴)</option>
                        <option value="BYN">BYN - Belarusian Ruble (Br)</option>
                        <option value="MDL">MDL - Moldovan Leu (L)</option>
                        <option value="ISK">ISK - Icelandic Krona (kr)</option>

                        <!-- Americas -->
                        <option value="MXN">MXN - Mexican Peso ($)</option>
                        <option value="BRL">BRL - Brazilian Real (R$)</option>
                        <option value="ARS">ARS - Argentine Peso ($)</option>
                        <option value="CLP">CLP - Chilean Peso ($)</option>
                        <option value="COP">COP - Colombian Peso ($)</option>
                        <option value="PEN">PEN - Peruvian Sol (S/)</option>
                        <option value="UYU">UYU - Uruguayan Peso ($U)</option>
                        <option value="PYG">
                          PYG - Paraguayan Guarani (₲)
                        </option>
                        <option value="BOB">
                          BOB - Bolivian Boliviano (Bs)
                        </option>
                        <option value="VES">
                          VES - Venezuelan Bolívar (Bs)
                        </option>
                        <option value="GYD">GYD - Guyanese Dollar (GY$)</option>
                        <option value="SRD">
                          SRD - Surinamese Dollar (Sr$)
                        </option>
                        <option value="BBD">
                          BBD - Barbadian Dollar (Bds$)
                        </option>
                        <option value="JMD">JMD - Jamaican Dollar (J$)</option>
                        <option value="TTD">TTD - Trinidad Dollar (TT$)</option>
                        <option value="BSD">BSD - Bahamian Dollar (B$)</option>
                        <option value="BMD">
                          BMD - Bermudian Dollar (BD$)
                        </option>
                        <option value="KYD">
                          KYD - Cayman Islands Dollar (CI$)
                        </option>

                        <!-- Pacific -->
                        <option value="NZD">
                          NZD - New Zealand Dollar (NZ$)
                        </option>
                        <option value="FJD">FJD - Fijian Dollar (FJ$)</option>
                        <option value="PGK">
                          PGK - Papua New Guinea Kina (K)
                        </option>
                        <option value="SBD">
                          SBD - Solomon Islands Dollar (SI$)
                        </option>
                        <option value="VUV">VUV - Vanuatu Vatu (VT)</option>
                        <option value="WST">WST - Samoan Tala (WS$)</option>
                        <option value="TOP">TOP - Tongan Paanga (T$)</option>
                        <option value="XPF">XPF - CFP Franc (₣)</option>

                        <!-- Central Asia & Others -->
                        <option value="KZT">KZT - Kazakhstani Tenge (₸)</option>
                        <option value="UZS">UZS - Uzbekistani Som (лв)</option>
                        <option value="KGS">KGS - Kyrgystani Som (лв)</option>
                        <option value="TJS">
                          TJS - Tajikistani Somoni (SM)
                        </option>
                        <option value="TMT">
                          TMT - Turkmenistani Manat (T)
                        </option>
                        <option value="AFN">AFN - Afghan Afghani (؋)</option>
                        <option value="MNT">MNT - Mongolian Tugrik (₮)</option>
                        <option value="GEL">GEL - Georgian Lari (₾)</option>
                        <option value="AMD">AMD - Armenian Dram (֏)</option>
                        <option value="AZN">AZN - Azerbaijani Manat (₼)</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="currencySymbol" class="form-label"
                        >Currency Symbol</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="currencySymbol"
                        v-model="settings.financial.currencySymbol"
                        placeholder="$"
                        maxlength="3"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="serviceFee" class="form-label"
                        >Service Fee (%)</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="serviceFee"
                        v-model="settings.financial.serviceFee"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="transactionFee" class="form-label"
                        >Transaction Fee (%)</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="transactionFee"
                        v-model="settings.financial.transactionFee"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="taxRate" class="form-label"
                        >Tax/VAT Rate (%)</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="taxRate"
                        v-model="settings.financial.taxRate"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="taxLabel" class="form-label">Tax Label</label>
                      <input
                        type="text"
                        class="form-control"
                        id="taxLabel"
                        v-model="settings.financial.taxLabel"
                        placeholder="VAT, GST, Tax, etc."
                      />
                    </div>
                    <div class="mb-3">
                      <label for="minWithdrawal" class="form-label"
                        >Minimum Withdrawal Amount</label
                      >
                      <div class="input-group">
                        <span class="input-group-text">{{
                          settings.financial.currencySymbol || "$"
                        }}</span>
                        <input
                          type="number"
                          class="form-control"
                          id="minWithdrawal"
                          v-model="settings.financial.minWithdrawal"
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content & Policy -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Content & Policy</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="termsConditions" class="form-label"
                        >Terms and Conditions</label
                      >
                      <textarea
                        class="form-control"
                        id="termsConditions"
                        v-model="settings.content.termsConditions"
                        rows="8"
                        placeholder="Enter your terms and conditions..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="privacyPolicy" class="form-label"
                        >Privacy Policy</label
                      >
                      <textarea
                        class="form-control"
                        id="privacyPolicy"
                        v-model="settings.content.privacyPolicy"
                        rows="8"
                        placeholder="Enter your privacy policy..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="termsConditionsForDoctor" class="form-label"
                        >Terms and Conditions (Doctor)</label
                      >
                      <textarea
                        class="form-control"
                        id="termsConditionsForDoctor"
                        v-model="settings.content.termsConditionsForDoctor"
                        rows="8"
                        placeholder="Enter your terms and conditions..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="privacyPolicyForDoctor" class="form-label"
                        >Privacy Policy (Doctor)</label
                      >
                      <textarea
                        class="form-control"
                        id="privacyPolicyForDoctor"
                        v-model="settings.content.privacyPolicyForDoctor"
                        rows="8"
                        placeholder="Enter your privacy policy..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Gateway APIs -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Payment Gateway APIs</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="paypalApiKey" class="form-label"
                        >PayPal API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.paypal ? 'text' : 'password'"
                          class="form-control"
                          id="paypalApiKey"
                          v-model="settings.integrations.paypalApiKey"
                          placeholder="Enter PayPal API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('paypal')"
                        >
                          <i
                            :class="
                              showApiKeys.paypal
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="stripeApiKey" class="form-label"
                        >Stripe API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.stripe ? 'text' : 'password'"
                          class="form-control"
                          id="stripeApiKey"
                          v-model="settings.integrations.stripeApiKey"
                          placeholder="Enter Stripe API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('stripe')"
                        >
                          <i
                            :class="
                              showApiKeys.stripe
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="sslcommerzeApiKey" class="form-label"
                        >SSLCommerze API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.sslcommerze ? 'text' : 'password'"
                          class="form-control"
                          id="sslcommerzeApiKey"
                          v-model="settings.integrations.sslcommerzeApiKey"
                          placeholder="Enter SSLCommerze API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('sslcommerze')"
                        >
                          <i
                            :class="
                              showApiKeys.sslcommerze
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Firebase / FCM -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Firebase / FCM (Push Notifications)</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="firebaseApiKey" class="form-label"
                        >Firebase API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.firebase ? 'text' : 'password'"
                          class="form-control"
                          id="firebaseApiKey"
                          v-model="settings.integrations.firebaseApiKey"
                          placeholder="Enter Firebase API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('firebase')"
                        >
                          <i
                            :class="
                              showApiKeys.firebase
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="fcmServerKey" class="form-label"
                        >FCM Server Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.fcm ? 'text' : 'password'"
                          class="form-control"
                          id="fcmServerKey"
                          v-model="settings.integrations.fcmServerKey"
                          placeholder="Enter FCM server key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('fcm')"
                        >
                          <i
                            :class="
                              showApiKeys.fcm
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third-Party Services -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Third-Party Services</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="googleMapsApiKey" class="form-label"
                        >Google Maps API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.googleMaps ? 'text' : 'password'"
                          class="form-control"
                          id="googleMapsApiKey"
                          v-model="settings.integrations.googleMapsApiKey"
                          placeholder="Enter Google Maps API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('googleMaps')"
                        >
                          <i
                            :class="
                              showApiKeys.googleMaps
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label for="otherServiceApiKey" class="form-label"
                        >Other Service API Key</label
                      >
                      <div class="input-group">
                        <input
                          :type="showApiKeys.other ? 'text' : 'password'"
                          class="form-control"
                          id="otherServiceApiKey"
                          v-model="settings.integrations.otherServiceApiKey"
                          placeholder="Enter other service API key"
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="toggleApiKeyVisibility('other')"
                        >
                          <i
                            :class="
                              showApiKeys.other
                                ? 'fas fa-eye-slash'
                                : 'fas fa-eye'
                            "
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body text-center">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg px-5"
                  :disabled="saving"
                >
                  <i class="fas fa-save me-2"></i>
                  {{ saving ? "Saving Settings..." : "Save All Settings" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025
        <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>
  <!-- ============================================================== -->
  <!-- End Page content -->
  <!-- ============================================================== -->
</template>

<script>
import axios from "axios";
import { API_BASE } from "@/api/apiConfig";
import Cookies from "js-cookie";

export default {
  name: "SettingsPage",
  setup() {
    const adminToken = Cookies.get("adminToken");
    return {
      adminToken,
      API_BASE,
    };
  },
  data() {
    return {
      title: "Settings",
      text: "Application Settings",
      loading: false,
      saving: false,
      error: null,
      logoPreview: null,
      faviconPreview: null,
      logoFile: null,
      faviconFile: null,
      showApiKeys: {
        paypal: false,
        stripe: false,
        sslcommerze: false,
        firebase: false,
        fcm: false,
        googleMaps: false,
        other: false,
      },
      settings: {
        general: {
          companyName: "",
          contactEmail: "",
          phoneNumber: "",
          address: "",
          logo: null,
          favicon: null,
        },
        financial: {
          currency: "USD",
          currencySymbol: "$",
          serviceFee: 0,
          transactionFee: 0,
          taxRate: 0,
          taxLabel: "VAT",
          minWithdrawal: 0,
        },
        content: {
          termsConditions: "",
          privacyPolicy: "",
          termsConditionsForDoctor: "",
          privacyPolicyForDoctor: "",
        },
        integrations: {
          paypalApiKey: "",
          stripeApiKey: "",
          sslcommerzeApiKey: "",
          firebaseApiKey: "",
          fcmServerKey: "",
          googleMapsApiKey: "",
          otherServiceApiKey: "",
        },
      },
    };
  },

  async mounted() {
    await this.loadSettings();
  },

  methods: {
    // Get authorization headers
    getAuthHeaders() {
      const token =
        Cookies.get("auth_token") || localStorage.getItem("auth_token");
      return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.adminToken}`,
      };
    },

    // Get multipart form headers for file uploads
    getMultipartHeaders() {
      return {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.adminToken}`,
      };
    },

    // Load current settings
    async loadSettings() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          `${API_BASE}/api/backend/settings/edit`,
          {
            headers: this.getAuthHeaders(),
          }
        );

        if (response.data.success) {
          // Merge response data with default structure to avoid undefined values
          this.settings = {
            general: {
              companyName: "",
              contactEmail: "",
              phoneNumber: "",
              address: "",
              logo: null,
              favicon: null,
              ...response.data.data.general,
            },
            financial: {
              currency: "USD",
              currencySymbol: "$",
              serviceFee: 0,
              transactionFee: 0,
              taxRate: 0,
              taxLabel: "VAT",
              minWithdrawal: 0,
              ...response.data.data.financial,
            },
            content: {
              termsConditions: "",
              privacyPolicy: "",
              termsConditionsForDoctor: "",
              privacyPolicyForDoctor: "",
              ...response.data.data.content,
            },
            integrations: {
              paypalApiKey: "",
              stripeApiKey: "",
              sslcommerzeApiKey: "",
              firebaseApiKey: "",
              fcmServerKey: "",
              googleMapsApiKey: "",
              otherServiceApiKey: "",
              ...response.data.data.integrations,
            },
          };
        }
      } catch (error) {
        console.error("Error loading settings:", error);
        this.error =
          error.response?.data?.message ||
          "Failed to load settings. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    // Handle file upload
    handleFileUpload(event, type) {
      const file = event.target.files[0];
      if (file) {
        // Validate file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
          alert("File size must be less than 5MB");
          event.target.value = "";
          return;
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
          alert("Please select a valid image file");
          event.target.value = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          if (type === "logo") {
            this.logoFile = file;
            this.logoPreview = e.target.result;
          } else if (type === "favicon") {
            this.faviconFile = file;
            this.faviconPreview = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }
    },

    // Remove file
    async removeFile(fileType) {
      if (this.settings.general[fileType]) {
        try {
          // Call API to delete file from server
          await axios.delete(
            `${API_BASE}/api/backend/settings/file/${fileType}`,
            {
              headers: this.getAuthHeaders(),
            }
          );

          // Reset local state
          this.settings.general[fileType] = null;
          if (fileType === "logo") {
            this.logoPreview = null;
            this.logoFile = null;
            this.$refs.logoInput.value = "";
          } else if (fileType === "favicon") {
            this.faviconPreview = null;
            this.faviconFile = null;
            this.$refs.faviconInput.value = "";
          }

          this.showNotification(
            "success",
            `${
              fileType.charAt(0).toUpperCase() + fileType.slice(1)
            } removed successfully`
          );
        } catch (error) {
          console.error(`Error removing ${fileType}:`, error);
          this.showNotification("error", `Failed to remove ${fileType}`);
        }
      } else {
        // Just clear preview if no file on server
        if (fileType === "logo") {
          this.logoPreview = null;
          this.logoFile = null;
          this.$refs.logoInput.value = "";
        } else if (fileType === "favicon") {
          this.faviconPreview = null;
          this.faviconFile = null;
          this.$refs.faviconInput.value = "";
        }
      }
    },

    // Toggle API key visibility
    toggleApiKeyVisibility(type) {
      this.showApiKeys[type] = !this.showApiKeys[type];
    },

    // Get file URL for existing files
    getFileUrl(fileObj) {
      if (fileObj && fileObj.filename) {
        return `${API_BASE}/uploads/settings/${fileObj.filename}`;
      }
      return null;
    },

    // Save settings
    async saveSettings() {
      this.saving = true;
      this.error = null;

      try {
        // Create FormData for multipart upload
        const formData = new FormData();

        // Add settings as JSON string
        formData.append("settings", JSON.stringify(this.settings));

        // Add files if selected
        if (this.logoFile) {
          formData.append("logo", this.logoFile);
        }
        if (this.faviconFile) {
          formData.append("favicon", this.faviconFile);
        }

        const response = await axios.post(
          `${API_BASE}/api/backend/settings`,
          formData,
          {
            headers: this.getMultipartHeaders(),
          }
        );

        if (response.data.success) {
          this.showNotification("success", "Settings saved successfully!");

          // Reset file previews and inputs
          this.logoPreview = null;
          this.faviconPreview = null;
          this.logoFile = null;
          this.faviconFile = null;

          // Clear file inputs
          if (this.$refs.logoInput) this.$refs.logoInput.value = "";
          if (this.$refs.faviconInput) this.$refs.faviconInput.value = "";

          // Reload settings to get updated data with file URLs
          await this.loadSettings();
        }
      } catch (error) {
        console.error("Error saving settings:", error);

        if (error.response?.status === 403) {
          this.error = "Access denied. Admin privileges required.";
        } else if (error.response?.status === 400) {
          this.error =
            error.response.data.errors?.join(", ") ||
            "Validation failed. Please check your input.";
        } else {
          this.error =
            error.response?.data?.message ||
            "Failed to save settings. Please try again.";
        }

        this.showNotification("error", this.error);
      } finally {
        this.saving = false;
      }
    },

    // Show notification (you can integrate with your notification system)
    showNotification(type, message) {
      // For now, using alert - replace with your notification system
      if (type === "success") {
        // You can replace this with your preferred notification library
        // Example: this.$toast.success(message) or this.$notify.success(message)
        alert(`✅ ${message}`);
      } else if (type === "error") {
        // Example: this.$toast.error(message) or this.$notify.error(message)
        alert(`❌ ${message}`);
      } else {
        alert(message);
      }
    },

    // Watch for currency changes to update symbol
    updateCurrencySymbol() {
      const currencySymbols = {
        // Major Currencies
        USD: "$",
        EUR: "€",
        GBP: "£",
        JPY: "¥",
        CHF: "CHF",
        CAD: "C$",
        AUD: "A$",
        CNY: "¥",

        // Asian Currencies
        BDT: "৳",
        INR: "₹",
        PKR: "₨",
        LKR: "Rs",
        NPR: "Rs",
        KRW: "₩",
        SGD: "S$",
        HKD: "HK$",
        MYR: "RM",
        THB: "฿",
        IDR: "Rp",
        PHP: "₱",
        VND: "₫",
        TWD: "NT$",
        MMK: "K",
        KHR: "៛",
        LAK: "₭",
        BND: "B$",
        MOP: "MOP$",

        // Middle East & Africa
        AED: "د.إ",
        SAR: "﷼",
        QAR: "﷼",
        BHD: "BD",
        KWD: "KD",
        OMR: "﷼",
        JOD: "JD",
        LBP: "ل.ل",
        ILS: "₪",
        TRY: "₺",
        IRR: "﷼",
        EGP: "£",
        MAD: "MAD",
        TND: "د.ت",
        DZD: "د.ج",
        LYD: "LD",
        ZAR: "R",
        NGN: "₦",
        GHS: "₵",
        KES: "KSh",
        UGX: "USh",
        TZS: "TSh",
        ETB: "Br",

        // European Currencies
        NOK: "kr",
        SEK: "kr",
        DKK: "kr",
        PLN: "zł",
        CZK: "Kč",
        HUF: "Ft",
        RON: "lei",
        BGN: "лв",
        HRK: "kn",
        RSD: "RSD",
        BAM: "KM",
        MKD: "ден",
        ALL: "L",
        RUB: "₽",
        UAH: "₴",
        BYN: "Br",
        MDL: "L",
        ISK: "kr",

        // Americas
        MXN: "$",
        BRL: "R$",
        ARS: "$",
        CLP: "$",
        COP: "$",
        PEN: "S/",
        UYU: "$U",
        PYG: "₲",
        BOB: "Bs",
        VES: "Bs",
        GYD: "GY$",
        SRD: "Sr$",
        BBD: "Bds$",
        JMD: "J$",
        TTD: "TT$",
        BSD: "B$",
        BMD: "BD$",
        KYD: "CI$",

        // Pacific
        NZD: "NZ$",
        FJD: "FJ$",
        PGK: "K",
        SBD: "SI$",
        VUV: "VT",
        WST: "WS$",
        TOP: "T$",
        XPF: "₣",

        // Central Asia & Others
        KZT: "₸",
        UZS: "лв",
        KGS: "лв",
        TJS: "SM",
        TMT: "T",
        AFN: "؋",
        MNT: "₮",
        GEL: "₾",
        AMD: "֏",
        AZN: "₼",
      };

      if (
        this.settings.financial.currency &&
        currencySymbols[this.settings.financial.currency]
      ) {
        this.settings.financial.currencySymbol =
          currencySymbols[this.settings.financial.currency];
      }
    },

    // Validate form data before submission
    validateForm() {
      const errors = [];

      // Required field validations
      if (!this.settings.general.companyName?.trim()) {
        errors.push("Company name is required");
      }

      if (!this.settings.general.contactEmail?.trim()) {
        errors.push("Contact email is required");
      } else if (!this.isValidEmail(this.settings.general.contactEmail)) {
        errors.push("Please enter a valid email address");
      }

      if (!this.settings.financial.currency) {
        errors.push("Currency selection is required");
      }

      // Numeric validations
      const numericFields = [
        { field: "serviceFee", name: "Service Fee" },
        { field: "transactionFee", name: "Transaction Fee" },
        { field: "taxRate", name: "Tax Rate" },
        { field: "minWithdrawal", name: "Minimum Withdrawal" },
      ];

      numericFields.forEach(({ field, name }) => {
        const value = this.settings.financial[field];
        if (value && (isNaN(value) || value < 0)) {
          errors.push(`${name} must be a positive number`);
        }
      });

      return errors;
    },

    // Email validation helper
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    // Format currency display
    formatCurrency(amount) {
      const symbol = this.settings.financial.currencySymbol || "$";
      const value = parseFloat(amount) || 0;
      return `${symbol}${value.toFixed(2)}`;
    },

    // Handle form reset
    resetForm() {
      if (
        confirm(
          "Are you sure you want to reset all changes? This will reload the original settings."
        )
      ) {
        this.loadSettings();
      }
    },

    // Handle API key input masking for security
    maskApiKey(apiKey) {
      if (!apiKey || apiKey.length < 8) return apiKey;
      const visibleChars = 4;
      const masked = "*".repeat(apiKey.length - visibleChars);
      return apiKey.substring(0, visibleChars) + masked;
    },
  },

  watch: {
    // Watch for currency changes to auto-update symbol
    "settings.financial.currency": function (newVal) {
      if (newVal) {
        this.updateCurrencySymbol();
      }
    },
  },

  // Add form validation before save
  beforeMount() {
    // Override saveSettings to include validation
    const originalSaveSettings = this.saveSettings;
    this.saveSettings = async function () {
      const validationErrors = this.validateForm();
      if (validationErrors.length > 0) {
        this.error = validationErrors.join(", ");
        this.showNotification("error", this.error);
        return;
      }
      return originalSaveSettings.call(this);
    };
  },
};
</script>
