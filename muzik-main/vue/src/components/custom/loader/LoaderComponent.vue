<template>
  <div id="loading">
    <div :class="`loader simple-loader animate__animated animate__fadeOut ${!show ? 'd-none' : ''}`">
      <div class="loader-body">
        <img src="/assets/images/loader.gif" alt="loader" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
