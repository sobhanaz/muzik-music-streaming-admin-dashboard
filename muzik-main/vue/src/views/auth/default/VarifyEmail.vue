<template>
  <section class="login-content overflow-hidden">
    <div class="row no-gutters align-items-center bg-white">
      <div class="col-md-12 col-lg-6 align-self-center">
        <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
          <brand-logo></brand-logo>
          <h2 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h2>
        </router-link>
        <div class="row justify-content-center pt-5">
          <div class="col-md-8">
            <div class="card d-flex justify-content-center mb-0">
              <div class="card-body">
                <h2 class="mt-3 mb-4">Success !</h2>
                <p class="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                <div class="d-inline-block w-100">
                  <a href="/" class="btn btn-primary mt-3">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 d-lg-block d-none bg-primary p-0 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid gradient-main" alt="images" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
