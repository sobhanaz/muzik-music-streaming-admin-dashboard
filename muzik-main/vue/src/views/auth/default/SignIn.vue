<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white h-100">
      <b-col md="6">
        <b-row class="justify-content-center">
          <b-col md="10">
            <b-card class="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card iq-auth-form">
              <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-5 justify-content-center text-primary">
                <brand-logo></brand-logo>
                <h2 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h2>
              </router-link>

              <h2 class="mb-2 text-center">Sign In</h2>
              <p class="text-center">Login to stay connected.</p>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email" class="form-control" aria-describedby="email" placeholder=" " />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="password" class="form-label">Password</label>
                      <input id="password" type="password" class="form-control" aria-describedby="password" placeholder=" " />
                    </div>
                  </div>
                  <div class="col-lg-12 d-flex justify-content-between">
                    <div class="form-check mb-3">
                      <input id="customCheck1" type="checkbox" class="form-check-input" />
                      <label class="form-check-label" for="customCheck1">Remember Me</label>
                    </div>
                    <router-link :to="{ name: 'auth.reset-password' }">Forgot Password?</router-link>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
                <p class="text-center my-3">or sign in with other accounts?</p>
                <div class="d-flex justify-content-center">
                  <ul class="list-group list-group-horizontal list-group-flush">
                    <li class="list-group-item border-0 pb-0">
                      <a href="#"><img src="/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                    </li>
                    <li class="list-group-item border-0 pb-0">
                      <a href="#"><img src="/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                    </li>
                    <li class="list-group-item border-0 pb-0">
                      <a href="#"><img src="/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                    </li>
                    <li class="list-group-item border-0 pb-0">
                      <a href="#"><img src="/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                    </li>
                  </ul>
                </div>
                <p class="mt-3 text-center">Don’t have an account? <router-link :to="{ name: 'auth.register' }">Click here to sign up.</router-link></p>
              </form>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
    </b-row>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
