<template>
  <div class="iq-float-menu">
    <input id="menu-open" type="checkbox" href="#" name="menu-open" class="iq-float-menu-open" />
    <label for="menu-open" class="iq-float-menu-open-button">
      <span class="lines line-1"></span>
      <span class="lines line-2"></span>
      <span class="lines line-3"></span>
    </label>
    <span class="iq-float-menu-item bg-primary float-menu-rtl-mode" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Direction Mode">
      <span class="ltr-mode" data-setting="attribute" @click="store.dispatch('setting/theme_scheme_direction', 'ltr')">
        <input id="theme-scheme-direction-ltr" type="radio" value="ltr" class="btn-check" name="theme_scheme_direction" data-prop="dir" :checked="themeSchemeDirection == 'rtl'" />
        <label class="m-o p-0" for="theme-scheme-direction-ltr">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21M3 18L6 21M3 18L6 15M11 12V3H17M15 3V12M10.5 3C10.0404 3 9.58525 3.0776 9.16061 3.22836C8.73597 3.37913 8.35013 3.6001 8.02513 3.87868C7.70012 4.15726 7.44231 4.48797 7.26642 4.85195C7.09053 5.21593 7 5.60603 7 6C7 6.39397 7.09053 6.78407 7.26642 7.14805C7.44231 7.51203 7.70012 7.84274 8.02513 8.12132C8.35013 8.3999 8.73597 8.62087 9.16061 8.77164C9.58525 8.9224 10.0404 9 10.5 9L10.5 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </label>
      </span>
      <span class="rtl-mode" data-setting="attribute" @click="store.dispatch('setting/theme_scheme_direction', 'rtl')">
        <input id="theme-scheme-direction-rtl" type="radio" value="rtl" class="btn-check" name="theme_scheme_direction" data-prop="dir" :checked="themeSchemeDirection == 'ltr'" />
        <label class="m-o p-0" for="theme-scheme-direction-rtl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21M3 18L6 21M3 18L6 15M11 12V3H17M15 3V12M10.5 3C10.0404 3 9.58525 3.0776 9.16061 3.22836C8.73597 3.37913 8.35013 3.6001 8.02513 3.87868C7.70012 4.15726 7.44231 4.48797 7.26642 4.85195C7.09053 5.21593 7 5.60603 7 6C7 6.39397 7.09053 6.78407 7.26642 7.14805C7.44231 7.51203 7.70012 7.84274 8.02513 8.12132C8.35013 8.3999 8.73597 8.62087 9.16061 8.77164C9.58525 8.9224 10.0404 9 10.5 9L10.5 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </label>
      </span>
    </span>
    <span class="iq-float-menu-item bg-info float-menu-color-mode" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Color Mode">
      <span class="light-mode" data-setting="radio" @click="store.dispatch('setting/theme_scheme', 'light')">
        <input id="color-mode-light" type="radio" class="btn-check" value="light" name="theme_scheme" :checked="themeScheme == 'dark'" />
        <label class="switch-icon-label light-icon" for="color-mode-light">
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M15.6999 11.0021C15.6999 13.449 13.7161 15.4328 11.2691 15.4328C8.82218 15.4328 6.83838 13.449 6.83838 11.0021C6.83838 8.55509 8.82218 6.57129 11.2691 6.57129C13.7161 6.57129 15.6999 8.55509 15.6999 11.0021Z" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M11.2693 4.50365L11.2693 1.5498" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M11.2693 20.4543L11.2693 17.5005" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M17.7676 11.002L20.7214 11.002" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M1.81691 11.002L4.77075 11.002" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M15.8642 6.40654L17.9529 4.31787" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M4.58516 17.6858L6.67383 15.5972" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M15.8647 15.5969L17.9534 17.6855" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M4.58541 4.31807L6.67407 6.40674" stroke="currentColor" stroke-width="1.5"></path>
            </g>
            <defs>
              <clipPath>
                <rect width="21.5385" height="20" fill="white" transform="translate(0.5 0.848145)"></rect>
              </clipPath>
            </defs>
          </svg>
        </label>
      </span>
      <div class="dark-mode" data-setting="radio" @click="store.dispatch('setting/theme_scheme', 'dark')">
        <input id="color-mode-dark" type="radio" class="btn-check custom-inputs" value="dark" name="theme_scheme" :checked="themeSchemeDirection == 'ltr'" />
        <label class="switch-icon-label dark-icon" for="color-mode-dark">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67947 0.610121C7.54098 0.798414 7.51561 1.04704 7.6132 1.25943C8.04109 2.19062 8.25182 3.11105 8.25182 4.13855C8.25182 7.36765 5.53103 10.128 2.03754 10.128C1.66261 10.128 1.27334 10.0371 0.793957 9.92119C0.55797 9.86413 0.309965 9.94489 0.152823 10.13C-0.00431902 10.315 -0.0437864 10.5729 0.0507908 10.7965C1.20467 13.5246 4.00668 15.3481 7.26756 15.3481C11.5607 15.3481 15 11.9261 15 7.84815C15 4.02506 12.0717 0.842474 8.27956 0.353436C8.04774 0.32354 7.81796 0.421827 7.67947 0.610121ZM9.21399 1.86727C11.8368 2.67847 13.7143 5.07555 13.7143 7.84815C13.7143 11.1894 10.8775 14.0624 7.26756 14.0624C4.97916 14.0624 3.00922 13.015 1.85983 11.4093C1.91884 11.4122 1.97811 11.4137 2.03754 11.4137C6.21474 11.4137 9.53753 8.10382 9.53753 4.13855C9.53753 3.34115 9.42909 2.594 9.21399 1.86727Z" fill="currentColor"></path>
          </svg>
        </label>
      </div>
    </span>
    <span class="iq-float-menu-item bg-dark float-menu-coming-soon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Coming Soon">
      <span class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
        </svg>
      </span>
    </span>
  </div>
</template>
<script>
// Vue / Vuex Functions
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SettingOffcanvas',
  components: {
    // Style Components
  },
  setup() {
    // Store objects
    const store = useStore()
    const themeSchemeDirection = computed(() => store.getters['setting/theme_scheme_direction'])
    const themeScheme = computed(() => store.getters['setting/theme_scheme'])

    const defaultSetting = () => {
      store.dispatch('setting/reset_state')
    }

    // Return functions & variables
    return {
      store,
      themeSchemeDirection,
      themeScheme,
      defaultSetting
    }
  }
}
</script>
<style>
.live-customizer .offcanvas-title {
  font-size: calc(1.269rem + 0.228vw);
  flex: 1;
}
@media (min-width: 1200px) {
  .live-customizer .offcanvas-title {
    font-size: 1.44rem;
  }
}
</style>
