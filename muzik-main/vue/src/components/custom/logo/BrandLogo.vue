<template>
  <!--Logo start-->
  <div class="logo-main">
    <img src="/assets/images/logo.svg" class="logo-normal img-fluid" alt="logo" />
    <img src="/assets/images/logo-dark.svg" class="logo-normal dark-normal img-fluid" alt="logo-dark" />
    <img src="/assets/images/logo-color.svg" class="logo-normal white-normal img-fluid" alt="logo-color" />
    <img src="/assets/images/logo-mini.svg" class="logo-mini img-fluid" alt="logo-mini" />
    <img src="/assets/images/logo-dark-mini.svg" class="logo-mini dark-mini img-fluid" alt="logo-dark-mini" />
    <img src="/assets/images/logo-color-mini.svg" class="logo-mini white-mini img-fluid" alt="logo-white-mini" />
  </div>
  <!--Logo End-->
</template>

<script>
export default {
  props: {
    color: { type: Boolean, default: false }
  }
}
</script>
