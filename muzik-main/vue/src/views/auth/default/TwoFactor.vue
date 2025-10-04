<template>
  <section class="login-content overflow-hidden overflow-hidden">
    <div class="row no-gutters align-items-center bg-white">
      <div class="col-md-12 col-lg-6 align-self-center">
        <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
          <brand-logo></brand-logo>
          <h2 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h2>
        </router-link>
        <div class="row justify-content-center pt-5">
          <div class="col-lg-8">
            <div class="card d-flex justify-content-center mb-0">
              <div class="card-body">
                <h2 class="mb-2">Two Factor -Verification</h2>
                <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="floating-label form-group">
                        <label for="email" class="form-label">Phone Number</label>
                        <input id="email" type="email" class="form-control" aria-describedby="email" placeholder="+1 123456789" />
                      </div>
                    </div>
                  </div>
                  <router-link :to="{ name: 'auth.two-factor' }"><button type="submit" class="btn btn-primary">Reset</button></router-link>
                </form>
                <form class="mt-3">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="floating-label form-group">
                        <label for="email" class="form-label">Enter the OTP you recieved to veify your device</label>
                        <input type="number" class="form-control" aria-describedby="email" placeholder="0000" />
                      </div>
                    </div>
                  </div>
                  <router-link :to="{ name: 'auth.two-factor' }"><button type="submit" class="btn btn-primary">Verify</button></router-link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-lg-block d-none bg-primary p-0 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid" alt="images" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
