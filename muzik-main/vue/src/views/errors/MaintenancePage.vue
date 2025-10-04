<template>
  <div class="error-bg vh-100">
    <div class="container">
      <div class="row align-items-center align-self-center vh-100">
        <div class="col-lg-7 md-lg-0">
          <img src="/assets/images/error/08.png" class="img-fluid">
        </div>
          <div class="col-lg-5 text-end">
              <h2 class="mb-0 mt-4">Hang on! We are under maintenance </h2>
              <p class="mt-2 mb-4">It will not take a long time till we get the error fiked. We wii live again in</p>
              <router-link class="btn btn-primary" :to="{ name: 'home.dashboard' }">Back to Home</router-link>
          </div>
      </div>
    </div>   
  </div>
</template>

<script setup>
</script>
