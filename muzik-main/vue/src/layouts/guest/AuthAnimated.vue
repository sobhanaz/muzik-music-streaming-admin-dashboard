<template>
  <div class="iq-auth-page">
    <nav class="navbar iq-auth-logo">
      <div class="container-fluid">
        <router-link :to="{ name: 'home.dashboard' }" class="iq-link d-flex align-items-center">
          <brand-logo></brand-logo>
          <h4 class="mb-0"><brand-name></brand-name></h4>
        </router-link>
      </div>
    </nav>
    <div class="iq-banner-logo d-none d-lg-block">
      <img class="auth-image" src="/assets/images/01.png" alt="logo-img" loading="lazy" />
    </div>
    <div class="container-inside">
      <div class="main-circle circle-small"></div>
      <div class="main-circle circle-medium"></div>
      <div class="main-circle circle-large"></div>
      <div class="main-circle circle-xlarge"></div>
      <div class="main-circle circle-xxlarge"></div>
    </div>
    <router-view> </router-view>
  </div>
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script>
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
export default {
  components: { SettingOffcanvas }
}
</script>
